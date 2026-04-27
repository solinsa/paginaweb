// ---------------------------------------------------------------------------
// JSON-LD structured data generators
// ---------------------------------------------------------------------------

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solinsa.com.mx";
const SITE_NAME = "Solinsa";
const LOGO_URL = `${SITE_URL}/logo-solinsa.png`;

// ---------- LocalBusiness (enhanced for AI agents) ----------

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Solinsa es una empresa comercializadora de equipos de cromatografía y espectroscopía en México. Ofrecemos mantenimiento preventivo y correctivo multimarca, calibración, diagnóstico, repuestos, consumibles y consultoría analítica. Atendemos Agilent, Waters, Shimadzu, Thermo Fisher, PerkinElmer y más.",
    telephone: "+52-81-8100-0234",
    email: "info@solinsa.com",
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Rodrigo Gómez 3008, Col. La Fama",
      addressLocality: "Monterrey",
      addressRegion: "NL",
      postalCode: "64040",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.65",
      longitude: "-100.31",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Mexico",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Cromatografía y Espectroscopía",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantenimiento Preventivo y Correctivo de Equipos de Cromatografía",
            description:
              "Mantenimiento para equipos HPLC, GC, GC-MS, LC-MS de cualquier marca. Incluye limpieza, cambio de partes, verificación de desempeño y documentación.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diagnóstico y Calibración de Equipos Analíticos",
            description:
              "Diagnóstico técnico profundo y calibración de equipos de cromatografía y espectroscopía bajo normas internacionales.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoría Analítica",
            description:
              "Desarrollo de métodos analíticos, validación de métodos, optimización de procesos de laboratorio.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Venta de Equipos y Repuestos",
            description:
              "Distribuidor de equipos nuevos y refurbished John King Cromas. Repuestos originales y genéricos para cromatografía.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/solinsa",
      "https://www.facebook.com/solinsamexico",
    ],
  };
}

// ---------- Organization ----------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Empresa comercializadora de equipos y servicios de cromatografía y espectroscopía. Soporte técnico multimarca en México con más de 14 años de experiencia.",
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
      telephone: "+52-81-8100-0234",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
    },
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Cromatografía líquida (HPLC)",
      "Cromatografía de gases (GC)",
      "Espectrometría de masas (MS)",
      "Espectroscopía",
      "Calibración de equipos analíticos",
      "Validación de métodos",
      "Mantenimiento de equipos de laboratorio",
    ],
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
