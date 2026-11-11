#import <AVFoundation/AVFoundation.h>
#import <Foundation/Foundation.h>
#import <CoreMedia/CoreMedia.h>
#import <CoreVideo/CoreVideo.h>
#import <CoreImage/CoreImage.h>

int main(int argumentCount, const char *arguments[]) {
    @autoreleasepool {
        if (argumentCount != 3) return 1;
        NSURL *sourceURL = [NSURL fileURLWithPath:@(arguments[1])];
        NSURL *destination = [NSURL fileURLWithPath:@(arguments[2])];
        if ([sourceURL isEqual:destination] || [[NSFileManager defaultManager] fileExistsAtPath:destination.path]) return 2;
        AVURLAsset *asset = [AVURLAsset URLAssetWithURL:sourceURL options:nil];
        AVAssetTrack *track = [[asset tracksWithMediaType:AVMediaTypeVideo] firstObject];
        if (!track) return 3;
        NSError *error = nil;
        AVAssetReader *reader = [[AVAssetReader alloc] initWithAsset:asset error:&error];
        AVAssetReaderTrackOutput *output = [[AVAssetReaderTrackOutput alloc] initWithTrack:track outputSettings:@{(id)kCVPixelBufferPixelFormatTypeKey: @(kCVPixelFormatType_32BGRA)}];
        output.alwaysCopiesSampleData = NO;
        [reader addOutput:output];
        AVAssetWriter *writer = [[AVAssetWriter alloc] initWithURL:destination fileType:AVFileTypeMPEG4 error:&error];
        writer.shouldOptimizeForNetworkUse = YES;
        CGSize originalSize = track.naturalSize;
        double scale = MIN(1.0, 1280.0 / MAX(originalSize.width, originalSize.height));
        CGSize dimensions = CGSizeMake(floor(originalSize.width * scale / 2) * 2, floor(originalSize.height * scale / 2) * 2);
        BOOL needsResize = !CGSizeEqualToSize(dimensions, originalSize);
        NSInteger bitrate = dimensions.width * dimensions.height < 500000 ? 1000000 : 2000000;
        NSDictionary *settings = @{AVVideoCodecKey: AVVideoCodecTypeH264, AVVideoWidthKey: @((int)dimensions.width), AVVideoHeightKey: @((int)dimensions.height), AVVideoCompressionPropertiesKey: @{AVVideoAverageBitRateKey: @(bitrate), AVVideoExpectedSourceFrameRateKey: @30, AVVideoMaxKeyFrameIntervalKey: @60, AVVideoProfileLevelKey: AVVideoProfileLevelH264MainAutoLevel}};
        AVAssetWriterInput *input = [AVAssetWriterInput assetWriterInputWithMediaType:AVMediaTypeVideo outputSettings:settings];
        input.expectsMediaDataInRealTime = NO;
        CGAffineTransform orientation = track.preferredTransform;
        orientation.tx = 0;
        orientation.ty = 0;
        CGRect bounds = CGRectApplyAffineTransform(CGRectMake(0, 0, dimensions.width, dimensions.height), orientation);
        orientation.tx = -CGRectGetMinX(bounds);
        orientation.ty = -CGRectGetMinY(bounds);
        input.transform = orientation;
        [writer addInput:input];
        AVAssetWriterInputPixelBufferAdaptor *adaptor = [AVAssetWriterInputPixelBufferAdaptor assetWriterInputPixelBufferAdaptorWithAssetWriterInput:input sourcePixelBufferAttributes:@{(id)kCVPixelBufferPixelFormatTypeKey: @(kCVPixelFormatType_32BGRA), (id)kCVPixelBufferWidthKey: @((int)dimensions.width), (id)kCVPixelBufferHeightKey: @((int)dimensions.height)}];
        CIContext *context = needsResize ? [CIContext contextWithOptions:nil] : nil;
        if (![writer startWriting]) return 4;
        [writer startSessionAtSourceTime:kCMTimeZero];
        if (![reader startReading]) return 5;
        double previousTime = -1;
        for (;;) {
            CMSampleBufferRef sample = [output copyNextSampleBuffer];
            if (!sample) break;
            double timestamp = CMTimeGetSeconds(CMSampleBufferGetPresentationTimeStamp(sample));
            if (previousTime >= 0 && timestamp - previousTime < 1.0 / 30.0 - 0.001) { CFRelease(sample); continue; }
            while (!input.readyForMoreMediaData && writer.status == AVAssetWriterStatusWriting) [NSThread sleepForTimeInterval:0.002];
            BOOL appended = NO;
            if (needsResize) {
                CVPixelBufferRef buffer = NULL;
                CVPixelBufferPoolCreatePixelBuffer(kCFAllocatorDefault, adaptor.pixelBufferPool, &buffer);
                if (!buffer) { CFRelease(sample); return 6; }
                CIImage *image = [CIImage imageWithCVPixelBuffer:CMSampleBufferGetImageBuffer(sample)];
                image = [image imageByApplyingTransform:CGAffineTransformMakeScale(dimensions.width / originalSize.width, dimensions.height / originalSize.height)];
                [context render:image toCVPixelBuffer:buffer];
                appended = [adaptor appendPixelBuffer:buffer withPresentationTime:CMSampleBufferGetPresentationTimeStamp(sample)];
                CVPixelBufferRelease(buffer);
            } else appended = [input appendSampleBuffer:sample];
            if (!appended) { CFRelease(sample); fprintf(stderr, "%s\n", writer.error.localizedDescription.UTF8String); return 6; }
            previousTime = timestamp;
            CFRelease(sample);
        }
        [input markAsFinished];
        [writer endSessionAtSourceTime:asset.duration];
        dispatch_semaphore_t completion = dispatch_semaphore_create(0);
        [writer finishWritingWithCompletionHandler:^{ dispatch_semaphore_signal(completion); }];
        dispatch_semaphore_wait(completion, DISPATCH_TIME_FOREVER);
        if (writer.status != AVAssetWriterStatusCompleted || reader.status == AVAssetReaderStatusFailed) { fprintf(stderr, "%s\n", writer.error.localizedDescription.UTF8String); return 7; }
        printf("Compressed H.264 at up to 30 fps: %s\n", destination.path.UTF8String);
    }
    return 0;
}
