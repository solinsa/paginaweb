import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(import.meta.dirname, '..', '.env.local') });
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-06-11',
  useCdn: false,
});
const posts = await client.fetch('*[_type == "post" && publishedAt >= "2025-11-01" && publishedAt < "2025-12-01"]{_id, title} | order(publishedAt asc)');
for (const p of posts) {
  const fixedTitle = p.title.replace(/^"/, '').replace(/"$/, '');
  if (fixedTitle !== p.title) {
    await client.patch(p._id).set({ title: fixedTitle }).commit();
    console.log('✅ Fixed title:', fixedTitle);
  } else {
    console.log('ℹ️  OK:', p.title.substring(0, 60));
  }
}
console.log('Done.');
