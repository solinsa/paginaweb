'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ViewToggle, type ViewMode } from '@/components/ui';
import { ProductCard } from '@/components/sections/ProductCard';
import { categoriesMap } from '@/lib/soluciones-data-index';

const categoryFilters = [
  { id: 'hplc', label: 'HPLC Systems', icon: 'science' },
  { id: 'gc', label: 'Gas Chromatography', icon: 'precision_manufacturing' },
  { id: 'ms', label: 'Mass Spectrometry', icon: 'settings_input_component' },
  { id: 'columns', label: 'Columns & Consumables', icon: 'biotech' },
  { id: 'software', label: 'Software', icon: 'analytics' },
];

export default function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = use(params);
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const category = categoriesMap[categoria] || categoriesMap['hplc'];

  return (
    <div className="pt-20 flex min-h-screen">
      {/* Side Navigation */}
      <aside className="hidden lg:flex flex-col h-screen w-72 sticky top-20 overflow-y-auto bg-surface-container-low py-8 px-6 space-y-2 text-sm font-medium">
        <div className="mb-6 px-2">
          <h3 className="font-heading font-extrabold text-lg tracking-tight text-on-surface">
            Filtrado Técnico
          </h3>
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">
            Precisión Clínica
          </p>
        </div>
        <div className="space-y-1">
          {categoryFilters.map((filter) => {
            const isActive = filter.id === categoria;
            return (
              <Link
                key={filter.id}
                href={`/soluciones/${filter.id}`}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-white text-secondary font-bold ml-2 shadow-sm'
                    : 'text-slate-600 hover:pl-5 hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined">{filter.icon}</span>
                <span>{filter.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="pt-8 mt-4 border-t border-slate-200 space-y-1">
          <div className="px-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Soporte
          </div>
          <a className="flex items-center space-x-3 p-3 text-slate-600 hover:pl-5 transition-all" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            <span>Soporte Técnico</span>
          </a>
          <a className="flex items-center space-x-3 p-3 text-slate-600 hover:pl-5 transition-all" href="#">
            <span className="material-symbols-outlined">download</span>
            <span>Descargas</span>
          </a>
        </div>
        <div className="mt-auto pt-8">
          <button className="w-full py-4 bg-primary text-white rounded-xl font-heading font-bold text-sm shadow-xl hover:scale-[0.98] transition-transform flex items-center justify-center space-x-2">
            <span className="material-symbols-outlined text-sm">request_quote</span>
            <span>Solicitar Cotización</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-surface-bright px-8 lg:px-16 py-12">
        {/* Breadcrumbs & Title */}
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-xs text-on-surface-variant font-medium mb-4">
            <Link href="/soluciones" className="hover:text-secondary transition-colors">
              Equipos
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-secondary">{category.breadcrumb}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-on-surface leading-tight">
                {category.title}
              </h1>
              <p className="mt-4 text-on-surface-variant text-lg leading-relaxed">
                {category.description}
              </p>
            </div>
            <ViewToggle value={viewMode} onChange={setViewMode} />
          </div>
        </div>

        {/* Product Listings */}
        <div className="space-y-8">
          {category.products.map((product) => (
            <ProductCard
              key={product._id}
              slug={product.slug}
              title={product.title}
              description={product.description}
              image={product.image}
              badge={product.badge}
              badgeVariant={product.badgeVariant}
              icon={product.icon}
              specs={product.specs}
              primaryAction={product.primaryAction}
              secondaryAction={product.secondaryAction}
            />
          ))}
        </div>

        {/* Technical Authority CTA */}
        <section className="mt-20 bg-primary rounded-[2rem] overflow-hidden relative p-10 md:p-16 text-white">
          <div className="relative z-10 max-w-2xl">
            <span className="text-secondary-fixed text-xs font-bold uppercase tracking-[0.2em]">
              Configuraciones Personalizadas
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4 mb-6 leading-tight text-[#f59e0b]">
              {category.ctaTitle}
            </h2>
            <p className="text-on-primary-container text-lg mb-8 opacity-80 font-light">
              {category.ctaDescription}
            </p>
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-heading font-extrabold text-sm hover:bg-blue-50 transition-colors shadow-2xl">
              Consultar Especialista
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary-container/50 to-transparent pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span
              className="material-symbols-outlined text-[300px]"
              style={{ fontVariationSettings: "'wght' 100" }}
            >
              precision_manufacturing
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
