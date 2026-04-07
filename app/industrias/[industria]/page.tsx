"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  ApplicationCard,
  IndustrySection,
  type IndustryApplication,
} from "@/components/sections/IndustrySection";
import { industriasMap, type IndustriaData } from "@/lib/industrias-data";

const industryFilters = [
  { id: "todas", label: "Todas las Aplicaciones", icon: "apps" },
  { id: "agua", label: "Agua", icon: "water_drop" },
  { id: "suelo", label: "Suelo", icon: "landscape" },
  { id: "aire", label: "Aire", icon: "air" },
];

export default function IndustriaPage({
  params,
}: {
  params: Promise<{ industria: string }>;
}) {
  const { industria } = use(params);
  const [activeFilter, setActiveFilter] = useState("todas");

  const data: IndustriaData | undefined = industriasMap[industria];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Industria no encontrada
          </h1>
          <Link
            href="/industrias"
            className="text-secondary font-bold hover:underline"
          >
            Volver a Industrias
          </Link>
        </div>
      </div>
    );
  }

  // Filtrar aplicaciones según el filtro seleccionado
  const filteredApplications =
    activeFilter === "todas"
      ? data.applications
      : data.applications.filter((app) => {
          if (activeFilter === "agua")
            return app.slug.includes("agua") ||
              app.slug.includes("calidad") ||
              app.slug.includes("pfas") ||
              app.slug.includes("emergentes");
          if (activeFilter === "suelo")
            return app.slug.includes("suelo") ||
              app.slug.includes("sedimentos") ||
              app.slug.includes("organoclorados") ||
              app.slug.includes("triazinas");
          if (activeFilter === "aire") return app.slug.includes("aire");
          return true;
        });

  return (
    <div className="pt-20 flex min-h-screen bg-surface-bright">
      {/* Side Navigation */}
      <aside className="hidden lg:flex flex-col h-screen w-72 sticky top-20 overflow-y-auto bg-surface-container-low py-8 px-6 space-y-2 text-sm font-medium">
        <div className="mb-6 px-2">
          <h3 className="font-heading font-extrabold text-lg tracking-tight text-primary">
            Filtros
          </h3>
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">
            {data.shortTitle}
          </p>
        </div>
        <div className="space-y-1">
          {industryFilters.map((filter) => {
            const isActive = filter.id === activeFilter;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-secondary font-bold ml-2 shadow-sm"
                    : "text-slate-600 hover:pl-5 hover:bg-surface-container-highest"
                }`}
              >
                <span className="material-symbols-outlined">{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        <div className="pt-8 mt-4 border-t border-slate-200 space-y-1">
          <div className="px-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Otras Industrias
          </div>
          {Object.values(industriasMap)
            .filter((i) => i.slug !== industria)
            .slice(0, 3)
            .map((otherIndustria) => (
              <Link
                key={otherIndustria.slug}
                href={`/industrias/${otherIndustria.slug}`}
                className="flex items-center space-x-3 p-3 text-slate-600 hover:pl-5 transition-all"
              >
                <span className="material-symbols-outlined">{otherIndustria.icon}</span>
                <span>{otherIndustria.shortTitle}</span>
              </Link>
            ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            href="/contacto"
            className="w-full py-4 bg-primary text-white rounded-xl font-heading font-bold text-sm shadow-xl hover:scale-[0.98] transition-transform flex items-center justify-center space-x-2"
          >
            <span className="material-symbols-outlined text-sm">
              request_quote
            </span>
            <span>Solicitar Cotización</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 lg:px-16 py-12">
        {/* Breadcrumbs & Title */}
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-xs text-on-surface-variant font-medium mb-4">
            <Link href="/industrias" className="hover:text-secondary transition-colors">
              Industrias
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-secondary">{data.shortTitle}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="material-symbols-outlined text-4xl text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {data.icon}
                </span>
                {data.badge && (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      data.badgeVariant === "secondary"
                        ? "bg-secondary text-white"
                        : data.badgeVariant === "primary"
                          ? "bg-primary text-white"
                          : "bg-secondary-container text-on-secondary-container"
                    }`}
                  >
                    {data.badge}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-primary leading-tight mb-4">
                {data.title}
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {data.detailedDescription}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-right">
                  <div className="flex items-center justify-end gap-1 mb-1">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      {stat.icon}
                    </span>
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">
              Aplicaciones
            </h2>
            <span className="text-sm text-on-surface-variant">
              Mostrando {filteredApplications.length} de {data.applications.length}{" "}
              aplicaciones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((app: IndustryApplication) => (
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
        </section>

        {/* Equipment Section */}
        {data.equipos && data.equipos.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">
              Equipos Recomendados
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.equipos.map((equipo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {equipo.nombre}
                      </h3>
                      <span className="text-xs text-secondary font-medium">
                        {equipo.tipo}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      precision_manufacturing
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {equipo.aplicaciones.map((aplicacion, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-xs mt-0.5 text-secondary">
                          check_circle
                        </span>
                        <span>{aplicacion}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-outline-variant/20">
                    <p className="text-xs text-on-surface-variant">
                      <span className="font-semibold">Especificaciones:</span>{" "}
                      {equipo.especificaciones
                        .slice(0, 2)
                        .map((e) => `${e.label}: ${e.value}`)
                        .join(" | ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regulatory Section */}
        {data.normativas && data.normativas.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">
              Normativas Aplicables
            </h2>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.normativas.map((normativa, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-outline-variant/10"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        gavel
                      </span>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          {normativa.codigo}
                        </p>
                        <p className="text-xs text-on-surface-variant mt-1">
                          {normativa.descripcion}
                        </p>
                        {normativa.organismo && (
                          <span className="inline-block mt-2 px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase rounded-full">
                            {normativa.organismo}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ¿Necesita asesoría para {data.shortTitle}?
            </h2>
            <p className="text-blue-100/70 mb-8 text-lg">
              Nuestros especialistas en {data.shortTitle.toLowerCase()} pueden
              ayudarle a encontrar la solución analítica ideal para su
              laboratorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">mail</span>
                Contactar Especialista
              </Link>
              <Link
                href="/soluciones"
                className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Ver Catálogo de Equipos
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
