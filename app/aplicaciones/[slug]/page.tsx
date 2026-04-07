"use client";

import { use } from "react";
import Link from "next/link";
import { aplicacionesMap, type AplicacionDetail } from "@/lib/aplicaciones-data";
import { industriasMap } from "@/lib/industrias-data";

export default function AplicacionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data: AplicacionDetail | undefined = aplicacionesMap[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Aplicación no encontrada
          </h1>
          <Link
            href="/aplicaciones"
            className="text-secondary font-bold hover:underline"
          >
            Volver a Aplicaciones
          </Link>
        </div>
      </div>
    );
  }

  const industria = industriasMap[data.industriaSlug];

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Hero Section */}
      <section className="relative bg-surface-container-low py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-on-surface-variant font-medium mb-6">
            <Link href="/aplicaciones" className="hover:text-secondary transition-colors">
              Aplicaciones
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link
              href={`/industrias/${data.industriaSlug}`}
              className="hover:text-secondary transition-colors"
            >
              {data.industria}
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-secondary">{data.title.split("por")[0].trim()}</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                  {data.industria}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  Nota Técnica #{data.slug.split("-")[0].toUpperCase()}
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
                {data.title}
              </h1>
              <p className="text-xl text-on-surface-variant mb-6">
                {data.subtitle}
              </p>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                {data.description}
              </p>
            </div>
            <div className="w-full md:w-64 flex-shrink-0">
              <Link
                href={`/industrias/${data.industriaSlug}`}
                className="block bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="material-symbols-outlined text-3xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {industria?.icon}
                  </span>
                  <div>
                    <p className="text-xs text-on-surface-variant">Ver industria</p>
                    <p className="font-bold text-primary">{data.industria}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                Introducción
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {data.introduccion}
              </p>
            </section>

            {/* Parameters */}
            {data.parametros && data.parametros.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Parámetros Analizables
                </h2>
                <div className="bg-white rounded-2xl border border-outline-variant/10 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-surface-container-low">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">
                          Parámetro
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">
                          Descripción
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">
                          Técnica
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {data.parametros.map((param, index) => (
                        <tr key={index} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className="px-6 py-4">
                            <p className="font-semibold text-primary text-sm">
                              {param.nombre}
                            </p>
                            {param.limiteDeteccion && (
                              <p className="text-xs text-on-surface-variant mt-1">
                                LOD: {param.limiteDeteccion}
                              </p>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-on-surface-variant">
                            {param.descripcion}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-lg">
                              {param.tecnica}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Methodology */}
            {data.metodologia && data.metodologia.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Metodología Analítica
                </h2>
                <div className="space-y-4">
                  {data.metodologia.map((metodo, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-outline-variant/10"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-primary">
                          {metodo.nombre}
                        </h3>
                        {metodo.tiempoAnalisis && (
                          <span className="text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-lg">
                            {metodo.tiempoAnalisis}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-on-surface-variant mb-3">
                        {metodo.descripcion}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-sm">
                          precision_manufacturing
                        </span>
                        <span className="font-medium">Equipo: {metodo.equipo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Specifications */}
            {data.especificaciones && data.especificaciones.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Especificaciones Técnicas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.especificaciones.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-surface-container-low rounded-2xl p-6"
                    >
                      <h3 className="font-bold text-primary mb-4">
                        {spec.categoria}
                      </h3>
                      <dl className="space-y-3">
                        {spec.especificaciones.map((esp, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-start text-sm"
                          >
                            <dt className="text-on-surface-variant">
                              {esp.parametro}:
                            </dt>
                            <dd className="font-semibold text-primary text-right ml-4">
                              {esp.valor}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Considerations */}
            {data.consideraciones && data.consideraciones.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Consideraciones Importantes
                </h2>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <ul className="space-y-3">
                    {data.consideraciones.map((consideracion, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
                          info
                        </span>
                        <span>{consideracion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Equipment */}
            {data.equipos && data.equipos.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Equipos Sugeridos
                </h3>
                <div className="space-y-4">
                  {data.equipos.map((equipo, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-outline-variant/10 last:border-0 last:pb-0"
                    >
                      <p className="font-semibold text-primary text-sm mb-1">
                        {equipo.nombre}
                      </p>
                      <p className="text-xs text-on-surface-variant mb-2">
                        {equipo.descripcion}
                      </p>
                      <p className="text-xs text-secondary">
                        {equipo.justificacion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regulations */}
            {data.normativas && data.normativas.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Normativas
                </h3>
                <div className="space-y-4">
                  {data.normativas.map((norm, index) => (
                    <div
                      key={index}
                      className="pb-3 border-b border-outline-variant/10 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-secondary text-sm">
                          gavel
                        </span>
                        <p className="font-semibold text-primary text-xs">
                          {norm.codigo}
                        </p>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        {norm.nombre}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {norm.organismo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-secondary to-secondary-container rounded-2xl p-6 text-white">
              <h3 className="font-heading text-lg font-bold mb-2">
                ¿Necesita más información?
              </h3>
              <p className="text-sm text-blue-100/70 mb-4">
                Descargue la nota técnica completa o contacte a un especialista.
              </p>
              <div className="space-y-3">
                <Link
                  href={`/contacto?subject=${encodeURIComponent(`Consulta sobre ${data.title}`)}`}
                  className="block w-full bg-white text-secondary px-4 py-3 rounded-xl font-bold text-sm text-center hover:bg-blue-50 transition-colors"
                >
                  Solicitar Información
                </Link>
                <Link
                  href={`/industrias/${data.industriaSlug}`}
                  className="block w-full border-2 border-white/30 px-4 py-3 rounded-xl font-bold text-sm text-center hover:bg-white/10 transition-colors"
                >
                  Ver Más de {data.industria}
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Applications */}
        {industria && industria.applications.length > 1 && (
          <section className="mt-16 pt-16 border-t border-outline-variant/20">
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">
              Aplicaciones Relacionadas en {data.industria}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industria.applications
                .filter((app) => app.slug !== slug)
                .slice(0, 4)
                .map((app) => (
                  <Link
                    key={app.slug}
                    href={`/aplicaciones/${app.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl p-5 border border-outline-variant/10 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-secondary">
                          {app.icon}
                        </span>
                        <h4 className="font-bold text-primary text-sm group-hover:text-secondary transition-colors">
                          {app.title}
                        </h4>
                      </div>
                      <p className="text-xs text-on-surface-variant line-clamp-2">
                        {app.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
