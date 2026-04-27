import React from "react";
import { cn } from "@/lib/utils";

export interface HeroPageStat {
  icon: string;
  label: string;
}

export interface HeroPageProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  stats?: HeroPageStat[];
  className?: string;
}

export function HeroPage({
  badge,
  title,
  description,
  image,
  stats,
  className,
}: HeroPageProps) {
  return (
    <section
      className={cn(
        "mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2",
        className
      )}
    >
      <div>
        {badge && (
          <span className="label mb-4 block text-secondary">{badge}</span>
        )}
        <h1 className="mb-6 font-heading text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-md text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-lg bg-surface-container-low px-4 py-2"
              >
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {stat.icon}
                </span>
                <span className="text-xs font-bold text-on-surface">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl" aria-hidden="true">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          src={image}
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>
    </section>
  );
}
