/**
 * create-blog-post.mjs — Creates a full Sanity blog post from markdown content.
 *
 * USAGE:
 *   node scripts/create-blog-post.mjs \
 *     --title "Título del Artículo" \
 *     --slug "slug-del-articulo" \
 *     --asset "image-xxxx-1024x576-png" \
 *     --category "cat-gc" \
 *     --excerpt "Resumen corto" \
 *     --publishedAt "2025-01-03T00:00:00Z" \
 *     --body /path/to/content.md
 *
 * The --body file should contain markdown with:
 *   # Title (will be skipped, use --title instead)
 *   ## Section heading (becomes h2)
 *   ### Subsection (becomes h3)
 *   Plain paragraphs (become normal blocks)
 *   - List items (become bullet blocks)
 *   **bold text** and *italic text* are preserved
 *   | Tables | with | pipes | are converted to custom table blocks
 */

import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('❌ ERROR: Falta SANITY_API_WRITE_TOKEN en .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2025-06-11', useCdn: false });

// ─── Parse CLI ────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const opts = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].replace(/^--/, '');
      if (argv[i].includes('=')) {
        const [k, ...v] = key.split('=');
        opts[k] = v.join('=');
      } else {
        opts[key] = argv[i + 1] !== undefined && !argv[i + 1].startsWith('--')
          ? argv[i + 1] : true;
        if (typeof opts[key] !== 'boolean') i++;
      }
    }
  }
  return opts;
}

// ─── Markdown → Portable Text ──────────────────────────────────────────────

function mdLineToSpans(line) {
  // Parse **bold** and *italic*
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    // Text before match
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

  // Remaining text
  if (lastIdx < line.length) {
    parts.push({ _type: 'span', marks: [], text: line.slice(lastIdx) });
  }

  return parts.length > 0 ? parts : [{ _type: 'span', marks: [], text: line }];
}

/**
 * Parse a markdown table into a table block.
 * Detects lines that start with '|' and form a contiguous block.
 * Skips the separator line (---|---|---).
 */
function parseTable(lines, startIdx) {
  const rows = [];
  let i = startIdx;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed.startsWith('|')) break;

    // Skip separator row (---|---|---)
    if (/^\|[\s\-:]+\|/.test(trimmed) && !/[a-zA-Z0-9áéíóúñ]/i.test(trimmed)) {
      i++;
      continue;
    }

    // Parse cells: split by | and trim each cell
    const cells = trimmed
      .split('|')
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1) // remove leading/trailing empty from first/last |
      .map(c => c.trim());

    if (cells.length > 0) {
      rows.push({ _key: `row-${i}-${rows.length}`, cells });
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

    // Skip empty lines
    if (!trimmed) {
      flushList();
      i++;
      continue;
    }

    // Skip H1 (we use --title)
    if (trimmed.startsWith('# ')) {
      i++;
      continue;
    }

    // Detect tables (line starts with |)
    if (trimmed.startsWith('|')) {
      flushList();
      const result = parseTable(lines, i);
      if (result.block.rows.length > 0) {
        blocks.push(result.block);
        console.log(`   📊 Tabla: ${result.block.rows.length} filas × ${result.block.rows[0].cells.length} columnas`);
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

    // Bullet list items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      inList = true;
      listItems.push(trimmed.replace(/^[-*]\s+/, ''));
      i++;
      continue;
    }

    // Numbered list items
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

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList();
      blocks.push({
        _type: 'block',
        style: 'blockquote',
        children: mdLineToSpans(trimmed.replace(/^>\s+/, '')),
      });
      i++;
      continue;
    }

    // Regular paragraph
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

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  const title = opts.title;
  if (!title) {
    console.error('❌ ERROR: --title es requerido');
    process.exit(1);
  }

  const slug = opts.slug || title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
  const assetId = opts.asset;
  const categoryIds = opts.category ? opts.category.split(',') : [];
  const excerpt = opts.excerpt || '';
  const publishedAt = opts.publishedAt || new Date().toISOString();
  const bodyPath = opts.body;

  // Read body from file if provided
  let body = null;
  if (bodyPath) {
    const absPath = resolve(bodyPath);
    if (!existsSync(absPath)) {
      console.error(`❌ Archivo no encontrado: ${absPath}`);
      process.exit(1);
    }
    const md = readFileSync(absPath, 'utf-8');
    body = markdownToBlocks(md);
    const tableCount = body.filter(b => b._type === 'table').length;
    const blockCount = body.filter(b => b._type === 'block').length;
    console.log(`📄 Body leído: ${body.length} bloques totales (${blockCount} texto, ${tableCount} tablas)`);
  }

  // Build the document
  const doc = {
    _type: 'post',
    title,
    slug: { _type: 'slug', current: slug },
    ...(assetId && {
      mainImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
    }),
    ...(categoryIds.length > 0 && {
      category: { _type: 'reference', _ref: categoryIds[0] },
    }),
    ...(excerpt && { excerpt }),
    ...(body && { body }),
    publishedAt,
  };

  console.log(`📝 Creando post: "${title}"...`);

  const result = await client.create(doc);

  console.log(`✅ Post creado:`);
  console.log(`   ID:       ${result._id}`);
  console.log(`   Slug:     ${result.slug?.current}`);
  console.log(`   Fecha:    ${publishedAt}`);
  console.log(`   Estado:   borrador (usa 'publish ${result._id}' para publicar)`);

  return result;
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
