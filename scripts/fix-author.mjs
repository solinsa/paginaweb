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
  const result = await client.patch('S5bzMTDRifCZEnNLwWH1R7')
    .set({ author: 'Equipo Solinsa' })
    .commit();
  console.log('✅ Author actualizado:', result.author);
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
