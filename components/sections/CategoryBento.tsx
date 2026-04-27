import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CategoryItem {
  /** Unique key */
  id: string;
  /** Display heading */
  title: string;
  /** Short description */
  description: string;
  /** Material Symbols icon name */
  icon: string;
  /** CTA button label */
  ctaLabel: string;
  /** CTA link href */
  ctaHref: string;
  /** Layout variant controlling bg & span */
  variant: 'hero' | 'light' | 'dark' | 'neutral' | 'accent';
  /** Large decorative icon (only hero variant) */
  decorativeIcon?: string;
}

export interface CategoryBentoProps {
  categories: CategoryItem[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Variant styles map
// ---------------------------------------------------------------------------

const variantStyles: Record<CategoryItem['variant'], string> = {
  hero: 'md:col-span-3 lg:col-span-8 bg-surface-container-low',
  light:
    'md:col-span-3 lg:col-span-4 bg-surface-container-lowest border border-outline-variant/10',
  dark: 'md:col-span-6 lg:col-span-4 bg-primary text-white',
  neutral: 'md:col-span-3 lg:col-span-4 bg-surface-container-high',
  accent: 'md:col-span-3 lg:col-span-4 bg-secondary-fixed',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CategoryBento({ categories, className }: CategoryBentoProps) {
  return (
    <section className={cn('px-12', className)}>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal card sub-component
// ---------------------------------------------------------------------------

function CategoryCard({ category: cat }: { category: CategoryItem }) {
  const isHero = cat.variant === 'hero';
  const isDark = cat.variant === 'dark';
  const isAccent = cat.variant === 'accent';

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between transition-all duration-500',
        isHero ? 'min-h-[400px] hover:bg-surface-container' : 'min-h-[300px]',
        isDark && 'hover:bg-primary-container transition-colors',
        isAccent && 'hover:shadow-inner',
        cat.variant === 'light' &&
          'hover:shadow-[0px_12px_32px_rgba(0,30,64,0.06)]',
        cat.variant === 'neutral' &&
          'hover:bg-surface-container-highest transition-colors',
        variantStyles[cat.variant],
      )}
    >
      {/* ---- Content ---- */}
      <div className="z-10">
        {/* Icon container */}
        <div
          className={cn(
            'w-12 h-12 flex items-center justify-center rounded-lg mb-6',
            isHero && 'bg-secondary-fixed',
            isDark && 'bg-white/10',
            cat.variant === 'light' && 'bg-primary/5',
            cat.variant === 'neutral' && 'bg-secondary/10',
            isAccent && 'bg-white shadow-sm',
          )}
        >
          <span
            className={cn(
              'material-symbols-outlined',
              isHero && 'text-secondary',
              isDark && 'text-white',
              cat.variant === 'light' && 'text-on-surface',
              cat.variant === 'neutral' && 'text-secondary',
              isAccent && 'text-secondary',
            )}
          >
            {cat.icon}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            'font-heading font-bold mb-4',
            isHero ? 'text-3xl text-on-surface' : 'text-2xl',
            isDark && 'text-white',
            isAccent && 'text-on-secondary-fixed',
            !isHero && !isDark && !isAccent && 'text-on-surface',
          )}
        >
          {cat.title}
        </h2>

        {/* Description */}
        <p
          className={cn(
            'text-sm leading-relaxed',
            isHero && 'text-on-surface-variant max-w-md mb-8',
            isDark && 'text-on-primary-container',
            cat.variant === 'light' && 'text-on-surface-variant',
            cat.variant === 'neutral' && 'text-on-surface-variant',
            isAccent && 'text-on-secondary-fixed',
            // generic fallback
            !isHero &&
              !isDark &&
              cat.variant !== 'accent' &&
              'text-on-surface-variant',
          )}
        >
          {cat.description}
        </p>
      </div>

      {/* ---- Bottom CTA area ---- */}
      {isHero ? (
        <div className="z-10 flex items-center justify-between">
          <Link
            href={cat.ctaHref}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-heading font-bold text-sm tracking-tight hover:shadow-lg transition-all active:scale-95"
          >
            {cat.ctaLabel}
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward
            </span>
          </Link>
          {/* Decorative icon */}
          <div className="hidden lg:block opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[120px]">
              {cat.decorativeIcon ?? 'precision_manufacturing'}
            </span>
          </div>
        </div>
      ) : isDark ? (
        <Link
          href={cat.ctaHref}
          className="bg-white text-primary px-4 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-wider self-start mt-6 hover:bg-surface-bright transition-colors"
        >
          {cat.ctaLabel}
        </Link>
      ) : isAccent ? (
        <Link
          href={cat.ctaHref}
          className="bg-secondary text-white px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-tight text-center hover:bg-primary transition-colors"
        >
          {cat.ctaLabel}
        </Link>
      ) : cat.variant === 'light' ? (
        <div className="mt-8">
          <Link
            href={cat.ctaHref}
            className="text-secondary font-heading font-bold text-sm inline-flex items-center hover:underline"
          >
            {cat.ctaLabel}
            <span className="material-symbols-outlined ml-1 text-sm">
              chevron_right
            </span>
          </Link>
        </div>
      ) : (
        /* neutral */
        <Link
          href={cat.ctaHref}
          className="text-on-surface font-heading font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform"
        >
          {cat.ctaLabel}
          <span className="material-symbols-outlined ml-1 text-sm">
            arrow_right_alt
          </span>
        </Link>
      )}

      {/* ---- Decorative overlay (hero only) ---- */}
      {isHero && (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-fixed/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
