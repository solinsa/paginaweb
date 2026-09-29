import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'bei2dj05',
  dataset: 'production',
  apiVersion: '2025-06-11',
  useCdn: false,
});
const post = await client.fetch('*[_type == "post" && slug.current == "analisis-gases-combustion-gc-tcd-aplicaciones-industria-energetica"]{_id, title, "slug": slug.current, publishedAt, "cat": category->title, excerpt, "mainImage": mainImage.asset->url}[0]');
console.log(JSON.stringify(post, null, 2));
if (post) {
  const words = await client.fetch('*[_type == "post" && _id == $id]{"w": count(string::split(pt::text(body), " "))}[0]', {id: post._id});
  console.log('Palabras: ' + (words?.w || 0));
}
