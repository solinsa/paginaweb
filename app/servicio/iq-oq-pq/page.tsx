import Link from 'next/link'
import type { Metadata } from 'next'
import ServicioHero from '@/components/sections/ServicioHero'
import ServicioCTA from '@/components/sections/ServicioCTA'

export const metadata: Metadata = {
  title: 'Cualificación IQ/OQ/PQ | SOLINSA',
  description: 'Cualificación de instalación, operación y desempeño (IQ/OQ/PQ) para equipos de cromatografía. Protocolos documentados aceptados por COFEPRIS, FDA y GMP.',
}

const WA = 'https://wa.me/5218123554766'

const qualifications = [
  {
    abbr: 'IQ',
    full: 'Installation Qualification',
    title: 'Cualificación de Instalación',
    desc: 'Verifica que el equipo fue instalado correctamente según las especificaciones del fabricante y los requerimientos del usuario.',
    checks: [
      'Verificación de componentes recibidos vs. orden de compra',
      'Inspección de instalación física (conexiones, electricidad, gases)',
      'Verificación de software y firmware instalado',
      'Confirmación de condiciones ambientales del sitio',
      'Documentación fotográfica y registro de serie/modelo',
    ],
    deliverable: 'Protocolo IQ con evidencia fotográfica y firmas',
  },
  {
    abbr: 'OQ',
    full: 'Operational Qualification',
    title: 'Cualificación de Operación',
    desc: 'Demuestra que el equipo opera correctamente dentro de sus especificaciones en todo el rango de operación.',
    checks: [
      'Prueba de precisión de flujo de bomba',
      'Prueba de precisión de inyección',
      'Verificación de temperatura del horno',
      'Prueba de linealidad del detector',
      'Prueba de ruido y deriva de línea base',
      'Prueba de gradiente (si aplica)',
    ],
    deliverable: 'Protocolo OQ con datos y resultados PASS/FAIL',
  },
  {
    abbr: 'PQ',
    full: 'Performance Qualification',
    title: 'Cualificación de Desempeño',
    desc: 'Demuestra que el sistema produce resultados confiables y reproducibles con muestras reales y métodos específicos del laboratorio.',
    checks: [
      'Inyección de estándar de referencia certificado',
      'Verificación de resolución, selectividad y simetría de picos',
      'Prueba de reproducibilidad (múltiples inyecciones)',
      'Verificación de límites de detección y cuantificación',
      'Prueba con matriz de muestra real del laboratorio',
    ],
    deliverable: 'Protocolo PQ con cromatogramas y evaluación estadística',
  },
]

const regulations = [
  { name: 'COFEPRIS', desc: 'Cumplimiento para laboratorios en México' },
  { name: 'FDA 21 CFR Part 211', desc: 'Current Good Manufacturing Practice' },
  { name: 'ICH Q7 / Q10', desc: 'Quality systems para API y productos' },
  { name: 'USP <1058>', desc: 'Cualificación de instrumentos analíticos' },
  { name: 'GMP / GLP', desc: 'Buenas prácticas de manufactura y laboratorio' },
  { name: 'ISO 17025', desc: 'Competencia de laboratorios de ensayo' },
]

const faq = [
  { q: '¿Cada cuándo debo recalificar mi equipo?', a: 'La recomendación general es después de cualquier cambio mayor (reubicación, reparación, cambio de componente crítico) y de forma periódica según tu normativa (típicamente anual).' },
  { q: '¿IQ/OQ/PQ aplica solo para equipos nuevos?', a: 'No. También se requiere al reubicar un equipo, después de una reparación mayor, cambio de componente crítico o cuando tu auditoría lo solicite.' },
  { q: '¿Los protocolos son aceptados por COFEPRIS y FDA?', a: 'Sí. Nuestros protocolos siguen los lineamientos de USP <1058>, ICH y FDA. Incluyen toda la documentación y trazabilidad requerida.' },
  { q: '¿Cuánto tiempo toma la cualificación?', a: 'IQ + OQ típicamente se completan en 1 día por sistema. PQ depende del método y puede requerir 1-2 días adicionales.' },
]

export default function IQOQPQPage() {
  return (
    <>
      <ServicioHero
        eyebrow="IQ / OQ / PQ"
        title="Cualificación de instalación, operación y desempeño."
        subtitle="COFEPRIS · FDA · GMP · USP <1058>"
        description="Protocolos documentados de IQ, OQ y PQ para cumplimiento normativo total. Aceptados por COFEPRIS, FDA y auditorías GMP/GLP. Documentación lista para cualquier inspección."
        accent="green"
        ctaLabel="Solicitar cualificación"
        ctaWhatsappText="Necesito cualificación IQ/OQ/PQ para mi equipo"
      />

      {/* ── QUALIFICATIONS ───────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Protocolos</span>
            <h2>IQ, OQ y PQ: tres niveles de confianza.</h2>
            <p>Cada nivel verifica un aspecto diferente del rendimiento de tu equipo.</p>
          </div>

          <div className="space-y-6 mt-14">
            {qualifications.map((qual) => (
              <article key={qual.abbr} className="bg-surface border border-outline rounded-2xl overflow-hidden">
                <div className="bg-primary-dark text-white p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="bg-energetic-yellow text-primary-dark w-14 h-14 flex items-center justify-center rounded-xl text-2xl font-bold shrink-0">{qual.abbr}</span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50">{qual.full}</span>
                    <h3 className="text-xl font-bold mt-1">{qual.title}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-muted-blue-grey leading-relaxed">{qual.desc}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 mt-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Verificaciones incluidas</span>
                      <ul className="mt-3 space-y-2">
                        {qual.checks.map((check) => (
                          <li key={check} className="flex items-start gap-2 text-sm text-muted-blue-grey">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0 mt-0.5"><path d="M5 12l4 4L19 6" /></svg>
                            {check}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green/5 border border-green/20 rounded-xl p-4 lg:w-64">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-green">Entregable</span>
                      <p className="text-sm text-primary-dark mt-2 font-semibold">{qual.deliverable}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGULATIONS ──────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Cumplimiento</span>
            <h2>Normativas que cubrimos.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {regulations.map((reg) => (
              <div key={reg.name} className="bg-paper border border-outline rounded-xl p-5 hover:border-green transition">
                <b className="text-sm text-primary-dark">{reg.name}</b>
                <p className="text-xs text-muted-blue-grey mt-1">{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Dudas sobre IQ/OQ/PQ.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 mt-12">
            {faq.map((f) => (
              <div key={f.q} className="bg-surface border border-outline rounded-xl p-6">
                <b className="text-primary-dark">{f.q}</b>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicioCTA
        title="¿Necesitas cualificación IQ/OQ/PQ?"
        description="Cuéntanos qué equipos tienes y qué normativa debes cumplir. Te cotizamos la cualificación completa."
        ctaLabel="Solicitar cualificación"
        ctaWhatsappText="Necesito cualificación IQ/OQ/PQ para mi equipo"
      />
    </>
  )
}
