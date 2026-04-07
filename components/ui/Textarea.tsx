'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-on-surface"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full min-h-[120px] resize-y',
            'bg-surface-container-high rounded-lg p-4',
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

Textarea.displayName = 'Textarea';
