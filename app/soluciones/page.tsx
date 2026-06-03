import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluciones | SOLINSA',
  description: 'Explora nuestro portafolio completo de equipos y servicios de cromatografía: HPLC, UHPLC, GC, GCMS, IC, consumibles y equipo reacondicionado.',
}

const WA = 'https://wa.me/5218123554766'

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8M9 2v5l-4 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-9V2" />
        <path d="M9 14h6" />
      </svg>
    ),
    eyebrow: 'Cromatografía líquida',
    title: 'HPLC / UHPLC',
    description: 'Sistemas de cromatografía líquida de alta y ultra alta resolución. Desde análisis rutinario hasta métodos complejos con detectores DAD, FL, RID y MS.',
    features: ['Bombas cuaternarias y binarias', 'Autómuestreadores con refrigeración', 'Detectores DAD / FL / RID / MS', 'Columnas y consumibles'],
    href: '/soluciones/hplc-uhplc',
    accent: 'bg-technical-blue',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18M5 22V8l7-5 7 5v14" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    eyebrow: 'Cromatografía de gases',
    title: 'GC / GCMS',
    description: 'Cromatografía de gases y espectrometría de masas para análisis de compuestos volátiles y semi-volátiles. Soluciones para EPA, NOM y métodos propios.',
    features: ['GC con FID, ECD, TCD, NPD', 'MS simple y triple cuadrupolo', 'Purge & Trap, HeadSpace, SPME', 'Librerías Wiley para identificación'],
    href: '/soluciones/gc-gcms',
    accent: 'bg-primary-dark',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
    eyebrow: 'Cromatografía iónica',
    title: 'IC',
    description: 'Cromatografía iónica para análisis preciso de aniones y cationes en agua, alimentos, farmacia y ambiental. Detección por conductimetría.',
    features: ['Analizadores de aniones/cationes', 'Detectores conductimétricos', 'Supresores electroquímicos', 'Aplicaciones EPA y NOM'],
    href: '/soluciones/ic',
    accent: 'bg-green',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3h-8l-2 4h12l-2-4z" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
    eyebrow: 'Insumos de laboratorio',
    title: 'Consumibles',
    description: 'Columnas, estándares, filtros, jeringas, viales y accesorios para mantener tu laboratorio operando sin interrupciones. Inventario local en México.',
    features: ['Columnas GC y HPLC', 'Estándares y reactivos', 'Viales, jeringas y filtros', 'Partes y refacciones originales'],
    href: '/soluciones/consumibles',
    accent: 'bg-energetic-yellow',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    eyebrow: 'Equipo seminuevo',
    title: 'Reacondicionado',
    description: 'Equipos certificados con garantía. Inspección completa, calibración y puesta en marcha incluida. Calidad comprobable a fracción del costo.',
    features: ['GC, HPLC y accesorios', 'Inspección y calibración IQ/OQ', 'Garantía por escrito', 'Hasta 60% de ahorro vs. nuevo'],
    href: '/soluciones/reacondicionado',
    accent: 'bg-light-blue',
  },
]

