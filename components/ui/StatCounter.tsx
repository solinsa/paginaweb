import React from 'react';
import { cn } from '@/lib/utils';

export interface StatCounterProps {
  value: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'text-3xl',
  md: 'text-4xl',
  lg: 'text-5xl',
};

export function StatCounter({
  value,
  label,
  size = 'lg',
  className,
}: StatCounterProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span
        className={cn(
          'font-extrabold tracking-tighter text-on-surface',
          sizeStyles[size],
        )}
      >
        {value}
      </span>
      <span className="text-on-surface-variant text-sm">{label}</span>
    </div>
  );
}
