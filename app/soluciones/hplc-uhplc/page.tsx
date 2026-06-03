import Link from 'next/link'
import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/SolutionsHero'
import SolutionCTA from '@/components/sections/SolutionCTA'

export const metadata: Metadata = {
  title: 'HPLC / UHPLC | SOLINSA',
  description: 'Cromatografía líquida de alta y ultra alta resolución. Sistemas HPLC y UHPLC con detectores DAD, FL, RID y MS para farmacia, alimentos, ambiental y más.',
}

const WA = 'https://wa.me/5218123554766'

const equipment = [
  {
    category: 'Sistemas HPLC',
    items: [
      { name: 'HPLC Cuaternario', desc: 'Bomba cuaternaria, automuestreador, horno de columna y detector UV/Vis.', highlight: 'Ideal para métodos USP, AOAC y NOM' },
      { name: 'HPLC Binario', desc: 'Bomba binaria de alta presión para gradientes rápidos y métodos complejos.', highlight: 'Mayor precisión en gradientes' },
      { name: 'UHPLC', desc: 'Sistema de ultra alta presión (hasta 15,000 psi) con inyección ultrarrápida.', highlight: 'Hasta 10x más rápido que HPLC convencional' },
    ],
  },
  {
    category: 'Detectores',
    items: [
      { name: 'DAD (Diode Array)', desc: 'Detección espectral completa 190-900 nm para identificación de picos.', highlight: 'Espectros en tiempo real' },
      { name: 'Fluorescencia (FL)', desc: 'Alta sensibilidad para analitos fluorescentes y derivatizados.', highlight: 'LOD hasta fg niveles' },
      { name: 'Índice de Refracción (RID)', desc: 'Detección universal para azúcares, polímeros y compuestos sin cromóforo.', highlight: 'Universal y confiable' },
    ],
  },
]

const applications = [
  { industry: 'Farmacéutica', methods: 'USP, disolución, estabilidad, impurezas', icon: '💊' },
  { industry: 'Alimentos y bebidas', methods: 'AOAC, aditivos, micotoxinas, azúcares', icon: '🍷' },
  { industry: 'Ambiental', methods: 'EPA, plaguicidas, HERB, fenoles', icon: '🌿' },
  { industry: 'Química', methods: 'Control de proceso, pureza, monómeros', icon: '⚗️' },
  { industry: 'Academia', methods: 'Investigación, docencia, métodos nuevos', icon: '🔬' },
  { industry: 'Petroquímica', methods: 'ASTM, aromáticos, BTEX, PAHs', icon: '🛢️' },
]

export default function HPLCUHPLCPage() {
  return (
    <>
      <SolutionsHero
        eyebrow="HPLC / UHPLC"
        title="Cromatografía líquida de alta y ultra alta resolución."
        subtitle="Young In Chromass · Distribuidor autorizado"
        description="Sistemas completos de HPLC y UHPLC configurados para tu método analítico. Incluimos bombas, automuestreadores, hornos, detectores y todo el soporte técnico necesario para que tu laboratorio produzca resultados confiables desde el día uno."
        accent="blue"
        ctaWhatsappText="Quiero cotizar un sistema HPLC o UHPLC"
      />

      {/* ── EQUIPMENT GRID ──────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Equipos</span>
            <h2>Configuraciones para cada necesidad.</h2>
            <p>Desde análisis rutinario de control de calidad hasta investigación avanzada.</p>
          </div>

          <div className="space-y-12 mt-14">
            {equipment.map((group) => (
              <div key={group.category}>
                <h3 className="text-lg font-bold text-primary-dark mb-5 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-technical-blue" />
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <article key={item.name} className="bg-surface border border-outline rounded-2xl p-6 hover:border-technical-blue hover:shadow-lg transition-all">
                      <h4 className="font-bold text-primary-dark">{item.name}</h4>
                      <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{item.desc}</p>
                      <div className="mt-4 pt-3 border-t border-outline-variant">
                        <span className="text-xs font-mono text-technical-blue">{item.highlight}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Aplicaciones</span>
            <h2>HPLC/UHPLC para tu industria.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {applications.map((app) => (
              <div key={app.industry} className="bg-paper border border-outline rounded-xl p-5 flex gap-4 items-start hover:border-technical-blue transition">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <b className="text-sm text-primary-dark">{app.industry}</b>
                  <p className="text-xs text-muted-blue-grey mt-1">{app.methods}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Todo incluido</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Cada sistema HPLC/UHPLC se entrega listo para producir.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                No vendemos "cajas". Cada sistema viene configurado, instalado y validado.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { t: 'Selección de columna y condiciones', d: 'Elegimos la fase estacionaria, fase móvil y condiciones óptimas para tu método.' },
                { t: 'Instalación y IQ/OQ', d: 'Puesta en marcha con protocolos de cualificación y documentación completa.' },
                { t: 'Capacitación en sitio', d: 'Entrenamos a tu equipo en operación, mantenimiento y troubleshooting.' },
                { t: 'Consumibles iniciales', d: 'Incluimos columnas, solventes, estándares y viales para comenzar de inmediato.' },
                { t: 'Soporte técnico continuo', d: 'Respuesta < 24h con ingenieros capacitados en fábrica.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-4 bg-surface border border-outline rounded-xl">
                  <div className="bg-green/10 text-green w-9 h-9 flex items-center justify-center shrink-0 rounded-lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
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

      <SolutionCTA
        title="¿Necesitas un sistema HPLC o UHPLC?"
        description="Cuéntanos tu método, analitos y normativa. Te recomendamos la configuración ideal."
        ctaLabel="Cotizar HPLC / UHPLC"
        ctaWhatsappText="Quiero cotizar un sistema HPLC o UHPLC"
      />
    </>
  )
}
