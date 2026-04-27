import Link from "next/link";

const SOLUTIONS_LINKS = [
  { label: "HPLC", href: "#metodos" },
  { label: "GC", href: "#metodos" },
  { label: "Preparación de Muestra", href: "#metodos" },
  { label: "Consumibles", href: "#metodos" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Notas de Aplicacion", href: "/blog?tab=notas" },
  { label: "Webinars", href: "/blog?tab=webinars" },
  { label: "Soporte Tecnico", href: "/contacto" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/solinsa", icon: "linked_in" },
  { label: "Facebook", href: "https://www.facebook.com/solinsamexico", icon: "thumb_up" },
  { label: "YouTube", href: "https://youtube.com", icon: "play_circle" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-16 md:px-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Logo + description + socials */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-block"
              aria-label="Solinsa - Inicio"
            >
              <img
                src="/logo-solinsa.png"
                alt="Solinsa Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Tu aliado en cromatografía y espectroscopía. Mantenimiento
              multimarca, calibración, repuestos y consultoría para que tu
              laboratorio opere al 100%.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                >
                  <span className="material-symbols-outlined text-lg">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Soluciones */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Soluciones
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-secondary-container"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recursos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Recursos
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-secondary-container"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Contacto
            </h4>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  call
                </span>
                <p className="text-sm text-slate-300">+52 81 8100 0234</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  mail
                </span>
                <a
                  href="mailto:info@solinsa.com"
                  className="text-sm text-slate-300 transition-colors hover:text-secondary-container"
                >
                  info@solinsa.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  location_on
                </span>
                <p className="text-sm text-slate-300">Monterrey, NL, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Solinsa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-sm text-slate-400 transition-colors hover:text-secondary-container"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-slate-400 transition-colors hover:text-secondary-container"
            >
              Terminos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
