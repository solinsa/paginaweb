import React from 'react';
import { cn } from '@/lib/utils';

export interface ProductConfigCardProps {
  configRef: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function ProductConfigCard({
  configRef,
  icon,
  title,
  description,
  features,
  className,
}: ProductConfigCardProps) {
  return (
    <div
      className={cn(
        'group bg-surface-container-low rounded-2xl p-8',
        'hover:bg-white hover:shadow-xl transition-all duration-300',
        className,
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-secondary-fixed rounded-lg text-secondary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className="text-xs font-mono text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">
          {configRef}
        </span>
      </div>
      <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
