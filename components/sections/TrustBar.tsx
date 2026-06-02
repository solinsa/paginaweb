export default function TrustBar() {
  const items = [
    {
      icon: 'biotech',
      title: 'Equipos analíticos',
      description: 'GC, GCMS, HPLC, IC, UV-Vis, FTIR, AAS, sistemas de agua.',
    },
    {
      icon: 'engineering',
      title: 'Servicio técnico',
      description: 'Soporte multimarca: Agilent, Shimadzu, Waters, Young In Chromass.',
    },
    {
      icon: 'science',
      title: 'Métodos analíticos',
      description: 'Montaje, optimización, capacitación y soporte experto.',
    },
    {
      icon: 'assignment_turned_in',
      title: 'Cumplimiento',
      description: 'IQ/OQ/PQ y documentación técnica para auditorías.',
    },
  ];

  return (
    <section className="bg-primary-blue py-16 px-margin-desktop overflow-hidden border-y-4 border-energetic-yellow">
      <div className="max-w-container-max mx-auto">
        <p className="text-white font-headline-sm text-headline-sm mb-12 text-center max-w-4xl mx-auto">
          Más que venta de equipos: soporte completo para que tu laboratorio opere,
          valide y pase auditorías.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 border-l-2 border-light-blue/30 pl-6"
            >
              <span className="material-symbols-outlined text-energetic-yellow text-4xl">
                {item.icon}
              </span>
              <h3 className="text-white font-label-md text-label-md uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
