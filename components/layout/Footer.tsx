import Link from "next/link";

const SOLUTIONS_LINKS = [
  { label: "HPLC", href: "/soluciones/hplc" },
  { label: "GC", href: "/soluciones/gc" },
  { label: "Preparacion de Muestra", href: "/soluciones/preparacion-de-muestra" },
  { label: "Consumibles", href: "/soluciones/consumibles" },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Notas de Aplicacion", href: "/recursos/notas-de-aplicacion" },
  { label: "Webinars", href: "/recursos/webinars" },
  { label: "Soporte Tecnico", href: "/recursos/soporte-tecnico" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linked_in" },
  { label: "Twitter", href: "https://twitter.com", icon: "social_leaderboard" },
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
              className="font-heading text-2xl font-bold uppercase tracking-tighter text-white"
            >
              SOLINSA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Ingenieria y soluciones tecnologicas para analisis quimico,
              cromatografia y espectrometria. Mas de 25 anos de experiencia en
              el mercado mexicano.
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

          {/* Column 4: Sedes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Sedes
            </h4>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  location_on
                </span>
                <div>
                  <p className="text-sm text-slate-300">Monterrey, NL</p>
                  <p className="text-sm text-slate-400">Mexico</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  call
                </span>
                <p className="text-sm text-slate-300">+52 (81) 1234-5678</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-lg text-slate-400">
                  mail
                </span>
                <p className="text-sm text-slate-300">info@solinsa.com</p>
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
