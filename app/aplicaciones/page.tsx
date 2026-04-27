"use client";

import Link from "next/link";
import { HeroPage } from "@/components/sections";
import { industriasList } from "@/lib/industrias-data";

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AplicacionesPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] min-h-screen">
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
          image="/images/heroes/aplicaciones-hero.jpg"
          stats={[
            { icon: "description", label: "30+ Aplicaciones" },
            { icon: "verified_user", label: "ISO Certificado" },
          ]}
        />

        {/* Link to Industrias */}
        <div className="mb-12 bg-surface-container-low rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-lg font-bold text-primary">
              ¿Busca soluciones por industria?
            </h3>
            <p className="text-sm text-on-surface-variant">
              Explore nuestras soluciones especializadas por sector industrial
            </p>
          </div>
          <Link
            href="/industrias"
            className="bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary-container transition-colors flex items-center gap-2"
          >
            <span>Ver Industrias</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        {/* Category Sections */}
        <section className="space-y-32">
          {industriasList.map((industria) => (
            <div key={industria.slug} className="scroll-mt-32" id={industria.slug}>
              {/* Bento variant for Medio Ambiente */}
              {industria.layout === "bento" ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* Medio Ambiente - applications */}
                  <div className="flex flex-col justify-between rounded-2xl bg-surface-container-low p-8 md:col-span-1">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="material-symbols-outlined text-3xl text-secondary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {industria.icon}
                        </span>
                        <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-primary">
                          {industria.shortTitle}
                        </h2>
                      </div>
                      <p className="mb-6 text-sm text-on-surface-variant">
                        {industria.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {industria.applications.slice(0, 4).map((app) => (
                        <Link
                          key={app.slug}
                          href={`/aplicaciones/${app.slug}`}
                          className="flex items-center justify-between rounded-lg bg-white p-3 text-xs font-bold hover:bg-surface-container-highest transition-colors"
                        >
                          <span>{app.title}</span>
                          <span className="material-symbols-outlined text-secondary">
                            chevron_right
                          </span>
                        </Link>
                      ))}
                      {industria.applications.length > 4 && (
                        <Link
                          href={`/industrias/${industria.slug}`}
                          className="block text-center text-xs text-secondary font-semibold mt-2"
                        >
                          +{industria.applications.length - 4} más aplicaciones
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Related CTA */}
                  <Link
                    href={`/industrias/${industria.slug}`}
                    className="group flex cursor-pointer items-center justify-between rounded-3xl border-2 border-dashed border-secondary/20 bg-secondary/5 p-12 transition-colors hover:bg-secondary/10 md:col-span-2"
                  >
                    <div className="max-w-md">
                      <h2 className="mb-4 font-heading text-3xl font-black uppercase tracking-tighter text-primary">
                        Ver Soluciones de {industria.shortTitle}
                      </h2>
                      <p className="mb-6 leading-relaxed text-on-surface-variant">
                        {industria.detailedDescription}
                      </p>
                      <span className="inline-flex items-center rounded-lg bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                        Explorar {industria.shortTitle}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-7xl text-secondary/20 transition-colors group-hover:text-secondary">
                      {industria.icon}
                    </span>
                  </Link>
                </div>
              ) : (
                /* Standard layout for other industries */
                <div className="grid grid-cols-12 items-start gap-8">
                  <div
                    className={`sticky top-32 col-span-12 md:col-span-4 ${
                      industria.layout === "right" ? "order-2 md:order-2" : "order-1 md:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="material-symbols-outlined text-3xl text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {industria.icon}
                      </span>
                      <h2 className="font-heading text-3xl font-black uppercase tracking-tighter text-primary">
                        {industria.shortTitle}
                      </h2>
                    </div>
                    <div className="mb-6 h-1 w-20 bg-secondary" />
                    <p className="mb-8 leading-relaxed text-on-surface-variant">
                      {industria.description}
                    </p>
                    <Link
                      href={`/industrias/${industria.slug}`}
                      className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary"
                    >
                      Ver todo {industria.shortTitle}
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                  <div
                    className={`col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-8 ${
                      industria.layout === "right" ? "order-1 md:order-1" : "order-2 md:order-2"
                    }`}
                  >
                    {industria.applications.slice(0, 4).map((app) => (
                      <Link
                        key={app.slug}
                        href={`/aplicaciones/${app.slug}`}
                        className="flex h-full flex-col rounded-2xl border border-outline-variant/10 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-fixed">
                          <span
                            className="material-symbols-outlined text-secondary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {app.icon}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary">{app.title}</h3>
                        <p className="mb-4 flex-grow text-sm text-on-surface-variant">
                          {app.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                          <span>Nota Técnica #{app.noteId}</span>
                          <span className="material-symbols-outlined text-sm">
                            open_in_new
                          </span>
                        </div>
                      </Link>
                    ))}
                    {industria.applications.length > 4 && (
                      <Link
                        href={`/industrias/${industria.slug}`}
                        className="flex items-center justify-center rounded-2xl border-2 border-dashed border-outline-variant/30 p-6 text-center hover:border-secondary hover:bg-secondary/5 transition-all"
                      >
                        <div className="text-center">
                          <span className="material-symbols-outlined text-2xl text-on-surface-variant">
                            add_circle
                          </span>
                          <p className="mt-2 text-sm font-semibold text-primary">
                            +{industria.applications.length - 4} más aplicaciones
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6 text-[#f59e0b]">
              ¿No encuentra la aplicación que busca?
            </h2>
            <p className="text-on-primary-container mb-10 text-lg">
              Nuestros especialistas pueden desarrollar métodos personalizados
              para sus necesidades analíticas específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Solicitar Asesoría
              </Link>
              <Link
                href="/industrias"
                className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Explorar por Industria
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
