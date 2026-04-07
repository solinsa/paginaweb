import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ApplicationCard, type ApplicationCardProps } from "./ApplicationCard";

export { ApplicationCard };
export type { ApplicationCardProps };

export interface IndustryApplication {
  icon: string;
  title: string;
  description: string;
  noteId: string;
  slug: string;
}

export type IndustryLayout = "left" | "right" | "dark" | "bento";

export interface IndustrySectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  layout: IndustryLayout;
  applications: IndustryApplication[];
  className?: string;
}

export function IndustrySection({
  title,
  description,
  ctaLabel,
  layout,
  applications,
  className,
}: IndustrySectionProps) {
  // Dark variant (Petroquímica)
  if (layout === "dark") {
    return (
      <div className={cn("grid grid-cols-12 items-start gap-8", className)}>
        <div className="sticky top-32 col-span-12 md:col-span-4">
          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tighter text-primary">
            {title}
          </h2>
          <div className="mb-6 h-1 w-20 bg-secondary" />
          <p className="mb-8 leading-relaxed text-on-surface-variant">
            {description}
          </p>
          <Link
            href="#"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            {ctaLabel}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="relative col-span-12 overflow-hidden rounded-3xl bg-primary p-10 text-white md:col-span-8">
          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {applications.map((app) => (
              <div key={app.slug}>
                <h3 className="mb-4 text-xl font-bold">{app.title}</h3>
                <p className="mb-6 text-sm text-slate-300">{app.description}</p>
                <Link
                  href={`/aplicaciones/${app.slug}`}
                  className="rounded-lg bg-secondary-container px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-primary-fixed"
                >
                  Descargar PDF
                </Link>
              </div>
            ))}
          </div>
          {/* Gradient blur circle */}
          <div className="absolute -mr-20 -mt-20 right-0 top-0 h-64 w-64 rounded-full bg-primary-container opacity-50 blur-3xl" />
        </div>
      </div>
    );
  }

  // Bento variant (Medio Ambiente + Investigación)
  if (layout === "bento") {
    return (
      <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
        {/* Medio Ambiente — compact card */}
        <div className="flex flex-col justify-between rounded-2xl bg-surface-container-low p-8 md:col-span-1">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-black uppercase tracking-tight text-primary">
              Medio Ambiente
            </h2>
            <p className="mb-6 text-sm text-on-surface-variant">
              Monitoreo de calidad de agua y aire. Detección de PFAS y VOCs con
              precisión absoluta.
            </p>
          </div>
          <div className="space-y-4">
            {applications.slice(0, 2).map((app) => (
              <Link
                key={app.slug}
                href={`/aplicaciones/${app.slug}`}
                className="flex items-center justify-between rounded-lg bg-white p-3 text-xs font-bold"
              >
                <span>{app.title}</span>
                <span className="material-symbols-outlined text-secondary">
                  chevron_right
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Investigación — wide CTA card */}
        <div className="group flex cursor-pointer items-center justify-between rounded-3xl border-2 border-dashed border-secondary/20 bg-secondary/5 p-12 transition-colors hover:bg-secondary/10 md:col-span-2">
          <div className="max-w-md">
            <h2 className="mb-4 font-heading text-3xl font-black uppercase tracking-tighter text-primary">
              Investigación y Academia
            </h2>
            <p className="mb-6 leading-relaxed text-on-surface-variant">
              Apoyamos a centros de investigación con tecnologías de vanguardia
              para el descubrimiento de nuevos materiales y compuestos
              bioactivos.
            </p>
            <span className="inline-flex items-center rounded-lg bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              Explorar Publicaciones
            </span>
          </div>
          <span className="material-symbols-outlined text-7xl text-secondary/20 transition-colors group-hover:text-secondary">
            biotech
          </span>
        </div>
      </div>
    );
  }

  // Left layout (Alimentos style) — info left, cards right
  if (layout === "left") {
    return (
      <div className={cn("grid grid-cols-12 items-start gap-8", className)}>
        <div className="sticky top-32 col-span-12 md:col-span-4">
          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tighter text-primary">
            {title}
          </h2>
          <div className="mb-6 h-1 w-20 bg-secondary" />
          <p className="mb-8 leading-relaxed text-on-surface-variant">
            {description}
          </p>
          <Link
            href="#"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            {ctaLabel}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-8">
          {applications.map((app) => (
            <ApplicationCard
              key={app.slug}
              icon={app.icon}
              title={app.title}
              description={app.description}
              noteId={app.noteId}
              href={`/aplicaciones/${app.slug}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Right layout (Farmacéutica style) — cards left, info right
  return (
    <div className={cn("grid grid-cols-12 items-start gap-8", className)}>
      <div className="order-2 col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:order-1 md:col-span-8">
        {applications.map((app) => (
          <ApplicationCard
            key={app.slug}
            icon={app.icon}
            title={app.title}
            description={app.description}
            noteId={app.noteId}
            href={`/aplicaciones/${app.slug}`}
          />
        ))}
      </div>
      <div className="sticky top-32 order-1 col-span-12 md:order-2 md:col-span-4">
        <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tighter text-primary">
          {title}
        </h2>
        <div className="mb-6 h-1 w-20 bg-secondary" />
        <p className="mb-8 leading-relaxed text-on-surface-variant">
          {description}
        </p>
        <Link
          href="#"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary"
        >
          {ctaLabel}
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
