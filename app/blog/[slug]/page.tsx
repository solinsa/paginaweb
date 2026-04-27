import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ResourceCardPost } from '@/components/sections/ResourceCard';
import { ResourceCard } from '@/components/sections/ResourceCard';
import { SubscriptionCTA } from '@/components/sections/SubscriptionCTA';

// ---- Demo blog post data ----

interface BlogDetailPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  content: string[];
}

const allPosts: BlogDetailPost[] = [
  {
    _id: 'detail-1',
    title: 'Optimización de Cromatografía Líquida en Entornos de Alta Presión',
    slug: 'optimizacion-cromatografia-liquida-alta-presion',
    category: 'Nota de Aplicación',
    excerpt:
      'Descubra cómo las nuevas arquitecturas de columnas mejoran la resolución y reducen los tiempos de análisis en un 40%.',
    featuredImage:
      '/images/blog/columnas-resolucion.jpg',
    author: 'Dra. María González',
    authorRole: 'Directora de Aplicaciones Analíticas',
    publishedAt: '2024-05-20',
    readTime: '12 Min Lectura',
    content: [
      'La cromatografía líquida de alta presión (HPLC/UHPLC) ha experimentado avances significativos en los últimos años, particularmente en el diseño de columnas y la eficiencia de separación.',
      'Nuestro equipo de aplicaciones analizó más de 500 muestras farmacéuticas utilizando columnas de última generación con partículas sub-2μm, logrando una mejora del 40% en la resolución cromatográfica y una reducción equivalente en los tiempos de análisis.',
      'Los resultados demuestran que la combinación de temperatura controlada (40°C ± 0.1°C) y gradientes de elución optimizados permite la separación simultánea de hasta 24 analitos en una sola corrida de 8 minutos.',
      'Esta metodología ha sido validada según las guías ICH Q2(R2) y resulta aplicable tanto para control de calidad rutinario como para estudios de estabilidad a largo plazo.',
      'Para implementar este enfoque en su laboratorio, recomendamos una calibración inicial del sistema seguida de una fase de familiarización de 2 semanas, durante la cual nuestro equipo técnico brinda soporte presencial.',
    ],
  },
  {
    _id: 'detail-2',
    title: 'Mantenimiento Preventivo: Maximizando la Vida Útil de su Sistema HPLC',
    slug: 'mantenimiento-preventivo-sistema-hplc',
    category: 'HPLC',
    excerpt:
      'Aprenda los protocolos críticos diarios y semanales para evitar tiempos de inactividad costosos.',
    featuredImage:
      '/images/blog/protocolos-mantenimiento.jpg',
    author: 'Ing. Roberto Sánchez',
    authorRole: 'Especialista en Servicio Técnico',
    publishedAt: '2024-05-24',
    readTime: '12 Min Lectura',
    content: [
      'El mantenimiento preventivo es la piedra angular de la operación confiable de cualquier sistema HPLC. Un programa estructurado puede extender la vida útil del equipo hasta un 60%.',
      'Protocolo diario: Verifique la presión del sistema, revise visualmente las conexiones y asegúrese de que el mobile phase esté debidamente filtrado y degasificado.',
      'Protocolo semanal: Lave el sistema con solventes de limpieza según el fabricante, revise las fugas en las conexiones, y ejecute una prueba de referencia para validar la sensibilidad del detector.',
      'Protocolo mensual: Reemplace los filtros en línea, calibre el detector UV/Vis, verifique la precisión del flujo de la bomba y revise el estado de los sellos del émbolo.',
      'Estos protocolos, cuando se siguen consistentemente, reducen los tiempos de inactividad no programados en más de un 85%, traduciéndose en ahorros significativos para el laboratorio.',
    ],
  },
  {
    _id: 'detail-3',
    title: 'Espectrometría de Masas: Retos en el Análisis de Alimentos',
    slug: 'espectrometria-masas-analisis-alimentos',
    category: 'Webinar',
    excerpt:
      'Expertos de la industria discuten la detección de contaminantes traza.',
    featuredImage:
      '/images/blog/contaminantes-traza.jpg',
    author: 'Dra. Ana López',
    authorRole: 'Investigadora Principal',
    publishedAt: '2024-05-15',
    readTime: 'On Demand',
    content: [
      'El análisis de contaminantes en alimentos por espectrometría de masas en tándem (MS/MS) enfrenta desafíos únicos relacionados con la complejidad de la matriz alimentaria.',
      'Nuestro panel de expertos discutió las últimas técnicas de preparación de muestra, incluyendo QuEChERS optimizado y extracción en fase sólida (SPE) para matrices complejas.',
      'Los participantes del webinar aprendieron sobre las nuevas regulaciones de la FDA y la EFSA que exigen límites de detección cada vez más bajos para pesticidas y micotoxinas.',
      'Se presentaron casos de estudio reales de laboratorios en México y Latinoamérica que han implementado exitosamente métodos LC-MS/MS para análisis multiresiduo.',
    ],
  },
  {
    _id: 'detail-4',
    title: 'Control de Calidad en Tiempo Real mediante GC de Proceso',
    slug: 'control-calidad-tiempo-real-gc-proceso',
    category: 'Industrial',
    excerpt:
      'Implementación de cromatografía gaseosa automatizada para la monitorización continua.',
    featuredImage:
      '/images/blog/gc-automatizada.jpg',
    author: 'Ing. Carlos Mendoza',
    authorRole: 'Consultor de Procesos Industriales',
    publishedAt: '2024-05-08',
    readTime: '8 Min Lectura',
    content: [
      'La cromatografía de gases de proceso (Process GC) representa un avance fundamental en la monitorización en línea de corrientes de proceso en la industria petroquímica.',
      'A diferencia de los sistemas de laboratorio convencionales, los GC de proceso operan de forma continua (24/7) con ciclos de análisis de 3-5 minutos, proporcionando datos en tiempo real para el control del proceso.',
      'La integración con sistemas DCS/SCADA permite la retroalimentación automática para ajustar variables críticas del proceso, reduciendo la variabilidad del producto final en hasta un 70%.',
      'Nuestro equipo ha implementado más de 50 sistemas de Process GC en plantas petroquímicas a lo largo de México, con resultados consistentes en la mejora de la calidad del producto.',
    ],
  },
];

