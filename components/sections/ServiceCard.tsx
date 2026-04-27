import React from 'react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ServiceCardProps {
  /** Layout variant */
  variant: 'light' | 'dark' | 'wide';
  /** Service title */
  title: string;
  /** Short description */
  description: string;
  /** Material Symbols icon name */
  icon: string;
  /** Footer tag / badge text */
  badgeText: string;
  /** Features checklist (wide variant) */
  features?: string[];
  /** Image URL (wide variant) */
  image?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA href */
  ctaHref?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ServiceCard({
  variant,
  title,
  description,
  icon,
  badgeText,
  features,
  image,
  ctaLabel = 'Solicitar',
  ctaHref = '#',
  className,
}: ServiceCardProps) {
  if (variant === 'wide') {
    return (
      <div
        className={cn(
          'md:col-span-2 group bg-surface-container-low p-10 rounded-2xl grid md:grid-cols-2 gap-10 items-center overflow-hidden',
          className,
        )}
      >
        {/* Text column */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-white">
              {icon}
            </span>
          </div>

          <h3 className="text-4xl font-extrabold text-on-surface mb-6 tracking-tight font-heading">
            {title}
          </h3>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Features checklist */}
          {features && features.length > 0 && (
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          <a
            href={ctaHref}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Image column */}
        {image && (
          <div className="relative h-full min-h-[300px]">
            <img
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
              src={image}
            />
          </div>
        )}
      </div>
    );
  }

  // ---- light / dark cards ----
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'group relative overflow-hidden p-8 rounded-2xl flex flex-col justify-between min-h-[400px] transition-all duration-300',
        isDark
          ? 'bg-primary text-white'
          : 'bg-surface-container-lowest hover:bg-white hover:shadow-2xl hover:shadow-primary/5',
        className,
      )}
    >
      {/* Radial gradient decorative overlay (dark only) */}
      {isDark && (
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-container via-transparent to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center mb-6',
            isDark
              ? 'bg-secondary-container/20'
              : 'bg-secondary-container',
          )}
        >
          <span
            className={cn(
              'material-symbols-outlined',
              isDark ? 'text-secondary-container' : 'text-on-secondary-container',
            )}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        </div>

        <h3
          className={cn(
            'text-3xl font-extrabold leading-tight mb-4 font-heading',
            isDark ? 'text-white' : 'text-on-surface',
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'font-body leading-relaxed',
            isDark ? 'text-primary-fixed opacity-80' : 'text-on-surface-variant',
          )}
        >
          {description}
        </p>
      </div>

      {/* Footer */}
      <div
        className={cn(
          'relative z-10 mt-8 pt-6 flex items-center justify-between',
          isDark ? 'border-t border-white/10' : 'border-t border-surface-container',
        )}
      >
        <span
          className={cn(
            'text-sm font-bold uppercase tracking-widest',
            isDark ? 'text-secondary-container' : 'text-secondary',
          )}
        >
          {badgeText}
        </span>
        <span
          className={cn(
            'material-symbols-outlined group-hover:translate-x-2 transition-transform',
            isDark ? 'text-secondary-container' : 'text-secondary',
          )}
        >
          arrow_forward
        </span>
      </div>
    </div>
  );
}