export default function SolucionesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Soluciones</span>
            <h1 className="h1 !text-white mt-5">
              Todo lo que tu laboratorio necesita para analizar con confianza.
            </h1>
            <p className="lead !text-white/70 mt-6">
              Desde equipos de cromatografía hasta consumibles y servicio técnico.
              Soluciones integradas por método analítico, no por marca.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`${WA}?text=Quiero%20explorar%20soluciones%20para%20mi%20laboratorio`}
                target="_blank"
                className="btn btn-yellow"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Pedir asesoría técnica
              </Link>
              <a href="#catalogo" className="btn btn-ghost on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M6 9l6 6 6-6" />
                </svg>
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── QUICK STATS BAR ──────────────────────────────── */}
      <div className="bg-white border-b border-outline">
        <div className="max-w-container-max mx-auto px-margin-desktop py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '+12', label: 'Marcas distribuidas' },
              { value: '+35', label: 'Industrias atendidas' },
              { value: '100%', label: 'Inventario local' },
              { value: '< 24h', label: 'Tiempo de respuesta' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-technical-blue">{s.value}</div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-blue-grey mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUTIONS CATALOG ────────────────────────────── */}
      <section id="catalogo" className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Catálogo de soluciones</span>
            <h2>Encuentra la técnica correcta para tu análisis.</h2>
            <p>Cada solución incluye el equipo, instalación, calibración, consumibles iniciales y capacitación. Todo desde un solo proveedor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                href={sol.href}
                className="group bg-surface border border-outline rounded-2xl overflow-hidden flex flex-col hover:border-technical-blue hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 ${sol.accent}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`${sol.accent} text-white w-11 h-11 flex items-center justify-center rounded-xl`}>
                    {sol.icon}
                  </div>

                  {/* Labels */}
                  <span className="text-xs font-mono uppercase tracking-wider text-technical-blue mt-5">{sol.eyebrow}</span>
                  <h3 className="text-xl font-bold text-primary-dark mt-2 group-hover:text-technical-blue transition-colors">{sol.title}</h3>
                  <p className="text-sm text-muted-blue-grey mt-3 leading-relaxed flex-1">{sol.description}</p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {sol.features.map((f) => (
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
                      Explorar solución
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

      {/* ── WHY SOLINSA FOR SOLUTIONS ────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Nuestro enfoque</span>
              <h2 className="mt-4" style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }}>
                No vendemos equipos. Entregamos métodos analíticos resueltos.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-5 leading-relaxed">
                Cada sistema que entregamos está configurado para tu analito, tu matriz y tu normativa.
                Incluimos instalación, validación IQ/OQ/PQ y entrenamiento de tu equipo.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { t: 'Configuración por aplicación', d: 'Elegimos la columna, detector y condiciones cromatográficas ideales para tu método.' },
                  { t: 'Validación IQ/OQ/PQ incluida', d: 'Entregamos documentación completa para auditorías y cumplimiento normativo.' },
                  { t: 'Capacitación en sitio', d: 'Tu equipo queda listo para operar de forma independiente desde el día uno.' },
                ].map((f) => (
                  <div key={f.t} className="flex gap-4 p-4 bg-paper border border-outline rounded-xl">
                    <div className="bg-technical-blue/10 text-technical-blue w-10 h-10 flex items-center justify-center shrink-0 rounded-lg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    </div>
                    <div>
                      <b className="text-sm text-primary-dark">{f.t}</b>
                      <p className="text-xs text-muted-blue-grey mt-1 leading-relaxed">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Process steps */}
            <div className="bg-primary-dark text-white rounded-2xl p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Proceso típico</span>
              <h3 className="text-xl font-bold mt-3 mb-8">De tu necesidad a resultados en 4 pasos</h3>
              <div className="space-y-6">
                {[
                  { n: '01', t: 'Consulta técnica', d: 'Analizamos tu muestra, analitos y normativa aplicable.' },
                  { n: '02', t: 'Propuesta de solución', d: 'Equipo + consumibles + servicio en una cotización integrada.' },
                  { n: '03', t: 'Instalación y validación', d: 'Puesta en marcha con IQ/OQ/PQ y documentación completa.' },
                  { n: '04', t: 'Soporte continuo', d: 'Mantenimiento, refacciones y asesoría técnica permanente.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="text-2xl font-bold text-energetic-yellow shrink-0 w-10">{step.n}</span>
                    <div>
                      <b className="text-sm">{step.t}</b>
                      <p className="text-sm text-white/60 mt-1">{step.d}</p>
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
          <span className="eyebrow on-dark">¿No estás seguro qué técnica necesitas?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Nuestro equipo técnico te guía.
          </h2>
          <p className="text-white/60 text-lg mt-4">
            Cuéntanos qué analizas y te recomendamos la técnica, el equipo y la configuración correcta — sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href={`${WA}?text=Quiero%20asesoría%20técnica%20para%20elegir%20un%20equipo`}
              target="_blank"
              className="btn btn-yellow"
            >
              Pedir asesoría técnica
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href={`${WA}?text=Quiero%20cotizar%20una%20solución`}
              target="_blank"
              className="btn btn-ghost on-dark"
            >
              Cotizar una solución
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
