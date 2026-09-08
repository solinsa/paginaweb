import Link from 'next/link'
import type {Metadata} from 'next'
import {getAllPosts, getAllCategories, getPostsByCategory, type BlogPost, type BlogCategory} from '@/lib/sanity/queries'
import {urlFor} from '@/lib/sanity/client'

export const revalidate = 60 // ISR: revalidate every 60s

type Props = {searchParams: Promise<{categoria?: string}>}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.solinsa.com.mx'

const categoryTypeLabels: Record<string, string> = {
  instrumento: 'Instrumentos',
  productividad: 'Productividad',
  industria: 'Industrias',
  servicio: 'Servicios',
  comunicado: 'Comunicados',
}

const categoryTypeOrder = ['instrumento', 'productividad', 'industria', 'servicio', 'comunicado']

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-MX', {year: 'numeric', month: 'long', day: 'numeric'})
}

// ─── Post Card ────────────────────────────────────────────────

function PostCard({post}: {post: BlogPost}) {
  return (
    <article className="group bg-surface border border-outline rounded-2xl overflow-hidden hover:border-technical-blue hover:shadow-lg transition-all">
      {post.mainImage && (
        <div className="aspect-[16/9] bg-paper overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(640).height(360).fit('crop').url()}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3">
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5">
          {post.categories?.slice(0, 3).map((cat) => (
            <Link
              key={cat._id}
              href={`/blog?categoria=${cat.slug.current}`}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-outline-variant hover:border-technical-blue hover:text-technical-blue transition-colors"
              style={cat.color ? {borderColor: cat.color + '40', color: cat.color} : undefined}
            >
              {cat.title}
            </Link>
          ))}
        </div>

        <Link href={`/blog/${post.slug.current}`}>
          <h2 className="text-lg font-bold text-primary-dark group-hover:text-technical-blue transition-colors leading-tight">
            {post.title}
          </h2>
        </Link>

        {post.excerpt && (
          <p className="text-sm text-muted-blue-grey leading-relaxed line-clamp-3">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-outline-variant">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.photo ? (
                <img
                  src={urlFor(post.author.photo).width(32).height(32).fit('crop').url()}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-technical-blue/10 text-technical-blue flex items-center justify-center text-xs font-bold">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="text-xs font-medium text-primary-dark">{post.author.name}</span>
            </div>
          )}
          <time className="text-[11px] text-muted-blue-grey ml-auto font-mono">{formatDate(post.publishedAt)}</time>
        </div>
      </div>
    </article>
  )
}

// ─── Page ─────────────────────────────────────────────────────

export async function generateMetadata({searchParams}: Props): Promise<Metadata> {
  const params = await searchParams
  const slug = params.categoria
  if (!slug) {
    return {
      title: 'Blog | SOLINSA',
      description: 'Artículos técnicos sobre cromatografía, espectrometría, validación de métodos y productividad en laboratorio.',
    }
  }
  const cat = await getCategoryBySlug(slug)
  if (!cat) return {title: 'Blog | SOLINSA'}
  return {
    title: `${cat.title} | Blog SOLINSA`,
    description: cat.description || `Artículos sobre ${cat.title} en el blog de Solinsa.`,
  }
}

export default async function BlogPage({searchParams}: Props) {
  const params = await searchParams
  const categorySlug = params.categoria

  const [allPosts, categories] = await Promise.all([
    categorySlug ? getPostsByCategory(categorySlug) : getAllPosts(),
    getAllCategories(),
  ])

  const activeCategory = categorySlug
    ? categories.find((c) => c.slug.current === categorySlug)
    : null

  // Group categories by type
  const grouped = categoryTypeOrder.reduce<Record<string, BlogCategory[]>>((acc, type) => {
    const items = categories.filter((c) => c.categoryType === type)
    if (items.length) acc[type] = items
    return acc
  }, {})

  // JSON-LD structured data for the blog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: activeCategory ? `Blog - ${activeCategory.title} | Solinsa` : 'Blog | Solinsa',
    description: activeCategory?.description || 'Artículos técnicos sobre instrumentación analítica.',
    url: `${SITE_URL}/blog${categorySlug ? `?categoria=${categorySlug}` : ''}`,
    publisher: {
      '@type': 'Organization',
      name: 'Solinsa',
      url: SITE_URL,
    },
    blogPost: allPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `${SITE_URL}/blog/${post.slug.current}`,
      author: post.author ? {'@type': 'Person', name: post.author.name} : undefined,
      image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url() : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-primary-dark text-white sec">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <span className="eyebrow on-dark">Blog</span>
          <h1 className="h1 text-white mt-4">
            {activeCategory ? activeCategory.title : 'Recursos para tu laboratorio'}
          </h1>
          <p className="lead text-white/70 mt-4">
            {activeCategory?.description || 'Artículos técnicos, guías y mejores prácticas para profesionales de la instrumentación analítica en México.'}
          </p>
        </div>
      </section>

      {/* ── Categories + Posts ──────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-primary-dark">Categorías</h3>
                  {activeCategory && (
                    <Link
                      href="/blog"
                      className="text-[11px] font-mono text-technical-blue hover:underline"
                    >
                      Ver todo
                    </Link>
                  )}
                </div>

                {categoryTypeOrder.map((type) => {
                  const cats = grouped[type]
                  if (!cats) return null
                  return (
                    <div key={type} className="mb-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">
                        {categoryTypeLabels[type]}
                      </span>
                      <div className="mt-1.5 space-y-0.5">
                        {cats.map((cat) => {
                          const isActive = cat.slug.current === categorySlug
                          return (
                            <Link
                              key={cat._id}
                              href={`/blog?categoria=${cat.slug.current}`}
                              className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                isActive
                                  ? 'bg-technical-blue/10 text-technical-blue font-semibold'
                                  : 'text-primary-dark hover:bg-white hover:text-technical-blue'
                              }`}
                            >
                              {cat.title}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="flex-1">
              {allPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-blue-grey text-lg">No hay posts disponibles aún.</p>
                  <Link href="/blog" className="go mt-4 justify-center">
                    Ver todos los artículos
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
