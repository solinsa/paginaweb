import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPost, getPostSlugs, getRelatedPosts, type Post } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// ============================================================
// Helpers
// ============================================================

function getImageUrl(value: any, width = 1200): string | null {
  try {
    return urlFor(value).width(width).url();
  } catch {
    return null;
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Extract initials from a name (max 2 chars). */
function getInitials(name: string): string {
  if (!name || typeof name !== "string") return "?";
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

/** Deterministic color from a string — pick a hue for the avatar. */
function avatarColor(name: string): string {
  const hues = [
    "bg-technical-blue/15 text-technical-blue",
    "bg-energetic-yellow/25 text-yellow-dark",
    "bg-green/15 text-green",
    "bg-primary-dark/10 text-primary-dark",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hues[Math.abs(hash) % hues.length];
}

/**
 * Categorías no técnicas que NO merecen el disclaimer.
 * Todo lo demás (cromatografía, equipos, métodos, industria, etc.) lo muestra.
 */
const NON_TECHNICAL_CATEGORY_SLUGS = new Set([
  "comunicados-de-la-empresa",
  "eventos-y-ferias",
]);

function isTechnicalCategory(slug: string | null | undefined): boolean {
  if (!slug) return false;
  return !NON_TECHNICAL_CATEGORY_SLUGS.has(slug);
}

// ============================================================
// Portable Text components — redesigned for readability
// ============================================================

const ptComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-12 mb-5 text-primary-dark leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-10 mb-4 text-primary-dark leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-primary-dark">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 text-primary-dark">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-[17px] md:text-[18px] leading-[1.75] mb-5 text-[#1B2A4A]/85">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-energetic-yellow pl-5 my-8 italic text-[17px] md:text-[18px] text-[#1B2A4A]/70 leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-technical-blue underline underline-offset-2 decoration-technical-blue/30 hover:decoration-technical-blue transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-primary-dark px-2 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-primary-dark">{children}</strong>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const imgUrl = getImageUrl(value);
      if (!imgUrl) return null;
      return (
        <figure className="my-10">
          <img
            src={imgUrl}
            alt={value.alt || ""}
            className="rounded-xl w-full shadow-sm"
            loading="lazy"
          />
          {value.alt && (
            <figcaption className="text-sm text-center mt-3 text-[#1B2A4A]/45">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-[17px] md:text-[18px] leading-[1.75] text-[#1B2A4A]/85">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-[17px] md:text-[18px] leading-[1.75] text-[#1B2A4A]/85">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }: any) => (
    <li className="pl-1">{children}</li>
  ),
};

// ============================================================
// Componentes del layout
// ============================================================

function AuthorBadge({ author }: { author: string }) {
  const initials = getInitials(author);
  const colorClass = avatarColor(author);
  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold ${colorClass}`}
      >
        {initials}
      </span>
      <span className="text-sm font-medium text-[#1B2A4A]/70">
        Por <span className="text-primary-dark font-semibold">{author}</span>
      </span>
    </div>
  );
}

function CategoryBadge({
  category,
}: {
  category: Exclude<Post["category"], null>;
}) {
  return (
    <Link
      href={`/blog/categoria/${category.slug}`}
      className="group inline-flex items-center gap-3 bg-technical-blue/8 hover:bg-technical-blue/15 border border-technical-blue/15 hover:border-technical-blue/30 rounded-xl px-4 py-2.5 transition-all duration-200"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-technical-blue/10 text-technical-blue text-base shrink-0">
        {category.icon || "🔬"}
      </span>
      <div>
        <span className="block text-xs font-medium text-technical-blue/60 uppercase tracking-wider">
          Categoría
        </span>
        <span className="block text-sm font-semibold text-primary-dark group-hover:text-technical-blue transition-colors">
          {category.title}
        </span>
      </div>
      {category.description && (
        <span className="hidden sm:block text-xs text-[#1B2A4A]/45 max-w-[200px] leading-tight border-l border-technical-blue/10 pl-3">
          {category.description}
        </span>
      )}
    </Link>
  );
}

function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-5 md:p-6 my-10">
      <div className="flex items-start gap-3">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span>
        <div>
          <p className="text-sm font-semibold text-amber-800 mb-1.5">
            Aviso importante
          </p>
          <p className="text-[13px] md:text-[14px] leading-relaxed text-amber-700/85">
            Este contenido tiene fines educativos e informativos únicamente y no constituye
            asesoría técnica, regulatoria ni profesional. Los métodos descritos pueden requerir
            validación, ajustes o autorización según tu equipo, reactivos, normativas locales y
            contexto específico. Antes de implementar cualquier técnica en un entorno de
            producción, validación o regulado, consulta con un especialista calificado y sigue los
            protocolos de seguridad y cumplimiento de tu organización. El autor no se hace
            responsable por resultados, daños o pérdidas derivados del uso de esta información.
          </p>
        </div>
      </div>
    </div>
  );
}

function CtaBanner() {
  const WA = "https://wa.me/5218123554766";
  return (
    <div className="bg-primary-dark rounded-2xl p-8 md:p-10 text-center my-14">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
        ¿Necesitas asesoría especializada?
      </h3>
      <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed max-w-lg mx-auto mb-6">
        En SOLINSA te ayudamos a encontrar la solución ideal para tu laboratorio.
        Contáctanos y recibe atención personalizada.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-yellow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Contáctanos por WhatsApp
        </a>
        <Link href="/servicio" className="btn btn-ghost on-dark">
          Ver servicios
        </Link>
      </div>
    </div>
  );
}

function RelatedArticleCard({ post }: { post: any }) {
  const imgUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(340).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-light-grey hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="aspect-[16/9] overflow-hidden bg-paper">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-dark/5 to-technical-blue/10">
            <span className="text-2xl font-bold text-primary-dark/15 font-mono">SOLINSA</span>
          </div>
        )}
      </div>
      <div className="p-4">
        {post.category && (
          <span className="text-[11px] font-semibold bg-energetic-yellow/15 text-primary-dark px-2 py-0.5 rounded-full">
            {post.category.icon && <span className="mr-1">{post.category.icon}</span>}
            {post.category.title}
          </span>
        )}
        <h4 className="text-[15px] font-semibold text-primary-dark leading-snug mt-2 group-hover:text-technical-blue transition-colors line-clamp-2">
          {post.title}
        </h4>
        {post.excerpt && (
          <p className="mt-1.5 text-[13px] text-muted-blue-grey leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

// ============================================================
// Metadata dinámico por post (SEO)
// ============================================================

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Artículo no encontrado | SOLINSA" };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const imageUrl = post.mainImage ? getImageUrl(post.mainImage, 1200) : null;

  return {
    title,
    description: description || undefined,
    keywords: [
      "cromatografía",
      "HPLC",
      "GC",
      "GCMS",
      "laboratorio",
      "análisis químico",
      post.category?.title || "",
    ].filter(Boolean),
    openGraph: {
      title,
      description: description || undefined,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://www.solinsa.mx/blog/${post.slug}`,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || undefined,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://www.solinsa.mx/blog/${post.slug}`,
    },
  };
}

// ============================================================
// Página del post — versión rediseñada
// ============================================================

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = post.mainImage ? getImageUrl(post.mainImage) : null;
  const relatedPosts = await getRelatedPosts(
    slug,
    post.category?.slug ?? null,
    3
  );

  const author = post.author || "SOLINSA";
  const showDisclaimer = isTechnicalCategory(post.category?.slug ?? null);

  // JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || "",
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "SOLINSA",
      url: "https://www.solinsa.mx",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.solinsa.mx/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="min-h-screen pt-28 pb-20">
        {/* ── Hero ── */}
        <div className="max-w-[720px] mx-auto px-6">
          {/* Categoría — más visible */}
          {post.category && (
            <div className="mb-6">
              <CategoryBadge category={post.category} />
            </div>
          )}

          {/* Título */}
          <h1 className="text-[32px] md:text-[42px] font-bold text-primary-dark leading-[1.1] tracking-tight mb-5">
            {post.title}
          </h1>

          {/* Autor + Fecha */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200/60">
            <AuthorBadge author={author} />
            <span className="w-1 h-1 rounded-full bg-[#1B2A4A]/20" />
            <time
              dateTime={post.publishedAt}
              className="text-sm text-[#1B2A4A]/50"
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>

          {/* Imagen principal */}
          {imageUrl && (
            <div className="mb-10">
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full rounded-2xl shadow-sm"
              />
            </div>
          )}

          {/* Extracto destacado */}
          {post.excerpt && (
            <div className="bg-energetic-yellow/[0.04] border-l-4 border-energetic-yellow pl-5 pr-4 py-5 rounded-r-lg mb-10">
              <p className="text-[17px] md:text-[18px] text-primary-dark/80 italic leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}
        </div>

        {/* ── Cuerpo del artículo ── */}
        <div className="max-w-[720px] mx-auto px-6">
          <div className="prose-custom">
            <PortableText value={post.body} components={ptComponents} />
          </div>

          {/* ── Disclaimer para contenido técnico ── */}
          {showDisclaimer && <DisclaimerBanner />}
        </div>

        {/* ── Separador visual ── */}
        <div className="max-w-[720px] mx-auto px-6">
          <div className="mt-14 mb-6 border-t border-gray-200/60" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AuthorBadge author={author} />
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-technical-blue hover:underline underline-offset-2"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>

        {/* ── Call to Action ── */}
        <div className="max-w-[880px] mx-auto px-6">
          <CtaBanner />
        </div>

        {/* ── Artículos relacionados ── */}
        {relatedPosts.length > 0 && (
          <div className="max-w-[880px] mx-auto px-6">
            <h2 className="text-xl font-bold text-primary-dark mb-6">
              📖 Artículos que te pueden interesar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <RelatedArticleCard key={rp._id} post={rp} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
