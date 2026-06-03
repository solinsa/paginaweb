import Link from 'next/link';

const brands = [
  { name: 'Young In Chromass', category: 'GC · HPLC · IC' },
  { name: 'QTEK', category: 'Automatización' },
  { name: 'Shine', category: 'Instrumentación' },
  { name: 'VUV Analytics', category: 'Detección VUV' },
  { name: 'Ellutia', category: 'GC · ECD' },
  { name: 'HTA', category: 'Automuestreo' },
  { name: 'CDS Analytical', category: 'Prep. de muestras' },
  { name: 'EST Analytical', category: 'Purge & Trap' },
  { name: 'Wasson-ECE', category: 'GC a la medida' },
  { name: 'Persee', category: 'UV-Vis · AAS' },
  { name: 'Trajan', category: 'Consumibles' },
  { name: 'Wiley', category: 'Librerías MS' },
];

export default function Brands() {
  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="sec-head text-center mb-16">
          <span className="eyebrow on-dark">Distribuidor oficial</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Tecnologías líderes y equipos especializados.
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="border border-white/10 rounded-xl p-4 text-center bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition"
            >
              <b className="text-sm font-semibold">{brand.name}</b>
              <small className="block text-[10px] font-mono uppercase tracking-wider text-blue-300/70 mt-1">
                {brand.category}
              </small>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-white/60">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="w-5 h-5 text-blue-300/70 shrink-0"
          >
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span>
            Damos servicio a cualquier marca — incluidas las que no
            distribuimos.
          </span>
        </div>
      </div>
    </section>
  );
}
