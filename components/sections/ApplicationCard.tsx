import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ApplicationCardProps {
  icon: string;
  title: string;
  description: string;
  noteId: string;
  href?: string;
  className?: string;
}

export function ApplicationCard({
  icon,
  title,
  description,
  noteId,
  href = "#",
  className,
}: ApplicationCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-outline-variant/10 bg-white p-8 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-fixed">
        <span
          className="material-symbols-outlined text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
      <p className="mb-6 flex-grow text-sm text-on-surface-variant">
        {description}
      </p>
      <Link
        href={href}
        className="flex items-center gap-2 text-sm font-semibold text-secondary"
      >
        Nota Técnica #{noteId}
        <span className="material-symbols-outlined text-sm">open_in_new</span>
      </Link>
    </div>
  );
}
