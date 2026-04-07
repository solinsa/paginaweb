'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: string;   // Material Symbols icon name
  iconRight?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Variant & Size maps                                                */
/* ------------------------------------------------------------------ */

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-primary to-primary-container',
    'text-white',
    'shadow-sm hover:shadow-md',
    'active:opacity-90',
  ].join(' '),
  secondary: [
    'bg-secondary',
    'text-white',
    'hover:opacity-90',
    'active:opacity-80',
  ].join(' '),
  outline: [
    'border-2 border-primary',
    'text-primary',
    'bg-transparent',
    'hover:bg-primary/5',
    'active:bg-primary/10',
  ].join(' '),
  ghost: [
    'text-secondary',
    'bg-transparent',
    'underline underline-offset-4 decoration-transparent',
    'hover:decoration-secondary',
    'active:opacity-80',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-4 py-2 gap-1.5',
  md: 'text-sm px-6 py-3 gap-2',
  lg: 'text-base px-8 py-4 gap-2.5',
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
};

/* ------------------------------------------------------------------ */
/*  Spinner                                                            */
/* ------------------------------------------------------------------ */

function Spinner({ size }: { size: ButtonSize }) {
  const spinnerSize = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <svg
      className={cn('animate-spin', spinnerSize)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Button                                                             */
/* ------------------------------------------------------------------ */

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold',
        'rounded-lg transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        (disabled || loading) && 'pointer-events-none opacity-50',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner size={size} />
      ) : (
        <>
          {iconLeft && (
            <span className={cn('material-symbols-outlined', iconSizeStyles[size])}>
              {iconLeft}
            </span>
          )}
          {children}
          {iconRight && (
            <span className={cn('material-symbols-outlined', iconSizeStyles[size])}>
              {iconRight}
            </span>
          )}
        </>
      )}
    </button>
  );
}
