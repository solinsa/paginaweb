import type {MetadataRoute} from 'next'
import {getAllPostSlugs, getAllCategories} from '@/lib/sanity/queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.solinsa.com.mx'

export const revalidate = 3600 // revalidate hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, categories] = await Promise.all([
    getAllPostSlugs(),
    getAllCategories(),
  ])

  const blogPosts: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const blogCategories: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/blog?categoria=${cat.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogPosts,
    ...blogCategories,
  ]
}
