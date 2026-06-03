import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrias | SOLINSA',
  description: 'Soluciones de cromatografía e instrumentación analítica para alimentos, ambiental, farmacéutica y academia. Equipos configurados para tu normativa y aplicación.',
}

const WA = 'https://wa.me/5218123554766'

const industries = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <path d="M6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
    eyebrow: 'Alimentos y Bebidas',
    title: 'Control de calidad, inocuidad y perfiles cromatográficos.',
    description: 'Desde tequila y bebidas hasta confitería y sabores. Equipos HPLC/UHPLC con detectores DAD y VUV para cumplir NOM, COFEPRIS y métodos AOAC.',
    features: ['Tequila y bebidas por HPLC/UHPLC', 'Detector DAD/VUV para perfiles', 'Aditivos, micotoxinas, conservadores', 'Métodos AOAC y NOM'],
    href: '/industrias/alimentos',
    accent: 'bg-energetic-yellow',
    accentDark: 'bg-[#B45309]',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    eyebrow: 'Ambiental',
    title: 'Monitoreo de agua, aire y suelos con métodos EPA certificados.',
    description: 'GCMS, GCMS/MS y Purge & Trap para análisis de VOCs, SVOCs, plaguicidas y metales pesados. Cumplimiento total de normativas EPA y NOM mexicanas.',
    features: ['GC-MS triple cuadrupolo para trazas', 'Purge & Trap EST Analytical', 'Métodos EPA 524, 525, 8270', 'Monitoreo de agua, aire y suelos'],
    href: '/industrias/ambiental',
    accent: 'bg-green',
    accentDark: 'bg-[#047857]',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 2h8M9 2v5l-4 9a2 2 0 002 3h10a2 2 0 002-3l-4-9V2" />
        <path d="M9 14h6" />
      </svg>
    ),
    eyebrow: 'Farmacéutica',
    title: 'Validación, cumplimiento regulatorio y trazabilidad total.',
    description: 'UHPLC con gradiente avanzado, protocolos IQ/OQ/PQ, validación de métodos USP y trazabilidad para auditorías COFEPRIS y FDA.',
    features: ['UHPLC para disolución y estabilidad', 'Protocolos IQ/OQ/PQ completos', 'Validación USP y ICH', 'Trazabilidad para auditorías'],
    href: '/industrias/farmaceutica',
    accent: 'bg-technical-blue',
    accentDark: 'bg-primary-dark',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    eyebrow: 'Academia e Investigación',
    title: 'Equipos accesibles para docencia e investigación en cromatografía.',
    description: 'Sistemas GC y HPLC a precio accesible para universidades y centros de investigación. Incluyendo equipo reacondicionado certificado y capacitación.',
    features: ['Equipos GC y HPLC para docencia', 'Equipo reacondicionado certificado', 'Capacitación incluida', 'Presupuesto accesible para universidades'],
    href: '/industrias/academia',
    accent: 'bg-light-blue',
    accentDark: 'bg-primary-dark',
  },
]

export default function IndustriasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Industrias</span>
            <h1 className="h1 !text-white mt-5">
              Instrumentación analítica configurada para tu sector.
            </h1>
            <p className="lead !text-white/70 mt-6">
              No es lo mismo analizar tequila que validar un fármaco o monitorear agua residual.
              Cada industria necesita condiciones cromatográficas, detectores y normativa específica.
              En Solinsa configuramos la solución completa.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`${WA}?text=Quiero%20asesoría%20para%20mi%20industria`}
                target="_blank"
                className="btn btn-yellow"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Pedir asesoría por industria
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── INDUSTRIES GRID ──────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Sectores que atendemos</span>
            <h2>Equipos y métodos adaptados a tu industria.</h2>
            <p>Conocemos la normativa, los analitos y las condiciones que tu laboratorio necesita.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group bg-surface border border-outline rounded-2xl overflow-hidden flex flex-col hover:border-technical-blue hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent */}
                <div className={`h-1.5 ${ind.accent}`} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + eyebrow */}
                  <div className="flex items-center gap-3">
                    <div className={`${ind.accent} text-white w-12 h-12 flex items-center justify-center rounded-xl`}>
                      {ind.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-technical-blue">{ind.eyebrow}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark mt-5 group-hover:text-technical-blue transition-colors">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-blue-grey mt-3 leading-relaxed flex-1">{ind.description}</p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {ind.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                          <path d="M5 12l4 4L19 6" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6 pt-5 border-t border-outline-variant">
                    <span className="go">
                      Explorar soluciones
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Nuestro enfoque</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Conocemos tu norma, tu matriz y tus analitos.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                No te vendemos un catálogo. Te entregamos un sistema configurado para los métodos
                que tu industria requiere, con la documentación que tu auditor pide.
              </p>
            </div>

            <div className="bg-primary-dark text-white rounded-2xl p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Lo que incluye cada proyecto</span>
              <div className="space-y-4 mt-6">
                {[
                  { t: 'Análisis de normativa', d: 'Revisamos la NOM, EPA, USP o ASTM que debes cumplir.' },
                  { t: 'Selección de técnica', d: 'GC, HPLC, IC o combinación según tus analitos y LOD requerido.' },
                  { t: 'Configuración del método', d: 'Columna, fase móvil, detector y condiciones cromatográficas optimizadas.' },
                  { t: 'Instalación y validación', d: 'IQ/OQ/PQ con documentación completa para auditorías.' },
                  { t: 'Capacitación de tu equipo', d: 'Operación, mantenimiento y troubleshooting en sitio.' },
                ].map((step) => (
                  <div key={step.t} className="flex gap-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FCC014" strokeWidth="2.4" className="w-5 h-5 shrink-0 mt-0.5">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    <div>
                      <b className="text-sm">{step.t}</b>
                      <p className="text-sm text-white/60 mt-0.5">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <span className="eyebrow on-dark">¿No ves tu industria?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Atendemos más de 35 sectores.
          </h2>
          <p className="text-white/60 text-lg mt-4">
            Si tu laboratorio usa cromatografía, probablemente ya tenemos experiencia en tu sector. Cuéntanos qué necesitas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href={`${WA}?text=Quiero%20soluciones%20para%20mi%20industria`}
              target="_blank"
              className="btn btn-yellow"
            >
              Pedir asesoría técnica
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
