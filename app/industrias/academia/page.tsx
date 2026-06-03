import Link from 'next/link'
import type { Metadata } from 'next'
import IndustriasHero from '@/components/sections/IndustriasHero'
import IndustryCTA from '@/components/sections/IndustryCTA'

export const metadata: Metadata = {
  title: 'Academia e Investigación | SOLINSA',
  description: 'Equipos de cromatografía accesibles para universidades y centros de investigación. GC, HPLC, equipo reacondicionado y capacitación para docencia.',
}

const WA = 'https://wa.me/5218123554766'

const useCases = [
  {
    icon: '🎓',
    title: 'Docencia universitaria',
    desc: 'Equipos GC y HPLC para prácticas de laboratorio en carreras de química, farmacia, biología e ingeniería.',
    details: 'Operación simplificada, manuales en español, capacitación de académicos incluida.',
  },
  {
    icon: '🔬',
    title: 'Investigación analítica',
    desc: 'Sistemas UHPLC y GCMS para proyectos de investigación, tesis de posgrado y publicaciones.',
    details: 'Alta resolución, detectores avanzados, software de datos profesional.',
  },
  {
    icon: '🌿',
    title: 'Investigación en productos naturales',
    desc: 'Análisis de metabolitos secundarios, aceites esenciales, compuestos bioactivos y extractos vegetales.',
    details: 'HPLC-DAD, GC-MS, perfiles cromatográficos completos.',
  },
  {
    icon: '🧪',
    title: 'Desarrollo de nuevos métodos',
    desc: 'Optimización de métodos cromatográficos para nuevos analitos, matrices y normativas.',
    details: 'Flexibilidad de configuración, detectores intercambiables.',
  },
  {
    icon: '📊',
    title: 'Servicio social y vinculación',
    desc: 'Análisis de muestras externas para empresas e instituciones como servicio analítico.',
    details: 'Equipos validados, reportes profesionales.',
  },
  {
    icon: '🏆',
    title: 'Competencias y certificaciones',
    desc: 'Preparación de estudiantes para certificaciones y competencias en análisis instrumental.',
    details: 'Equipo equivalente al usado en la industria.',
  },
]

const advantages = [
  {
    title: 'Equipo reacondicionado certificado',
    desc: 'GC y HPLC a hasta 60% del precio de nuevo, con garantía e IQ/OQ incluido.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Presupuestos para universidades',
    desc: 'Cotizaciones adaptadas a presupuestos de investigación, CONACYT e instituciones públicas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: 'Capacitación incluida',
    desc: 'Entrenamos a profesores y estudiantes en operación, mantenimiento y análisis de datos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Soporte técnico permanente',
    desc: 'Asesoría técnica para desarrollos, troubleshooting y mantenimiento a largo plazo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

const packages = [
  {
    title: 'Básico GC',
    desc: 'GC-FID completo para prácticas de docencia',
    includes: ['GC con detector FID', 'Integrador/data system', 'Columna y consumibles iniciales', 'Capacitación de 2 días'],
    type: 'Nuevo o reacondicionado',
  },
  {
    title: 'Básico HPLC',
    desc: 'HPLC con detector UV/Vis para docencia',
    includes: ['HPLC con bomba, inyector, UV/Vis', 'Software de datos', 'Columna C18 y solventes', 'Capacitación de 2 días'],
    type: 'Nuevo o reacondicionado',
  },
  {
    title: 'Investigación GCMS',
    desc: 'GC-MS para identificación y cuantificación',
    includes: ['GCMS simple cuadrupolo', 'Librería Wiley', 'Automuestreador', 'IQ/OQ y capacitación'],
    type: 'Nuevo',
  },
]

export default function AcademiaPage() {
  return (
    <>
      <IndustriasHero
        eyebrow="Academia e Investigación"
        title="Equipos accesibles para docencia e investigación en cromatografía."
        subtitle="Universidades · Centros de investigación · CONACYT"
        description="Sistemas GC y HPLC a precio accesible para universidades y centros de investigación. Equipo reacondicionado certificado, paquetes de docencia y capacitación completa de académicos y estudiantes."
        accent="dark"
        ctaLabel="Cotizar para academia"
        ctaWhatsappText="Quiero cotizar equipo para universidad o centro de investigación"
      />

      {/* ── USE CASES ────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Casos de uso</span>
            <h2>Cromatografía en la academia.</h2>
            <p>Desde prácticas de licenciatura hasta proyectos de investigación de posgrado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {useCases.map((uc) => (
              <article key={uc.title} className="bg-surface border border-outline rounded-2xl p-6 hover:border-technical-blue hover:shadow-lg transition-all">
                <span className="text-3xl">{uc.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark mt-4">{uc.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{uc.desc}</p>
                <div className="mt-3 pt-3 border-t border-outline-variant">
                  <p className="text-xs text-muted-blue-grey">{uc.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Paquetes</span>
            <h2>Configuraciones para academia.</h2>
            <p>Paquetes pensados para presupuestos universitarios con todo lo necesario para comenzar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {packages.map((pkg) => (
              <article key={pkg.title} className="bg-paper border border-outline rounded-2xl p-7 flex flex-col hover:border-technical-blue hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-primary-dark">{pkg.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2">{pkg.desc}</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-outline-variant">
                  <span className="bg-light-blue/10 text-light-blue px-3 py-1 rounded-full text-xs font-mono">{pkg.type}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Ventajas para academia</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Tecnología de clase mundial al alcance de tu presupuesto.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Entendemos que los presupuestos académicos son diferentes. Por eso ofrecemos opciones flexibles que incluyen equipo reacondicionado certificado, paquetes de consumibles y planes de capacitación.
              </p>
            </div>

            <div className="space-y-3">
              {advantages.map((a) => (
                <div key={a.title} className="flex gap-4 p-5 bg-surface border border-outline rounded-xl hover:border-technical-blue transition">
                  <div className="bg-technical-blue/10 text-technical-blue w-11 h-11 flex items-center justify-center shrink-0 rounded-xl">
                    {a.icon}
                  </div>
                  <div>
                    <b className="text-sm text-primary-dark">{a.title}</b>
                    <p className="text-xs text-muted-blue-grey mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA
        title="¿Necesitas equipo para tu universidad o centro de investigación?"
        description="Cuéntanos tu proyecto, tu presupuesto y tus necesidades. Te armamos una propuesta adaptada."
        ctaLabel="Cotizar para academia"
        ctaWhatsappText="Quiero cotizar equipo para universidad o centro de investigación"
      />
    </>
  )
}
