const brands = [
  'Young In Chromass',
  'QTEK',
  'Shine',
  'VUV Analytics',
  'Ellutia',
  'HTA',
  'CDS Analytical',
  'EST Analytical',
  'Wasson-ECE',
  'Persee',
  'Trajan',
  'Wiley',
];

export default function Brands() {
  return (
    <section className="py-16 px-margin-desktop bg-surface border-y border-light-grey">
      <div className="max-w-container-max mx-auto text-center mb-10">
        <h3 className="text-label-sm text-muted-blue-grey uppercase tracking-[0.2em] font-bold">
          Tecnologías líderes y equipos especializados
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {brands.map((brand) => (
          <span key={brand} className="font-bold text-lg text-primary-blue">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
