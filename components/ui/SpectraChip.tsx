'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SpectraChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SpectraChip({
  label,
  active = false,
  onClick,
  className,
}: SpectraChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-lg px-4 py-2',
        'text-xs uppercase tracking-widest font-bold',
        'transition-all duration-300 cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container',
        active
          ? 'bg-secondary text-white'
          : 'bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary/20',
        className,
      )}
    >
      {label}
    </button>
  );
}
