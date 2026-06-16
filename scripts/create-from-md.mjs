/**
 * Script genérico para crear un post en Sanity desde un archivo markdown body.
 * node scripts/create-from-md.mjs <body-md> --title "..." --image <ruta> --category <id> --excerpt "..." --publishedAt <fecha> [--author "Nombre"]
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve, extname, basename } from 'path';
import { createReadStream, existsSync, readFileSync } from 'fs';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-06-11',
  useCdn: false,
});

function markdownToPortableText(md) {
  const blocks = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Tabla
    if (line.startsWith('|') && line.endsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|') && lines[i].endsWith('|')) {
        if (lines[i].match(/^\|[\s\-:]+\|/)) { i++; continue; }
        const cells = lines[i].split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
        if (cells.length > 0) rows.push({ cells });
        i++;
      }
      if (rows.length > 0) blocks.push({ _type: 'table', rows });
      continue;
    }
    // Headers
    if (line.startsWith('## ')) {
      blocks.push({ _type: 'block', style: 'h2', children: [{ _type: 'span', marks: [], text: line.replace(/^## /, '') }] });
      i++; continue;
    }
    if (line.startsWith('### ')) {
      blocks.push({ _type: 'block', style: 'h3', children: [{ _type: 'span', marks: [], text: line.replace(/^### /, '') }] });
      i++; continue;
    }
    // Blockquote
    if (line.startsWith('> ')) {
      blocks.push({ _type: 'block', style: 'blockquote', children: [{ _type: 'span', marks: [], text: line.replace(/^> /, '') }] });
      i++; continue;
    }
    // Párrafo
    if (line.trim() && !line.startsWith('---')) {
      const text = line.trim();
      const children = [];
      let remaining = text;
      while (remaining.length > 0) {
        const strongMatch = remaining.match(/\*\*(.+?)\*\*/);
        const emMatch = remaining.match(/\*(.+?)\*/);
        let nextMatch = null, markType = null;
        if (strongMatch && emMatch) {
          if (strongMatch.index <= emMatch.index) { nextMatch = strongMatch; markType = 'strong'; }
          else { nextMatch = emMatch; markType = 'em'; }
        } else if (strongMatch) { nextMatch = strongMatch; markType = 'strong'; }
        else if (emMatch) { nextMatch = emMatch; markType = 'em'; }
        if (nextMatch && nextMatch.index === 0) {
          children.push({ _type: 'span', marks: [markType], text: nextMatch[1] });
          remaining = remaining.slice(nextMatch[0].length);
        } else if (nextMatch && nextMatch.index > 0) {
          children.push({ _type: 'span', marks: [], text: remaining.slice(0, nextMatch.index) });
          children.push({ _type: 'span', marks: [markType], text: nextMatch[1] });
          remaining = remaining.slice(nextMatch.index + nextMatch[0].length);
        } else {
          children.push({ _type: 'span', marks: [], text: remaining });
          remaining = '';
        }
      }
      if (children.length > 0) {
        blocks.push({ _type: 'block', style: 'normal', children });
      }
      i++; continue;
    }
    i++;
  }
  return blocks;
}

async function main() {
  const args = process.argv.slice(2);
  const bodyPath = args[0];
  if (!bodyPath || !existsSync(bodyPath)) {
    console.error('❌ Uso: node create-from-md.mjs <body.md> --title \"...\" --image <ruta> --category <id> --excerpt \"...\" --publishedAt <fecha> [--author \"Nombre\"]');
    process.exit(1);
  }

  // Parse opts
  const opts = {};
  for (let i = 1; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].replace(/^--/, '');
      if (args[i].includes('=')) { const [k, ...v] = key.split('='); opts[k] = v.join('='); }
      else { opts[key] = args[i + 1] !== undefined && !args[i + 1].startsWith('--') ? args[i + 1] : true; if (typeof opts[key] !== 'boolean') i++; }
    }
  }

  const title = opts.title;
  const author = opts.author || 'Equipo Solinsa';
  const category = opts.category;
  const publishedAt = opts.publishedAt || new Date().toISOString();
  const excerpt = opts.excerpt || '';
  const imagePath = opts.image;

  if (!title) { console.error('❌ --title requerido'); process.exit(1); }

  // Leer y convertir body
  const md = readFileSync(bodyPath, 'utf-8');
  const body = markdownToPortableText(md);
  console.log(`📝 Body: ${body.length} bloques generados`);

  // Subir imagen
  let mainImage = null;
  if (imagePath) {
    const absPath = resolve(imagePath);
    if (existsSync(absPath)) {
      console.log(`📤 Subiendo imagen: ${absPath}`);
      const asset = await client.assets.upload('image', createReadStream(absPath), {
        contentType: 'image/png', filename: basename(absPath),
      });
      mainImage = asset._id;
      console.log(`✅ Imagen subida: ${asset._id}`);
    } else {
      console.log(`⚠️  Imagen no encontrada: ${absPath}`);
    }
  }

  // Crear post
  const slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 96);

  const doc = {
    _type: 'post',
    title,
    slug: { _type: 'slug', current: slug },
    author,
    ...(mainImage && { mainImage: { _type: 'image', asset: { _type: 'reference', _ref: mainImage } } }),
    ...(category && { category: { _type: 'reference', _ref: category } }),
    ...(excerpt && { excerpt }),
    body,
    publishedAt,
  };

  const result = await client.create(doc);
  console.log(`✅ Post creado: ${result._id}`);

  // Publicar
  const draftId = `drafts.${result._id}`;
  const cleanId = result._id.replace(/^drafts\./, '');
  const draft = await client.getDocument(draftId).catch(() => null);
  if (draft) {
    await client.transaction()
      .createOrReplace({ ...draft, _id: cleanId })
      .delete(draftId)
      .commit();
    console.log(`✅ Post publicado: ${cleanId}`);
  } else {
    console.log(`ℹ️  Post ya publicado: ${cleanId}`);
  }
}

main().catch(e => { console.error('❌ Error:', e.message); process.exit(1); });