const relatedPostsData: ResourceCardPost[] = [
  {
    _id: 'rel-1',
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
    _id: 'rel-2',
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
    _id: 'rel-3',
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

// ---- Metadata generation ----

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.featuredImage }],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

// ---- Page component ----

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = relatedPostsData.filter((p) => p.slug !== slug).slice(0, 2);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl m-8">
        <img
          alt={post.title}
          className="w-full h-full object-cover"
          src={post.featuredImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-6 left-6 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-8 pb-16">
        {/* Header */}
        <header className="mb-10">
          <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-4">
            {post.category} • {post.readTime}
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-on-surface-variant text-sm">
            <time>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-on-surface-variant leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share buttons */}
        <div className="mt-12 pt-8 border-t border-surface-container-high">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-primary">
              Compartir
            </h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">
                  share
                </span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">
                  link
                </span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">
                  mail
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Author card */}
        <div className="mt-10 bg-surface-container-low rounded-xl p-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                person
              </span>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-on-surface">
                {post.author}
              </h4>
              <p className="text-on-surface-variant text-sm">
                {post.authorRole}
              </p>
            </div>
          </div>
          <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
            Especialista con más de 10 años de experiencia en técnicas
            cromatográficas y espectrometría de masas aplicada a la industria
            regulada.
          </p>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-8 pb-16">
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-primary mb-2">
              Artículos Relacionados
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <ResourceCard key={relPost._id} post={relPost} />
            ))}
          </div>
        </div>
      )}

      {/* Subscription CTA */}
      <div className="px-8 pb-16">
        <SubscriptionCTA />
      </div>
    </div>
  );
}
