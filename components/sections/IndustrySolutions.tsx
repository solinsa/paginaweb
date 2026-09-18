import Link from 'next/link';

const industryCards = [
  {
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
    alt: 'Laboratorio de alimentos y bebidas',
    label: 'Alimentos y Bebidas',
    title: 'Calidad, contaminantes y perfiles',
    items: [
      'Tequila y bebidas por HPLC/UHPLC',
      'Detector DAD/VUV',
      'Confitería, sabores y fragancias',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    alt: 'Laboratorio ambiental',
    label: 'Ambiental',
    title: 'Análisis VOC / SVOC y métodos EPA',
    items: [
      'GC-MS triple cuadrupolo',
      'Purge & Trap EST Analytical',
      'Métodos EPA certificados',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1582719508461-905c67377157?w=600&q=80',
    alt: 'Laboratorio farmacéutico',
    label: 'Farmacéutica / QA-QC',
    title: 'Validación y cumplimiento regulatorio',
    items: [
      'UHPLC con gradiente avanzado',
      'Protocolos IQ/OQ/PQ',
      'Trazabilidad total para auditorías',
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#059669"
      strokeWidth="2.4"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

export default function IndustrySolutions() {
  return (
    <section className="sec">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="sec-head center">
          <h2 className="eyebrow">Soluciones por industria</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Equipo especializado para cada sector
          </h3>
          <p className="text-muted-blue-grey max-w-2xl mx-auto">
            Ofrecemos instrumentación analítica y soporte técnico adaptado a los
            requerimientos específicos de cada industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {industryCards.map((card) => (
            <article
              key={card.label}
              className="bg-surface border border-outline rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-56 bg-paper overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4">
                <span className="text-xs font-mono uppercase text-technical-blue">
                  {card.label}
                </span>

                <h3 className="text-xl font-bold text-primary-dark">
                  {card.title}
                </h3>

                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-primary-dark">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://wa.me/522201432743?text=Quiero%20saber%20m%C3%A1s%20sobre%20soluciones%20para%20"
                  target="_blank"
                  className="btn btn-yellow mt-auto self-start"
                >
                  Ver soluciones
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    className="w-[17px] h-[17px]"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
