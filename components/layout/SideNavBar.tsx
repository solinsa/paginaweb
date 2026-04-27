"use client";

import { cn } from "@/lib/utils";

export interface FilterItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

interface SideNavBarProps {
  filters: FilterItem[];
  activeFilters: string[];
  onFilterChange: (filterId: string) => void;
  title?: string;
  subtitle?: string;
  width?: "w-64" | "w-72";
  applyLabel?: string;
  onApply?: () => void;
}

export default function SideNavBar({
  filters,
  activeFilters,
  onFilterChange,
  title = "Filtros Tecnicos",
  subtitle = "Precision Clinica",
  width = "w-64",
  applyLabel = "Aplicar Filtros",
  onApply,
}: SideNavBarProps) {
  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col sticky top-24 rounded-xl bg-surface-container-low p-6",
        width
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-base font-semibold text-on-surface">
          {title}
        </h3>
        <p className="mt-1 text-sm text-on-surface-variant">{subtitle}</p>
      </div>

      {/* Filter items */}
      <div className="flex flex-col gap-1">
        {filters.map((filter) => {
          const isActive = activeFilters.includes(filter.id);
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                isActive
                  ? "bg-white text-secondary ml-2 shadow-sm font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-highest hover:pl-5"
              )}
            >
              <span
                className={cn(
                  "material-symbols-outlined text-lg",
                  isActive ? "text-secondary" : "text-on-surface-variant"
                )}
              >
                {filter.icon}
              </span>
              <span className="flex-1 text-left">{filter.label}</span>
              {filter.count !== undefined && (
                <span
                  className={cn(
                    "text-xs font-medium",
                    isActive
                      ? "text-secondary"
                      : "text-on-surface-variant"
                  )}
                >
                  {filter.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
