import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-primary-dark text-blue-200/80 pt-16 pb-8">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COL 1 - Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <img
              src="/logo-solinsa.png"
              alt="Solinsa"
              className="invert brightness-0 h-10 w-auto mb-4"
            />
            <h3 className="text-white font-bold text-xl">SOLINSA</h3>
            <p className="font-mono text-xs text-blue-300/60 uppercase tracking-widest mb-4">
              Soluciones en Instrumentación
            </p>
            <p className="text-sm text-blue-200/70 leading-relaxed">
              En SOLINSA ofrecemos soluciones integrales en instrumentación
              analítica para laboratorios y la industria. Contamos con equipos de
              cromatografía, servicio técnico especializado y equipo
              reacondicionado con la más alta calidad y respaldo.
            </p>
          </div>

          {/* COL 2 - Compañía */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-300/60 mb-6">
              Compañía
            </h4>
            <ul>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-de-privacidad"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/cumplimiento-normativo"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Cumplimiento normativo
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3 - Soluciones */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-300/60 mb-6">
              Soluciones
            </h4>
            <ul>
              <li>
                <Link
                  href="/hplc-uhplc"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  HPLC / UHPLC
                </Link>
              </li>
              <li>
                <Link
                  href="/gc-gcms"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  GC / GCMS
                </Link>
              </li>
              <li>
                <Link
                  href="/servicio-tecnico"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Servicio técnico
                </Link>
              </li>
              <li>
                <Link
                  href="/equipo-reacondicionado"
                  className="text-sm text-blue-200/70 hover:text-white transition py-1.5 block"
                >
                  Equipo reacondicionado
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4 - Contacto */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-300/60 mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ventas@solinsa.mx"
                  className="inline-flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition py-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  ventas@solinsa.mx
                </a>
              </li>
              <li>
                <a
                  href="mailto:soporte@solinsa.mx"
                  className="inline-flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition py-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" />
                  </svg>
                  soporte@solinsa.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/528123554766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-200/70 hover:text-white transition py-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  +52 81 2355 4766
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-blue-200/70 py-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Monterrey, N.L., México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300/50">
          <p>
            &copy; 2025 SOLINSA S.A. de C.V. Todos los derechos reservados.
          </p>
          <p>Distribuidor oficial · Servicio multimarca · Hecho en México</p>
        </div>
      </div>
    </footer>
  );
}
