'use client';

import { useState } from 'react';
import { SideNavBar } from '@/components/layout';
import { SolutionsBento } from '@/components/sections/SolutionsBento';
import { solucionesFilters, overviewSpecRows } from '@/lib/soluciones-data-index';

export default function SolucionesPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['hplc-gc']);

  const handleFilterChange = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId],
    );
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px]">
      {/* SideNavBar */}
      <div className="hidden lg:flex h-screen w-64 sticky top-20 shrink-0">
        <SideNavBar
          filters={solucionesFilters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          title="Filtros Técnicos"
          subtitle="Precisión Clínica"
        />
      </div>

      {/* Main Content */}
      <section className="flex-1 px-12 py-8 overflow-x-hidden">
        {/* Hero Editorial - 12 col grid */}
        <div className="relative grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-secondary font-bold text-sm tracking-[0.2em] uppercase block mb-4">
              Portafolio Técnico 2024
            </span>
            <h1 className="font-heading text-6xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
              Sistemas de <br />
              <span className="text-secondary-container">Cromatografía</span>{' '}
              <br />
              de Alto Desempeño
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-8 leading-relaxed">
              Soluciones integrales que van más allá del hardware. Diseñamos
              ecosistemas analíticos basados en la precisión, el cumplimiento
              normativo y la eficiencia operativa.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-transform active:scale-95">
                Explorar Catálogo
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden relative group">
              <img
                alt="Equipo HPLC"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2xN9cjJtCuo3hgPIIWYTH5Gd5IRCWlcIsGGDYv6nLJ_b8k1YMVt3q4FsnZg6aZl9y8ccOQL-9wafuJ_5tMMrhRA2PubUdYl_Uv_bVVjSDjzJ8yVhx8DyAyZ0ObwUuOziUr5wbnLeta8nT_Y3Ntg8OSU7ww6BIV9EU0dD6PMnTQ6BU5-AhdVuWRHNRs1a1BsPUGPbaC4KWBHiXh0Wb63OSv689ZUKE2fOccCD-oVzHizckNEc17tssVGVc2fzSyAjf51ofjZ7SUw"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

              {/* Glass Chip Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-primary opacity-60 uppercase">
                      Detección Ultra-Precisa
                    </p>
                    <p className="text-xl font-bold text-primary">
                      Límite de Detección: 0.1ppb
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    biotech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <SolutionsBento />

        {/* Integrated Solutions / Specs Table */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-bold text-primary mb-4 tracking-tight">
                Integración Analítica Superior
              </h2>
              <p className="text-on-surface-variant">
                No solo vendemos equipos; integramos soluciones que optimizan su
                retorno de inversión y garantizan la calidad de sus resultados.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-3xl font-black text-primary">24/7</p>
                <p className="text-[10px] font-bold uppercase text-secondary tracking-widest">
                  Soporte Multimarca
                </p>
              </div>
              <div className="text-right border-l pl-4 border-outline-variant">
                <p className="text-3xl font-black text-primary">99.9%</p>
                <p className="text-[10px] font-bold uppercase text-secondary tracking-widest">
                  Tiempo de Actividad
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-primary uppercase text-[10px] font-bold tracking-[0.2em]">
                  <th className="p-6">Especificación Técnica</th>
                  <th className="p-6">Serie Profesional</th>
                  <th className="p-6">Serie Ultra-Fast</th>
                  <th className="p-6">Soporte Integrado</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-surface-container">
                {overviewSpecRows.map((row) => (
                  <tr
                    key={row.label}
                    className="hover:bg-surface-container-low/50 transition-colors"
                  >
                    <td className="p-6 font-semibold">{row.label}</td>
                    <td className="p-6">{row.values[0]}</td>
                    <td className="p-6">{row.values[1]}</td>
                    <td className="p-6 text-secondary">
                      <span className="material-symbols-outlined text-xs">
                        verified
                      </span>{' '}
                      {row.values[2].replace('✓ ', '')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6">
              ¿Busca optimizar su método analítico?
            </h2>
            <p className="text-blue-100/70 mb-10 text-lg">
              Nuestros especialistas técnicos están listos para diseñar la
              configuración exacta que su laboratorio requiere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Agendar Videoconsulta
              </button>
              <button className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
