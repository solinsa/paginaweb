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
  `*[_type == "post"] | order(publishedAt asc) {
    _id,
    title,
    publishedAt
  }`
);

let currentMonth = '';
posts.forEach(p => {
  const month = p.publishedAt ? p.publishedAt.substring(0, 7) : 'sin fecha';
  if (month !== currentMonth) {
    currentMonth = month;
    console.log(`\n--- ${month} ---`);
  }
  console.log(`  ${p.publishedAt} | ${p.title}`);
});
console.log(`\nTotal: ${posts.length} posts`);
