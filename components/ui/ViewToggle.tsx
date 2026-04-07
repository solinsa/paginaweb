'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type ViewMode = 'list' | 'grid';

export interface ViewToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
  className?: string;
}

export function ViewToggle({ value, onChange, className }: ViewToggleProps) {
  const options: { mode: ViewMode; label: string; icon: string }[] = [
    { mode: 'list', label: 'Lista', icon: 'view_list' },
    { mode: 'grid', label: 'Cuadricula', icon: 'grid_view' },
  ];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 p-1 rounded-lg',
        'bg-surface-container-low',
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.mode}
          type="button"
          onClick={() => onChange(opt.mode)}
          className={cn(
            'inline-flex items-center gap-1.5 px-4 py-2 rounded-md',
            'text-sm font-medium transition-all duration-200 cursor-pointer',
            value === opt.mode
              ? 'bg-white shadow-sm text-on-surface'
              : 'text-on-surface-variant hover:text-on-surface',
          )}
        >
          <span className="material-symbols-outlined text-lg">
            {opt.icon}
          </span>
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
