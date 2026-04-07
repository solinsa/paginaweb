import Link from 'next/link';

interface AboutSectionProps {
  image?: string;
  overline?: string;
  title?: string;
  description?: string;
  checkItems?: string[];
  cta?: { label: string; href: string };
  yearsBadge?: { value: string; label: string };
}

export function AboutSection({
  image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD--xGLosXStQcArZPfktSmWW_Wy1yZR2HuoImXPTHkG4EjjMgkfJrHuhQls4MbcOLFQRyY3zhs7zNLsTvQvLG9fP1RcCmtVgh_JWnMJbeQO7FlAoLNGfdjFrszEWXxbSThEjg2IoUSrIcouGJD9vAzzM3iiKb7kopudmMmXWEGGlmM4PVBVdp5Nd6Oy-oIN7UZwE047cB1DreDR-C_iZGJ1v8w4EZwYD1WFpq6JIZ1Qf2p7arycCZckx64lw3bIyuMxQwufxtIYA',
  overline = 'Nuestra Historia',
  title = 'Liderazgo desde el corazón industrial de México.',
  description = 'Fundada en 2010 en Monterrey, Nuevo León, Solinsa nació con el objetivo de elevar el estándar del soporte técnico analítico en el país. Entendemos que en la ciencia no hay margen de error.',
  checkItems = [
    'Basados en Monterrey, Cobertura Nacional.',
    'Especialistas en HPLC y Espectrometría.',
    'Consultores con Certificación Internacional.',
  ],
  cta = { label: 'Nuestra Metodología', href: '/nosotros' },
  yearsBadge = { value: '14+', label: 'Años de Expertise' },
}: AboutSectionProps) {
  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto px-8">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* Image column */}
          <div className="relative">
            <img
              alt="Sede Solinsa Monterrey"
              className="rounded-[2.5rem] shadow-xl"
              src={image}
            />
            {/* Floating years badge */}
            <div className="absolute -bottom-10 -right-10 hidden rounded-3xl bg-secondary p-12 text-white shadow-2xl lg:block">
              <div className="mb-1 text-5xl font-extrabold tracking-tighter">
                {yearsBadge.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                {yearsBadge.label}
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <span className="mb-4 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {overline}
            </span>
            <h2 className="mb-8 font-heading text-4xl font-extrabold tracking-tight text-primary">
              {title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
              {description}
            </p>

            {/* Check list */}
            <ul className="mb-10 space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-medium text-primary">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <Link
              href={cta.href}
              className="rounded-xl border-2 border-primary px-8 py-4 font-heading font-bold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
