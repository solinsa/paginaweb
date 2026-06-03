interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const items: TrustItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-6 h-6">
        <path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M7 3h10" />
      </svg>
    ),
    title: "Equipos analíticos",
    description:
      "GC, GCMS, HPLC, IC, UV-Vis, FTIR, AAS y sistemas de agua para cada aplicación.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-6 h-6">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
      </svg>
    ),
    title: "Servicio técnico",
    description:
      "Soporte multimarca para todas las marcas reconocidas de cromatografía de gases y líquidos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-6 h-6">
        <path d="M10 2v6.3a2 2 0 0 1-.4 1.2L4 18a2 2 0 0 0 1.6 3.2h12.8A2 2 0 0 0 20 18l-5.6-8.5a2 2 0 0 1-.4-1.2V2" />
        <path d="M8 2h8" />
      </svg>
    ),
    title: "Métodos analíticos",
    description:
      "Montaje, optimización, capacitación y soporte experto para tu analito específico.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-6 h-6">
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Cumplimiento",
    description:
      "IQ/OQ/PQ y documentación técnica completa para auditorías y entes regulatorios.",
  },
];

export default function TrustBar() {
  return (
    <section className="sec">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="sec-head">
          <span className="eyebrow">Más que venta de equipos</span>
          <h2>
            Soporte completo para que tu laboratorio opere, valide y pase
            auditorías.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-outline rounded-2xl overflow-hidden bg-surface mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 lg:p-8 ${
                index < items.length - 1
                  ? "border-r border-outline"
                  : ""
              }`}
            >
              <div className="bg-paper text-technical-blue w-11 h-11 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-blue-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
