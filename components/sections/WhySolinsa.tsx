const features = [
  { icon: 'support_agent', title: 'Soporte local especializado', description: 'Ingenieros capacitados en fábrica para servicio inmediato en sitio dentro de México.' },
  { icon: 'layers', title: 'Especialistas multimarca', description: 'Mantenemos la integridad de toda su línea analítica sin importar el fabricante original.' },
  { icon: 'settings_suggest', title: 'Soluciones por método', description: 'No vendemos cajas; entregamos soluciones configuradas para su analito y normativa específica.' },
];

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '100%', label: 'Local en México' },
  { value: '+12', label: 'Marcas líderes' },
  { value: 'IQ/OQ', label: 'Certificaciones' },
];

export default function WhySolinsa() {
  return (
    <section className="bg-primary-blue text-white py-24 px-margin-desktop relative overflow-hidden">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-corporate-gradient" />

      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left column — Features */}
        <div className="flex-1">
          <h2 className="font-headline text-headline-md mb-8">
            Un integrador técnico, no solo un vendedor de equipos
          </h2>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-light-blue/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-energetic-yellow">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Stats grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm text-center"
              >
                <div className="text-display-lg font-black text-energetic-yellow mb-2">
                  {stat.value}
                </div>
                <p className="text-label-sm uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
