"use client";

import Link from "next/link";
import { HeroPage } from "@/components/sections";
import { industriasList } from "@/lib/industrias-data";

export default function IndustriasPage() {
  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Hero Section */}
      <section className="relative bg-surface-container-low py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <HeroPage
            badge="Soluciones por Industria"
            title={
              <>
                Soluciones Analíticas{" "}
                <span className="text-secondary">por Industria</span>
              </>
            }
            description="Encuentre la solución de cromatografía perfecta para su industria. Ofrecemos equipos, métodos y soporte especializado para cada sector."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7SfOvMB7J_a7j7kWi7prv2FQezbGUDNpNyHPNzsB8SKpJQ6ET0r0tX8RijvAbs9f0ntYZV32XiaJDdQH80VeKDWHDiOkpUQRzJoeugd7VizU23lftWr65bQZU8OQ6BdwCedEZ3fOo4QXvftkLzZLwtxNxzOWmCc1QY8j1K9WndbPZQyJvQj4V9eXK3hfPD-w5x6tRg7Kr747v-zYbFd6CfD-YUVANd8yXiOqR_rfwIg9EK0nyQvgQYcLHaHYxZR5zI3BsoJ6p"
            stats={[
              { icon: "factory", label: "5 Industrias" },
              { icon: "science", label: "30+ Aplicaciones" },
              { icon: "verified", label: "Certificado" },
            ]}
          />
        </div>
      </section>

      {/* Industries Grid */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Soluciones Especializadas por Sector
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Cada industria tiene desafíos analíticos únicos. Nuestros sistemas de
            cromatografía están optimizados para cumplir con las normativas y
            requisitos específicos de su sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriasList.map((industria) => (
            <Link
              key={industria.slug}
              href={`/industrias/${industria.slug}`}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      industria.layout === "dark"
                        ? "bg-primary"
                        : "bg-secondary/10"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-3xl ${
                        industria.layout === "dark"
                          ? "text-white"
                          : "text-secondary"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {industria.icon}
                    </span>
                  </div>
                  {industria.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        industria.badgeVariant === "secondary"
                          ? "bg-secondary text-white"
                          : industria.badgeVariant === "primary"
                            ? "bg-primary text-white"
                            : "bg-secondary-container text-on-secondary-container"
                      }`}
                    >
                      {industria.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {industria.shortTitle}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {industria.description}
                </p>

                {/* Applications Preview */}
                <div className="mb-6">
                  <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-3">
                    Aplicaciones Destacadas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industria.applications.slice(0, 3).map((app) => (
                      <span
                        key={app.slug}
                        className="px-2 py-1 bg-surface-container-low rounded-lg text-[10px] text-on-surface-variant"
                      >
                        {app.title}
                      </span>
                    ))}
                    {industria.applications.length > 3 && (
                      <span className="px-2 py-1 bg-surface-container-low rounded-lg text-[10px] text-secondary font-bold">
                        +{industria.applications.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                  {industria.stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        {stat.icon}
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-secondary font-bold text-sm">
                  <span>Explorar Soluciones</span>
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentra su industria?
            </h2>
            <p className="text-blue-100/70 mb-8 text-lg">
              Contáctenos para una consulta personalizada. Tenemos experiencia en
              una amplia gama de sectores analíticos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">mail</span>
              Consultar con Especialista
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
