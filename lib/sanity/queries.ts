import { groq } from "next-sanity";
import { client } from "./client";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  excerpt: string | null;
  body: any;
  category: Category | null;
  author: string | null;
  publishedAt: string;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface Category {
  title: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  image?: any;
}

const POST_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage,
  excerpt,
  body,
  "category": category->{title, "slug": slug.current, description, icon},
  "author": coalesce(author->name, author, "SOLINSA"),
  publishedAt,
  seoTitle,
  seoDescription
`;

const CATEGORY_FIELDS = groq`
  title,
  "slug": slug.current,
  description,
  icon,
  image
`;

// ─── Posts ────────────────────────────────────────────────────

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getPostSlugs(): Promise<string[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)].slug.current`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) { ${POST_FIELDS} }`,
    { categorySlug },
    { next: { revalidate: 60 } }
  );
}

// ─── Categories ───────────────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"] | order(order asc) { ${CATEGORY_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getCategory(slug: string): Promise<Category | null> {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0] { ${CATEGORY_FIELDS} }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

// ─── Composite queries ─────────────────────────────────────────

/** Latest posts, capped at `limit`. After the featured one (offset 1), for the grid. */
export async function getLatestPosts(limit: number = 7): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`,
    { limit },
    { next: { revalidate: 60 } }
  );
}

/** Get a single featured post (most recent). */
export async function getFeaturedPost(): Promise<Post | null> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [0] { ${POST_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  );
}

/** Related posts: same category, exclude current post, limit results. */
export async function getRelatedPosts(
  slug: string,
  categorySlug?: string | null,
  limit: number = 3
): Promise<Post[]> {
  if (!categorySlug) {
    // fallback: latest posts excluding current
    return client.fetch(
      groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`,
      { slug, limit },
      { next: { revalidate: 60 } }
    );
  }
  return client.fetch(
    groq`*[_type == "post" && slug.current != $slug && category->slug.current == $categorySlug] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`,
    { slug, categorySlug, limit },
    { next: { revalidate: 60 } }
  );
}
