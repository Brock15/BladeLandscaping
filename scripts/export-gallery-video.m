#import <AVFoundation/AVFoundation.h>
#import <Foundation/Foundation.h>
#import <CoreMedia/CoreMedia.h>

int main(int argumentCount, const char *arguments[]) {
    @autoreleasepool {
        if (argumentCount < 5 || (argumentCount - 2) % 3 != 0) return 1;
        NSURL *destination = [NSURL fileURLWithPath:@(arguments[1])];
        AVMutableComposition *composition = [AVMutableComposition composition];
        AVMutableCompositionTrack *track = [composition addMutableTrackWithMediaType:AVMediaTypeVideo preferredTrackID:kCMPersistentTrackID_Invalid];
        CMTime cursor = kCMTimeZero;
        for (int index = 2; index < argumentCount; index += 3) {
            NSURL *sourceURL = [NSURL fileURLWithPath:@(arguments[index])];
            if ([sourceURL isEqual:destination]) return 2;
            AVURLAsset *asset = [AVURLAsset URLAssetWithURL:sourceURL options:nil];
            AVAssetTrack *sourceTrack = [[asset tracksWithMediaType:AVMediaTypeVideo] firstObject];
            double start = [@(arguments[index + 1]) doubleValue];
            double duration = [@(arguments[index + 2]) doubleValue];
            if (!sourceTrack || start < 0 || duration <= 0 || start + duration > CMTimeGetSeconds(asset.duration) + 0.02) return 3;
            NSError *insertionError = nil;
            CMTimeRange range = CMTimeRangeMake(CMTimeMakeWithSeconds(start, 600), CMTimeMakeWithSeconds(duration, 600));
            if (![track insertTimeRange:range ofTrack:sourceTrack atTime:cursor error:&insertionError]) {
                fprintf(stderr, "%s\n", insertionError.localizedDescription.UTF8String);
                return 4;
            }
            if (index == 2) track.preferredTransform = sourceTrack.preferredTransform;
            cursor = CMTimeAdd(cursor, range.duration);
        }
        [[NSFileManager defaultManager] createDirectoryAtURL:[destination URLByDeletingLastPathComponent] withIntermediateDirectories:YES attributes:nil error:nil];
        if ([[NSFileManager defaultManager] fileExistsAtPath:destination.path]) return 5;
        AVAssetExportSession *exporter = [[AVAssetExportSession alloc] initWithAsset:composition presetName:AVAssetExportPreset1280x720];
        exporter.outputURL = destination;
        exporter.outputFileType = AVFileTypeMPEG4;
        exporter.shouldOptimizeForNetworkUse = YES;
        dispatch_semaphore_t completion = dispatch_semaphore_create(0);
        [exporter exportAsynchronouslyWithCompletionHandler:^{ dispatch_semaphore_signal(completion); }];
        dispatch_semaphore_wait(completion, DISPATCH_TIME_FOREVER);
        if (exporter.status != AVAssetExportSessionStatusCompleted) {
            fprintf(stderr, "%s\n", exporter.error.localizedDescription.UTF8String);
            return 6;
        }
        printf("Exported %.2f seconds to %s\n", CMTimeGetSeconds(cursor), destination.path.UTF8String);
    }
    return 0;
}
