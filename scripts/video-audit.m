#import <AVFoundation/AVFoundation.h>
#import <AppKit/AppKit.h>
#import <Foundation/Foundation.h>

int main(int argumentCount, const char *arguments[]) {
    @autoreleasepool {
        if (argumentCount < 3) return 1;
        NSURL *inputURL = [NSURL fileURLWithPath:@(arguments[1])];
        NSString *outputDirectory = @(arguments[2]);
        [[NSFileManager defaultManager] createDirectoryAtPath:outputDirectory withIntermediateDirectories:YES attributes:nil error:nil];
        AVURLAsset *asset = [AVURLAsset URLAssetWithURL:inputURL options:nil];
        double duration = CMTimeGetSeconds(asset.duration);
        AVAssetImageGenerator *generator = [AVAssetImageGenerator assetImageGeneratorWithAsset:asset];
        generator.appliesPreferredTrackTransform = YES;
        generator.maximumSize = CGSizeMake(1600, 1600);
        NSMutableArray *frames = [NSMutableArray array];
        NSArray *fractions = @[@0.12, @0.5, @0.86];
        NSArray *seconds = argumentCount > 3 ? [@(arguments[3]) componentsSeparatedByString:@","] : @[];
        NSArray *samples = seconds.count ? seconds : fractions;
        for (NSUInteger index = 0; index < samples.count; index++) {
            double sampleTime = seconds.count ? [samples[index] doubleValue] : duration * [samples[index] doubleValue];
            CMTime time = CMTimeMakeWithSeconds(MAX(0, MIN(duration - 0.05, sampleTime)), 600);
            CGImageRef frame = [generator copyCGImageAtTime:time actualTime:NULL error:nil];
            if (frame) {
                NSBitmapImageRep *bitmap = [[NSBitmapImageRep alloc] initWithCGImage:frame];
                NSData *data = [bitmap representationUsingType:NSBitmapImageFileTypeJPEG properties:@{NSImageCompressionFactor: @0.9}];
                NSString *framePath = [outputDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"frame-%lu.jpg", (unsigned long)index]];
                if ([data writeToFile:framePath atomically:YES]) [frames addObject:framePath];
                CGImageRelease(frame);
            }
        }
        NSData *json = [NSJSONSerialization dataWithJSONObject:@{@"duration": @(isfinite(duration) ? duration : 0), @"frames": frames} options:0 error:nil];
        puts([[NSString alloc] initWithData:json encoding:NSUTF8StringEncoding].UTF8String);
    }
    return 0;
}
