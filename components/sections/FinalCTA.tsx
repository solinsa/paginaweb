import Link from "next/link";

const WA_LINK = "https://wa.me/522201432743";

export default function FinalCTA() {
  return (
    <section className="text-center py-20 bg-white">
      <div className="max-w-3xl mx-auto px-margin-desktop">
        <p className="eyebrow center">Asesoría sin compromiso</p>
        <h2 className="font-headline text-headline-md text-primary-blue mb-6">
          ¿Dudas sobre qué técnica necesita tu análisis?
        </h2>
        <p className="text-body-lg text-muted-blue-grey mb-12">
          Nuestro equipo técnico revisa tu muestra, analitos y norma vigente
          para recomendar la solución instrumental correcta.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quiero asesoría técnica
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
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Cotizar una solución
          </Link>
        </div>
      </div>
    </section>
  );
}
