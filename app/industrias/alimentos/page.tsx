import Link from 'next/link'
import type { Metadata } from 'next'
import IndustriasHero from '@/components/sections/IndustriasHero'
import IndustryCTA from '@/components/sections/IndustryCTA'

export const metadata: Metadata = {
  title: 'Alimentos y Bebidas | SOLINSA',
  description: 'Cromatografía para control de calidad e inocuidad alimentaria. HPLC/UHPLC para tequila, bebidas, aditivos, micotoxinas y perfiles cromatográficos.',
}

const WA = 'https://wa.me/5218123554766'

const applications = [
  {
    icon: '🥃',
    title: 'Tequila y mezcal',
    desc: 'Cuantificación de metanol, compuestos volátiles, azúcares y perfil cromatográfico completo según NOM.',
    techniques: ['HPLC-DAD', 'GC-FID', 'UHPLC'],
    norms: 'NOM-006, NOM-070, CRT',
  },
  {
    icon: '🍺',
    title: 'Cerveza y bebidas',
    desc: 'Análisis de IBU, color, alcohol, azúcares residuales y compuestos de sabor.',
    techniques: ['HPLC-RID', 'GC-MS', 'UV-Vis'],
    norms: 'AOAC, métodos internos',
  },
  {
    icon: '🧃',
    title: 'Jugos y néctares',
    desc: 'Detección de adulteraciones, aditivos no declarados, conservadores y residuos de plaguicidas.',
    techniques: ['HPLC-DAD', 'GC-MS/MS', 'IC'],
    norms: 'NOM-173, COFEPRIS',
  },
  {
    icon: '🌶️',
    title: 'Alimentos procesados',
    desc: 'Control de aditivos, colorantes, conservadores, micotoxinas y contaminantes.',
    techniques: ['HPLC-DAD', 'GC-MS', 'IC'],
    norms: 'NOM-120, FDA, AOAC',
  },
  {
    icon: '🍬',
    title: 'Confitería y sabores',
    desc: 'Perfil de sabores, fragancias, edulcorantes y compuestos aromáticos.',
    techniques: ['GC-MS', 'HPLC-DAD', 'GC-FID'],
    norms: 'FEMA, IOFI, COFEPRIS',
  },
  {
    icon: '🌾',
    title: 'Cereales y harinas',
    desc: 'Detección de micotoxinas (aflatoxinas, ocratoxina), residuos de plaguicidas y proteínas.',
    techniques: ['HPLC-FL', 'GC-MS/MS', 'IC'],
    norms: 'NOM-187, Codex',
  },
]

const equipment = [
  {
    title: 'HPLC / UHPLC con DAD',
    desc: 'Sistemas completos con detector de arreglo de diodos para perfiles cromatográficos, cuantificación y confirmación espectral.',
    use: 'Aditivos, colorantes, conservadores, azúcares, cafeína',
  },
  {
    title: 'HPLC con FL (Fluorescencia)',
    desc: 'Alta sensibilidad para analitos fluorescentes como aflatoxinas y ocratoxina A.',
    use: 'Micotoxinas en cereales, nueces y especias',
  },
  {
    title: 'GC-FID',
    desc: 'Gas chromatography con detector de ionización de llama para alcoholes, compuestos volátiles y perfiles.',
    use: 'Metanol en tequila, ésteres, volátiles en bebidas',
  },
  {
    title: 'GC-MS / GC-MS/MS',
    desc: 'Identificación y cuantificación de plaguicidas, contaminantes y compuestos traza.',
    use: 'Plaguicidas en frutas/verduras, residuos, VOCs',
  },
  {
    title: 'VUV Analytics',
    desc: 'Clasificación espectral por absorbancia VUV para confirmación de identidad.',
    use: 'Perfiles de sabores, aromas, compuestos volátiles',
  },
]

export default function AlimentosPage() {
  return (
    <>
      <IndustriasHero
        eyebrow="Alimentos y Bebidas"
        title="Calidad, inocuidad y perfiles cromatográficos."
        subtitle="NOM · COFEPRIS · AOAC · FDA"
        description="Desde tequila y mezcal hasta alimentos procesados y confitería. Equipos HPLC/UHPLC con detectores DAD, FL y VUV, más GC-MS para cumplimiento total de normativas mexicanas e internacionales."
        accent="yellow"
        ctaLabel="Cotizar para alimentos y bebidas"
        ctaWhatsappText="Quiero cotizar equipo para análisis de alimentos y bebidas"
      />

      {/* ── APPLICATIONS ────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Aplicaciones</span>
            <h2>Análisis por tipo de producto.</h2>
            <p>Conocemos los métodos, las normas y las condiciones cromatográficas que cada producto requiere.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {applications.map((app) => (
              <article key={app.title} className="bg-surface border border-outline rounded-2xl p-6 hover:border-energetic-yellow hover:shadow-lg transition-all">
                <span className="text-3xl">{app.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{app.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{app.desc}</p>

                <div className="mt-4 pt-4 border-t border-outline-variant space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Técnicas</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {app.techniques.map((t) => (
                        <span key={t} className="bg-technical-blue/10 text-technical-blue px-2 py-0.5 rounded-full text-[11px] font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Normativa</span>
                    <p className="text-xs text-primary-dark mt-0.5">{app.norms}</p>
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
            <h2>La técnica correcta para cada análisis.</h2>
            <p>Seleccionamos el equipo en función de tus analitos, límites de detección y normativa aplicable.</p>
          </div>

          <div className="space-y-4 mt-12">
            {equipment.map((eq) => (
              <div key={eq.title} className="bg-paper border border-outline rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-technical-blue transition">
                <div className="flex-1">
                  <h3 className="font-bold text-primary-dark">{eq.title}</h3>
                  <p className="text-sm text-muted-blue-grey mt-1">{eq.desc}</p>
                </div>
                <div className="sm:w-64 sm:text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Aplicación típica</span>
                  <p className="text-xs text-primary-dark mt-0.5">{eq.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ─────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Lo que entregamos</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Un sistema listo para tu método, no solo un equipo.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Configuramos el sistema con la columna, fase móvil y condiciones que tu método requiere.
                Incluimos validación IQ/OQ y capacitación de tu equipo.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { t: 'Método configurado y validado', d: 'Elegimos columna, detector y condiciones óptimas para tus analitos.' },
                { t: 'Cumplimiento NOM y COFEPRIS', d: 'Documentación para auditorías y trazabilidad completa.' },
                { t: 'Capacitación en sitio', d: 'Tu equipo opera de forma independiente desde el día uno.' },
                { t: 'Inventario local de consumibles', d: 'Columnas, estándares y viales en existencia para entrega rápida.' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 p-4 bg-surface border border-outline rounded-xl">
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

      <IndustryCTA
        title="¿Necesitas análisis de alimentos o bebidas?"
        description="Cuéntanos qué producto analizas y qué norma debes cumplir. Te recomendamos la técnica y el equipo correcto."
        ctaLabel="Cotizar para alimentos y bebidas"
        ctaWhatsappText="Quiero cotizar equipo para análisis de alimentos y bebidas"
      />
    </>
  )
}
