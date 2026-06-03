import Link from 'next/link'
import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/SolutionsHero'
import SolutionCTA from '@/components/sections/SolutionCTA'

export const metadata: Metadata = {
  title: 'GC / GCMS | SOLINSA',
  description: 'Cromatografía de gases y espectrometría de masas. Sistemas GC y GCMS para análisis de VOCs, SVOCs, métodos EPA y cumplimiento normativo.',
}

const WA = 'https://wa.me/5218123554766'

const systems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'GC con detectores clásicos',
    desc: 'Gas chromatography con FID, ECD, TCD y NPD para análisis rutinario y control de calidad.',
    detectors: ['FID — hidrocarburos, solventes', 'ECD — plaguicidas halogenados', 'TCD — gases permanentes', 'NPD — pesticidas N/P'],
    brands: 'Young In Chromass, Ellutia, Wasson-ECE',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 019 9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'GCMS (Simple cuadrupolo)',
    desc: 'Espectrometría de masas para identificación y cuantificación de compuestos orgánicos volátiles y semi-volátiles.',
    detectors: ['Ionización EI/CI', 'Scan y SIM simultáneo', 'Librería Wiley integrada', 'Concentración sub-ppb'],
    brands: 'Young In Chromass',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 019 9" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'GCMS/MS (Triple cuadrupolo)',
    desc: 'Máxima selectividad y sensibilidad para análisis de trazas. Ideal para métodos EPA y regulación ambiental.',
    detectors: ['MRV con triple cuadrupolo', 'LOD ultra-bajo (ppt)', 'Eliminación de interferencias matriciales', 'Cumplimiento EPA 8270, 525, 524'],
    brands: 'Young In Chromass',
  },
]

const samplePrep = [
  { name: 'Purge & Trap', desc: 'EST Analytical — concentración de VOCs en agua y suelo', icon: '🧪' },
  { name: 'HeadSpace', desc: 'Análisis de compuestos volátiles en muestras sólidas y líquidas', icon: '💨' },
  { name: 'SPME', desc: 'Microextracción en fase sólida sin solventes', icon: '🔬' },
  { name: 'Automuestreo HTA', desc: 'Autómuestreadores automáticos para GC y HPLC', icon: '🤖' },
  { name: 'Prep. de muestras CDS', desc: 'Pirólisis, desorción térmica y concentración', icon: '⚗️' },
  { name: 'VUV Analytics', desc: 'Detección VUV para clasificación espectral de compuestos', icon: '🌈' },
]

const methods = [
  { method: 'EPA 524.2', app: 'VOCs en agua potable', detector: 'GCMS' },
  { method: 'EPA 525.2', app: 'SVOCs en agua', detector: 'GCMS' },
  { method: 'EPA 8270', app: 'Semi-volátiles', detector: 'GCMS/MS' },
  { method: 'EPA 8082', app: 'Bifenilos policlorados', detector: 'GC-ECD' },
  { method: 'NOM-016', app: 'Análisis de combustibles (CRE)', detector: 'GC-DHA' },
  { method: 'ASTM D3606', app: 'Benceno en gasolina', detector: 'GC-FID' },
]

export default function GCGCMSPage() {
  return (
    <>
      <SolutionsHero
        eyebrow="GC / GCMS"
        title="Cromatografía de gases y espectrometría de masas."
        subtitle="Young In Chromass · Wasson-ECE · EST Analytical · VUV Analytics"
        description="Sistemas GC, GCMS y GCMS/MS para análisis de compuestos volátiles y semi-volátiles. Soluciones completas que incluyen preparación de muestras, detección y cumplimiento de métodos EPA, NOM y ASTM."
        accent="dark"
        ctaWhatsappText="Quiero cotizar un sistema GC o GCMS"
      />

      {/* ── SYSTEMS ─────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Sistemas</span>
            <h2>La técnica correcta para cada analito.</h2>
            <p>Desde GC rutinario con FID hasta GCMS/MS triple cuadrupolo para análisis de trazas.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {systems.map((sys) => (
              <article key={sys.title} className="bg-surface border border-outline rounded-2xl p-7 flex flex-col hover:border-technical-blue hover:shadow-lg transition-all">
                <div className="bg-primary-dark text-white w-12 h-12 flex items-center justify-center rounded-xl">
                  {sys.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mt-5">{sys.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-3 leading-relaxed flex-1">{sys.desc}</p>

                <div className="mt-5 pt-4 border-t border-outline-variant space-y-2">
                  {sys.detectors.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      <span className="text-muted-blue-grey">{d}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-mono text-technical-blue mt-4">{sys.brands}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE PREPARATION ──────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head">
            <span className="eyebrow">Preparación de muestras</span>
            <h2>Accesorios y automatización para GC/GCMS.</h2>
            <p>La preparación de muestra es clave para resultados confiables. Ofrecemos las mejores opciones del mercado.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {samplePrep.map((sp) => (
              <div key={sp.name} className="bg-paper border border-outline rounded-xl p-5 hover:border-technical-blue transition">
                <span className="text-2xl">{sp.icon}</span>
                <b className="block text-sm text-primary-dark mt-3">{sp.name}</b>
                <p className="text-xs text-muted-blue-grey mt-1">{sp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODS TABLE ───────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Métodos</span>
            <h2>Métodos EPA, NOM y ASTM que cubrimos.</h2>
          </div>

          <div className="bg-surface border border-outline rounded-2xl overflow-hidden mt-12">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-dark text-white text-left">
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Método</th>
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Aplicación</th>
                  <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider">Detector</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m, i) => (
                  <tr key={m.method} className={`${i % 2 === 1 ? 'bg-paper' : ''} border-t border-outline-variant`}>
                    <td className="px-6 py-4 text-sm font-bold text-technical-blue">{m.method}</td>
                    <td className="px-6 py-4 text-sm text-muted-blue-grey">{m.app}</td>
                    <td className="px-6 py-4 text-sm"><span className="bg-technical-blue/10 text-technical-blue px-3 py-1 rounded-full text-xs font-mono">{m.detector}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SolutionCTA
        title="¿Necesitas un sistema GC o GCMS?"
        description="Cuéntanos qué analitos buscas y qué norma debes cumplir. Te recomendamos la configuración correcta."
        ctaLabel="Cotizar GC / GCMS"
        ctaWhatsappText="Quiero cotizar un sistema GC o GCMS"
      />
    </>
  )
}
