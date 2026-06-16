import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-06-11',
  useCdn: false,
});

const posts = await client.fetch(
  '*[_type == "post" && publishedAt >= "2025-10-01T00:00:00Z" && publishedAt < "2025-11-01T00:00:00Z"] | order(publishedAt asc) {title, "slug": slug.current, publishedAt, "cat": category->title}'
);
console.log(`\n=== POSTS OCTUBRE 2025 EN SANITY (${posts.length}) ===`);
posts.forEach((p, i) => console.log(`${String(i+1).padStart(2)}. ${p.publishedAt.slice(0,10)} | ${p.title} | ${p.cat || '—'} | /${p.slug}`));
console.log(`\n✅ ${posts.length} posts publicados exitosamente`);
