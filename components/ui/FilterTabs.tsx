'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: FilterTabsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={cn(
            'px-5 py-2.5 rounded-lg',
            'text-sm font-medium transition-all duration-200 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-container',
            activeTab === tab
              ? 'bg-secondary text-white'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface',
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
