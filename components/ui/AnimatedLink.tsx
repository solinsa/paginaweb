'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedLinkProps {
  href: string;
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

export function AnimatedLink({
  href,
  children,
  text = 'Leer más',
  className,
}: AnimatedLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2',
        'text-secondary font-semibold text-sm',
        'hover:gap-4 transition-all duration-300',
        'group',
        className,
      )}
    >
      <span>{children ?? text}</span>
      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
        arrow_right
      </span>
    </a>
  );
}
