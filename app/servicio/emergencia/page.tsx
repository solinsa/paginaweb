import Link from 'next/link'
import type { Metadata } from 'next'
import ServicioHero from '@/components/sections/ServicioHero'
import ServicioCTA from '@/components/sections/ServicioCTA'

export const metadata: Metadata = {
  title: 'Servicio de Emergencia | SOLINSA',
  description: 'Soporte técnico urgente 24/7 para equipos de cromatografía detenidos. Diagnóstico remoto inmediato y despacho de ingeniero prioritario.',
}

const WA = 'https://wa.me/5218123554766'

const scenarios = [
  {
    icon: '🔴',
    title: 'Equipo completamente detenido',
    desc: 'El sistema no enciende, no comunica o presenta error crítico que impide cualquier análisis.',
    response: 'Diagnóstico telefónico en < 30 min. Ingeniero en sitio en < 24h.',
  },
  {
    icon: '🟡',
    title: 'Resultados fuera de especificación',
    desc: 'El equipo opera pero produce datos no confiables: picos deformados, áreas inconsistentes, deriva de línea base.',
    response: 'Diagnóstico remoto inmediato. Solución en la misma visita.',
  },
  {
    icon: '🟠',
    title: 'Fuga de solvente o gas',
    desc: 'Riesgo de seguridad para el operador. Fuga activa de solvente orgánico o gas portador.',
    response: 'Orientación de seguridad inmediata por teléfono. Visita de emergencia prioritaria.',
  },
  {
    icon: '🔵',
    title: 'Antes de auditoría',
    desc: 'Auditoría programada y el equipo no tiene documentación de mantenimiento o cualificación vigente.',
    response: 'Servicio exprés con IQ/OQ y documentación completa.',
  },
]

const process = [
  {
    step: '1',
    title: 'Llama o escribe por WhatsApp',
    desc: 'Describe marca, modelo y síntoma. Nosotros evaluamos la urgencia.',
    time: 'Inmediato',
  },
  {
    step: '2',
    title: 'Diagnóstico remoto',
    desc: 'Ingeniero te guía por teléfono para evaluar si se resuelve en el momento o requiere visita.',
    time: '< 30 min',
  },
  {
    step: '3',
    title: 'Despacho de ingeniero',
    desc: 'Si requiere visita, despachamos ingeniero con las refacciones más probables para tu síntoma.',
    time: '< 24h',
  },
  {
    step: '4',
    title: 'Resolución y verificación',
    desc: 'Reparación en sitio con pruebas funcionales usando tus métodos antes de considerar resuelto.',
    time: 'Mismo día',
  },
]

const parts = [
  { part: 'Sellos y pistones de bomba', critical: true },
  { part: 'Lámparas UV/DAD', critical: true },
  { part: 'Agujas de automuestreador', critical: true },
  { part: 'Rotor seals de válvula', critical: true },
  { part: 'Filtros en línea', critical: false },
  { part: 'Filamentos para FID/NPD', critical: true },
  { part: 'Tubing y conexiones', critical: false },
  { part: 'Juntas y ferrules', critical: false },
]

export default function EmergenciaPage() {
  return (
    <>
      <ServicioHero
        eyebrow="Emergencia"
        title="Soporte urgente cuando un sistema crítico se detiene."
        subtitle="Respuesta < 4 horas · Diagnóstico remoto · Despacho prioritario"
        description="Atención prioritaria para equipos detenidos o con fallas críticas. Diagnóstico remoto inmediato y despacho de ingeniero con las refacciones más probables para resolver en la misma visita."
        accent="red"
        ctaLabel="Llamar ahora — emergencia"
        ctaWhatsappText="EMERGENCIA: Tengo un equipo de cromatografía detenido, necesito soporte urgente"
      />

      {/* ── URGENCY BANNER ───────────────────────────────── */}
      <div className="bg-[#B91C1C] text-white py-4">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            <span className="font-bold text-sm">Servicio de emergencia activo</span>
          </div>
          <span className="text-white/70 text-sm">Si un equipo está detenido, no esperes — llama ahora:</span>
          <a href="tel:+528123554766" className="font-bold text-sm underline">+52 (81) 2355-4766</a>
        </div>
      </div>

      {/* ── SCENARIOS ────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Cuándo llamar</span>
            <h2>Escenarios de emergencia.</h2>
            <p>Si tu situación parece alguna de estas, actúa ahora.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {scenarios.map((sc) => (
              <article key={sc.title} className="bg-surface border border-outline rounded-2xl p-7 hover:border-[#B91C1C] hover:shadow-lg transition-all">
                <span className="text-3xl">{sc.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{sc.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{sc.desc}</p>
                <div className="mt-4 pt-3 border-t border-outline-variant">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B91C1C]">Respuesta</span>
                  <p className="text-sm text-primary-dark mt-1 font-semibold">{sc.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Proceso de emergencia</span>
            <h2>De tu llamada a la solución.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {process.map((ps) => (
              <div key={ps.step} className="bg-paper border border-outline rounded-2xl p-6 text-center">
                <span className="bg-[#B91C1C] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold mx-auto">{ps.step}</span>
                <h3 className="font-bold text-primary-dark mt-4 text-sm">{ps.title}</h3>
                <p className="text-xs text-muted-blue-grey mt-2 leading-relaxed">{ps.desc}</p>
                <span className="inline-block mt-3 bg-[#B91C1C]/10 text-[#B91C1C] px-3 py-1 rounded-full text-xs font-mono">{ps.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRITICAL PARTS ───────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Inventario de emergencia</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Refacciones críticas en existencia local.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Mantenemos un inventario local de las partes que más se necesitan en una emergencia. No esperamos semanas por una refacción que puedes necesitar hoy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {parts.map((p) => (
                <div key={p.part} className="bg-surface border border-outline rounded-xl p-3 flex items-center gap-2">
                  {p.critical ? (
                    <span className="w-2 h-2 bg-[#B91C1C] rounded-full shrink-0" />
                  ) : (
                    <span className="w-2 h-2 bg-green rounded-full shrink-0" />
                  )}
                  <span className="text-xs text-primary-dark">{p.part}</span>
                </div>
              ))}
              <div className="col-span-2 mt-2 flex items-center gap-4 text-xs text-muted-blue-grey">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#B91C1C] rounded-full" /> Crítico — siempre en stock</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green rounded-full" /> Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMEDIATE CTA ────────────────────────────────── */}
      <section className="bg-[#B91C1C] text-white py-20">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Línea de emergencia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">¿Un equipo detenido?</h2>
          <p className="text-white/70 text-lg mt-4">No esperes. Cada hora que tu equipo está detenido es producción perdida.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="tel:+528123554766" className="btn bg-white text-[#B91C1C] hover:bg-white/90 font-bold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Llamar: +52 (81) 2355-4766
            </a>
            <Link href={`${WA}?text=EMERGENCIA:%20Tengo%20un%20equipo%20detenido`} target="_blank" className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20">
              WhatsApp emergencia
            </Link>
          </div>
        </div>
      </section>

      <ServicioCTA
        title="¿Prefieres prevenir emergencias?"
        description="Un contrato de mantenimiento preventivo reduce las emergencias a casi cero."
        ctaLabel="Contratar preventivo"
        ctaWhatsappText="Quiero información sobre contratos de servicio preventivo"
      />
    </>
  )
}
