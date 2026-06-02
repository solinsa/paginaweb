const WA_LINK = "https://wa.me/5218123554766";

export default function IntegratedSolutions() {
  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline text-headline-md text-primary-blue mb-12">
        Soluciones integradas listas para tu aplicación
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 — Ambiental */}
        <div className="border border-light-grey rounded-lg overflow-hidden hover:border-light-blue transition-all">
          <div className="bg-primary-blue text-white p-4 flex justify-between items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Ambiental</span>
            <span className="material-symbols-outlined text-sm">package_2</span>
          </div>
          <div className="p-8 bg-white">
            <h5 className="font-headline-sm text-headline-sm text-primary-blue mb-4">Análisis VOC / SVOC</h5>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                GC-MS Triple Cuadrupolo
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Purge &amp; Trap EST Analytical
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Métodos EPA certificados
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 border-2 border-technical-blue text-technical-blue font-bold rounded hover:bg-technical-blue hover:text-white transition-all text-center"
            >
              VER ESPECIFICACIONES
            </a>
          </div>
        </div>

        {/* Card 2 — Bebidas (featured) */}
        <div className="border border-technical-blue/30 rounded-lg overflow-hidden shadow-lg transform scale-105 z-10">
          <div className="bg-technical-blue text-white p-4 flex justify-between items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Bebidas</span>
            <span className="material-symbols-outlined text-sm">liquor</span>
          </div>
          <div className="p-8 bg-white">
            <h5 className="font-headline-sm text-headline-sm text-primary-blue mb-4">Tequila HPLC Prep</h5>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                UHPLC Gradiente Avanzado
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Detector DAD / VUV
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Optimización de tiempos
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 font-bold rounded shadow-lg block text-center"
            >
              VER ESPECIFICACIONES
            </a>
          </div>
        </div>

        {/* Card 3 — Energía */}
        <div className="border border-light-grey rounded-lg overflow-hidden hover:border-light-blue transition-all">
          <div className="bg-primary-blue text-white p-4 flex justify-between items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Energía</span>
            <span className="material-symbols-outlined text-sm">local_gas_station</span>
          </div>
          <div className="p-8 bg-white">
            <h5 className="font-headline-sm text-headline-sm text-primary-blue mb-4">NOM-016 Compliance</h5>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Analizador Wasson-ECE
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                DHA / RGA / PIONA
              </li>
              <li className="flex items-center gap-3 text-muted-blue-grey text-body-md">
                <span className="material-symbols-outlined text-technical-blue text-lg">check_circle</span>
                Reportes automatizados
              </li>
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 border-2 border-technical-blue text-technical-blue font-bold rounded hover:bg-technical-blue hover:text-white transition-all text-center"
            >
              VER ESPECIFICACIONES
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
