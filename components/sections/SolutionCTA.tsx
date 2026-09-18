import Link from 'next/link'

const WA = 'https://wa.me/522201432743'

interface SolutionCTAProps {
  title: string
  description: string
  ctaLabel?: string
  ctaWhatsappText?: string
}

export default function SolutionCTA({ title, description, ctaLabel = 'Cotizar esta solución', ctaWhatsappText }: SolutionCTAProps) {
  const waLink = `${WA}?text=${encodeURIComponent(ctaWhatsappText || `Quiero cotizar una solución de ${title}`)}`

  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="max-w-3xl mx-auto px-margin-desktop text-center">
        <span className="eyebrow on-dark">Siguiente paso</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">{title}</h2>
        <p className="text-white/60 text-lg mt-4">{description}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href={waLink} target="_blank" className="btn btn-yellow">
            {ctaLabel}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="/soluciones" className="btn btn-ghost on-dark">
            Ver todas las soluciones
          </Link>
        </div>
      </div>
    </section>
  )
}
