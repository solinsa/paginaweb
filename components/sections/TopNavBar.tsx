'use client'

import Link from 'next/link'

// ─── Dropdown Data ────────────────────────────────────────────

const soluciones = [
  { href: '/soluciones', title: 'Todas las soluciones', description: 'Explora nuestro portafolio completo de equipos y servicios' },
  { href: '/soluciones/hplc-uhplc', title: 'HPLC/UHPLC', description: 'Cromatografía líquida de alta y ultra alta resolución' },
  { href: '/soluciones/gc-gcms', title: 'GC/GCMS', description: 'Cromatografía de gases y espectrometría de masas' },
  { href: '/soluciones/ic', title: 'IC', description: 'Cromatografía iónica para análisis de aniones y cationes' },
  { href: '/soluciones/consumibles', title: 'Consumibles', description: 'Columnas, estándares, filtros y accesorios para laboratorio' },
  { href: '/soluciones/reacondicionado', title: 'Reacondicionado', description: 'Equipos seminuevos certificados con garantía' },
]

const industrias = [
  { href: '/industrias/alimentos', title: 'Alimentos', description: 'Control de calidad e inocuidad alimentaria' },
  { href: '/industrias/ambiental', title: 'Ambiental', description: 'Monitoreo de agua, aire y suelos' },
  { href: '/industrias/farmaceutica', title: 'Farmacéutica', description: 'Pruebas de estabilidad y liberación de fármacos' },
  { href: '/industrias/academia', title: 'Academia', description: 'Investigación y docencia en cromatografía' },
]

const servicio = [
  { href: '/servicio/preventivo', title: 'Preventivo', description: 'Mantenimiento programado para máxima uptime' },
  { href: '/servicio/correctivo', title: 'Correctivo', description: 'Diagnóstico y reparación de equipos' },
  { href: '/servicio/iq-oq-pq', title: 'IQ/OQ/PQ', description: 'Cualificación de instalación, operación y desempeño' },
  { href: '/servicio/emergencia', title: 'Emergencia', description: 'Soporte técnico urgente 24/7' },
]

// ─── Inline SVG Icons ─────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13L2 4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

// ─── Nav Dropdown Item ───────────────────────────────────────-

function DropdownItem({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block px-5 py-3 hover:bg-paper transition-colors first:rounded-t-lg last:rounded-b-lg"
    >
      <b className="block text-sm text-primary-dark">{title}</b>
      <small className="block text-xs text-muted-blue-grey mt-0.5 leading-snug">{description}</small>
    </Link>
  )
}

// ─── Nav Link with Dropdown ───────────────────────────────────

function NavDropdown({
  label,
  items,
}: {
  label: string
  items: { href: string; title: string; description: string }[]
}) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-dark hover:text-technical-blue transition-colors cursor-pointer">
        {label}
        <ChevronDown />
      </button>
      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-light-grey py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        {items.map((item) => (
          <DropdownItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  )
}

// ─── TopNavBar ────────────────────────────────────────────────

export default function TopNavBar() {
  return (
    <>
      {/* ── Top Utility Bar ─────────────────────────────── */}
      <div className="bg-primary-dark text-white/70 text-xs h-10 flex items-center">
        <div className="max-w-container-max mx-auto px-margin-desktop w-full flex items-center justify-between">
          <span className="hidden sm:inline">
            Distribuidor oficial multimarca · Monterrey, N.L. · México
          </span>
          <span className="sm:hidden">
            Distribuidor oficial multimarca
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:ventas@solinsa.mx"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MailIcon />
              <span className="hidden lg:inline">ventas@solinsa.mx</span>
            </a>
            <a
              href="tel:+528123554766"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneIcon />
              <span className="hidden lg:inline">+52 (81) 2355-4766</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Sticky Header ──────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/86 backdrop-blur-md border-b border-light-grey">
        <div className="max-w-container-max mx-auto px-margin-desktop h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="shrink-0">
            <img
              className="h-10 w-auto object-contain"
              src="/logo-solinsa.png"
              alt="SOLINSA Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0">
            <NavDropdown label="Soluciones" items={soluciones} />
            <NavDropdown label="Industrias" items={industrias} />
            <NavDropdown label="Servicio" items={servicio} />

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-primary-dark hover:text-technical-blue transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/cotizar"
              className="text-sm font-semibold text-primary-dark hover:text-technical-blue transition-colors"
            >
              Cotizar
            </Link>
            <a
              href="https://wa.me/5218123554766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              Pedir asesoría
              <ArrowRight />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary-dark hover:text-technical-blue transition-colors"
            aria-label="Menú de navegación"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </>
  )
}
