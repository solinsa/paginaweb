import Link from 'next/link'
import Image from 'next/image'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Casos de éxito | SOLINSA',
  description:
    'Proyectos reales de integración, montaje de métodos y servicio técnico de cromatografía realizados por SOLINSA en México.',
}

const cases = [
  {
    slug: 'hplc-furfural-azucares-bebidas',
    tag: 'Bebidas alcohólicas · HPLC · Integración',
    title: 'Integración de HPLC para furfural y azúcares en un laboratorio de bebidas alcohólicas',
    text: 'Suministro e instalación de HPLC con UV y RID, selección de columnas, montaje, IQ/OQ y capacitación.',
  },
  {
    slug: 'optimizacion-gc-hplc-alimentos',
    tag: 'Alimentos y confitería · GC · HPLC',
    title: 'Optimización de GC y HPLC en un laboratorio de alimentos y confitería',
    text: 'Diagnóstico de instalación, intervención multimarca y ajuste de condiciones de trabajo.',
  },
]

export default function CasosPage() {
  return (
    <>
      <header className="hero surface">
        <div className="container">
          <span className="eyebrow">Casos de éxito</span>
          <h1>Proyectos que ya están operando en laboratorios como el tuyo.</h1>
          <p className="lead">
            Cada caso resume el problema del laboratorio, la solución integrada y el
            resultado en operación diaria.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {cases.map((c) => (
              <article className="card" key={c.slug}>
                {c.slug === 'hplc-furfural-azucares-bebidas' ? (
                  <div className="case-image">
                    <Image
                      src="/images/caso-hplc-bebidas.png"
                      alt="Sistema HPLC ChroZen instalado en un laboratorio de bebidas alcohólicas"
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="placeholder" style={{minHeight: 190}}>
                    <strong>Fotografía pendiente</strong>
                    <span>Fotografía real del sistema y la actividad realizada.</span>
                  </div>
                )}
                <span className="badge blue">{c.tag}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
                <Link href={`/casos/${c.slug}`} className="text-link">
                  Ver el caso completo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
