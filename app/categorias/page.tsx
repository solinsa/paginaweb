import React from 'react';
import { CategoryBento, type CategoryItem } from '@/components/sections/CategoryBento';

// ---------------------------------------------------------------------------
// Demo category data matching Stitch design pixel-perfect
// ---------------------------------------------------------------------------

const categories: CategoryItem[] = [
  {
    id: 'hplc',
    title: 'Cromatografía de Líquidos',
    description:
      'Sistemas HPLC y UHPLC diseñados para la máxima resolución analítica. Desde purificación a escala preparativa hasta micro-análisis de ultra alta presión.',
    icon: 'science',
    ctaLabel: 'Explorar Categoría',
    ctaHref: '/soluciones/hplc',
    variant: 'hero',
    decorativeIcon: 'precision_manufacturing',
  },
  {
    id: 'gc',
    title: 'Cromatografía de Gases',
    description:
      'Robustez y sensibilidad para el análisis de compuestos volátiles y semivolátiles. Soluciones líderes en la industria petroquímica y ambiental.',
    icon: 'air',
    ctaLabel: 'Ver Equipos GC',
    ctaHref: '/soluciones/gc',
    variant: 'light',
  },
  {
    id: 'ms',
    title: 'Espectrometría de Masas',
    description:
      'Detectores de alta resolución (Q-TOF, Triple Cuadrupolo) para la identificación estructural definitiva y cuantificación traza.',
    icon: 'settings_input_component',
    ctaLabel: 'Sistemas MS',
    ctaHref: '/soluciones/espectrometria',
    variant: 'dark',
  },
  {
    id: 'sample-prep',
    title: 'Preparación de Muestra',
    description:
      'Automatización, SPE, QuEChERS y sistemas de filtración avanzada para garantizar la integridad de sus resultados.',
    icon: 'biotech',
    ctaLabel: 'Metodologías',
    ctaHref: '/soluciones/preparacion-de-muestra',
    variant: 'neutral',
  },
  {
    id: 'consumables',
    title: 'Columnas y Consumibles',
    description:
      'Fases estacionarias de última generación y viales certificados para optimizar la vida útil de sus equipos analíticos.',
    icon: 'inventory_2',
    ctaLabel: 'Explorar Catálogo',
    ctaHref: '/soluciones/consumibles',
    variant: 'accent',
  },
];

// ---------------------------------------------------------------------------
// Technical authority section data
// ---------------------------------------------------------------------------

const techFeatures = [
  {
    icon: 'verified',
    title: 'Calibración Certificada',
    description:
      'Protocolos de validación IQ/OQ/PQ bajo estándares internacionales ISO/IEC 17025.',
  },
  {
    icon: 'support_agent',
    title: 'Soporte Nivel Experto',
    description:
      'Ingenieros de servicio capacitados directamente por los fabricantes en fábrica.',
  },
  {
    icon: 'analytics',
    title: 'Desarrollo de Métodos',
    description:
      'Asesoría científica para la optimización de sus flujos de trabajo analíticos.',
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CategoriasPage() {
  return (
    <>
      {/* Hero Section: Editorial Header — 12-col grid (8+4) */}
      <section className="mx-auto max-w-[1440px] px-12 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12">
        <div className="lg:col-span-8">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
            Catálogo de Alta Precisión
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[1.1]">
            Ecosistema <br />
            Analítico <span className="text-secondary">Avanzado</span>
          </h1>
        </div>
        <div className="lg:col-span-4 pb-2">
          <p className="text-on-surface-variant leading-relaxed font-medium">
            Explora nuestra selección curada de instrumentación analítica para
            laboratorios de alta exigencia. Precisión técnica, reproducibilidad y
            autoridad científica en cada componente.
          </p>
        </div>
      </section>

      {/* Main Categories: Bento Grid */}
      <CategoryBento
        categories={categories}
        className="mx-auto max-w-[1440px]"
      />

      {/* Technical Authority Section — Asymmetric 5+7 grid */}
      <section className="mt-32 mx-auto max-w-[1440px] px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image — col-span-5 */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <img
            alt="Laboratorio Moderno"
            className="rounded-3xl object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            src="/images/heroes/categorias-hero.jpg"
          />
        </div>

        {/* Text — col-span-7 */}
        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-12 h-[1px] bg-secondary" />
            <span className="font-body text-xs uppercase tracking-widest text-secondary font-bold">
              Respaldo Técnico Especializado
            </span>
          </div>
          <h3 className="font-heading text-4xl font-bold text-primary mb-8 tracking-tight">
            Más que equipos, entregamos{' '}
            <span className="italic text-secondary">certidumbre técnica.</span>
          </h3>
          <div className="space-y-8">
            {techFeatures.map((f) => (
              <div key={f.title} className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-secondary">
                  {f.icon}
                </span>
                <div>
                  <h4 className="font-bold text-primary mb-1">{f.title}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
