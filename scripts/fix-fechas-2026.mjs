/**
 * fix-fechas-2026.mjs — Cambia los posts de sep 2026 a sep 2025.
 * Uso: node scripts/fix-fechas-2026.mjs
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
  useCdn: false
});

const posts = await client.fetch(
  '*[_type=="post" && publishedAt>="2026-09-01" && publishedAt<"2026-10-01"]{_id, title, publishedAt} | order(publishedAt asc)'
);

console.log('Posts de septiembre 2026 a corregir:', posts.length);
for (const p of posts) {
  const newDate = p.publishedAt.replace('2026', '2025');
  await client.patch(p._id).set({ publishedAt: newDate }).commit();
  console.log(`  ✅ ${p.publishedAt.slice(0,10)} \u2192 ${newDate.slice(0,10)} | ${p.title}`);
}
console.log('\nCorrecci\u00f3n completada.');
