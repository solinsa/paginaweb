import React from 'react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Stat {
  value: string;
  label: string;
}

export interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        'py-16 border-y border-surface-container flex flex-wrap gap-12 justify-around',
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-5xl font-extrabold text-on-surface tracking-tighter mb-2">
            {stat.value}
          </div>
          <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-body">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
