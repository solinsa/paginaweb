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
const post = await client.getDocument('S5bzMTDRifCZEnNLwdXmEA');
if (post) {
  console.log('✅ Post encontrado:');
  console.log(JSON.stringify({
    _id: post._id,
    title: post.title,
    slug: post.slug?.current,
    category: post.category?._ref,
    publishedAt: post.publishedAt,
    excerpt: post.excerpt?.substring(0, 80),
  }, null, 2));
  const bodyText = post.body?.map(b => b.children?.map(c => c.text).join(' ') || '').join(' ') || '';
  const wordCount = bodyText.split(/\s+/).filter(w => w.length > 0).length;
  console.log('Palabras del body:', wordCount);
} else {
  console.log('❌ No se encontró el post');
}
