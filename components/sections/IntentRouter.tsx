import Link from 'next/link';

const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Necesito equipo',
    description: 'Te ayudamos a elegir el cromatógrafo o espectrómetro ideal para tu método y presupuesto.',
    href: '/#soluciones',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.299.64l3.319-3.32a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Necesito servicio',
    description: 'Mantenimiento, reparación y calificación de equipos analíticos de cualquier marca.',
    href: '/#servicio',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
    title: 'Necesito consumibles',
    description: 'Columnas, lámparas, viales, estándares y refacciones para tu laboratorio analítico.',
    href: '/#soluciones',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
      </svg>
    ),
    title: 'No sé qué necesito',
    description: 'Revisamos tu muestra y metodología para recomendarte la solución más adecuada.',
    href: '/#cotizar',
  },
];

export default function IntentRouter() {
  return (
    <section className="sec center px-margin-desktop">
      <div className="sec-head center">
        <span className="eyebrow">¿Qué necesitas hoy?</span>
        <h2>Empieza por tu objetivo, no por el catálogo.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-container-max mx-auto">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col items-start text-left relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Left accent border — scales in on hover */}
            <span className="absolute left-0 top-0 w-[3px] h-full bg-technical-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

            <div className="bg-technical-blue text-white w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-4">
              {card.icon}
            </div>

            <h3 className="text-primary-dark font-semibold text-base mb-1.5">
              {card.title}
            </h3>

            <p className="text-muted-blue-grey text-sm leading-relaxed mb-auto">
              {card.description}
            </p>

            <span className="go mt-4">
              Conoce más
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
