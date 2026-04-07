// ---------------------------------------------------------------------------
// JSON-LD structured data generators
// ---------------------------------------------------------------------------

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solinsa.com.mx";
const SITE_NAME = "Solinsa";
const LOGO_URL = `${SITE_URL}/logo.png`;

// ---------- Organization ----------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Ingeniería y soluciones tecnológicas para análisis químico, cromatografía y espectrometría en México.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Rodrigo Gómez 3008, Col. La Fama",
      addressLocality: "Monterrey",
      addressRegion: "NL",
      postalCode: "64040",
      addressCountry: "MX",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-81-8000-1234",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/solinsa",
      "https://www.facebook.com/solinsamexico",
    ],
  };
}

// ---------- WebSite ----------

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/soluciones?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ---------- Product ----------

interface ProductInput {
  title: string;
  description?: string;
  brand?: string;
  image?: string;
  price?: number;
  slug: string;
  sku?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
}

export function productSchema(product: ProductInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description ?? "",
    url: `${SITE_URL}/soluciones/productos/${product.slug}`,
    image: product.image ? [product.image] : undefined,
    brand: product.brand
      ? { "@type": "Brand", name: product.brand }
      : undefined,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/soluciones/productos/${product.slug}`,
      priceCurrency: "MXN",
      price: product.price ?? 0,
      availability: `https://schema.org/${product.availability ?? "InStock"}`,
      seller: { "@type": "Organization", name: SITE_NAME },
    },
  };
}

// ---------- Article (Blog Post) ----------

interface ArticleInput {
  title: string;
  excerpt?: string;
  author?: string;
  datePublished: string;
  image?: string;
  slug: string;
}

export function articleSchema(post: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? "",
    image: post.image,
    datePublished: post.datePublished,
    author: {
      "@type": "Person",
      name: post.author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

// ---------- BreadcrumbList ----------

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------- FAQPage ----------

interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
