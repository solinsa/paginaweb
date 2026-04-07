'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface NewsletterProps {
  variant?: 'primary' | 'container';
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onSubmit?: (email: string) => void;
}

export function Newsletter({
  variant = 'primary',
  title = 'Suscríbete a nuestro newsletter',
  description,
  placeholder = 'Tu correo electrónico',
  buttonText = 'Suscribir',
  className,
  onSubmit,
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    onSubmit?.(email);
    // Reset handled by parent or callback
    setStatus('idle');
    setEmail('');
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-8',
        variant === 'primary' ? 'bg-primary' : 'bg-primary-container',
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3
              className={cn(
                'font-heading text-xl font-bold mb-2',
                variant === 'primary' ? 'text-white' : 'text-on-primary-container',
              )}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={cn(
                'text-sm',
                variant === 'primary' ? 'text-white/70' : 'text-on-primary-container/70',
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'flex-1 rounded-lg px-4 py-3',
            'text-sm outline-none transition-all duration-200',
            variant === 'primary'
              ? 'bg-white/10 text-white placeholder:text-white/50 ring-secondary-container focus:ring-2'
              : 'bg-white/20 text-on-primary-container placeholder:text-on-primary-container/50 ring-secondary-container focus:ring-2',
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'px-6 py-3 rounded-lg font-semibold text-sm',
            'transition-all duration-200 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            variant === 'primary'
              ? 'bg-secondary text-white hover:opacity-90 focus-visible:ring-secondary'
              : 'bg-primary text-white hover:opacity-90 focus-visible:ring-primary',
            status === 'loading' && 'opacity-50 pointer-events-none',
          )}
        >
          {status === 'loading' ? (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
}
