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
  const post = await client.fetch('*[_id == "mB5SX091O5zS0c2Qttk1Jp"]{_id, title, author, "categoryRef": category}[0]');
  console.log('POST RAW:', JSON.stringify(post, null, 2));
}
main().catch(console.error);
