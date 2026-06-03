import Link from 'next/link'

const WA = 'https://wa.me/5218123554766'

interface SolutionsHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaWhatsappText?: string
  accent?: 'blue' | 'dark' | 'green' | 'yellow'
}

const accentMap = {
  blue: 'bg-technical-blue',
  dark: 'bg-primary-dark',
  green: 'bg-green',
  yellow: 'bg-energetic-yellow',
}

export default function SolutionsHero({
  eyebrow,
  title,
  subtitle,
  description,
  ctaLabel = 'Cotizar esta solución',
  ctaWhatsappText,
  accent = 'blue',
}: SolutionsHeroProps) {
  const waText = ctaWhatsappText || `Quiero cotizar la solución de ${eyebrow}`
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
          <Link href="/soluciones" className="hover:text-white/80 transition-colors">Soluciones</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-white/80">{eyebrow}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <div>
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
              <Link href="/soluciones" className="btn btn-ghost on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Todas las soluciones
              </Link>
            </div>
          </div>

          {/* Right — Quick facts card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-5">Dato rápido</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">Instalación y validación IQ/OQ/PQ incluida</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">Capacitación de tu equipo en sitio</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">Soporte técnico local &lt; 24 horas</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">Consumibles y refacciones en inventario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
