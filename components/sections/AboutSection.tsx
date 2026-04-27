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
  image = '/images/heroes/about-solinsa.jpg',
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
    <section id="nosotros" className="bg-surface py-24">
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
            {/* Floating multimarca badge */}
            <div className="absolute -bottom-6 left-6 hidden items-center gap-2 rounded-2xl bg-surface-container-lowest px-6 py-4 shadow-lg lg:flex">
              <span
                className="material-symbols-outlined text-lg text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-sm font-bold text-on-surface">Multimarca</span>
            </div>
          </div>

          {/* Text column */}
          <div>
            <span className="mb-4 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {overline}
            </span>
            <h2 className="mb-8 font-heading text-4xl font-extrabold tracking-tight text-on-surface">
              {title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
              {description}
            </p>

            {/* Check list */}
            <ul className="mb-10 space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-medium text-on-surface">
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

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={cta.href}
                className="rounded-xl border-2 border-on-surface px-8 py-4 font-heading font-bold text-on-surface transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {cta.label}
              </Link>
              <Link
                href="/contacto"
                className="rounded-xl border-2 border-on-surface-variant/30 px-8 py-4 font-heading font-bold text-on-surface-variant transition-colors duration-300 hover:border-secondary hover:text-secondary"
              >
                Agendar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
