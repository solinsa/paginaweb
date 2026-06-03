import Link from 'next/link'

const WA = 'https://wa.me/5218123554766'

interface ServicioHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaWhatsappText?: string
  accent?: 'blue' | 'dark' | 'green' | 'red'
}

const accentMap = {
  blue: 'bg-technical-blue',
  dark: 'bg-primary-dark',
  green: 'bg-green',
  red: 'bg-[#B91C1C]',
}

export default function ServicioHero({
  eyebrow,
  title,
  subtitle,
  description,
  ctaLabel = 'Solicitar este servicio',
  ctaWhatsappText,
  accent = 'dark',
}: ServicioHeroProps) {
  const waText = ctaWhatsappText || `Solicito servicio de ${eyebrow}`
  const waLink = `${WA}?text=${encodeURIComponent(waText)}`

  return (
    <header className={`${accentMap[accent]} text-white pt-20 pb-24 px-margin-desktop`}>
      <div className="max-w-container-max mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
          <Link href="/" className="hover:text-white/80 transition-colors">Inicio</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M9 18l6-6-6-6" /></svg>
          <Link href="/servicio" className="hover:text-white/80 transition-colors">Servicio</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-white/80">{eyebrow}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
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
              <Link href="/servicio" className="btn btn-ghost on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[17px] h-[17px]">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Todos los servicios
              </Link>
            </div>
          </div>

          {/* Right — Quick contact card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-5">Respuesta inmediata</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-white/50">Teléfono</p>
                  <p className="text-sm text-white font-semibold">+52 (81) 2355-4766</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </div>
                <div>
                  <p className="text-xs text-white/50">Tiempo de respuesta</p>
                  <p className="text-sm text-white font-semibold">&lt; 24 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-energetic-yellow/20 text-energetic-yellow w-9 h-9 flex items-center justify-center rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <p className="text-xs text-white/50">Cobertura</p>
                  <p className="text-sm text-white font-semibold">Nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
