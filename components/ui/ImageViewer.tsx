'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageViewerProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function ImageViewer({ images, className }: ImageViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const current = images[activeIndex];

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl group">
        <Image
          src={current.src}
          alt={current.alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'relative overflow-hidden rounded-lg w-20 h-20 flex-shrink-0',
                'border-2 transition-all duration-200 cursor-pointer',
                idx === activeIndex
                  ? 'border-secondary ring-1 ring-secondary'
                  : 'border-transparent hover:border-secondary',
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
