import Link from 'next/link'

const WA_LINK = "https://wa.me/5218123554766";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-20 pb-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* ============================================================
            LEFT COLUMN — Copy
           ============================================================ */}
        <div className="z-10">
          <span className="eyebrow">Integrador técnico independiente</span>

          <h1 className="h1 mt-5">
            Equipos de cromatografía, servicio y soporte para laboratorios que{' '}
            <span className="accent">no pueden parar.</span>
          </h1>

          <p className="lead">
            En Solinsa integramos GC, GCMS, HPLC, UHPLC y preparación de
            muestras — con instalación, validación IQ/OQ/PQ, consumibles y
            soporte local en México. No vendemos equipos: resolvemos métodos
            analíticos para laboratorios que necesitan máxima productividad y
            uptime.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M8 11h6" />
                <path d="M11 8v6" />
              </svg>
              Encontrar el equipo correcto
            </a>
            <Link
              href={`${WA_LINK}?text=Solicito%20soporte%20t%C3%A9cnico%20para%20equipo%20de%20cromatograf%C3%ADa`}
              target="_blank"
              className="btn btn-ghost"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Solicitar soporte técnico
            </Link>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
              <circle cx="12" cy="12" r="10" fill="#059669" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
            </svg>
            <p className="text-label-sm text-muted-blue-grey max-w-md">
              Respuesta técnica en {'<'} 2 horas. Inventario local de consumibles y
              partes críticas. Cobertura nacional.
            </p>
          </div>
        </div>

        {/* ============================================================
            RIGHT COLUMN — Chromatogram Card
           ============================================================ */}
        <div className="bg-primary-dark text-white rounded-2xl p-6 shadow-2xl overflow-hidden">
          {/* ── Card header ── */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-label-sm uppercase tracking-widest text-white/60 font-mono">
              HPLC &middot; Cromatograma en vivo
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-energetic-yellow" />
            </div>
          </div>

          {/* ── SVG Chromatogram ── */}
          <div className="bg-[#0F1D38] rounded-xl p-2">
            <svg
              viewBox="0 0 400 150"
              className="w-full h-auto"
              role="img"
              aria-label="Cromatograma HPLC en vivo — 5 picos con gradiente de separación"
            >
              <defs>
                <linearGradient id="peak-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0871A9" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0871A9" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="peak-fill-glow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5395CF" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#0871A9" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5395CF" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Grid lines — horizontal */}
              <g stroke="white" strokeOpacity="0.06" strokeWidth="1">
                <line x1="10" y1="30" x2="390" y2="30" />
                <line x1="10" y1="60" x2="390" y2="60" />
                <line x1="10" y1="90" x2="390" y2="90" />
                <line x1="10" y1="120" x2="390" y2="120" />
              </g>

              {/* Grid lines — vertical (dashed) */}
              <g stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="2 4">
                <line x1="86" y1="10" x2="86" y2="140" />
                <line x1="162" y1="10" x2="162" y2="140" />
                <line x1="238" y1="10" x2="238" y2="140" />
                <line x1="314" y1="10" x2="314" y2="140" />
              </g>

              {/* Baseline */}
              <line x1="10" y1="135" x2="390" y2="135" stroke="white" strokeOpacity="0.1" strokeWidth="1" />

              {/* Gaussian peak shapes — filled area */}
              <path
                d="M 15,135
                   C 35,135 44,62 56,62
                   C 68,62 76,135 90,135
                   C 108,135 114,15 126,15
                   C 138,15 144,135 156,135
                   C 174,135 184,55 194,55
                   C 204,55 214,135 226,135
                   C 242,135 252,88 260,88
                   C 268,88 278,135 290,135
                   C 306,135 316,106 326,106
                   C 336,106 344,135 385,135
                   L 385,145 L 15,145 Z"
                fill="url(#peak-fill)"
              />

              {/* Glow overlay on main peak region */}
              <path
                d="M 90,135
                   C 108,135 114,15 126,15
                   C 138,15 144,135 156,135"
                fill="url(#peak-fill-glow)"
              />

              {/* Chromatogram trace line */}
              <path
                d="M 15,135
                   C 35,135 44,62 56,62
                   C 68,62 76,135 90,135
                   C 108,135 114,15 126,15
                   C 138,15 144,135 156,135
                   C 174,135 184,55 194,55
                   C 204,55 214,135 226,135
                   C 242,135 252,88 260,88
                   C 268,88 278,135 290,135
                   C 306,135 316,106 326,106
                   C 336,106 344,135 385,135"
                fill="none"
                stroke="#5395CF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Peak labels (annotations) */}
              <g fill="white" fillOpacity="0.3" fontFamily="monospace" fontSize="7">
                <text x="56" y="52" textAnchor="middle">1.87</text>
                <text x="126" y="8" textAnchor="middle">4.22</text>
                <text x="194" y="45" textAnchor="middle">6.15</text>
                <text x="260" y="78" textAnchor="middle">7.03</text>
                <text x="326" y="96" textAnchor="middle">8.40</text>
              </g>
            </svg>
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center">
              <p className="text-label-sm uppercase tracking-widest text-white/40 font-mono">
                Resoluci&oacute;n
              </p>
              <p className="text-display-sm font-bold text-energetic-yellow mt-0.5 text-xl">
                1.92 Rs
              </p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="text-label-sm uppercase tracking-widest text-white/40 font-mono">
                Tiempo
              </p>
              <p className="text-display-sm font-bold text-white mt-0.5 text-xl">
                8.4 min
              </p>
            </div>
            <div className="text-center">
              <p className="text-label-sm uppercase tracking-widest text-white/40 font-mono">
                Uptime
              </p>
              <p className="text-display-sm font-bold text-green mt-0.5 text-xl">
                99.4%
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
