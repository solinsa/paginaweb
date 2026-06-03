import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/SolutionsHero'
import SolutionCTA from '@/components/sections/SolutionCTA'

export const metadata: Metadata = {
  title: 'Cromatografía Iónica (IC) | SOLINSA',
  description: 'Cromatografía iónica para análisis de aniones y cationes en agua, alimentos y ambiental. Detectores conductimétricos y supresores electroquímicos.',
}

const capabilities = [
  {
    title: 'Aniones',
    examples: ['Fluoruro', 'Cloruro', 'Nitrito', 'Bromuro', 'Nitrato', 'Fosfato', 'Sulfato'],
    applications: 'Agua potable, residual, alimentos, ambiental',
  },
  {
    title: 'Cationes',
    examples: ['Sodio', 'Amonio', 'Potasio', 'Magnesio', 'Calcio'],
    applications: 'Agua, suelos, alimentos, farmacia',
  },
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    title: 'Supresores electroquímicos',
    desc: 'Máxima sensibilidad con supresión continua del eluyente de fondo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Cumplimiento EPA 300.0',
    desc: 'Método aprobado por EPA para aniones en agua potable y residual.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 5 5-9" />
      </svg>
    ),
    title: 'Límites de detección bajos',
    desc: 'Detección sub-ppb para iones inorgánicos con excelente linealidad.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3h-8l-2 4h12l-2-4z" />
      </svg>
    ),
    title: 'Automatización completa',
    desc: 'Autómuestreador, preparación de eluyente y calibración automatizada.',
  },
]

const industries = [
  { name: 'Agua y medio ambiente', desc: 'Monitoreo de calidad de agua potable, residual y superficial' },
  { name: 'Alimentos y bebidas', desc: 'Control de aditivos, conservadores y minerales' },
  { name: 'Farmacéutica', desc: 'Análisis de contraiones y impurezas iónicas' },
  { name: 'Semiconductores', desc: 'Control de iones traza en agua ultrapura' },
  { name: 'Petroquímica', desc: 'Análisis de iones en procesos y efluentes' },
  { name: 'Academia e investigación', desc: 'Desarrollo de métodos y docencia' },
]

export default function ICPage() {
  return (
    <>
      <SolutionsHero
        eyebrow="IC"
        title="Cromatografía iónica para aniones y cationes."
        subtitle="Young In Chromass · Distribuidor autorizado"
        description="Analizadores de cromatografía iónica para cuantificación precisa de iones inorgánicos. Ideales para monitoreo de agua, cumplimiento EPA 300.0, NOM y control de calidad."
        accent="green"
        ctaWhatsappText="Quiero cotizar un sistema de cromatografía iónica"
      />

      {/* ── CAPABILITIES ────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Analitos</span>
            <h2>Aniones y cationes con detección sub-ppb.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {capabilities.map((cap) => (
              <article key={cap.title} className="bg-surface border border-outline rounded-2xl p-7">
                <h3 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                  <span className="w-2 h-2 bg-green rounded-full" />
                  {cap.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cap.examples.map((ex) => (
                    <span key={ex} className="bg-green/10 text-green px-3 py-1 rounded-full text-sm font-medium">{ex}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-blue-grey mt-4">{cap.applications}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Tecnología</span>
            <h2>Lo que hace diferente a nuestra IC.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 bg-paper border border-outline rounded-xl hover:border-technical-blue transition">
                <div className="bg-green/10 text-green w-11 h-11 flex items-center justify-center shrink-0 rounded-xl">
                  {f.icon}
                </div>
                <div>
                  <b className="text-sm text-primary-dark">{f.title}</b>
                  <p className="text-xs text-muted-blue-grey mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Industrias</span>
            <h2>IC en cada sector.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-surface border border-outline rounded-xl p-5 hover:border-green transition">
                <b className="text-sm text-primary-dark">{ind.name}</b>
                <p className="text-xs text-muted-blue-grey mt-1">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="¿Necesitas análisis de aniones o cationes?"
        description="Te ayudamos a configurar el sistema IC correcto para tus analitos y normativa."
        ctaLabel="Cotizar sistema IC"
        ctaWhatsappText="Quiero cotizar un sistema de cromatografía iónica"
      />
    </>
  )
}
