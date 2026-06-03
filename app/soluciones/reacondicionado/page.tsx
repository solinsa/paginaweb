import Link from 'next/link'
import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/SolutionsHero'
import SolutionCTA from '@/components/sections/SolutionCTA'

export const metadata: Metadata = {
  title: 'Equipo Reacondicionado | SOLINSA',
  description: 'Equipos de cromatografía seminuevos certificados con garantía. GC, HPLC y accesorios reacondicionados con inspección completa y calibración IQ/OQ.',
}

const WA = 'https://wa.me/5218123554766'

const process = [
  {
    step: '01',
    title: 'Selección',
    desc: 'Recibimos equipos en buen estado de laboratorios que actualizan tecnología o cierran líneas.',
  },
  {
    step: '02',
    title: 'Inspección completa',
    desc: 'Evaluación funcional de cada componente: bombas, detectores, inyectores, electrónicos.',
  },
  {
    step: '03',
    title: 'Reacondicionamiento',
    desc: 'Limpieza profunda, cambio de sellos, calibración y reemplazo de partes desgastadas.',
  },
  {
    step: '04',
    title: 'Certificación IQ/OQ',
    desc: 'Documentación de cualificación de instalación y operación. Listo para auditoría.',
  },
]

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 1v4M12 19v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h4M19 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Hasta 60% de ahorro',
    desc: 'Equipo con calidad comprobable a una fracción del precio de nuevo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: 'Garantía por escrito',
    desc: 'Todos nuestros equipos reacondicionados incluyen garantía de funcionamiento.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Certificación IQ/OQ incluida',
    desc: 'Documentación completa para cumplimiento normativo y auditorías.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Soporte técnico completo',
    desc: 'Instalación, capacitación y soporte continuo igual que equipo nuevo.',
  },
]

const equipmentTypes = [
  {
    type: 'GC (Cromatografía de gases)',
    examples: ['GC con FID para hidrocarburos', 'GC-ECD para plaguicidas', 'GC-TCD para gases permanentes'],
    available: true,
  },
  {
    type: 'HPLC (Cromatografía líquida)',
    examples: ['HPLC con detector UV/Vis', 'HPLC-DAD para farmacia', 'HPLC-RID para azúcares'],
    available: true,
  },
  {
    type: 'Accesorios y componentes',
    examples: ['Automuestreadores', 'Detectores individuales', 'Bombas y módulos'],
    available: true,
  },
]

export default function ReacondicionadoPage() {
  return (
    <>
      <SolutionsHero
        eyebrow="Reacondicionado"
        title="Equipo seminuevo certificado. Calidad comprobable."
        subtitle="Garantía incluida · IQ/OQ certificado"
        description="Equipos de cromatografía reacondicionados con inspección completa, calibración y garantía por escrito. La misma calidad que un equipo nuevo a una fracción del costo."
        accent="blue"
        ctaLabel="Ver equipo disponible"
        ctaWhatsappText="Quiero ver el equipo reacondicionado disponible"
      />

      {/* ── PROCESS ─────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Proceso</span>
            <h2>Cada equipo pasa por un proceso riguroso.</h2>
            <p>No vendemos "usado". Vendemos equipo reacondicionado y certificado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {process.map((p) => (
              <div key={p.step} className="bg-surface border border-outline rounded-2xl p-6 relative">
                <span className="text-4xl font-bold text-technical-blue/15 absolute top-4 right-5">{p.step}</span>
                <div className="relative">
                  <span className="bg-technical-blue text-white w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold">{p.step}</span>
                  <h3 className="font-bold text-primary-dark mt-4">{p.title}</h3>
                  <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Ventajas</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Equipo de calidad sin pagar de más.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Ideal para laboratorios que necesitan ampliar capacidad, reemplazar un equipo o empezar operaciones con presupuesto limitado.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-5 bg-paper border border-outline rounded-xl hover:border-technical-blue transition">
                  <div className="bg-technical-blue/10 text-technical-blue w-11 h-11 flex items-center justify-center shrink-0 rounded-xl">
                    {b.icon}
                  </div>
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

      {/* ── EQUIPMENT TYPES ─────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Equipo disponible</span>
            <h2>Tipos de equipo que reacondicionamos.</h2>
            <p>El inventario cambia constantemente. Contáctanos para ver qué tenemos disponible ahora.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {equipmentTypes.map((eq) => (
              <article key={eq.type} className="bg-surface border border-outline rounded-2xl p-7 hover:border-technical-blue hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-primary-dark">{eq.type}</h3>
                <ul className="mt-4 space-y-2">
                  {eq.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      {ex}
                    </li>
                  ))}
                </ul>
                {eq.available && (
                  <span className="inline-flex items-center gap-1.5 mt-5 bg-green/10 text-green px-3 py-1.5 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
                    Disponible
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVENTORY NOTE ──────────────────────────────── */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-energetic-yellow mx-auto">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <h3 className="text-2xl font-bold mt-6">¿Buscas un equipo específico?</h3>
          <p className="text-white/60 text-lg mt-3">
            Nuestro inventario de reacondicionados cambia constantemente. Si no tenemos lo que buscas, lo localizamos.
          </p>
          <Link
            href={`${WA}?text=Quiero%20saber%20qué%20equipo%20reacondicionado%20tienen%20disponible`}
            target="_blank"
            className="btn btn-yellow mt-8 inline-flex"
          >
            Ver inventario actual
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      <SolutionCTA
        title="¿Te interesa el equipo reacondicionado?"
        description="Contáctanos y te enviamos el inventario actual con precios y condiciones."
        ctaLabel="Ver inventario disponible"
        ctaWhatsappText="Quiero ver el equipo reacondicionado disponible"
      />
    </>
  )
}
