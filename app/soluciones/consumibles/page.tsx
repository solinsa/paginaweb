import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/SolutionsHero'
import SolutionCTA from '@/components/sections/SolutionCTA'

export const metadata: Metadata = {
  title: 'Consumibles | SOLINSA',
  description: 'Columnas, estándares, filtros, jeringas, viales y accesorios para cromatografía GC, HPLC e IC. Inventario local en México con entrega rápida.',
}

const categories = [
  {
    title: 'Columnas GC',
    items: ['Columnas capilares DB-1, DB-5, DB-624', 'Columnas packed para aplicaciones específicas', 'Columnas para métodos EPA y NOM', 'Accesorios: ferrules, adaptadores, graphpack'],
    icon: '🧪',
  },
  {
    title: 'Columnas HPLC',
    items: ['Fase reversa C8, C18, C30', 'Fase normal (sílica, amino, ciano)', 'HILIC, ión-exchange, tamaño molecular', 'Columnas de guardia y pre-columnas'],
    icon: '🔬',
  },
  {
    title: 'Estándares y reactivos',
    items: ['Estándares EPA para calibración', 'Estándares internos y surrogados', 'Soluciones madre certificadas', 'Reactivos HPLC y GC grade'],
    icon: '⚗️',
  },
  {
    title: 'Viales y jeringas',
    items: ['Viales de 2 mL, 4 mL, 10 mL', 'Viales headspace y P&T', 'Jeringas Hamilton y SGE', 'TAPS, septa y tapas rosca'],
    icon: '💉',
  },
  {
    title: 'Filtros y membranas',
    items: ['Filtros jeringa 0.2 y 0.45 μm', 'Membranas para IC', 'Filtros de línea para HPLC', 'Filtros de carbón y sílica'],
    icon: '🧫',
  },
  {
    title: 'Partes y refacciones',
    items: ['Lámparas UV/Vis y deuterio', 'Sellos y pistones de bomba', 'Agujas de inyección', 'Filamentos y detectores'],
    icon: '🔧',
  },
]

const brands = [
  { name: 'Trajan', spec: 'Columnas y consumibles' },
  { name: 'Young In Chromass', spec: 'Columnas y partes originales' },
  { name: 'Wiley', spec: 'Librerías MS' },
  { name: 'CDS Analytical', spec: 'Prep. de muestras' },
  { name: 'EST Analytical', spec: 'Purge & Trap' },
  { name: 'HTA', spec: 'Automuestreo' },
]

export default function ConsumiblesPage() {
  return (
    <>
      <SolutionsHero
        eyebrow="Consumibles"
        title="Todo lo que tu laboratorio necesita para no parar."
        subtitle="Inventario local · Entrega rápida"
        description="Columnas, estándares, filtros, jeringas, viales y refacciones para equipos GC, HPLC, UHPLC e IC. Inventario local en Monterrey con envío a todo México."
        accent="yellow"
        ctaLabel="Cotizar consumibles"
        ctaWhatsappText="Quiero cotizar consumibles para mi laboratorio"
      />

      {/* ── CATEGORIES GRID ─────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Catálogo</span>
            <h2>Consumibles para cada técnica.</h2>
            <p>Si lo usas en cromatografía, probablemente lo tenemos en inventario.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {categories.map((cat) => (
              <article key={cat.title} className="bg-surface border border-outline rounded-2xl p-6 hover:border-energetic-yellow hover:shadow-lg transition-all">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-blue-grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0 mt-0.5">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUY FROM US ─────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Inventario local</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                No esperes semanas por una columna o una lámpara.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Mantenemos inventario local de los consumibles y refacciones más solicitados. Si no lo tenemos, lo conseguimos en tiempo récord.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { t: 'Inventario local en Monterrey', d: 'Columnas, viales, filtros y partes críticas en existencia.' },
                { t: 'Envío a todo México', d: 'Paquetería express con rastreo en tiempo real.' },
                { t: 'Asesoría técnica incluida', d: 'Te ayudamos a elegir la columna y condiciones correctas para tu método.' },
                { t: 'Precio competitivo', d: 'Consumibles originales a precio justo, sin intermediarios innecesarios.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-4 bg-paper border border-outline rounded-xl">
                  <div className="bg-energetic-yellow/15 text-yellow-dark w-9 h-9 flex items-center justify-center shrink-0 rounded-lg">
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

      {/* ── BRANDS ──────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-10">
            <span className="eyebrow on-dark">Marcas disponibles</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {brands.map((b) => (
              <div key={b.name} className="border border-white/10 rounded-xl p-4 text-center bg-white/[0.03] hover:bg-white/[0.07] transition">
                <b className="text-sm">{b.name}</b>
                <small className="block text-[10px] font-mono uppercase tracking-wider text-blue-300/70 mt-1">{b.spec}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="¿Necesitas consumibles o refacciones?"
        description="Envíanos tu lista de requerimientos y te cotizamos de inmediato."
        ctaLabel="Cotizar consumibles"
        ctaWhatsappText="Quiero cotizar consumibles para mi laboratorio"
      />
    </>
  )
}
