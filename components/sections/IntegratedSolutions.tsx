import Link from 'next/link'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px]">
        <path d="M3 22h18M5 22V8l7-5 7 5v14" />
      </svg>
    ),
    label: 'Ambiental',
    title: 'Análisis VOC / SVOC',
    items: ['GC-MS triple cuadrupolo', 'Purge & Trap EST Analytical', 'Métodos EPA certificados'],
    href: 'https://wa.me/522201432743?text=Quiero%20cotizar%20la%20soluci%C3%B3n%20Ambiental%20VOC%20/%20SVOC',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px]">
        <path d="M8 2h8M9 2v5l-4 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-9V2" />
      </svg>
    ),
    label: 'Bebidas',
    title: 'Tequila HPLC Prep',
    items: ['UHPLC con gradiente avanzado', 'Detector DAD/VUV', 'Optimización de tiempos'],
    href: 'https://wa.me/522201432743?text=Quiero%20cotizar%20la%20soluci%C3%B3n%20Tequila%20HPLC%20Prep',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px]">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    label: 'Energía',
    title: 'NOM-016 Compliance',
    items: ['Analizador Wasson-ECE', 'DHA/RGA/PIONA', 'Reportes automatizados'],
    href: 'https://wa.me/522201432743?text=Quiero%20cotizar%20la%20soluci%C3%B3n%20NOM-016%20Compliance',
  },
]

export default function IntegratedSolutions() {
  return (
    <section className="sec">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="sec-head center">
          <span className="eyebrow">Soluciones integradas</span>
          <h2>Listas para tu aplicación — no solo una caja.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {cards.map((card) => (
            <article
              key={card.label}
              className="bg-surface border border-outline rounded-2xl p-6 flex flex-col gap-4 hover:border-technical-blue hover:shadow-lg transition"
            >
              {/* Pill badge */}
              <span className="pill self-start">
                {card.icon}
                {card.label}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-primary-dark">{card.title}</h3>

              {/* Check list */}
              <ul className="flex flex-col gap-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#059669"
                      strokeWidth={2.4}
                      className="w-5 h-5 shrink-0 mt-0.5"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    <span className="text-muted-blue-grey">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Yellow CTA button */}
              <Link
                href={card.href}
                target="_blank"
                className="btn btn-yellow mt-auto self-start"
              >
                Cotizar
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
