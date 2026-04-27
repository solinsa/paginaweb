import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import {
  productSlugsQuery,
  partSlugsQuery,
  applicationSlugsQuery,
  blogPostSlugsQuery,
} from "@/lib/sanity/queries";

// ---------------------------------------------------------------------------
// Dynamic sitemap – Next.js sitemap convention
// ---------------------------------------------------------------------------

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solinsa.com.mx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // --- Static pages ---
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/soluciones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/aplicaciones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/categorias`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // --- Dynamic pages from Sanity (with error handling) ---
  const [productSlugs, partSlugs, applicationSlugs, blogSlugs] =
    await Promise.all([
      safeFetch<string[]>(productSlugsQuery),
      safeFetch<string[]>(partSlugsQuery),
      safeFetch<string[]>(applicationSlugsQuery),
      safeFetch<string[]>(blogPostSlugsQuery),
    ]);

  const now = new Date();

  // Products
  const productPages: MetadataRoute.Sitemap = (productSlugs ?? []).map(
    (slug) => ({
      url: `${SITE_URL}/soluciones/productos/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }),
  );

  // Parts
  const partPages: MetadataRoute.Sitemap = (partSlugs ?? []).map((slug) => ({
    url: `${SITE_URL}/soluciones/refacciones/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Applications
  const applicationPages: MetadataRoute.Sitemap = (
    applicationSlugs ?? []
  ).map((slug) => ({
    url: `${SITE_URL}/aplicaciones/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog posts (recent = daily, else weekly)
  const blogPages: MetadataRoute.Sitemap = (blogSlugs ?? []).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...partPages,
    ...applicationPages,
    ...blogPages,
  ];
}

/** Safely fetch from Sanity, returning null on error */
async function safeFetch<T>(query: string): Promise<T | null> {
  try {
    return (await client.fetch(query)) as T;
  } catch {
    return null;
  }
}
