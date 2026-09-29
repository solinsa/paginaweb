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
const post = await client.fetch('*[_type == "post" && slug.current == "como-establecer-programa-calibracion-equipos-laboratorio"]{_id, title, "slug": slug.current, publishedAt, "cat": category->title, excerpt, "mainImage": mainImage.asset->url}[0]');
console.log(JSON.stringify(post, null, 2));
if (post) {
  const words = await client.fetch('*[_type == "post" && _id == $id]{"w": count(string::split(pt::text(body), " "))}[0]', {id: post._id});
  console.log('Palabras: ' + (words?.w || 0));
}
