'use client';

import { useState } from 'react';
import { SideNavBar } from '@/components/layout';
import { BlogHero } from '@/components/sections/BlogHero';
import { ResourceCard } from '@/components/sections/ResourceCard';
import { SubscriptionCTA } from '@/components/sections/SubscriptionCTA';
import { FilterTabs } from '@/components/ui/FilterTabs';
import type { FilterItem } from '@/components/layout/SideNavBar';
import type { BlogHeroPost } from '@/components/sections/BlogHero';
import type { ResourceCardPost } from '@/components/sections/ResourceCard';

// ---- Demo data matching Stitch design ----

const blogFilters: FilterItem[] = [
  { id: 'industria', label: 'Industria', icon: 'factory' },
  { id: 'metodo', label: 'Método Analítico', icon: 'science' },
  { id: 'hplc-gc', label: 'HPLC/GC', icon: 'biotech' },
  { id: 'espectrometria', label: 'Espectrometría', icon: 'query_stats' },
  { id: 'multimarca', label: 'Multimarca', icon: 'verified' },
];

const featuredPost: BlogHeroPost = {
  _id: 'featured-1',
  title: 'Optimización de Cromatografía Líquida en Entornos de Alta Presión',
  slug: 'optimizacion-cromatografia-liquida-alta-presion',
  excerpt:
    'Descubra cómo las nuevas arquitecturas de columnas mejoran la resolución y reducen los tiempos de análisis en un 40% para muestras farmacéuticas complejas.',
  featuredImage:
    '/images/blog/columnas-resolucion.jpg',
  category: 'Nota de Aplicación',
};

const resourcePosts: ResourceCardPost[] = [
  {
    _id: 'res-1',
    title: 'Mantenimiento Preventivo: Maximizando la Vida Útil de su Sistema HPLC',
    slug: 'mantenimiento-preventivo-sistema-hplc',
    category: 'HPLC',
    readTime: '12 Min Lectura',
    excerpt:
      'Aprenda los protocolos críticos diarios y semanales para evitar tiempos de inactividad costosos y asegurar la reproducibilidad.',
    featuredImage:
      '/images/blog/protocolos-mantenimiento.jpg',
    publishedAt: '2024-05-24',
    actionIcon: 'download',
  },
  {
    _id: 'res-2',
    title: 'Espectrometría de Masas: Retos en el Análisis de Alimentos',
    slug: 'espectrometria-masas-analisis-alimentos',
    category: 'Webinar',
    readTime: 'On Demand',
    excerpt:
      'Expertos de la industria discuten la detección de contaminantes traza y nuevas regulaciones internacionales.',
    featuredImage:
      '/images/blog/contaminantes-traza.jpg',
    publishedAt: '2024-05-15',
    actionIcon: 'play_circle',
  },
  {
    _id: 'res-3',
    title: 'Control de Calidad en Tiempo Real mediante GC de Proceso',
    slug: 'control-calidad-tiempo-real-gc-proceso',
    category: 'Industrial',
    readTime: '8 Min Lectura',
    excerpt:
      'Implementación de cromatografía gaseosa automatizada para la monitorización continua en líneas de producción petroquímica.',
    featuredImage:
      '/images/blog/gc-automatizada.jpg',
    publishedAt: '2024-05-08',
    actionIcon: 'description',
  },
];

const filterTabs = ['Todo', 'Notas Técnicas', 'Webinars'];

export default function BlogPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['hplc-gc']);
  const [activeTab, setActiveTab] = useState('Todo');

  const handleFilterChange = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId],
    );
  };

  const filteredPosts =
    activeTab === 'Todo'
      ? resourcePosts
      : resourcePosts.filter((post) => {
          if (activeTab === 'Notas Técnicas') {
            return post.category !== 'Webinar';
          }
          if (activeTab === 'Webinars') {
            return post.category === 'Webinar';
          }
          return true;
        });

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px]">
      {/* SideNavBar */}
      <div className="hidden lg:flex h-screen w-64 sticky top-20 shrink-0">
        <SideNavBar
          filters={blogFilters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          title="Filtros Técnicos"
          subtitle="Precisión Clínica"
        />
      </div>

      {/* Content */}
      <section className="flex-1 px-8 py-12">
        {/* Hero / Featured */}
        <BlogHero post={featuredPost} />

        {/* Section heading + Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-2">
              Recursos Técnicos
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </div>
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <ResourceCard key={post._id} post={post} />
          ))}
        </div>

        {/* Subscription CTA */}
        <SubscriptionCTA />
      </section>
    </div>
  );
}
