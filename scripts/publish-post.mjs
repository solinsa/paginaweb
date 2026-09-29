/**
 * Force-publish the post 'migrar-hplc-uhplc-sin-perder-rendimiento'.
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
  // Find the post
  const posts = await client.fetch(
    `*[_type == "post" && slug.current == "migrar-hplc-uhplc-sin-perder-rendimiento"]{_id, _rev, title, "slug": slug.current}`
  );

  if (posts.length === 0) {
    console.log('❌ Post no encontrado');
    return;
  }

  const post = posts[0];
  console.log(`📄 Encontrado: ${post._id} — "${post.title}"`);

  // Check if it's a draft
  if (post._id.startsWith('drafts.')) {
    const cleanId = post._id.replace(/^drafts\./, '');
    console.log(`🔁 Publicando draft ${post._id} → ${cleanId}...`);

    await client.transaction()
      .createOrReplace({ ...post, _id: cleanId })
      .delete(post._id)
      .commit();

    console.log(`✅ Publicado: ${cleanId}`);
  } else {
    console.log(`✅ Ya publicado: ${post._id}`);
  }
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
