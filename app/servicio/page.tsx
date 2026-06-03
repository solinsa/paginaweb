import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicio Técnico | SOLINSA',
  description: 'Servicio técnico especializado en cromatografía: mantenimiento preventivo, correctivo, cualificación IQ/OQ/PQ y emergencia. Ingenieros capacitados de fábrica.',
}

const WA = 'https://wa.me/5218123554766'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    eyebrow: 'Preventivo',
    title: 'Mantenimiento preventivo programado.',
    description: 'Programas calendarizados que evitan paros no planeados. Inspección, limpieza, calibración y reemplazo de partes antes de que fallen.',
    features: ['Calendarización por equipo', 'Inspección completa de componentes', 'Calibración de detectores', 'Reporte detallado con evidencia fotográfica'],
    href: '/servicio/preventivo',
    accent: 'bg-technical-blue',
    urgency: 'Programable',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6 3 3 6-6a4 4 0 005.4-5.4l-2.3 2.3-2-2z" />
      </svg>
    ),
    eyebrow: 'Correctivo',
    title: 'Diagnóstico y reparación de equipos.',
    description: 'Reparación de bombas, automuestreadores, detectores, inyectores y electrónicos. Diagnóstico preciso con refacciones originales.',
    features: ['Diagnóstico en sitio o remoto', 'Refacciones originales', 'Reparación de bombas y detectores', 'Pruebas funcionales post-reparación'],
    href: '/servicio/correctivo',
    accent: 'bg-energetic-yellow',
    urgency: 'Reactiva',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    eyebrow: 'IQ / OQ / PQ',
    title: 'Cualificación de instalación, operación y desempeño.',
    description: 'Protocolos documentados de IQ, OQ y PQ para cumplimiento normativo. Aceptados por COFEPRIS, FDA y auditorías GMP.',
    features: ['Protocolos IQ/OQ/PQ documentados', 'Cumplimiento GMP y GLP', 'Aceptado por COFEPRIS y FDA', 'Trazabilidad y documentación completa'],
    href: '/servicio/iq-oq-pq',
    accent: 'bg-green',
    urgency: 'Regulatoria',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    eyebrow: 'Emergencia',
    title: 'Soporte técnico urgente cuando un sistema crítico se detiene.',
    description: 'Atención prioritaria para equipos detenidos. Respuesta inmediata por teléfono, diagnóstico remoto y despacho de ingeniero si es necesario.',
    features: ['Respuesta en menos de 4 horas', 'Diagnóstico remoto inmediato', 'Despacho de ingeniero prioritario', 'Inventario de partes críticas'],
    href: '/servicio/emergencia',
    accent: 'bg-[#B91C1C]',
    urgency: 'Urgente',
  },
]

const brands = [
  'Agilent', 'Waters', 'Shimadzu', 'Young In Chromass', 'Thermo Fisher',
  'PerkinElmer', 'Varian', 'HP', 'Ellutia', 'HTA',
]

const stats = [
  { value: '< 4 h', label: 'Respuesta de emergencia' },
  { value: '< 24 h', label: 'Respuesta estándar' },
  { value: 'Multimarca', label: 'Cualquier fabricante' },
  { value: '100%', label: 'Cobertura nacional' },
]

export default function ServicioPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Servicio técnico</span>
            <h1 className="h1 !text-white mt-5">
              El diferenciador no es el equipo. Es quién lo mantiene corriendo.
            </h1>
            <p className="lead !text-white/70 mt-6">
              Ingenieros con entrenamiento directo de fábrica. Atendemos cualquier marca de GC, HPLC, UHPLC e IC — incluidas las que no vendemos.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href={`${WA}?text=Necesito%20servicio%20técnico%20para%20mi%20equipo`} target="_blank" className="btn btn-yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Solicitar servicio
              </Link>
              <a href="tel:+528123554766" className="btn btn-ghost on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div className="bg-white border-b border-outline">
        <div className="max-w-container-max mx-auto px-margin-desktop py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-technical-blue">{s.value}</div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-blue-grey mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Nuestros servicios</span>
            <h2>Servicio técnico multimarca en México.</h2>
            <p>Preventivo, correctivo, cualificación y emergencia. Todo con ingenieros capacitados en fábrica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-surface border border-outline rounded-2xl overflow-hidden flex flex-col hover:border-technical-blue hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-1.5 ${svc.accent}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <div className={`${svc.accent} text-white w-12 h-12 flex items-center justify-center rounded-xl`}>
                      {svc.icon}
                    </div>
                    <span className="bg-paper text-muted-blue-grey px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider">{svc.urgency}</span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-technical-blue mt-5">{svc.eyebrow}</span>
                  <h3 className="text-xl font-bold text-primary-dark mt-2 group-hover:text-technical-blue transition-colors">{svc.title}</h3>
                  <p className="text-sm text-muted-blue-grey mt-3 leading-relaxed flex-1">{svc.description}</p>

                  <ul className="mt-5 space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0"><path d="M5 12l4 4L19 6" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-outline-variant">
                    <span className="go">
                      Más información
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MULTIMARCA ────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-10">
            <span className="eyebrow on-dark">Multimarca</span>
            <h2 className="text-2xl font-bold mt-4">Damos servicio a cualquier marca.</h2>
            <p className="text-white/60 mt-2">Incluidas las que no distribuimos.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b) => (
              <span key={b} className="border border-white/15 rounded-full px-5 py-2 text-sm text-white/80 bg-white/[0.03] hover:bg-white/[0.07] transition">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SOLINSA SERVICE ───────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Por qué elegirnos</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Comprar el equipo es apenas el comienzo.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Nosotros lo mantenemos produciendo resultados confiables, año tras año.
              </p>

              <div className="border-l-4 border-energetic-yellow bg-paper rounded-r-xl p-6 mt-8">
                <p className="text-primary-dark text-lg italic leading-relaxed">
                  "El laboratorio que no invierte en mantenimiento preventivo termina pagando más en correctivo — y perdiendo días de producción."
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { t: 'Ingenieros capacitados en fábrica', d: 'Entrenamiento directo de Young In Chromass, EST Analytical, Wasson-ECE y más.' },
                { t: 'Inventario de partes críticas', d: 'Sellos, pistones, lámparas, agujas y filamentos en existencia local.' },
                { t: 'Reportes con evidencia', d: 'Cada servicio incluye reporte detallado con fotografías, mediciones y recomendaciones.' },
                { t: 'Contratos de servicio', d: 'Planes anuales con calendarización, descuentos en partes y prioridad de atención.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-4 bg-paper border border-outline rounded-xl">
                  <div className="bg-technical-blue/10 text-technical-blue w-9 h-9 flex items-center justify-center shrink-0 rounded-lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4"><path d="M5 12l4 4L19 6" /></svg>
                  </div>
                  <div>
                    <b className="text-sm text-primary-dark">{f.t}</b>
                    <p className="text-xs text-muted-blue-grey mt-1">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <span className="eyebrow on-dark">¿Un equipo con fallas o detenido?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Cuéntanos la marca y el síntoma.</h2>
          <p className="text-white/60 text-lg mt-4">Te damos un diagnóstico inicial sin compromiso.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href={`${WA}?text=Tengo%20un%20equipo%20con%20fallas%2C%20necesito%20soporte%20técnico`} target="_blank" className="btn btn-yellow">
              Solicitar soporte técnico
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <a href="tel:+528123554766" className="btn btn-ghost on-dark">
              Llamar: +52 (81) 2355-4766
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
