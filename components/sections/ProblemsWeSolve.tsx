export default function ProblemsWeSolve() {
  const cards = [
    {
      icon: 'shopping_cart',
      title: 'Venta de equipo nuevo',
      description:
        'Te ayudamos a elegir la configuración correcta según tu método, norma y presupuesto.',
    },
    {
      icon: 'build',
      title: 'Equipo obsoleto o con fallas',
      description:
        'Mantenimiento preventivo, correctivo y soporte multimarca para extender vida útil.',
    },
    {
      icon: 'analytics',
      title: 'Validación de métodos',
      description:
        'Acompañamos en columnas, detectores, solventes y condiciones óptimas de operación.',
    },
  ];

  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-md text-primary-blue mb-4">
          ¿Tu laboratorio necesita resultados confiables y soporte técnico real?
        </h2>
        <div className="w-24 h-1 bg-technical-blue mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cards 1-3 (regular) */}
        {cards.map((card) => (
          <div
            key={card.icon}
            className="p-8 border border-light-grey rounded-lg bg-surface hover:border-light-blue hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded bg-light-grey flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-technical-blue text-3xl">
                {card.icon}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-blue mb-3">
              {card.title}
            </h3>
            <p className="text-muted-blue-grey text-body-md">
              {card.description}
            </p>
          </div>
        ))}

        {/* Card 4 (wider / md:col-span-2) */}
        <div className="md:col-span-2 p-8 border border-light-grey rounded-lg bg-light-grey hover:border-light-blue transition-all flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="w-14 h-14 rounded bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-technical-blue text-3xl">
                description
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-blue mb-3">
              Auditorías y normatividad
            </h3>
            <p className="text-muted-blue-grey text-body-md">
              Apoyamos con protocolos IQ/OQ/PQ, trazabilidad total y
              documentación técnica para entes regulatorios.
            </p>
          </div>
          <div className="w-full md:w-1/3 h-40 bg-white rounded border border-light-grey flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-6xl text-light-blue/20">
              inventory
            </span>
          </div>
        </div>

        {/* Card 5 (dark CTA) */}
        <div className="p-8 border border-primary-blue rounded-lg bg-primary-blue text-white hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 rounded bg-white/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-energetic-yellow text-3xl">
              hub
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-3">
            Integrador independiente
          </h3>
          <p className="text-white/80 text-body-md">
            Combinamos las mejores tecnologías del mercado para resolver el reto
            analítico real, no solo vender una marca específica.
          </p>
        </div>
      </div>
    </section>
  );
}
