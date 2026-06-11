import { groq } from "next-sanity";
import { client } from "./client";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  excerpt: string | null;
  body: any;
  category: { title: string; slug: string } | null;
  publishedAt: string;
  seoTitle: string | null;
  seoDescription: string | null;
}

const POST_FIELDS = groq`
  _id,
  title,
  "slug": slug.current,
  "mainImage": mainImage,
  excerpt,
  body,
  "category": category->{title, "slug": slug.current},
  publishedAt,
  seoTitle,
  seoDescription
`;

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
