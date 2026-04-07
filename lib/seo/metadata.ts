import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// SEO metadata helpers
// ---------------------------------------------------------------------------

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solinsa.com.mx";
const SITE_NAME = "Solinsa";
const DEFAULT_DESCRIPTION =
  "Solinsa — Ingeniería y soluciones tecnológicas para análisis químico, cromatografía y espectrometría. Más de 25 años de experiencia en México.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

interface PageMetaOptions {
  title: string;
  description?: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

/**
 * Generate a complete Next.js Metadata object for a page.
 *
 * Usage inside a page:
 * ```ts
 * export const metadata = generatePageMetadata({
 *   title: "HPLC Systems",
 *   description: "...",
 *   path: "/soluciones/productos/hplc-systems",
 * });
 * ```
 */
export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  keywords,
  type = "website",
}: PageMetaOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: keywords ?? [
      "HPLC",
      "GC",
      "cromatografía",
      "espectrometría",
      "análisis químico",
      "laboratorio",
      "Monterrey",
      "México",
      "Solinsa",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "es_MX",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
