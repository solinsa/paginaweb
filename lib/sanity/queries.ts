import {groq} from 'next-sanity'
import {client} from './client'

// ─── Types ─────────────────────────────────────────────────────

export interface BlogPost {
  _id: string
  title: string
  slug: {current: string}
  excerpt?: string
  mainImage?: any
  publishedAt: string
  author?: {
    name: string
    slug: {current: string}
    photo?: any
  }
  categories: BlogCategory[]
  body?: any[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: any
  }
}

export interface BlogCategory {
  _id: string
  title: string
  slug: {current: string}
  categoryType: string
  description?: string
  color?: string
}

// ─── Queries ───────────────────────────────────────────────────

const postFields = groq`
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{
    name,
    slug,
    photo
  },
  categories[]->{
    _id,
    title,
    slug,
    categoryType,
    description,
    color
  },
  seo
`

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  )
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  return client.fetch(
    groq`*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      ${postFields}
    }`,
    {categorySlug}
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ${postFields},
      body
    }`,
    {slug}
  )
}

export async function getAllCategories(): Promise<BlogCategory[]> {
  return client.fetch(
    groq`*[_type == "category"] | order(categoryType asc, title asc) {
      _id,
      title,
      slug,
      categoryType,
      description,
      color
    }`
  )
}

export async function getCategoryBySlug(slug: string): Promise<BlogCategory | null> {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      categoryType,
      description,
      color
    }`,
    {slug}
  )
}

export async function getAllPostSlugs(): Promise<string[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
}
