"use client";

import { useState } from "react";
import { SideNavBar, type FilterItem } from "@/components/layout";
import {
  HeroPage,
  IndustrySection,
  type IndustryApplication,
} from "@/components/sections";

// ---------------------------------------------------------------------------
// Demo filter items for sidebar
// ---------------------------------------------------------------------------
const filters: FilterItem[] = [
  { id: "industria", label: "Industria", icon: "factory" },
  { id: "metodo", label: "Método Analítico", icon: "science" },
  { id: "hplc-gc", label: "HPLC/GC", icon: "biotech" },
  { id: "espectrometria", label: "Espectrometría", icon: "query_stats" },
  { id: "multimarca", label: "Multimarca", icon: "verified" },
];

// ---------------------------------------------------------------------------
// Demo industry data matching Stitch HTML
// ---------------------------------------------------------------------------
const industries = [
  {
    title: "Alimentos",
    description:
      "Asegurando la inocuidad alimentaria a través de la detección precisa de contaminantes y análisis nutricional avanzado.",
    ctaLabel: "Ver todo Alimentos",
    layout: "left" as const,
    applications: [
      {
        icon: "eco",
        title: "Residuos de Pesticidas",
        description:
          "Análisis multiresiduo en frutas y hortalizas mediante LC-MS/MS con alta sensibilidad.",
        noteId: "402",
        slug: "pesticidas-alimentos",
      },
      {
        icon: "nutrition",
        title: "Perfil de Aminoácidos",
        description:
          "Cuantificación rápida de aminoácidos en bebidas enriquecidas usando HPLC con detección UV.",
        noteId: "115",
        slug: "aminoacidos-bebidas",
      },
    ] as IndustryApplication[],
  },
  {
    title: "Farmacéutica",
    description:
      "Cumplimiento estricto con farmacopeas internacionales (USP, EP) mediante instrumentación robusta y validada.",
    ctaLabel: "Ver todo Farma",
    layout: "right" as const,
    applications: [
      {
        icon: "vaccines",
        title: "Pureza de APIs",
        description:
          "Control de calidad y determinación de impurezas orgánicas en principios activos.",
        noteId: "881",
        slug: "pureza-apis",
      },
      {
        icon: "science",
        title: "Ensayos de Disolución",
        description:
          "Monitoreo automatizado de liberación controlada mediante HPLC en línea.",
        noteId: "209",
        slug: "ensayos-disolucion",
      },
    ] as IndustryApplication[],
  },
  {
    title: "Petroquímica",
    description:
      "Análisis de hidrocarburos, gases y derivados con metodologías ASTM y estándares industriales globales.",
    ctaLabel: "Ver todo Petroquímica",
    layout: "dark" as const,
    applications: [
      {
        icon: "oil_barrel",
        title: "Fraccionamiento de Petróleo",
        description:
          "Caracterización de crudos mediante cromatografía de gases de alta resolución para optimización de refinería.",
        noteId: "550",
        slug: "fraccionamiento-petroleo",
      },
      {
        icon: "gas_meter",
        title: "Pureza de Etileno",
        description:
          "Detección de impurezas a nivel de trazas (ppb) para procesos de polimerización crítica.",
        noteId: "612",
        slug: "pureza-etileno",
      },
    ] as IndustryApplication[],
  },
  {
    title: "Medio Ambiente",
    description: "",
    ctaLabel: "",
    layout: "bento" as const,
    applications: [
      {
        icon: "water_drop",
        title: "Calidad de Agua",
        description:
          "Análisis de contaminantes en agua potable y residual.",
        noteId: "330",
        slug: "calidad-agua",
      },
      {
        icon: "landscape",
        title: "Análisis de Suelos",
        description: "Detección de metales pesados y pesticidas en suelos.",
        noteId: "345",
        slug: "analisis-suelos",
      },
    ] as IndustryApplication[],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AplicacionesPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["industria"]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="mx-auto flex max-w-[1440px] min-h-screen">
      {/* SideNavBar */}
      <div className="hidden lg:flex h-screen w-64 sticky top-20 shrink-0">
        <SideNavBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          title="Filtros Técnicos"
          subtitle="Precisión Clínica"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12">
        {/* Hero */}
        <HeroPage
          badge="Catálogo Técnico"
          title={
            <>
              Aplicaciones de{" "}
              <span className="text-secondary">Alta Precisión</span>.
            </>
          }
          description="Explora nuestra biblioteca de notas de aplicación desarrolladas para optimizar la productividad y exactitud en el laboratorio moderno."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaMe--4jMqjNiCyrs9-BgFCZdvRhBJtyuOa-AFH7wCpg4aFwZj-AlsQ0TvESOfpBlaypjFBti1AEEH7DUFgCcvzdwDj4-3Rh1xPpVtj2oU9QGpiz66nX05GoRIcidSzVdUvsKRRRyS2Y-XQLKkxG1RpruEQUsZb7-30IxYHw_zHfcHiitdutAnLzRnbtXavbBbLys-uGy5koTpCi4dk0Nm7fyt-lg5yRxpZ2CUkA61GD8TuQH4Zi1aSO2LEKYjIlFanIfLTLziQ"
          stats={[
            { icon: "description", label: "500+ Notas de Aplicación" },
            { icon: "verified_user", label: "ISO Certificado" },
          ]}
        />

        {/* Category Sections */}
        <section className="space-y-32">
          {industries.map((industry) => (
            <IndustrySection
              key={industry.title}
              title={industry.title}
              description={industry.description}
              ctaLabel={industry.ctaLabel}
              layout={industry.layout}
              applications={industry.applications}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
