'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-on-surface"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-surface-container-high rounded-lg p-4',
            'text-on-surface placeholder:text-outline',
            'outline-none transition-all duration-200',
            'focus:ring-2 ring-secondary-container',
            error && 'ring-2 ring-error',
            className,
          )}
          {...props}
        />
        {error && (
          <span className="text-sm text-error">{error}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
