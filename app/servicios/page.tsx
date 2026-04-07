'use client';

import React from 'react';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { StatsBar, type Stat } from '@/components/sections/StatsBar';

// ---------------------------------------------------------------------------
// Demo stats matching Stitch design
// ---------------------------------------------------------------------------

const stats: Stat[] = [
  { value: '15+', label: 'Años de Experiencia' },
  { value: '24h', label: 'Tiempo de Respuesta' },
  { value: '500+', label: 'Laboratorios Atendidos' },
  { value: '100%', label: 'Ingenieros Certificados' },
];

// ---------------------------------------------------------------------------
// Sidebar filter items (matching Stitch)
// ---------------------------------------------------------------------------

const sidebarItems = [
  { icon: 'factory', label: 'Industria', active: true },
  { icon: 'science', label: 'Método Analítico', active: false },
  { icon: 'biotech', label: 'HPLC/GC', active: false },
  { icon: 'query_stats', label: 'Espectrometría', active: false },
  { icon: 'verified', label: 'Multimarca', active: false },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ServiciosPage() {
  return (
    <>
      {/* ================================================================
          Hero Section — min-h-[716px], BG image + gradient overlay
          ================================================================ */}
      <section className="relative overflow-hidden bg-surface-container-low min-h-[716px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional laboratory engineer calibrating high-precision analytical equipment"
            className="w-full h-full object-cover opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdDlb2zEN5ccdLMB_5ouB5lyIFxUwu2L2mhK7ZgxUD7x2MURM70yO7eXHgq924tZNCbdmIORmVNBdjpvsWU7Wi4jq7y3C9vHG_vc56VdisNKPVwyXv3NzbjO0p65gkbN2ajD4gblzjt1Jt_5zqUNxpAVwV40UckpCnonqCosSyo24eA_GBbtASSsmRglwlYHl51O_LwL6o6eBB0z7LXi18w5yGtlJ2-lyZwSYsiEY9m7CqG9RZEjfEQwRfm6a-L3skFXKweIr9PA"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/90 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Badge */}
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest font-body">
              Expertise Multimarca
            </span>

            {/* Title */}
            <h1 className="text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter font-heading">
              Precisión que impulsa la ciencia en México.
            </h1>

            {/* Description */}
            <p className="text-xl text-on-surface-variant font-body max-w-xl leading-relaxed">
              Soporte técnico especializado, calibración y capacitación para
              equipos de laboratorio HPLC, GC y Espectrometría. Desde Monterrey
              para todo el territorio nacional.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-on-primary rounded-lg font-bold shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">
                Agendar Servicio{' '}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-lg font-bold hover:bg-outline-variant/20 transition-all">
                Ver Certificaciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Content Grid: Sidebar + Services Bento
          ================================================================ */}
      <section className="max-w-[1440px] mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ---- Sidebar ---- */}
        <aside className="md:col-span-1 hidden md:block">
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-4 sticky top-32">
            <div className="mb-4">
              <h3 className="text-primary font-heading font-bold text-lg">
                Filtros Técnicos
              </h3>
              <p className="text-xs text-on-surface-variant font-body">
                Precisión Clínica
              </p>
            </div>
            <nav className="flex flex-col gap-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 p-3 font-semibold rounded-lg transition-all duration-200 hover:pl-2 active:translate-x-1 ${
                    item.active
                      ? 'bg-white text-secondary shadow-sm'
                      : 'text-on-surface hover:bg-surface-container-highest rounded-lg'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-body text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
            <button className="mt-6 w-full py-3 bg-primary text-white rounded-lg font-bold text-sm tracking-wide">
              Aplicar Filtros
            </button>
          </div>
        </aside>

        {/* ---- Main Content: Services Bento ---- */}
        <div className="md:col-span-3 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Preventive Maintenance — light */}
            <ServiceCard
              variant="light"
              icon="engineering"
              title="Mantenimiento Preventivo y Correctivo"
              description="Expertos ingenieros en sitio para asegurar la continuidad operativa de sus equipos HPLC y GC. Respuesta rápida en Monterrey y cobertura nacional."
              badgeText="Soporte 24/7"
              ctaHref="#"
            />

            {/* Card 2: Calibration — dark */}
            <ServiceCard
              variant="dark"
              icon="straighten"
              title="Calibración Certificada"
              description="Protocolos rigurosos bajo normas internacionales para garantizar la integridad de sus resultados analíticos y cumplimiento regulatorio."
              badgeText="Precisión Técnica"
              ctaHref="#"
            />

            {/* Card 3: Training — wide */}
            <ServiceCard
              variant="wide"
              icon="school"
              title="Capacitación Especializada"
              description="Programas de entrenamiento técnico diseñados para elevar el nivel de competencia de su equipo de laboratorio en el manejo de instrumentación analítica multimarca."
              features={[
                'Teoría de Cromatografía',
                'Desarrollo de Métodos',
                'Resolución de Problemas (Troubleshooting)',
              ]}
              ctaLabel="Solicitar Temario"
              ctaHref="#"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAy_oseiTVkl_tLJheTHSaVLf7H2lo0rjsEfbJfFdFKfi34zVBa8vkgl1QsBijZG97rilF14xK0ianymW1CKuvAVqtdtX9C0quRGAkctn6vZXJc1lsIeTNbKFDpr1AKc33XLY_AdZaistNA1sSP1aAurgCvFiXHRZPT4b5ZctgnoiCYiouXNuyAC8p9OBGyuEhjv0OLLxLHep54bZFpn16GNc4ORDnYBTucGChIvylzmhsmuPhCIoOLBrrCOUmDztCkeMJ5KErS_g"
              badgeText="Capacitación Certificada"
            />
          </div>

          {/* Stats Bar */}
          <StatsBar stats={stats} />
        </div>
      </section>
    </>
  );
}
