import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="bg-primary-blue text-white pt-20 pb-10 px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 — Logo + Description + Social (spans 2 cols on md+) */}
          <div className="md:col-span-2">
            <img
              src="/logo-solinsa.png"
              alt="SOLINSA Logo"
              className="h-14 w-auto object-contain mb-8 brightness-0 invert"
            />
            <p className="text-body-md text-white/80 mb-8 max-w-md leading-relaxed">
              En SOLINSA innovamos el mantenimiento industrial en México.
              Ofrecemos soluciones integrales en limpieza criogénica,
              restauración de activos, formación técnica y productos
              especializados que transforman la confiabilidad de tus equipos.
            </p>
            <div className="flex items-center gap-4">
              {/* Social icon circle — Share */}
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Compartir"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              {/* Social icon circle — LinkedIn */}
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Compañía */}
          <div>
            <h5 className="text-label-md font-bold uppercase tracking-[0.2em] mb-8 text-energetic-yellow">
              Compañía
            </h5>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/nosotros"
                  className="text-white/70 hover:text-white transition-colors text-body-md"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-de-privacidad"
                  className="text-white/70 hover:text-white transition-colors text-body-md"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-white/70 hover:text-white transition-colors text-body-md"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/cumplimiento-normativo"
                  className="text-white/70 hover:text-white transition-colors text-body-md"
                >
                  Cumplimiento Normativo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <h5 className="text-label-md font-bold uppercase tracking-[0.2em] mb-8 text-energetic-yellow">
              Contacto
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ventas@solinsa.com"
                  className="text-white/70 hover:text-white transition-colors text-body-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Ventas
                </a>
              </li>
              <li>
                <a
                  href="mailto:soporte@solinsa.com"
                  className="text-white/70 hover:text-white transition-colors text-body-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">engineering</span>
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-body-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  México
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-label-sm text-white/40 uppercase tracking-widest">
            &copy; 2024 SOLINSA S.A. DE C.V. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
