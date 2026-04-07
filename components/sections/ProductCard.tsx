import React from 'react';
import { cn } from '@/lib/utils';

export interface ProductCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeVariant: 'secondary' | 'secondary-container' | 'on-surface-variant';
  icon: string;
  specs: { label: string; value: string }[];
  primaryAction: string;
  secondaryAction: string;
  className?: string;
}

const badgeStyles: Record<string, string> = {
  secondary: 'bg-secondary text-white',
  'secondary-container': 'bg-secondary-container text-on-secondary-container',
  'on-surface-variant': 'bg-on-surface-variant text-white',
};

export function ProductCard({
  slug,
  title,
  description,
  image,
  badge,
  badgeVariant,
  icon,
  specs,
  primaryAction,
  secondaryAction,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        'group bg-surface-container-lowest rounded-2xl p-6 lg:p-8',
        'flex flex-col lg:flex-row gap-10',
        'transition-all hover:shadow-[0px_20px_50px_rgba(0,30,64,0.08)]',
        className,
      )}
    >
      {/* Image */}
      <div className="w-full lg:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high relative">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
        />
        <div className="absolute top-4 left-4">
          <span
            className={cn(
              'text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full',
              badgeStyles[badgeVariant],
            )}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold font-heading text-primary tracking-tight mb-2">
              {title}
            </h2>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors">
              {icon}
            </span>
          </div>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            {description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-on-surface">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                <span className="font-semibold">{spec.label}</span>
                <span className="text-on-surface-variant">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`/soluciones/productos/${slug}`}
            className="bg-primary text-white px-8 py-3 rounded-lg font-heading font-bold text-sm shadow-md hover:bg-primary-container transition-colors"
          >
            {primaryAction}
          </a>
          <button className="bg-surface-container-highest text-primary px-8 py-3 rounded-lg font-heading font-bold text-sm hover:bg-surface-container-high transition-colors">
            {secondaryAction}
          </button>
        </div>
      </div>
    </article>
  );
}
