import Link from 'next/link'
import type { Metadata } from 'next'
import IndustriasHero from '@/components/sections/IndustriasHero'
import IndustryCTA from '@/components/sections/IndustryCTA'

export const metadata: Metadata = {
  title: 'Ambiental | SOLINSA',
  description: 'Cromatografía para monitoreo ambiental: VOCs, SVOCs, plaguicidas y metales pesados en agua, aire y suelos. Métodos EPA 524, 525, 8270.',
}

const WA = 'https://wa.me/5218123554766'

const matrices = [
  {
    icon: '💧',
    title: 'Agua potable y residual',
    desc: 'Análisis de VOCs, SVOCs, plaguicidas, herbicidas y metales pesados en agua superficial, potable y residual.',
    methods: ['EPA 524.2 — VOCs', 'EPA 525.2 — SVOCs', 'EPA 508 — plaguicidas', 'EPA 300.0 — aniones (IC)'],
  },
  {
    icon: '🌬️',
    title: 'Aire',
    desc: 'Muestreo y análisis de compuestos orgánicos volátiles en aire ambiente y emisiones industriales.',
    methods: ['EPA TO-15 — canisters', 'EPA TO-17 — tubos sorbentes', 'NOM-043 — emisiones', 'HTA automuestreo'],
  },
  {
    icon: '🪨',
    title: 'Suelos y sedimentos',
    desc: 'Extracción y análisis de contaminantes orgánicos e inorgánicos en suelos, sedimentos y residuos.',
    methods: ['EPA 8270 — semi-volátiles', 'EPA 8082 — PCBs', 'EPA 8015 — hidrocarburos', 'NOM-138 — hidrocarburos'],
  },
  {
    icon: '🏭',
    title: 'Efluentes industriales',
    desc: 'Monitoreo de descargas industriales para cumplimiento de NOM-001 y NOM-002.',
    methods: ['NOM-001 — límites de descarga', 'NOM-002 — aguas residuales', 'DQO, DBO, metales pesados', 'VOCs y SVOCs'],
  },
]

const systems = [
  {
    title: 'GCMS/MS Triple Cuadrupolo',
    desc: 'Máxima selectividad para análisis de trazas. Elimina interferencias matriciales en muestras complejas de suelo y agua.',
    lod: 'ppt (trazas)',
    use: 'EPA 8270, pesticidas, dioxinas',
  },
  {
    title: 'GCMS Simple Cuadrupolo',
    desc: 'Identificación y cuantificación de rutina para VOCs y SVOCs en agua potable y residual.',
    lod: 'ppb',
    use: 'EPA 524.2, 525.2, TO-15',
  },
  {
    title: 'GC con detectores clásicos',
    desc: 'FID para hidrocarburos, ECD para plaguicidas halogenados, TCD para gases.',
    lod: 'ppb - ppm',
    use: 'EPA 8082, 8015, hidrocarburos',
  },
  {
    title: 'Purge & Trap EST Analytical',
    desc: 'Preconcentración automática de VOCs en agua. Integración directa con GCMS.',
    lod: 'sub-ppb',
    use: 'EPA 524.2, VOCs en agua',
  },
  {
    title: 'IC (Cromatografía Iónica)',
    desc: 'Aniones y cationes en agua por conductimetría. Cumplimiento EPA 300.0.',
    lod: 'ppb',
    use: 'EPA 300.0, aniones en agua',
  },
]

const norms = [
  { norm: 'EPA 524.2', app: 'VOCs en agua potable', matrix: 'Agua' },
  { norm: 'EPA 525.2', app: 'SVOCs en agua', matrix: 'Agua' },
  { norm: 'EPA 8270', app: 'Semi-volátiles extractables', matrix: 'Suelo/Agua' },
  { norm: 'EPA 8082', app: 'Bifenilos policlorados (PCBs)', matrix: 'Suelo/Agua' },
  { norm: 'EPA 8015', app: 'Hidrocarburos del petróleo', matrix: 'Suelo' },
  { norm: 'EPA 300.0', app: 'Aniones inorgánicos', matrix: 'Agua' },
  { norm: 'EPA TO-15', app: 'VOCs en aire (canisters)', matrix: 'Aire' },
  { norm: 'NOM-001', app: 'Límites de descarga', matrix: 'Efluente' },
  { norm: 'NOM-138', app: 'Hidrocarburos en suelos', matrix: 'Suelo' },
]

