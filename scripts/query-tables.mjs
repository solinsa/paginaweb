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
  // Find any posts that have table blocks in their body
  const postsWithTables = await client.fetch('*[_type == "post" && defined(body)]{_id, title, body}[0..5]');
  
  for (const p of postsWithTables) {
    const tables = p.body.filter(b => b._type === 'table' || b._type === 'custom-table');
    if (tables.length > 0) {
      console.log(`=== POST: ${p.title} ===`);
      console.log(JSON.stringify(tables[0], null, 2));
      break;
    }
  }
  
  if (!postsWithTables.find(p => p.body.some(b => b._type === 'table' || b._type === 'custom-table'))) {
    console.log('No tables found in first 5 posts. Checking all...');
    const allPosts = await client.fetch('*[_type == "post" && defined(body)]{_id, title, body}');
    for (const p of allPosts) {
      const tables = p.body.filter(b => b._type === 'table' || b._type === 'custom-table');
      if (tables.length > 0) {
        console.log(`=== POST: ${p.title} ===`);
        console.log(JSON.stringify(tables[0], null, 2));
        break;
      }
    }
    if (!allPosts.find(p => p.body.some(b => b._type === 'table' || b._type === 'custom-table'))) {
      console.log('No tables found in any post');
    }
  }
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
