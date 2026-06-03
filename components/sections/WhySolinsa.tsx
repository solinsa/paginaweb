import Link from 'next/link'

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '100%', label: 'Local en México' },
  { value: '+12', label: 'Marcas líderes' },
  { value: 'IQ/OQ', label: 'Certificaciones' },
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Soporte local especializado',
    description: 'Ingenieros capacitados en fábrica para servicio inmediato en sitio dentro de México.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Especialistas multimarca',
    description: 'Mantenemos la integridad de toda tu línea analítica sin importar el fabricante original.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Soluciones por método',
    description: 'No vendemos cajas; entregamos soluciones configuradas para tu analito y normativa específica.',
  },
]

export default function WhySolinsa() {
  return (
    <section className="sec">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT side */}
          <div>
            <span className="eyebrow">Por qu&eacute; Solinsa</span>
            <h2 className="sec-head mt-3">
              Un integrador t&eacute;cnico, no solo un vendedor de equipos.
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-outline rounded-xl p-6 bg-surface"
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-blue-grey mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT side */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 bg-surface border border-outline rounded-xl hover:shadow-md transition"
              >
                <div className="bg-technical-blue text-white w-12 h-12 flex items-center justify-center shrink-0 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <b>{feature.title}</b>
                  <p className="text-sm text-muted-blue-grey mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
