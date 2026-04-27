import { notFound } from 'next/navigation';
import { ProductConfigCard } from '@/components/sections/ProductConfigCard';
import { productDetailsMap } from '@/lib/soluciones-data-index';

export function generateStaticParams() {
  return Object.keys(productDetailsMap).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productDetailsMap[slug];

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase rounded">
            {product.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter leading-tight">
            {product.title}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {product.description}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold text-sm shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
              Solicitar Cotización y Configuración
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="bg-surface-container-highest text-on-primary-container px-8 py-4 rounded-lg font-bold text-sm hover:bg-surface-container-high transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Descargar Folleto PDF
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex-1 w-full">
          <div className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low">
            <img
              alt={product.images[0]?.alt || product.slug}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={product.images[0]?.src}
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {product.images.slice(1, 4).map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-lg overflow-hidden bg-surface-container-low border-2 border-transparent hover:border-secondary transition-all cursor-pointer"
                >
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    src={img.src}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Technical Specifications Table */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-secondary" />
          <h2 className="text-2xl font-extrabold text-on-surface tracking-tight uppercase">
            Especificaciones Técnicas
          </h2>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/10">
                <th className="px-8 py-5 text-sm font-bold text-on-surface uppercase tracking-widest">
                  Parámetro Técnico
                </th>
                <th className="px-8 py-5 text-sm font-bold text-on-surface uppercase tracking-widest">
                  Valor de Precisión
                </th>
                <th className="px-8 py-5 text-sm font-bold text-on-surface uppercase tracking-widest">
                  Metodología
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-surface-container-high">
              {product.specs.map((spec, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-container/50 transition-colors"
                >
                  <td className="px-8 py-6 font-semibold text-on-surface">
                    {spec.label}
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant">
                    {spec.value}
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant italic">
                    {spec.method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Configurations Available */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-secondary" />
          <h2 className="text-2xl font-extrabold text-on-surface tracking-tight uppercase">
            Configuraciones Disponibles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.configs.map((config) => (
            <ProductConfigCard
              key={config.ref}
              configRef={config.ref}
              icon={config.icon}
              title={config.title}
              description={config.description}
              features={config.features}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 100">
            <rect height="2" width="80" x="10" y="10" />
            <rect height="2" width="80" x="10" y="30" />
            <rect height="2" width="80" x="10" y="50" />
            <rect height="2" width="80" x="10" y="70" />
            <rect height="2" width="80" x="10" y="90" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#f59e0b] mb-2">
              ¿Necesita una solución personalizada?
            </h2>
            <p className="text-on-primary-container font-medium">
              Nuestros ingenieros expertos pueden configurar el Elite Series
              para sus requerimientos específicos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-secondary hover:bg-secondary-container transition-colors text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-tighter shadow-2xl">
              Solicitar Cotización y Configuración
            </button>
            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-xl transition-all border border-white/10 backdrop-blur-md">
              <span className="material-symbols-outlined">description</span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Ficha PDF
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
