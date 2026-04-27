'use client';

import React from 'react';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { StatsBar, type Stat } from '@/components/sections/StatsBar';

// ---------------------------------------------------------------------------
// Demo stats matching Stitch design
// ---------------------------------------------------------------------------

const stats: Stat[] = [
  { value: '15+', label: 'Años de Experiencia' },
  { value: '48-72h', label: 'Tiempo de Respuesta' },
  { value: '500+', label: 'Laboratorios Atendidos' },
  { value: '100%', label: 'Ingenieros Certificados' },
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
            src="/images/heroes/servicios-hero-bg.jpg"
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
            <h1 className="text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter font-heading">
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
          Content Grid: Services Bento
          ================================================================ */}
      <section className="max-w-[1440px] mx-auto px-8 py-24">
        {/* ---- Main Content: Services Bento ---- */}
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Preventive Maintenance — light */}
            <ServiceCard
              variant="light"
              icon="engineering"
              title="Mantenimiento Preventivo y Correctivo"
              description="Expertos ingenieros en sitio para asegurar la continuidad operativa de sus equipos HPLC y GC. Respuesta rápida en Monterrey y cobertura nacional."
              badgeText="Servicio Especializado"
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
              image="/images/heroes/servicios-capacitacion.jpg"
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
