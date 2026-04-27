import Link from 'next/link';
import type { Service } from '@/lib/demo-data';

interface ServicesBentoProps {
  services?: Service[];
}

export function ServicesBento({ services }: ServicesBentoProps) {
  const items = services ?? [];

  return (
    <section id="servicios" className="bg-surface-container-low py-24">
      <div className="container mx-auto px-8">
        {/* Header row */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-on-surface">
              Servicios de Especialidad
            </h2>
            <p className="text-on-surface-variant">
              No somos solo proveedores; somos sus socios técnicos. Ofrecemos
              soluciones integrales para laboratorios que demandan el más alto
              estándar de rigor científico.
            </p>
          </div>
          <Link
            href="/servicios"
            className="group flex items-center gap-2 font-heading font-bold text-secondary transition-all hover:gap-4"
          >
            Ver todos los servicios
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {items.map((svc, i) => {
            switch (svc.variant) {
              // Large light card (col-span-8)
              case 'light':
                return (
                  <div
                    key={i}
                    className="flex min-h-[400px] flex-col justify-between rounded-3xl bg-surface-container-lowest p-10 md:col-span-8"
                  >
                    <div>
                      <span className="material-symbols-outlined mb-6 text-4xl text-secondary">
                        {svc.icon}
                      </span>
                      <h3 className="mb-4 font-heading text-3xl font-bold text-on-surface">
                        {svc.title}
                      </h3>
                      <p className="max-w-md text-on-surface-variant">
                        {svc.description}
                      </p>
                    </div>
                    {svc.badges && (
                      <div className="flex items-center gap-4">
                        {svc.badges.map((b) => (
                          <Link
                            key={b}
                            href={`/soluciones?marca=${encodeURIComponent(b)}`}
                            className="rounded-md bg-surface-container py-1 px-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-surface-container-high hover:text-secondary"
                          >
                            {b}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );

              // Dark card (col-span-4)
              case 'dark':
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-between rounded-3xl bg-primary p-10 text-white md:col-span-4"
                  >
                    <div>
                      <span className="material-symbols-outlined mb-6 text-4xl text-secondary-container">
                        {svc.icon}
                      </span>
                      <h3 className="mb-4 font-heading text-2xl font-bold">
                        {svc.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-on-primary-container">
                        {svc.description}
                      </p>
                    </div>
                    {svc.cta && (
                      <Link
                        href={svc.cta.href}
                        className="mt-8 rounded-lg bg-secondary-container py-3 px-6 text-sm font-bold tracking-wide text-on-secondary-container"
                      >
                        {svc.cta.label}
                      </Link>
                    )}
                  </div>
                );

              // Surface card (col-span-4)
              case 'surface':
                return (
                  <div
                    key={i}
                    className="rounded-3xl bg-surface-container-highest p-10 md:col-span-4"
                  >
                    <span className="material-symbols-outlined mb-6 text-4xl text-on-surface">
                      {svc.icon}
                    </span>
                    <h3 className="mb-3 font-heading text-xl font-bold text-on-surface">
                      {svc.title}
                    </h3>
                    <p className="mb-6 text-sm text-on-surface-variant">
                      {svc.description}
                    </p>
                    <Link
                      href="/servicios"
                      className="inline-flex items-center gap-1 text-sm font-bold text-secondary transition-all hover:gap-2"
                    >
                      Conocer más
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                );

              // Image card (col-span-8)
              case 'image':
                return (
                  <div
                    key={i}
                    className="relative flex items-center overflow-hidden rounded-3xl bg-white p-10 md:col-span-8"
                  >
                    <div className="relative z-10 max-w-xs">
                      <h3 className="mb-3 font-heading text-xl font-bold text-on-surface">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant">
                        {svc.description}
                      </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-1/2" aria-hidden="true">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover grayscale opacity-20"
                        src="/images/heroes/cta-banner-bg.jpg"
                      />
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
