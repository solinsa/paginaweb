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
    <section className="py-20">
      <div className="container mx-auto px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 text-center md:p-20">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10">
            <img
              alt=""
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfgSzk00iv5GcjwdW9i8cDvAGbacHNWcim_6vXU-l9rvwLlFOfOdWOmysHgvL9dnW4f-ImTQhECkx_Xsupbfa6jwACAmsRpzhmcP5NCn4u9ToE6lE89yrVCnIsFR1lmWDEtVLhxjzDK6yHQv3iNd6vAouj6ocJKYylUYMb_3sAHA9uOV90iHJUvsKxJz98r-Df1BkjX4xiK-IAr_abJxcWxD1jTSDHMn8kY_8WLz2rrZXYMBIjYBWUFXsdq0MKsz65WCABULLJlA"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
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
                className="rounded-xl border-2 border-on-primary-container px-10 py-4 font-heading text-lg font-extrabold text-white transition-all hover:bg-white/10"
              >
                {secondaryButton.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
