/**
 * Query Sanity for author, category IDs and recent posts for reference.
 * Run: node scripts/query-data.mjs
 */
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

async function main() {
  const authors = await client.fetch('*[_type == "author"]{_id, name}');
  console.log('AUTHORS:', JSON.stringify(authors, null, 2));

  const cats = await client.fetch('*[_type == "category"]{_id, title, slug}');
  console.log('CATEGORIES:', JSON.stringify(cats, null, 2));

  const posts = await client.fetch('*[_type == "post"]{_id, title, slug, publishedAt}|order(publishedAt desc)[0..3]');
  console.log('RECENT POSTS:', JSON.stringify(posts, null, 2));
}

main().catch(console.error);
