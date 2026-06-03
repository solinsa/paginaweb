import Link from 'next/link'
import type { Metadata } from 'next'
import IndustriasHero from '@/components/sections/IndustriasHero'
import IndustryCTA from '@/components/sections/IndustryCTA'

export const metadata: Metadata = {
  title: 'Farmacéutica | SOLINSA',
  description: 'Cromatografía para la industria farmacéutica. UHPLC, validación USP, protocolos IQ/OQ/PQ y trazabilidad para auditorías COFEPRIS y FDA.',
}

const WA = 'https://wa.me/5218123554766'

const stages = [
  {
    icon: '💊',
    title: 'Desarrollo de fármacos',
    desc: 'Análisis de pureza, impurezas, degradación y estabilidad durante las fases de desarrollo.',
    techniques: ['UHPLC-DAD', 'UHPLC-MS', 'GC-MS'],
    regulations: 'ICH Q1A, Q3A, Q3B',
  },
  {
    icon: '🏭',
    title: 'Control de calidad (QC)',
    desc: 'Ensayos de disolución, uniformidad de contenido, valoración e impurezas en producto terminado.',
    techniques: ['HPLC-DAD', 'UHPLC-DAD', 'HPLC-RID'],
    regulations: 'USP, BP, EP',
  },
  {
    icon: '📋',
    title: 'Validación de métodos',
    desc: 'Desarrollo y validación de métodos analíticos según lineamientos ICH y farmacopeas.',
    techniques: ['UHPLC', 'GC-MS', 'Disolución USP'],
    regulations: 'ICH Q2(R1), USP <1225>',
  },
  {
    icon: '🔬',
    title: 'Estabilidad',
    desc: 'Estudios de estabilidad acelerada y de largo plazo para determinar vida de anaquel.',
    techniques: ['HPLC-DAD', 'UHPLC', 'GC-MS'],
    regulations: 'ICH Q1A, COFEPRIS',
  },
  {
    icon: '✅',
    title: 'Liberación de lotes',
    desc: 'Análisis final para liberación de lotes de producción con trazabilidad completa.',
    techniques: ['HPLC-DAD', 'UHPLC', 'Disolución'],
    regulations: 'USP, COFEPRIS, FDA',
  },
  {
    icon: '🧬',
    title: 'Materias primas',
    desc: 'Identificación y cuantificación de API, excipientes y contraiones en materias primas.',
    techniques: ['HPLC-DAD', 'IC', 'GC-FID'],
    regulations: 'USP, EP, NOM',
  },
]

const equipment = [
  {
    title: 'UHPLC con DAD',
    desc: 'Análisis de alta velocidad y resolución para valoración, impurezas y disolución. Compatible con métodos USP.',
    highlight: 'Ideal para QC de rutina',
  },
  {
    title: 'UHPLC-MS',
    desc: 'Identificación y cuantificación de impurezas a niveles de traza con confirmación por espectrometría de masas.',
    highlight: 'Impurezas degradación',
  },
  {
    title: 'HPLC con FL (Fluorescencia)',
    desc: 'Alta sensibilidad para analitos fluorescentes como vitaminas y ciertos APIs.',
    highlight: 'LOD sub-ppb',
  },
  {
    title: 'Disolutores USP',
    desc: 'Equipos de disolución Apparatus 1 y 2 para ensayos de liberación in vitro.',
    highlight: 'USP <711>',
  },
]

const compliance = [
  {
    title: 'IQ/OQ/PQ',
    desc: 'Cualificación de Instalación, Operación y Desempeño con documentación completa.',
    detail: 'Protocolos y reportes listos para auditoría.',
  },
  {
    title: 'Calificación de columna',
    desc: 'Validación de columna cromatográfica con prueba de aptitud del sistema (SST).',
    detail: 'USP <621> cumplimiento.',
  },
  {
    title: 'Trazabilidad total',
    desc: 'Registro de calibración, mantenimiento y resultados auditables.',
    detail: 'Historial completo del equipo.',
  },
  {
    title: 'Soporte para auditorías',
    desc: 'Documentación técnica para inspecciones de COFEPRIS, FDA y clientes.',
    detail: 'Preparación y acompañamiento.',
  },
]

export default function FarmaceuticaPage() {
  return (
    <>
      <IndustriasHero
        eyebrow="Farmacéutica"
        title="Validación, cumplimiento regulatorio y trazabilidad total."
        subtitle="USP · ICH · COFEPRIS · FDA"
        description="UHPLC con gradiente avanzado, protocolos IQ/OQ/PQ completos, validación de métodos USP/ICH y trazabilidad para auditorías COFEPRIS y FDA. Desde desarrollo hasta liberación de lotes."
        accent="blue"
        ctaLabel="Cotizar para farmacéutica"
        ctaWhatsappText="Quiero cotizar equipo para la industria farmacéutica"
      />

      {/* ── STAGES ───────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Etapas del proceso</span>
            <h2>Desde el desarrollo hasta la liberación de lotes.</h2>
            <p>Cada etapa del ciclo farmacéutico requiere técnicas y normativas específicas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {stages.map((stage) => (
              <article key={stage.title} className="bg-surface border border-outline rounded-2xl p-6 hover:border-technical-blue hover:shadow-lg transition-all">
                <span className="text-3xl">{stage.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{stage.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{stage.desc}</p>

                <div className="mt-4 pt-4 border-t border-outline-variant space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Técnicas</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {stage.techniques.map((t) => (
                        <span key={t} className="bg-technical-blue/10 text-technical-blue px-2 py-0.5 rounded-full text-[11px] font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Regulación</span>
                    <p className="text-xs text-primary-dark mt-0.5">{stage.regulations}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head">
            <span className="eyebrow">Equipos recomendados</span>
            <h2>Sistemas diseñados para cumplimiento farmacéutico.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {equipment.map((eq) => (
              <article key={eq.title} className="bg-paper border border-outline rounded-2xl p-6 hover:border-technical-blue transition flex flex-col">
                <h3 className="font-bold text-primary-dark">{eq.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed flex-1">{eq.desc}</p>
                <div className="mt-4 pt-3 border-t border-outline-variant">
                  <span className="bg-technical-blue/10 text-technical-blue px-3 py-1 rounded-full text-xs font-mono">{eq.highlight}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ───────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Cumplimiento regulatorio</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Documentación lista para cualquier auditoría.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Cada sistema que instalamos en un laboratorio farmacéutico incluye la documentación de cualificación, calibración y trazabilidad que COFEPRIS y FDA exigen.
              </p>
            </div>

            <div className="space-y-3">
              {compliance.map((c) => (
                <div key={c.title} className="flex gap-4 p-4 bg-surface border border-outline rounded-xl hover:border-technical-blue transition">
                  <div className="bg-technical-blue/10 text-technical-blue w-9 h-9 flex items-center justify-center shrink-0 rounded-lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </div>
                  <div>
                    <b className="text-sm text-primary-dark">{c.title}</b>
                    <p className="text-xs text-muted-blue-grey mt-0.5">{c.desc}</p>
                    <p className="text-[11px] font-mono text-technical-blue mt-1">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA
        title="¿Necesitas equipo para farmacéutica?"
        description="Cuéntanos tus métodos USP, tus requerimientos de validación y tu calendario de auditorías. Te configuramos el sistema completo."
        ctaLabel="Cotizar para farmacéutica"
        ctaWhatsappText="Quiero cotizar equipo para la industria farmacéutica"
      />
    </>
  )
}
