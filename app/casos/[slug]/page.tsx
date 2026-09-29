import Link from 'next/link'
import type {Metadata} from 'next'
import {PageHero} from '@/components/PrototypePages'

type Params = {params: Promise<{slug: string}>}

const cases: Record<
  string,
  {
    eyebrow: string
    title: string
    lead: string
    body: string[]
    bullets: string[]
    image?: string
    imageAlt?: string
  }
> = {
  'hplc-furfural-azucares-bebidas': {
    eyebrow: 'Bebidas alcohólicas · HPLC · UV + RID',
    title: 'Integración de HPLC para furfural y azúcares en un laboratorio de bebidas alcohólicas.',
    lead: 'Suministro e instalación de un sistema HPLC con detección UV y RID, selección de columnas, montaje del método, calificación IQ/OQ y capacitación del personal.',
    body: [
      'El laboratorio dependía de un tercero para liberar sus lotes. Con el sistema instalado y el método montado en casa, libera el mismo día en que toma la muestra y mantiene un histórico comparable entre campañas.',
    ],
    bullets: [
      'Suministro e instalación de HPLC con UV y RID',
      'Selección de columnas para furfural y azúcares',
      'Montaje de condiciones y verificación del método',
      'Calificación IQ/OQ y capacitación en sitio',
    ],
    image: '/images/caso-hplc-furfural-detalle.png',
    imageAlt: 'Sistema ChroZen HPLC instalado en un laboratorio de bebidas alcohólicas',
  },
  'optimizacion-gc-hplc-alimentos': {
    eyebrow: 'Alimentos y confitería · GC · HPLC',
    title: 'Optimización de GC y HPLC en un laboratorio de alimentos y confitería.',
    lead: 'Diagnóstico de la instalación existente, intervención multimarca sobre equipos de GC y HPLC, y ajuste de condiciones de trabajo para estabilizar la operación diaria.',
    body: [
      'El laboratorio operaba equipos de distintas marcas con resultados intermitentes. Tras el diagnóstico se intervino cada sistema y se ajustaron las condiciones de trabajo, con reporte y pruebas de cierre.',
    ],
    bullets: [
      'Diagnóstico de instalación y estado de los equipos',
      'Intervención multimarca (GC y HPLC)',
      'Ajuste de condiciones de trabajo por método',
      'Reporte con pruebas de cierre',
    ],
    image: '/images/caso-optimizacion-gc-hplc-detalle.png',
    imageAlt: 'Sistema ChroZen HPLC instalado en un laboratorio de análisis de alimentos',
  },
}

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({slug}))
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {slug} = await params
  const c = cases[slug]
  return {
    title: c ? `${c.title} | Casos SOLINSA` : 'Caso | SOLINSA',
    description: c?.lead,
  }
}

export default async function CasoDetallePage({params}: Params) {
  const {slug} = await params
  const c = cases[slug]
  if (!c) {
    return (
      <>
        <PageHero
          crumb="Casos"
          eyebrow="Caso"
          title="No encontramos este caso."
          lead="Revisa el listado completo de casos de éxito."
        />
        <section className="section">
          <div className="container">
            <Link href="/casos" className="text-link">
              ← Ver todos los casos
            </Link>
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      <PageHero crumb="Casos de éxito" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <section className="section">
        <div className="container hero-grid">
          <div className="stack">
            <h2>El caso</h2>
            {c.body.map((p) => (
              <p className="lead" key={p.slice(0, 20)}>
                {p}
              </p>
            ))}
            <Link href="/casos" className="text-link">
              ← Ver todos los casos
            </Link>
          </div>
          <div className="stack">
            <article className="card accent">
              <h4>Qué entregó Solinsa</h4>
              <ul className="feature-list">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {c.image ? (
                <div className="placeholder" style={{minHeight: 160, marginTop: 16}}>
                  <img src={c.image} alt={c.imageAlt ?? 'Fotografía real del sistema instalado'} />
                </div>
              ) : (
                <div className="placeholder" style={{minHeight: 160, marginTop: 16}}>
                  <strong>Fotografía pendiente</strong>
                  <span>Fotografía real del sistema instalado.</span>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
