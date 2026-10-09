import {client, urlFor} from './sanity/client'
import coresaArticle from '@/content/blog/solinsa-capacitacion-coresa-el-salvador.json'

type Span = {text?: string; marks?: string[]}

type SanityPost = {
  _id: string
  title: string
  slug: {current: string}
  excerpt?: string
  mainImage?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  publishedAt: string
  categories?: {title: string}[]
  body?: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
}

type SanityBlock = {_type: string; style?: string; children?: Span[]; rows?: {cells?: string[]}[]}

export type BlogTable = {rows: string[][]}

export type BlogSection = {
  heading: string
  text: string
  boldText?: string[]
  image?: string
  imageAlt?: string
  table?: BlogTable
}

export type BlogPost = {
  slug: string
  category: string
  title: string
  summary: string
  date: string
  readTime: string
  image?: string
  imageAlt?: string
  sections: BlogSection[]
}

const BLOCK_SCHEDULE = '[300, 80, 40, 40, 20]'

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-MX', {day: 'numeric', month: 'long', year: 'numeric'})
}

export function estimateReadTime(sections: BlogSection[]): string {
  const words = sections.reduce((total, section) => total + section.text.split(/\s+/).filter(Boolean).length, 0)
  return `${Math.max(1, Math.round(words / 200))} min`
}

function spansToText(spans: Span[] = []): string {
  return spans.map(span => span.text || '').join('')
}

// Collapses portable text into heading/paragraph sections so the existing
// page components can keep rendering the same shape.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toSections(body: any[] = []): BlogSection[] {
  const blocks = body as SanityBlock[]
  const sections: BlogSection[] = []
  let current: BlogSection | null = null

  const push = (text: string) => {
    if (!text.trim()) return
    if (!current) {
      current = {heading: 'Introducción', text: ''}
      sections.push(current)
    }
    current.text = current.text ? `${current.text}\n\n${text}` : text
  }

  for (const block of blocks) {
    if (block._type === 'block') {
      const text = spansToText(block.children)
      if (block.style && block.style.startsWith('h')) {
        current = {heading: text, text: ''}
        sections.push(current)
      } else {
        push(text)
      }
    } else if (block._type === 'table') {
      if (!current) {
        current = {heading: 'Introducción', text: ''}
        sections.push(current)
      }
      current.table = {
        rows: (block.rows || []).map(row => row.cells || []),
      }
    }
  }
  return sections
}


export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<SanityPost[]>(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, slug, excerpt, mainImage, publishedAt, body,
    "categories": categories[]->{title}
  }`)

  const publishedPosts = posts.map(post => {
    const sections = toSections(post.body || [])
    return {
      slug: post.slug.current,
      category: post.categories?.[0]?.title || 'Notas técnicas',
      title: post.title,
      summary: post.excerpt || sections[0]?.text.slice(0, 180) || '',
      date: formatDate(post.publishedAt),
      readTime: estimateReadTime(sections),
      image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url() : undefined,
      imageAlt: post.title,
      sections,
    }
  })

  const article: BlogPost = {
    ...coresaArticle,
    readTime: estimateReadTime(coresaArticle.sections),
  }
  return [article, ...publishedPosts.filter(post => post.slug !== article.slug)]
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getBlogPosts()
  return all.find(post => post.slug === slug) || null
}

export {BLOCK_SCHEDULE}
