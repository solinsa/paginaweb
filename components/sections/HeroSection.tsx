import Link from 'next/link'

const WA_LINK = "https://wa.me/5218123554766";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden pt-20 pb-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="z-10">
          {/* Gradient divider line */}
          <div className="w-16 h-1 bg-corporate-gradient mb-8 rounded-full" />

          <h1 className="font-display text-display-lg text-primary-blue mb-6 leading-tight">
            Equipos de cromatografía, servicio técnico y soporte de métodos para laboratorios en México
          </h1>

          <p className="text-body-lg text-muted-blue-grey mb-8 max-w-xl">
            Integramos GC, GCMS, HPLC/UHPLC, cromatografía iónica, detectores especiales y preparación de muestras con instalación, capacitación, IQ/OQ/PQ, consumibles y soporte local.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/5218123554766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded font-label-md text-label-md flex items-center gap-2"
            >
              PEDIR ASESORÍA TÉCNICA
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <Link
              href="#industrias"
              className="border-2 border-technical-blue text-technical-blue px-8 py-4 rounded font-label-md text-label-md font-bold hover:bg-technical-blue/5 transition-all"
            >
              VER SOLUCIONES POR INDUSTRIA
            </Link>
          </div>

          {/* Trust badge */}
          <div className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-light-blue"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <p className="text-label-sm text-muted-blue-grey max-w-md uppercase tracking-wide">
              Especialistas en alimentos, ambiental, farma I+D, combustibles, polímeros, sabores y fragancias.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="relative">
          {/* Background blur decoration */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-light-blue/10 rounded-full blur-3xl" />

          {/* Image container */}
          <div className="relative rounded-lg overflow-hidden border border-light-grey shadow-2xl bg-light-grey">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQuZgKsFWv_xBuCoCbtNdLKbqxlcV6lsQlmn5hmP0riT2BlW_rybrV08QqO0t8up2LEZ2-6R1UklTdUNWL54Rb57d7PMuRFON6DfuS9OD51nJ-yec6UvaitszcwIPFOozw-FazKHU0O9_o0yDONGNa2R8HYzCUiZPenZ_m0nKMlron79G7_f9JifbMSvs6Z66NfzOgX8cF6pQyPDkKF3GOT1B_jaXhf86UQWEdr5CwUPokvpSVRFoMKkm_aMjZYHjQrVRafJfJAk"
              alt="Laboratorio de Cromatografía SOLINSA"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
