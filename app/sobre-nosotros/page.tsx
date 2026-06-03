import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | SOLINSA',
  description:
    'Más de 15 años como referente en cromatografía e instrumentación analítica en México. Conoce nuestra historia, misión y equipo.',
}

const WA = 'https://wa.me/5218123554766'

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '35+', label: 'Industrias atendidas' },
  { value: '500+', label: 'Equipos instalados' },
  { value: '100%', label: 'Servicio técnico local' },
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
    title: 'Compromiso con la calidad',
    description:
      'Cada equipo que instalamos pasa por rigurosos controles de calidad. No entregamos un sistema hasta que está funcionando según especificación.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Soporte humano y local',
    description:
      'Nuestro equipo técnico está en México. Respuesta directa, sin call centers ni tickets perdidos. Hablas con quien instaló tu equipo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a4 4 0 000 5.4l-6 6-3-3 6-6a4 4 0 015.4 0z" />
        <path d="M17.5 3.5l3 3" />
        <path d="M2.5 17.5l3 3" />
      </svg>
    ),
    title: 'Expertise técnico real',
    description:
      'No solo vendemos equipos: desarrollamos métodos, validamos procesos y capacitamos a tu equipo de laboratorio.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Confianza y transparencia',
    description:
      'Precios claros, tiempos de entrega reales y comunicaciones honestas. Nuestros clientes nos recomiendan porque cumplimos.',
  },
]

const timeline = [
  { year: '2009', event: 'Fundación de SOLINSA en Monterrey, N.L., enfocada en cromatografía de gases.' },
  { year: '2012', event: 'Expansión a HPLC/UHPLC y cromatografía iónica. Primeras instalaciones en industria farmacéutica.' },
  { year: '2015', event: 'Inicio de programa de equipo reacondicionado certificado. Alianza con laboratorios de referencia.' },
  { year: '2018', event: 'Consolidación como distribuidor exclusivo de marcas líderes en instrumentación analítica.' },
  { year: '2021', event: 'Expansión a 35+ industrias. Implementación de protocolos IQ/OQ/PQ para cumplimiento regulatorio.' },
  { year: '2024', event: 'Más de 500 equipos instalados en toda la República. Fortalecimiento del servicio técnico multimarca.' },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Sobre nosotros</span>
            <h1 className="h1 !text-white mt-5">
              Instrumentación analítica con respaldo real.
            </h1>
            <p className="lead !text-white/70 mt-6">
              Más de 15 años diseñando, instalando y dando servicio a equipos de
              cromatografía en México. Somos el equipo técnico que tu laboratorio necesita.
            </p>
          </div>
        </div>
      </header>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-energetic-yellow py-12">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-primary-dark">{s.value}</div>
                <div className="text-sm font-mono uppercase tracking-wider text-primary-dark/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ──────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Quiénes somos</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Somos especialistas en cromatografía, no un distribuidor genérico.
              </h2>
              <div className="space-y-4 mt-6 text-muted-blue-grey text-lg leading-relaxed">
                <p>
                  SOLINSA S.A. de C.V. es una empresa mexicana dedicada a la venta,
                  instalación y mantenimiento de equipos de cromatografía e instrumentación
                  analítica para laboratorios y la industria.
                </p>
                <p>
                  Somos distribuidores autorizados de marcas líderes como John King Cromas
                  y trabajamos con tecnologías de GC, GCMS, HPLC/UHPLC, cromatografía iónica,
                  detectores especializados y preparación de muestras.
                </p>
                <p>
                  Nuestro equipo técnico está capacitado para ir desde la selección del equipo
                  hasta la validación del método, la instalación IQ/OQ/PQ y la capacitación
                  de tu personal en sitio.
                </p>
              </div>
            </div>

            <div className="bg-white border border-outline rounded-2xl p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-technical-blue">
                Lo que nos distingue
              </span>
              <div className="space-y-4 mt-6">
                {[
                  'Servicio técnico especializado en México',
                  'Equipo nuevo y reacondicionado certificado',
                  'Desarrollo y validación de métodos analíticos',
                  'Protocolos IQ/OQ/PQ para cumplimiento regulatorio',
                  'Capacitación presencial en tu laboratorio',
                  'Soporte multimarca: Agilent, Shimadzu, Thermo y más',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-5 h-5 shrink-0 mt-0.5">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    <span className="text-sm text-muted-blue-grey">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Nuestros valores</span>
            <h2>Lo que guía cada proyecto que entregamos.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-paper border border-outline rounded-2xl p-8 hover:border-technical-blue transition-colors"
              >
                <div className="bg-technical-blue text-white w-12 h-12 flex items-center justify-center rounded-xl">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mt-5">{v.title}</h3>
                <p className="text-sm text-muted-blue-grey mt-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIA / TIMELINE ──────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Nuestra historia</span>
            <h2>De Monterrey para toda la República.</h2>
          </div>

          <div className="max-w-2xl mx-auto mt-14 space-y-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6 relative">
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-px h-full bg-outline" />
                )}
                {/* Dot */}
                <div className="w-10 h-10 shrink-0 rounded-full bg-technical-blue text-white flex items-center justify-center text-xs font-bold relative z-10">
                  {t.year.slice(-2)}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <span className="font-mono text-xs uppercase tracking-wider text-technical-blue">
                    {t.year}
                  </span>
                  <p className="text-sm text-muted-blue-grey mt-1 leading-relaxed">
                    {t.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <span className="eyebrow on-dark">¿Quieres conocernos?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Platiquemos sobre tu laboratorio.
          </h2>
          <p className="text-white/60 text-lg mt-4">
            Ya sea que necesites un equipo nuevo, servicio técnico o una cotización,
            estamos aquí para ayudarte.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href={`${WA}?text=Hola%2C%20quiero%20saber%20más%20sobre%20Solinsa`}
              target="_blank"
              className="btn btn-yellow"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Contáctanos por WhatsApp
            </Link>
            <Link href="/cotizar" className="btn btn-ghost on-dark">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
