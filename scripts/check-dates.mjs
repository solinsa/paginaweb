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
  `*[_type == "post" && publishedAt >= "2026-08-01" && publishedAt < "2026-09-01"] | order(publishedAt asc) {
    _id,
    title,
    publishedAt
  }`
);

console.log("=== AGOSTO 2026 (publishedAt actual) ===\n");
posts.forEach(p => {
  console.log(`${p.publishedAt} | ${p.title} | ${p._id}`);
});
console.log(`\nTotal: ${posts.length} posts`);

// Also check all unique years that exist in Sanity
const years = await client.fetch(`*[_type == "post"]{ "year": publishedAt[0..3] }`);
const yearCounts = {};
years.forEach(y => { yearCounts[y.year] = (yearCounts[y.year] || 0) + 1; });
console.log("\n=== DISTRIBUCIÓN POR AÑO ===\n");
Object.entries(yearCounts).sort().forEach(([y, c]) => console.log(`${y}: ${c} posts`));
