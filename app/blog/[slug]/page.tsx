import Link from 'next/link'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {PortableText} from '@portabletext/react'
import {getPostBySlug, getAllPostSlugs, getAllCategories, type BlogPost} from '@/lib/sanity/queries'
import {urlFor} from '@/lib/sanity/client'

export const revalidate = 60

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.solinsa.com.mx'

// ─── Portable Text Components ──────────────────────────────────

const ptComponents = {
  block: {
    h2: ({children}: any) => (
      <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-xl font-bold text-primary-dark mt-8 mb-3">{children}</h3>
    ),
    normal: ({children}: any) => (
      <p className="text-base text-primary-blue/90 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-primary-blue/90">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-primary-blue/90">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="text-base leading-relaxed">{children}</li>,
    number: ({children}: any) => <li className="text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-primary-dark">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
    link: ({children, value}: any) => (
      <a href={value?.href} className="text-technical-blue underline hover:text-primary-dark transition-colors" target={value?.href?.startsWith('http') ? '_blank' : undefined} rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}: any) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(800).fit('max').url()}
          alt={value.alt || ''}
          className="rounded-xl w-full"
          loading="lazy"
        />
        {value.caption && <figcaption className="text-sm text-muted-blue-grey text-center mt-2">{value.caption}</figcaption>}
      </figure>
    ),
  },
}

// ─── Generate Static Params ────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({slug}))
}

// ─── Metadata ──────────────────────────────────────────────────

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params
  const post = await getPostBySlug(slug)
  if (!post) return {title: 'Post no encontrado | SOLINSA'}

  const ogImage = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).width(1200).height(630).fit('crop').url()
    : post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url()
    : undefined

  return {
    title: post.seo?.metaTitle || `${post.title} | Blog SOLINSA`,
    description: post.seo?.metaDescription || post.excerpt || `Artículo sobre ${post.categories?.[0]?.title || 'instrumentación analítica'}`,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      url: `${SITE_URL}/blog/${post.slug.current}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage ? [{url: ogImage, width: 1200, height: 630, alt: post.title}] : undefined,
      locale: 'es_MX',
      siteName: 'Solinsa',
    },
    twitter: ogImage ? {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: [ogImage],
    } : undefined,
  }
}

// ─── Page ──────────────────────────────────────────────────────

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const [post, categories] = await Promise.all([
    getPostBySlug(slug),
    getAllCategories(),
  ])

  if (!post) notFound()

  // JSON-LD structured data for the blog post
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug.current}`,
    author: post.author ? {
      '@type': 'Person',
      name: post.author.name,
    } : {'@type': 'Organization', name: 'Solinsa'},
    publisher: {
      '@type': 'Organization',
      name: 'Solinsa',
      url: SITE_URL,
    },
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url() : undefined,
    keywords: post.categories?.map((c) => c.title).join(', '),
    inLanguage: 'es',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug.current}`,
    },
  }

  const relatedCategories = post.categories || []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      {/* ── Breadcrumb ──────────────────────────────────── */}
      <div className="bg-paper border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop py-3">
          <nav className="flex items-center gap-2 text-xs text-muted-blue-grey" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-technical-blue transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-technical-blue transition-colors">Blog</Link>
            {relatedCategories[0] && (
              <>
                <span>/</span>
                <Link href={`/blog?categoria=${relatedCategories[0].slug.current}`} className="hover:text-technical-blue transition-colors">
                  {relatedCategories[0].title}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-primary-dark font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Article ─────────────────────────────────────── */}
      <article className="sec bg-paper">
        <div className="max-w-3xl mx-auto px-margin-desktop">

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {relatedCategories.map((cat) => (
              <Link
                key={cat._id}
                href={`/blog?categoria=${cat.slug.current}`}
                className="text-[11px] font-mono px-3 py-1 rounded-full border border-outline-variant hover:border-technical-blue hover:text-technical-blue transition-colors"
              >
                {cat.title}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(28px,4vw,42px)] font-bold text-primary-dark leading-tight">{post.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-6 pb-6 border-b border-outline-variant">
            {post.author && (
              <div className="flex items-center gap-2.5">
                {post.author.photo ? (
                  <img src={urlFor(post.author.photo).width(40).height(40).fit('crop').url()} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-technical-blue/10 text-technical-blue flex items-center justify-center text-sm font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <span className="text-sm font-semibold text-primary-dark block">{post.author.name}</span>
                  {post.author.name !== 'Equipo Solinsa' && (
                    <span className="text-[11px] text-muted-blue-grey">{post.author.role || post.author.name}</span>
                  )}
                </div>
              </div>
            )}
            <time className="text-sm text-muted-blue-grey font-mono ml-auto">
              {new Date(post.publishedAt).toLocaleDateString('es-MX', {year: 'numeric', month: 'long', day: 'numeric'})}
            </time>
          </div>

          {/* Main Image */}
          {post.mainImage && (
            <figure className="my-8 -mx-4 md:mx-0">
              <img
                src={urlFor(post.mainImage).width(900).fit('max').url()}
                alt={post.title}
                className="rounded-2xl w-full"
              />
            </figure>
          )}

          {/* Body */}
          <div className="prose-solinsa">
            {post.body && <PortableText value={post.body} components={ptComponents} />}
          </div>

          {/* CTA Bottom */}
          <div className="mt-12 p-8 bg-primary-dark rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white">¿Necesitas apoyo con tu laboratorio?</h3>
            <p className="text-white/70 mt-2 text-sm max-w-md mx-auto">
              Desde equipos hasta validación de métodos, nuestro equipo de especialistas está listo para ayudarte.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href="https://wa.me/5218123554766?text=Hola,%20vi%20el%20artículo%20sobre%20{encodeURIComponent(post.title)}%20y%20necesito%20asesoría"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-yellow"
              >
                Pedir asesoría
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link href="/blog" className="btn btn-ghost on-dark">
                ← Todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
