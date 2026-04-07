import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {overline && (
        <span className="label text-secondary">{overline}</span>
      )}
      <h2 className="font-heading text-4xl tracking-tight text-on-surface">
        {title}
      </h2>
      {description && (
        <p className="text-on-surface-variant max-w-2xl">{description}</p>
      )}
    </div>
  );
}
