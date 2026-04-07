import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'secondary' | 'secondary-fixed' | 'dark';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  'secondary-fixed': 'bg-secondary-fixed text-secondary',
  dark: 'bg-on-surface text-white',
};

export function Badge({ label, variant = 'secondary-fixed', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full',
        'text-[10px] uppercase tracking-widest font-bold',
        'px-4 py-2',
        variantStyles[variant],
        className,
      )}
    >
      {label}
    </span>
  );
}
