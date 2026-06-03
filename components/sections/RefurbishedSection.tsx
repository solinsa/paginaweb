import Link from 'next/link'

export default function RefurbishedSection() {
  return (
    <section className="sec bg-paper">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="relative bg-gradient-to-br from-[#1B2A4A] to-[#2F4772] text-white rounded-2xl overflow-hidden">
          {/* Decorative radial glow circle at top-right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center p-12 lg:p-14">
            {/* LEFT side */}
            <div className="flex flex-col gap-5">
              <span className="eyebrow on-dark">Equipo reacondicionado</span>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Tecnología confiable a una fracción del costo.
              </h2>

              <p className="text-white/80 leading-relaxed max-w-lg">
                Todos nuestros equipos reacondicionados pasan por una rigurosa
                inspección técnica, limpieza profunda y pruebas de rendimiento antes
                de salir al cliente. Incluyen garantía operativa, instalación in
                situ y soporte local — la misma calidad de un equipo nuevo, sin el
                precio de lista.
              </p>

              {/* Tag chips */}
              <div className="flex flex-row flex-wrap gap-2">
                {['Probado y certificado', 'Con garantía', 'Instalación incluida', 'Soporte local'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-white/30 rounded-full px-3 py-1.5 text-xs font-mono text-white"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* RIGHT side */}
            <div className="flex flex-col gap-3">
              <Link href="/reacondicionado" className="btn btn-yellow">
                Ver equipo disponible
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="ml-2 h-5 w-5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

              <Link href="/contacto" className="btn btn-ghost on-dark">
                Consultar disponibilidad
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="ml-2 h-5 w-5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
