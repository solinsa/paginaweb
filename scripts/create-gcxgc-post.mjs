/**
 * Crea y publica: 'Cromatografía de Gases Bidimensional (GC×GC): Conceptos y Aplicaciones Avanzadas'
 * Lee el body markdown y lo convierte a Portable Text.
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';
import { createReadStream, readFileSync } from 'fs';

// Cargar .env desde la raíz del proyecto real
config({ path: resolve('/Users/samuelnavarro/solinsa/marketing/paginaweb/.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('❌ SANITY_API_WRITE_TOKEN no definido en .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2025-06-11', useCdn: false });

function mdLineToSpans(line) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIdx = 0;
  let match;
  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIdx) {
      parts.push({ _type: 'span', marks: [], text: line.slice(lastIdx, match.index) });
    }
    if (match[2]) {
      parts.push({ _type: 'span', marks: ['strong'], text: match[2] });
    } else if (match[3]) {
      parts.push({ _type: 'span', marks: ['em'], text: match[3] });
    }
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < line.length) {
    parts.push({ _type: 'span', marks: [], text: line.slice(lastIdx) });
  }
  return parts.length > 0 ? parts : [{ _type: 'span', marks: [], text: line }];
}

function parseTable(lines, startIdx) {
  const rows = [];
  let i = startIdx;
  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith('|')) break;
    if (/^\|[\s\-:]+\|/.test(trimmed) && !/[a-zA-Z0-9áéíóúñ]/i.test(trimmed)) {
      i++;
      continue;
    }
    const cells = trimmed
      .split('|')
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      .map(c => c.trim());
    if (cells.length > 0) {
      rows.push({ _key: `row-${i}`, cells });
    }
    i++;
  }
  return { block: { _type: 'table', rows }, nextIdx: i };
}

function markdownToBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let inList = false;
  let listItems = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push({
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: listItems.map(item => ({ _type: 'span', marks: [], text: item })),
      });
      listItems = [];
      inList = false;
    }
  }

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { flushList(); i++; continue; }
    if (trimmed.startsWith('# ')) { i++; continue; }

    // Tables
    if (trimmed.startsWith('|')) {
      flushList();
      const result = parseTable(lines, i);
      if (result.block.rows.length > 0) {
        blocks.push(result.block);
        console.log(`   📊 Tabla: ${result.block.rows.length} filas x ${result.block.rows[0].cells.length} columnas`);
      }
      i = result.nextIdx;
      continue;
    }

    // H2
    if (trimmed.startsWith('## ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: mdLineToSpans(trimmed.replace(/^##\s+/, '')),
      });
      i++;
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'h3',
        children: mdLineToSpans(trimmed.replace(/^###\s+/, '')),
      });
      i++;
      continue;
    }

    // Bullet list
    if (trimmed.startsWith('- ')) {
      inList = true;
      listItems.push(trimmed.replace(/^-\s+/, ''));
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+[.)]\s/.test(trimmed)) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'normal',
        listItem: 'number',
        level: 1,
        children: mdLineToSpans(trimmed.replace(/^\d+[.)]\s+/, '')),
      });
      i++;
      continue;
    }

    // Paragraph
    flushList();
    blocks.push({
      _type: 'block',
      style: 'normal',
      children: mdLineToSpans(trimmed),
    });
    i++;
  }

  flushList();
  return blocks;
}

async function main() {
  // 1. Subir imagen
  const imagePath = '/Users/samuelnavarro/solinsa/marketing/paginaweb/public/mayo/11-gcxgc-bidimensional.png';
  console.log(`📤 Subiendo imagen: ${imagePath}`);
  const asset = await client.assets.upload('image', createReadStream(imagePath), {
    contentType: 'image/png',
    filename: '11-gcxgc-bidimensional.png',
  });
  console.log(`✅ Imagen subida: ${asset._id}`);

  // 2. Categoria
  const catId = 'cat-gc';
  console.log(`   📁 Categoria: ${catId}`);

  // 3. Leer y convertir body
  const bodyMd = readFileSync('/Users/samuelnavarro/Desktop/body-gcxgc-bidimensional.md', 'utf-8');
  const body = markdownToBlocks(bodyMd);
  const tableCount = body.filter(b => b._type === 'table').length;
  const blockCount = body.filter(b => b._type === 'block').length;
  console.log(`📝 Body: ${body.length} bloques (${blockCount} texto, ${tableCount} tablas)`);

  // 4. Crear post
  const title = 'Cromatografia de Gases Bidimensional (GC×GC): Conceptos y Aplicaciones Avanzadas';
  const slug = 'cromatografia-gases-bidimensional-gcxgc-conceptos-aplicaciones-avanzadas';

  const doc = {
    _type: 'post',
    title,
    slug: { _type: 'slug', current: slug },
    author: 'Equipo Solinsa',
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    category: { _type: 'reference', _ref: catId },
    excerpt: 'Principios de GC×GC: modulador, columnas primaria/secundaria, mapas de contorno 2D. Aplicaciones en petróleo, aromas, contaminantes traza. Cuándo vale la inversión.',
    body,
    publishedAt: '2026-05-31T06:00:00Z',
  };

  console.log(`📝 Creando post: "${title}"`);
  const result = await client.create(doc);
  console.log(`✅ Post creado: ${result._id}`);

  // 5. Publicar (mover de drafts a published)
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

  console.log(`\n🔗 https://solinsa.mx/blog/${slug}`);
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
