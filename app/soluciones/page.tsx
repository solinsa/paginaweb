'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { SideNavBar } from '@/components/layout';
import { SolutionsBento } from '@/components/sections/SolutionsBento';
import {
  filterConfig,
  overviewSpecRows,
  solutionItems,
  solucionesFilters,
} from '@/lib/soluciones-data-index';

const filterLabelMap = Object.fromEntries(
  Object.entries(filterConfig).map(([key, value]) => [key, value]),
) as Record<string, string>;

export default function SolucionesPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['hplc-gc']);
  const [appliedFilters, setAppliedFilters] = useState<string[]>(['hplc-gc']);

  const handleFilterChange = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId],
    );
  };

  const filteredSolutions = useMemo(() => {
    if (appliedFilters.length === 0) {
      return solutionItems;
    }

    return solutionItems.filter((item) =>
      appliedFilters.some((filterId) => item.tags.includes(filterId)),
    );
  }, [appliedFilters]);

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
        <div className="relative grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-secondary font-bold text-sm tracking-[0.2em] uppercase block mb-4">
              Portafolio Técnico 2024
            </span>
            <h1 className="font-heading text-6xl font-extrabold text-on-surface leading-tight tracking-tighter mb-6">
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
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-transform active:scale-95"
              >
                Agendar asesoría
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#catalogo-soluciones"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold"
              >
                Ver catálogo
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden relative group">
              <img
                alt="Equipo HPLC"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/heroes/soluciones-hero.jpg"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

              {/* Glass Chip Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between gap-4">
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

        {/* Solution catalog */}
        <section id="catalogo-soluciones" className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Catálogo filtrable
              </span>
              <h2 className="font-heading text-4xl font-bold text-on-surface mt-3">
                Soluciones activas
              </h2>
            </div>
            <div className="text-sm text-on-surface-variant">
              {filteredSolutions.length} resultados · filtros activos:{' '}
              {appliedFilters.length > 0
                ? appliedFilters.map((id) => filterLabelMap[id] ?? id).join(', ')
                : 'todos'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  {item.highlight && (
                    <span className="rounded-full bg-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-secondary-container">
                      Recomendado
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-3">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-transform active:scale-95"
                >
                  Ver detalle
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Integrated Solutions / Specs Table */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-bold text-on-surface mb-4 tracking-tight">
                Integración Analítica Superior
              </h2>
              <p className="text-on-surface-variant">
                No solo vendemos equipos; integramos soluciones que optimizan su
                retorno de inversión y garantizan la calidad de sus resultados.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-3xl font-black text-on-surface">100%</p>
                <p className="text-[10px] font-bold uppercase text-secondary tracking-widest">
                  Atención Multimarca
                </p>
              </div>
              <div className="text-right border-l pl-4 border-outline-variant">
                <p className="text-3xl font-black text-on-surface">14+</p>
                <p className="text-[10px] font-bold uppercase text-secondary tracking-widest">
                  Años de Experiencia
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface uppercase text-[10px] font-bold tracking-[0.2em]">
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
            <h2 className="font-heading text-4xl font-bold mb-6 text-[#f59e0b]">
              ¿Busca optimizar su método analítico?
            </h2>
            <p className="text-on-primary-container mb-10 text-lg">
              Nuestros especialistas técnicos están listos para diseñar la
              configuración exacta que su laboratorio requiere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Agendar Videoconsulta
              </Link>
              <Link
                href="/contacto"
                className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
