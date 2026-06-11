import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPost, getPostSlugs } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

// ============================================================
// Tipos para Portable Text (evitamos usar `any` donde se pueda)
// ============================================================

function getImageUrl(value: any): string | null {
  try {
    return urlFor(value).width(1200).url();
  } catch {
    return null;
  }
}

// ============================================================
// Componentes personalizados para Portable Text
// ============================================================

const ptComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-10 mb-4 text-primary-blue">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-8 mb-3 text-primary-blue">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-6 mb-2 text-primary-blue">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold mt-5 mb-2 text-primary-blue">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-relaxed mb-4 text-primary-blue/80">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-energetic-yellow pl-4 my-6 italic text-primary-blue/70">
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
        className="text-primary-blue underline underline-offset-2 hover:text-primary-blue/70 transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-primary-blue px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const imgUrl = getImageUrl(value);
      if (!imgUrl) return null;
      return (
        <figure className="my-8">
          <img
            src={imgUrl}
            alt={value.alt || ""}
            className="rounded-lg w-full"
            loading="lazy"
          />
          {value.alt && (
            <figcaption className="text-sm text-center mt-2 text-primary-blue/50">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-primary-blue/80">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-primary-blue/80">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }: any) => <li className="ml-2">{children}</li>,
};

// ============================================================
// Metadata dinamico por post (SEO)
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
  const imageUrl = post.mainImage ? getImageUrl(post.mainImage) : null;

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
// Pagina del post
// ============================================================

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = post.mainImage ? getImageUrl(post.mainImage) : null;

  // JSON-LD structured data para Google y AI crawlers
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || "",
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "SOLINSA",
      url: "https://www.solinsa.mx",
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

  const publishDate = new Date(post.publishedAt).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Categoria + fecha */}
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="text-sm bg-energetic-yellow/20 text-primary-blue px-3 py-1 rounded-full font-medium">
                {post.category.title}
              </span>
            )}
            <time
              dateTime={post.publishedAt}
              className="text-sm text-primary-blue/50"
            >
              {publishDate}
            </time>
          </div>

          {/* Titulo */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Imagen principal */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full rounded-xl mb-8"
            />
          )}

          {/* Extracto destacado */}
          {post.excerpt && (
            <div className="bg-energetic-yellow/5 border-l-4 border-energetic-yellow p-4 rounded-r-lg mb-8">
              <p className="text-lg text-primary-blue/80 italic leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Cuerpo del articulo (Portable Text) */}
          <div className="prose-custom">
            <PortableText value={post.body} components={ptComponents} />
          </div>

          {/* Separador final */}
          <hr className="mt-12 mb-6 border-gray-200" />
          <p className="text-center text-sm text-primary-blue/40">
            SOLINSA — Soluciones en Instrumentación S.A. de C.V.
          </p>
        </div>
      </article>
    </>
  );
}
