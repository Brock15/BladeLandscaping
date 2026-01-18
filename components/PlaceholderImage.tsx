'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);

  // Generate a placeholder based on the alt text
  const getPlaceholderGradient = () => {
    const gradients = [
      'from-emerald-600 to-emerald-800',
      'from-green-600 to-green-800',
      'from-teal-600 to-teal-800',
      'from-lime-600 to-lime-800',
    ];
    const index = alt.length % gradients.length;
    return gradients[index];
  };

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br ${getPlaceholderGradient()} flex items-center justify-center ${
          fill ? 'absolute inset-0' : ''
        } ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-white/80 text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}
