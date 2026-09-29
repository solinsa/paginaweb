/**
 * fix-categories.mjs — Patch all January 2025 blog posts to set the correct category field.
 * The posts were created with `categories` (plural array) instead of `category` (singular reference).
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

// Map: slug prefix → category reference ID
const CATEGORY_MAP = {
  '10-mejores-practicas-mantenimiento': 'cat-serv-mtto',
  'como-elegir-cromatografo': 'cat-gc',
  'validacion-metodos-hplc': 'cat-validacion',
  '5-senales-columna': 'cat-serv-diag',
  'analisis-metales-pesados-agua': 'cat-ind-ambiental',
  'montar-tecnica-analitica': 'cat-ind-alimentos',
  'iq-oq-pq': 'cat-cumplimiento',
  'cromatografia-gases-industria-tequila': 'cat-ind-tequila',
  '5-claves-reducir-downtime': 'cat-prod-lab',
  'diferencias-gc-fid': 'cat-gc',
};

async function main() {
  // Fetch all posts with their slug and categories (the plural field)
  const posts = await client.fetch(
    `*[_type == "post" && publishedAt >= "2025-01-01" && publishedAt < "2025-02-01"] {
      _id,
      "slug": slug.current,
      title,
      "categories": categories[]->{_id, title}
    }`
  );

  console.log(`📋 Encontrados ${posts.length} posts de enero 2025\n`);

  let fixed = 0;

  for (const post of posts) {
    // Find matching category
    const matchKey = Object.keys(CATEGORY_MAP).find(k => post.slug.startsWith(k));
    if (!matchKey) {
      console.log(`❌ ${post.slug} — no match en CATEGORY_MAP`);
      continue;
    }

    const catId = CATEGORY_MAP[matchKey];

    // Update the post: set `category` field (singular reference)
    await client.patch(post._id)
      .set({
        category: { _type: 'reference', _ref: catId },
      })
      .commit();

    console.log(`✅ ${post.slug}`);
    console.log(`   → category: ${catId}`);
    fixed++;
  }

  console.log(`\n✅ ${fixed}/${posts.length} posts actualizados`);
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
