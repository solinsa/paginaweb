import Link from 'next/link';

const methods = [
  {
    icon: 'science',
    title: 'HPLC',
    description:
      'Cromatografía líquida de alta resolución. Análisis cuantitativo y cualitativo con la más alta precisión.',
    href: '/soluciones/hplc',
  },
  {
    icon: 'biotech',
    title: 'GC',
    description:
      'Cromatografía de gases. Ideal para compuestos volátiles y semi-volátiles.',
    href: '/soluciones/gc',
  },
  {
    icon: 'analytics',
    title: 'GC-MS',
    description:
      'Espectrometría de masas acoplada a GC. Identificación y cuantificación inequívoca.',
    href: '/soluciones/gc-ms',
  },
  {
    icon: 'molecule',
    title: 'LC-MS',
    description:
      'Espectrometría de masas acoplada a HPLC. Análisis de alta sensibilidad.',
    href: '/soluciones/lc-ms',
  },
  {
    icon: 'visibility',
    title: 'Espectrofotometría UV-Vis',
    description:
      'Análisis por absorción UV-Visible. Control de calidad y cuantificación.',
    href: '/soluciones/uv-vis',
  },
  {
    icon: 'sensors',
    title: 'Espectroscopía IR',
    description:
      'Espectroscopía infrarroja. Identificación de materiales y control de calidad.',
    href: '/soluciones/ir',
  },
  {
    icon: 'flask',
    title: 'Preparación de Muestra',
    description:
      'Equipos y consumibles para preparación. Extracción, filtrado, digestión.',
    href: '/soluciones/preparacion-muestra',
  },
  {
    icon: 'category',
    title: 'Consumibles y Accesorios',
    description:
      'Columnas, filtros, viales, estándares y más. Todo lo que tu laboratorio necesita.',
    href: '/soluciones/consumibles',
  },
];

export function MethodsSection() {
  return (
    <section id="metodos" className="bg-surface py-24">
      <div className="container mx-auto px-8">
        {/* Badge */}
        <span className="mb-4 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-on-secondary-container">
          Métodos y Equipos
        </span>

        {/* Header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-on-surface">
              Métodos Analíticos y Tipos de Productos
            </h2>
            <p className="text-on-surface-variant">
              Trabajamos con las principales técnicas analíticas y ofrecemos el
              equipamiento, consumibles y soporte técnico necesarios para cada
              una.
            </p>
          </div>
        </div>

        {/* Methods grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <Link
              key={method.title}
              href={method.href}
              className="group rounded-2xl bg-surface-container-lowest p-8 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <span className="material-symbols-outlined mb-4 block text-3xl text-secondary">
                {method.icon}
              </span>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {method.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-12 text-center">
          <Link
            href="/soluciones"
            className="group inline-flex items-center gap-2 font-heading font-bold text-secondary transition-all hover:gap-4"
          >
            Ver todas las soluciones
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
