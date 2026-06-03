import Link from 'next/link'
import type { Metadata } from 'next'
import ServicioHero from '@/components/sections/ServicioHero'
import ServicioCTA from '@/components/sections/ServicioCTA'

export const metadata: Metadata = {
  title: 'Mantenimiento Preventivo | SOLINSA',
  description: 'Mantenimiento preventivo programado para equipos de cromatografía GC, HPLC, UHPLC e IC. Calendarización, inspección, calibración y reportes detallados.',
}

const WA = 'https://wa.me/5218123554766'

const planSteps = [
  {
    step: '01',
    title: 'Inventario de equipos',
    desc: 'Levantamos un inventario completo de tus sistemas con modelo, serie, ubicación y estado actual.',
  },
  {
    step: '02',
    title: 'Calendarización',
    desc: 'Definimos frecuencia de servicio según uso, criticidad y recomendaciones del fabricante.',
  },
  {
    step: '03',
    title: 'Visita de servicio',
    desc: 'Ingeniero en sitio realiza inspección, limpieza, calibración y reemplazo de partes preventivas.',
  },
  {
    step: '04',
    title: 'Reporte detallado',
    desc: 'Documento con fotografías, mediciones, partes reemplazadas y recomendaciones para el siguiente servicio.',
  },
]

const checklist = [
  { area: 'Sistema de bombas', items: ['Inspección de sellos y pistones', 'Verificación de presión y flujo', 'Limpieza de filtros en línea', 'Calibración de gradiente'] },
  { area: 'Automuestreador', items: ['Limpieza de aguja y asiento', 'Verificación de volumetría', 'Ajuste de posición X/Y', 'Limpieza de carrusel'] },
  { area: 'Horno de columna', items: ['Calibración de temperatura', 'Verificación de estabilidad térmica', 'Inspección de conexiones'] },
  { area: 'Detector', items: ['Calibración de longitud de onda (UV/DAD)', 'Verificación de linealidad', 'Limpieza de celda de flujo', 'Prueba de ruido de línea base'] },
  { area: 'Electrónicos y software', items: ['Verificación de comunicación', 'Backup de métodos', 'Actualización de firmware', 'Diagnóstico de tarjetas'] },
]

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Evita paros no planeados',
    desc: 'Detectamos y resolvemos problemas antes de que detengan tu producción.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 5 5-9" />
      </svg>
    ),
    title: 'Extiende la vida útil del equipo',
    desc: 'Mantenimiento regular = más años de operación confiable.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: 'Resultados más confiables',
    desc: 'Equipos calibrados producen datos en los que puedes confiar.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3h-8l-2 4h12l-2-4z" />
      </svg>
    ),
    title: 'Cumplimiento normativo',
    desc: 'Evidencia documentada de mantenimiento para auditorías GMP, GLP, COFEPRIS y FDA.',
  },
]

export default function PreventivoPage() {
  return (
    <>
      <ServicioHero
        eyebrow="Preventivo"
        title="Mantenimiento preventivo programado para máxima uptime."
        subtitle="GC · HPLC · UHPLC · IC · Multimarca"
        description="Programas calendarizados de inspección, limpieza, calibración y reemplazo preventivo de partes. Evitamos paros no planeados y extendemos la vida útil de tus equipos."
        accent="blue"
        ctaLabel="Agendar mantenimiento preventivo"
        ctaWhatsappText="Quiero agendar un mantenimiento preventivo"
      />

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Proceso</span>
            <h2>Así funciona el preventivo.</h2>
            <p>Un programa estructurado que se adapta a tus equipos y tu operación.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {planSteps.map((ps) => (
              <div key={ps.step} className="bg-surface border border-outline rounded-2xl p-6 relative">
                <span className="text-4xl font-bold text-technical-blue/10 absolute top-4 right-5">{ps.step}</span>
                <div className="relative">
                  <span className="bg-technical-blue text-white w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold">{ps.step}</span>
                  <h3 className="font-bold text-primary-dark mt-4">{ps.title}</h3>
                  <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{ps.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head">
            <span className="eyebrow">Checklist de servicio</span>
            <h2>Lo que revisamos en cada visita.</h2>
            <p>Cada mantenimiento preventivo incluye una inspección completa por área del sistema.</p>
          </div>

          <div className="space-y-4 mt-12">
            {checklist.map((cl) => (
              <div key={cl.area} className="bg-paper border border-outline rounded-xl p-6">
                <h3 className="font-bold text-primary-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-technical-blue rounded-full" />
                  {cl.area}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-3">
                  {cl.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0"><path d="M5 12l4 4L19 6" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Beneficios</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Prevenir siempre es más barato que corregir.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Un paro no planeado cuesta más que un año completo de mantenimiento preventivo. Es simple matemática.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-4 bg-surface border border-outline rounded-xl hover:border-technical-blue transition">
                  <div className="bg-technical-blue/10 text-technical-blue w-11 h-11 flex items-center justify-center shrink-0 rounded-xl">{b.icon}</div>
                  <div>
                    <b className="text-sm text-primary-dark">{b.title}</b>
                    <p className="text-xs text-muted-blue-grey mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CONTRACTS ────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-primary-dark text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="eyebrow on-dark">Contratos de servicio</span>
                <h3 className="text-2xl font-bold mt-3">¿Tienes varios equipos? Ofrecemos contratos anuales.</h3>
                <p className="text-white/60 mt-3">
                  Planes con calendarización fija, descuentos en refacciones, prioridad de atención y costo mensual fijo.
                </p>
              </div>
              <Link href={`${WA}?text=Quiero%20información%20sobre%20contratos%20de%20servicio%20preventivo`} target="_blank" className="btn btn-yellow shrink-0">
                Solicitar cotización de contrato
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicioCTA
        title="¿Quieres agendar un mantenimiento preventivo?"
        description="Cuéntanos qué equipos tienes y con qué frecuencia te gustaría el servicio. Te armamos un plan."
        ctaLabel="Agendar preventivo"
        ctaWhatsappText="Quiero agendar un mantenimiento preventivo"
      />
    </>
  )
}
