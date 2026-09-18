import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cumplimiento Normativo | SOLINSA',
  description:
    'Certificaciones, normativas y estándares que SOLINSA cumple para garantizar la calidad y trazabilidad en instrumentación analítica.',
}

const WA = 'https://wa.me/522201432743'

const standards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'ISO 17025',
    subtitle: 'Competencia de laboratorios de ensayo y calibración',
    description:
      'Nuestros procesos de calibración y validación siguen los lineamientos de la norma ISO 17025, garantizando la trazabilidad metrológica y la competencia técnica de nuestros servicios.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
    title: 'Protocolos IQ/OQ/PQ',
    subtitle: 'Installation, Operational & Performance Qualification',
    description:
      'Realizamos protocolos de calificación de instalación, operación y desempeño con documentación completa para auditorías regulatorias. Alineados con prácticas GMP y USP <1058>.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: 'COFEPRIS',
    subtitle: 'Comisión Federal para la Protección contra Riesgos Sanitarios',
    description:
      'Nuestros equipos y servicios cumplen con los requisitos de COFEPRIS para la industria farmacéutica, alimentos y bebidas, asegurando la conformidad regulatoria en México.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: 'Métodos USP, EPA, AOAC, ASTM',
    subtitle: 'Validación de métodos analíticos internacionales',
    description:
      'Desarrollamos y validamos métodos conforme a farmacopea USP, métodos EPA para ambiental, métodos AOAC para alimentos y estándares ASTM para diversas aplicaciones industriales.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'NOM mexicanas',
    subtitle: 'Normas Oficiales Mexicanas aplicables',
    description:
      'Configuramos equipos y métodos para cumplimiento de NOM de agua (NOM-127), emisiones (NOM-043), alimentos (NOM-186, NOM-218) y más, según el sector del cliente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Buenas Prácticas de Laboratorio (BPL)',
    subtitle: 'GLP — Good Laboratory Practice',
    description:
      'Nuestros servicios de validación, calibración y mantenimiento documentado cumplen con principios BPL, esenciales para estudios regulados y trazabilidad ante auditorías.',
  },
]

const complianceItems = [
  'Documentación completa de instalación y puesta en marcha',
  'Certificados de calibración trazables a patrones nacionales',
  'Reportes de cualificación IQ/OQ/PQ con firmas técnicas',
  'Registros de mantenimiento preventivo y correctivo',
  'Trazabilidad de consumibles y refacciones utilizadas',
  'Manuales de operación y procedimientos en español',
  'Capacitación documentada del personal de laboratorio',
]

export default function CumplimientoNormativoPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Cumplimiento normativo</span>
            <h1 className="h1 !text-white mt-5">
              Tus equipos cumplen. Tus auditorías también.
            </h1>
            <p className="lead !text-white/70 mt-6">
              En SOLINSA no solo instalamos equipos: aseguramos que cada sistema
              cumpla con la normativa que tu industria y tus auditores exigen.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`${WA}?text=Necesito%20apoyo%20con%20cumplimiento%20normativo`}
                target="_blank"
                className="btn btn-yellow"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Consultar sobre normativa
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── ESTÁNDARES GRID ──────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Normativas y estándares</span>
            <h2>Cumplimiento integrado en cada proyecto.</h2>
            <p>
              Conocemos la normativa que tu laboratorio debe cumplir y configuramos
              la solución completa para que pases tu auditoría.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {standards.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-outline rounded-2xl p-8 hover:border-technical-blue transition-colors flex flex-col"
              >
                <div className="bg-technical-blue text-white w-12 h-12 flex items-center justify-center rounded-xl">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-dark mt-5">{s.title}</h3>
                <span className="text-xs font-mono uppercase tracking-wider text-technical-blue mt-1">
                  {s.subtitle}
                </span>
                <p className="text-sm text-muted-blue-grey mt-3 leading-relaxed flex-1">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ──────────────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Documentación y trazabilidad</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Todo documentado. Todo trazable.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                Cada servicio que realizamos genera documentación completa que puedes
                presentar ante auditorías, validaciones regulatorias y procesos de
                acreditación.
              </p>
            </div>

            <div className="bg-primary-dark text-white rounded-2xl p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Lo que entregamos
              </span>
              <div className="space-y-4 mt-6">
                {complianceItems.map((item) => (
                  <div key={item} className="flex gap-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FCC014" strokeWidth="2.4" className="w-5 h-5 shrink-0 mt-0.5">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAS ────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Por industria</span>
            <h2>Normativa específica para tu sector.</h2>
            <p>
              Cada industria tiene sus propias normas. Nosotros las conocemos y las aplicamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                industry: 'Farmacéutica',
                norms: ['USP <621>', 'ICH Q2(R1)', 'GMP', 'FDA 21 CFR Part 211'],
              },
              {
                industry: 'Alimentos y Bebidas',
                norms: ['NOM-186', 'NOM-218', 'AOAC', 'COFEPRIS'],
              },
              {
                industry: 'Ambiental',
                norms: ['EPA 524/525/8270', 'NOM-127', 'NOM-043', 'ISO 17025'],
              },
              {
                industry: 'Academia',
                norms: ['ISO 17025', 'NOM-001', 'GLP', 'Publicaciones peer-reviewed'],
              },
            ].map((ind) => (
              <div
                key={ind.industry}
                className="bg-white border border-outline rounded-2xl p-6 hover:border-technical-blue transition-colors"
              >
                <h3 className="font-bold text-primary-dark">{ind.industry}</h3>
                <ul className="mt-3 space-y-2">
                  {ind.norms.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-muted-blue-grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4 shrink-0">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-margin-desktop text-center">
          <span className="eyebrow on-dark">¿Tu auditoría está cerca?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Nosotros te ayudamos a pasarla.
          </h2>
          <p className="text-white/60 text-lg mt-4">
            Desde la calificación del equipo hasta la documentación completa para tu
            auditor. Cuéntanos qué necesitas cumplir.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href={`${WA}?text=Necesito%20apoyo%20para%20auditoría%20regulatoria`}
              target="_blank"
              className="btn btn-yellow"
            >
              Pedir asesoría regulatoria
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
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
