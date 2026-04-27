import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export function CTABanner({
  title = '¿Listo para elevar la precisión de su laboratorio?',
  description = 'Agende una consultoría técnica con nuestros expertos hoy mismo. Sin catálogos genéricos, solo soluciones reales.',
  primaryButton = { label: 'Hablar con un Consultor', href: '/contacto' },
  secondaryButton = { label: 'Ver Aplicaciones', href: '/aplicaciones' },
}: CTABannerProps) {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 text-center md:p-20">
          {/* Background texture - decorative */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <img
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              src="/images/heroes/cta-banner-bg.jpg"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-4xl font-extrabold tracking-tighter text-[#f59e0b] md:text-5xl">
              {title}
            </h2>
            <p className="mb-12 text-lg text-on-primary-container">
              {description}
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href={primaryButton.href}
                className="rounded-xl bg-secondary-container px-10 py-4 font-heading text-lg font-extrabold text-on-secondary-container transition-all hover:opacity-90"
              >
                {primaryButton.label}
              </Link>
              <Link
                href={secondaryButton.href}
                className="rounded-xl border-2 border-white/30 px-10 py-4 font-heading text-lg font-extrabold text-white transition-all hover:bg-white/10"
              >
                {secondaryButton.label}
              </Link>
              {/* Phone link - mobile button, desktop text */}
              <a
                href="tel:+528****0234"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-10 py-4 font-heading text-lg font-extrabold text-white transition-all hover:bg-white/10 sm:hidden"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Llamar ahora
              </a>
              <a
                href="tel:+528****0234"
                className="hidden items-center gap-2 font-heading font-bold text-white/70 transition-all hover:text-white sm:inline-flex"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                +52 81 8100 0234
              </a>
            </div>
            {/* Micro-text */}
            <p className="mt-6 text-sm text-white/60">
              Respuesta en menos de 24 horas. Sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