export default function AmbientalPage() {
  return (
    <>
      <IndustriasHero
        eyebrow="Ambiental"
        title="Monitoreo de agua, aire y suelos con métodos EPA certificados."
        subtitle="EPA · NOM · SEMARNAT · CONAGUA"
        description="GCMS, GCMS/MS, Purge & Trap y Cromatografía Iónica para análisis de VOCs, SVOCs, plaguicidas y contaminantes. Cumplimiento total de métodos EPA y normativas mexicanas."
        accent="green"
        ctaLabel="Cotizar para ambiental"
        ctaWhatsappText="Quiero cotizar equipo para análisis ambiental"
      />

      {/* ── MATRICES ─────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Matrices ambientales</span>
            <h2>Análisis por tipo de muestra.</h2>
            <p>Agua, aire, suelo y efluentes. Cada matriz tiene sus métodos y condiciones específicas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {matrices.map((m) => (
              <article key={m.title} className="bg-surface border border-outline rounded-2xl p-7 hover:border-green hover:shadow-lg transition-all">
                <span className="text-3xl">{m.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{m.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{m.desc}</p>

                <div className="mt-4 pt-4 border-t border-outline-variant space-y-1.5">
                  {m.methods.map((met) => (
                    <div key={met} className="flex items-center gap-2 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      <span className="text-muted-blue-grey">{met}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ──────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Equipos</span>
            <h2>Sistemas para análisis ambiental.</h2>
            <p>Desde rutina de agua potable hasta trazas de dioxinas en suelo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {systems.map((sys) => (
              <article key={sys.title} className="bg-paper border border-outline rounded-2xl p-6 hover:border-green hover:shadow-lg transition-all flex flex-col">
                <h3 className="font-bold text-primary-dark">{sys.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed flex-1">{sys.desc}</p>
                <div className="mt-4 pt-3 border-t border-outline-variant space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-mono uppercase tracking-wider text-muted-blue-grey">LOD</span>
                    <span className="font-bold text-green">{sys.lod}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-mono uppercase tracking-wider text-muted-blue-grey">Uso</span>
                    <span className="text-primary-dark">{sys.use}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NORMS TABLE ──────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Métodos y normativas</span>
            <h2>Métodos EPA y NOM que cubrimos.</h2>
          </div>

          <div className="bg-surface border border-outline rounded-2xl overflow-hidden mt-12">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-dark text-white text-left">
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Método</th>
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Aplicación</th>
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Matriz</th>
                </tr>
              </thead>
              <tbody>
                {norms.map((n, i) => (
                  <tr key={n.norm} className={`${i % 2 === 1 ? 'bg-paper' : ''} border-t border-outline-variant`}>
                    <td className="px-6 py-4 text-sm font-bold text-technical-blue">{n.norm}</td>
                    <td className="px-6 py-4 text-sm text-muted-blue-grey">{n.app}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-green/10 text-green px-3 py-1 rounded-full text-xs font-mono">{n.matrix}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY SOLINSA ──────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Por qué Solinsa</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Experiencia real en laboratorios ambientales en México.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Hemos instalado sistemas en laboratorios que analizan agua potable, suelos contaminados y emisiones industriales. Conocemos los métodos EPA y NOM de primera mano.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { t: 'Configuración por método EPA', d: 'No solo entregamos el equipo, configuramos las condiciones del método.' },
                { t: 'Purge & Trap integrado', d: 'Automatización completa para VOCs en agua sin intervención manual.' },
                { t: 'Documentación para auditoría', d: 'IQ/OQ/PQ y trazabilidad total para cumplimiento SEMARNAT/CONAGUA.' },
                { t: 'Soporte local < 24 horas', d: 'Ingenieros en México que conocen tus sistemas y tus métodos.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-4 bg-paper border border-outline rounded-xl">
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

      <IndustryCTA
        title="¿Necesitas análisis ambiental?"
        description="Cuéntanos qué matriz analizas y qué método EPA o NOM debes cumplir. Te configuramos el sistema completo."
        ctaLabel="Cotizar para ambiental"
        ctaWhatsappText="Quiero cotizar equipo para análisis ambiental"
      />
    </>
  )
}
