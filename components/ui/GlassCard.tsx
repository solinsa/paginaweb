import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  rounded?: '2xl' | '3xl';
}

export function GlassCard({
  children,
  className,
  as: Component = 'div',
  rounded = '2xl',
}: GlassCardProps) {
  const radiusClass = rounded === '3xl' ? 'rounded-3xl' : 'rounded-2xl';

  return (
    <Component
      className={cn(
        'bg-white/80 backdrop-blur-[20px]',
        radiusClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}
