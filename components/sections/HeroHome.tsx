import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Local data — quick-access industry buttons (anchor links)         */
/* ------------------------------------------------------------------ */

const quickLinks = [
  { label: 'Servicios', href: '#servicios', icon: 'science' },
  { label: 'Confianza', href: '#confianza', icon: 'verified' },
  { label: 'Nosotros', href: '#nosotros', icon: 'groups' },
  { label: 'Contacto', href: '#contacto', icon: 'chat' },
] as const;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface HeroHomeProps {
  /** Kept for backward compatibility — no longer required. */
  industries?: unknown[];
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HeroHome(_props?: HeroHomeProps) {
  return (
    <section className="relative flex min-h-[870px] items-center overflow-hidden bg-surface">
      {/* Background image with overlay - decorative, hidden from screen readers */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20 mix-blend-multiply"
          src="/images/heroes/hero-home-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-8 md:grid-cols-2">
        {/* Left column */}
        <div>
          {/* Overline */}
          <span className="mb-6 inline-block rounded-full bg-secondary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-on-secondary-fixed">
            Tu Aliado en Cromatografía y Espectroscopía
          </span>

          {/* Title */}
          <h1 className="mb-8 font-heading text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Tu laboratorio al 100%,{' '}
            <br className="hidden sm:inline" />
            con el aliado que{' '}
            <span className="italic text-secondary">necesitas</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Atendemos cualquier marca de equipo de cromatografía y
            espectroscopía. Mantenimiento, calibración, repuestos y
            consultoría: todo lo que tu laboratorio necesita bajo un mismo
            aliado.
          </p>

          {/* Primary CTAs */}
          <div className="mb-12 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:opacity-90"
            >
              <span className="material-symbols-outlined text-lg">
                troubleshoot
              </span>
              Diagnóstico Gratuito
            </Link>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-on-surface transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined text-lg">
               GridView
              </span>
              Nuestros Servicios
            </a>
          </div>

          {/* Quick-access buttons */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center gap-3 rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="font-heading text-xs font-bold uppercase tracking-wider">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right column — hero image with glass card */}
        <div className="relative hidden md:block" aria-hidden="true">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container-highest shadow-2xl">
            <img
              alt="Equipo de laboratorio analizando datos de cromatografía de gases"
              className="h-full w-full object-cover"
              src="/images/heroes/hero-home-equipment.jpg"
            />

            {/* Glass overlay card */}
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/20 bg-white/80 p-6 backdrop-blur-[20px]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    build_circle
                  </span>
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-primary">
                    Mantenimiento Multimarca
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant">
                    <span className="invisible whitespace-nowrap">Agilent, Waters, Shimadzu, Thermo y más</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
