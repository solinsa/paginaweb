/**
 * Crea y publica el post "Cómo Elegir tu Primer HPLC para un Laboratorio de Investigación Académica".
 * Lee el body markdown y lo convierte a Portable Text para Sanity.
 * Imagen: public/mayo/08-primer-hplc-academia.png
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';
import { createReadStream, readFileSync } from 'fs';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

const client = createClient({ projectId, dataset, token, apiVersion: '2025-06-11', useCdn: false });

function markdownToPortableText(md) {
  const blocks = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Tabla markdown
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
    // H2
    if (line.startsWith('## ')) {
      blocks.push({ _type: 'block', style: 'h2', children: [{ _type: 'span', marks: [], text: line.replace(/^## /, '') }] });
      i++; continue;
    }
    // H3
    if (line.startsWith('### ')) {
      blocks.push({ _type: 'block', style: 'h3', children: [{ _type: 'span', marks: [], text: line.replace(/^### /, '') }] });
      i++; continue;
    }
    // Listas con guiones
    if (line.trim().startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().replace(/^- /, ''));
        i++;
      }
      blocks.push({
        _type: 'block', style: 'normal',
        children: items.map((item, idx) => ({ _type: 'span', marks: [], text: (idx > 0 ? '\n' : '') + '• ' + item })),
      });
      continue;
    }
    // Blockquote
    if (line.startsWith('> ')) {
      blocks.push({ _type: 'block', style: 'blockquote', children: [{ _type: 'span', marks: [], text: line.replace(/^> /, '') }] });
      i++; continue;
    }
    // Párrafo con bold/italic
    if (line.trim() && !line.startsWith('---')) {
      const text = line.trim();
      const children = [];
      let remaining = text;
      while (remaining.length > 0) {
        const strongMatch = remaining.match(/\*\*(.+?)\*\*/);
        const emMatch = remaining.match(/\*(.+?)\*/);
        let nextMatch = null, markType = null;
        if (strongMatch && emMatch) {
          if (strongMatch.index < emMatch.index) { nextMatch = strongMatch; markType = 'strong'; }
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
      blocks.push({ _type: 'block', style: 'normal', children: children.length > 0 ? children : [{ _type: 'span', marks: [], text }] });
      i++; continue;
    }
    i++;
  }
  return blocks;
}

async function main() {
  // 1. Subir imagen
  const imagePath = resolve(import.meta.dirname, '..', 'public/mayo/08-primer-hplc-academia.png');
  console.log(`📤 Subiendo imagen: ${imagePath}`);
  const asset = await client.assets.upload('image', createReadStream(imagePath), {
    contentType: 'image/png',
    filename: '08-primer-hplc-academia.png',
  });
  console.log(`✅ Imagen subida: ${asset._id}`);

  // 2. Leer y convertir body
  const bodyMd = readFileSync('/Users/samuelnavarro/Desktop/body-primer-hplc-academia.md', 'utf-8');
  const body = markdownToPortableText(bodyMd);
  console.log(`📝 Body: ${body.length} bloques generados`);

  // 3. Crear post
  const doc = {
    _type: 'post',
    title: 'Cómo Elegir tu Primer HPLC para un Laboratorio de Investigación Académica',
    slug: { _type: 'slug', current: 'como-elegir-primer-hplc-laboratorio-investigacion-academica' },
    author: 'Equipo Solinsa',
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    category: { _type: 'reference', _ref: 'cat-ind-academia' },
    excerpt: 'Guía de compra para elegir un HPLC para laboratorio académico: presupuesto, necesidades de investigación, configuración modulable, opciones reacondicionadas, servicio y soporte en México y capacitación.',
    body,
    publishedAt: '2026-05-22T06:00:00Z',
  };

  const result = await client.create(doc);
  console.log(`✅ Post creado: ${result._id}`);

  // 4. Publicar (mover de drafts a publicado)
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

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
