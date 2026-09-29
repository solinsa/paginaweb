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

// Show October slugs as reference
const oct = await client.fetch('*[_type == "post" && publishedAt >= "2025-10-01" && publishedAt < "2025-11-01"]{title, "slug": slug.current} | order(publishedAt asc)');
console.log('=== OCTUBRE (reference) ===');
oct.forEach(p => console.log(`  ${p.slug}`));
console.log();

// Show current November slugs
const nov = await client.fetch('*[_type == "post" && publishedAt >= "2025-11-01" && publishedAt < "2025-12-01"]{title, "slug": slug.current} | order(publishedAt asc)');
console.log('=== NOVIEMBRE (current) ===');
nov.forEach(p => console.log(`  ${p.slug}`));
