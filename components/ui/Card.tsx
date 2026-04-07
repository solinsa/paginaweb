import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  dark?: boolean;
  className?: string;
}

export function Card({
  children,
  hover = false,
  dark = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-all duration-300',
        dark
          ? 'bg-primary text-white'
          : 'bg-white',
        hover && 'hover:shadow-lg hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
