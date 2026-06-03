import Link from 'next/link'

const WA = 'https://wa.me/5218123554766'

interface IndustriasHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaWhatsappText?: string
  accent?: 'blue' | 'dark' | 'green' | 'yellow' | 'orange'
}

const accentMap = {
  blue: 'bg-technical-blue',
  dark: 'bg-primary-dark',
  green: 'bg-green',
  yellow: 'bg-energetic-yellow',
  orange: 'bg-[#B45309]',
}

export default function IndustriasHero({
  eyebrow,
  title,
  subtitle,
  description,
  ctaLabel = 'Cotizar para mi industria',
  ctaWhatsappText,
  accent = 'dark',
}: IndustriasHeroProps) {
  const waText = ctaWhatsappText || `Quiero soluciones para la industria ${eyebrow}`
  const waLink = `${WA}?text=${encodeURIComponent(waText)}`

  return (
    <header className={`${accentMap[accent]} text-white pt-20 pb-24 px-margin-desktop`}>
      <div className="max-w-container-max mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
          <Link href="/" className="hover:text-white/80 transition-colors">Inicio</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <Link href="/industrias" className="hover:text-white/80 transition-colors">Industrias</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-white/80">{eyebrow}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="eyebrow on-dark">{eyebrow}</span>
          <h1 className="h1 !text-white mt-5">{title}</h1>
          <p className="text-white/50 text-sm font-mono uppercase tracking-wider mt-3">{subtitle}</p>
          <p className="lead !text-white/70 mt-6">{description}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={waLink} target="_blank" className="btn btn-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              {ctaLabel}
            </Link>
            <Link href="/industrias" className="btn btn-ghost on-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Todas las industrias
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
