/**
 * upload-febrero.mjs — Sube imágenes, crea y publica los 10 posts de febrero 2026.
 *
 * Uso: node scripts/upload-febrero.mjs
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve, basename } from 'path';
import { createReadStream, readFileSync, existsSync } from 'fs';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

const client = createClient({ projectId, dataset, token, apiVersion: '2025-06-11', useCdn: false });

const BASE = resolve(import.meta.dirname, '..');
const MES = 'febrero';

// ─── Markdown → Portable Text ──────────────────────────────────────────────

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
        console.log(`   📊 Tabla: ${result.block.rows.length} filas × ${result.block.rows[0].cells.length} columnas`);
      }
      i = result.nextIdx;
      continue;
    }

    // H2
    if (trimmed.startsWith('## ')) {
      flushList();
      blocks.push({ _type: 'block', style: 'h2', children: mdLineToSpans(trimmed.replace(/^##\s+/, '')) });
      i++;
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      flushList();
      blocks.push({ _type: 'block', style: 'h3', children: mdLineToSpans(trimmed.replace(/^###\s+/, '')) });
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
        _type: 'block', style: 'normal', listItem: 'number', level: 1,
        children: mdLineToSpans(trimmed.replace(/^\d+[.)]\s+/, '')),
      });
      i++;
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList();
      blocks.push({ _type: 'block', style: 'blockquote', children: mdLineToSpans(trimmed.replace(/^>\s+/, '')) });
      i++;
      continue;
    }

    // Paragraph
    flushList();
    blocks.push({ _type: 'block', style: 'normal', children: mdLineToSpans(trimmed) });
    i++;
  }

  flushList();
  return blocks;
}

function parseFrontmatter(md) {
  const match = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: md };
  const fmLines = match[1].split('\n');
  const frontmatter = {};
  for (const line of fmLines) {
    const eqIdx = line.indexOf(':');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    // Strip surrounding quotes from YAML string values
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (val.startsWith('[') && val.endsWith(']')) {
      try { val = JSON.parse(val.replace(/'/g, '"')); } catch {}
    }
    if (val === 'true') val = true;
    if (val === 'false') val = false;
    frontmatter[key] = val;
  }
  return { frontmatter, body: match[2].trim() };
}

// ─── Posts definition ──────────────────────────────────────────────────────
// Explicit slugs — no numeric prefix in URLs. file name is only for local reference.

const POSTS = [
  { file: '01-congresos-ferias-analitica-2026',       slug: 'congresos-ferias-analitica-2026',       publishedAt: '2026-02-02T06:00:00Z' },
  { file: '02-ftir-raman-nanomateriales',              slug: 'ftir-raman-nanomateriales',              publishedAt: '2026-02-05T06:00:00Z' },
  { file: '03-calibracion-pipetas-material-volumetrico', slug: 'calibracion-pipetas-iso-8655',         publishedAt: '2026-02-08T06:00:00Z' },
  { file: '04-capacitacion-buenas-practicas-laboratorio', slug: 'capacitacion-buenas-practicas-laboratorio', publishedAt: '2026-02-11T06:00:00Z' },
  { file: '05-disolventes-residuales-gc-headspace',    slug: 'disolventes-residuales-gc-headspace-usp', publishedAt: '2026-02-14T06:00:00Z' },
  { file: '06-tierras-raras-icpms-energias-limpias',   slug: 'tierras-raras-icpms-energias-limpias',   publishedAt: '2026-02-17T06:00:00Z' },
  { file: '07-gc-gc-bidimensional-matrices-complejas', slug: 'gc-gc-bidimensional-matrices-complejas', publishedAt: '2026-02-20T06:00:00Z' },
  { file: '08-mantenimiento-preventivo-q1-ftir-icp',   slug: 'mantenimiento-preventivo-q1-ftir-icp',   publishedAt: '2026-02-23T06:00:00Z' },
  { file: '09-troubleshooting-valvulas-inyeccion-hplc',slug: 'diagnostico-valvulas-inyeccion-hplc',     publishedAt: '2026-02-26T06:00:00Z' },
  { file: '10-implementacion-sgc-iso17025',            slug: 'implementacion-sgc-iso-17025-laboratorio', publishedAt: '2026-02-28T06:00:00Z' },
];

async function main() {
  const created = [];

  for (const post of POSTS) {
    console.log(`\n═══ ${post.file} ═══`);

    // 1. Upload image
    const imgPath = resolve(BASE, 'public', MES, `${post.file}.png`);
    if (!existsSync(imgPath)) {
      console.error(`❌ Imagen no encontrada: ${imgPath}`);
      continue;
    }
    console.log(`📤 Subiendo imagen: ${basename(imgPath)}`);
    const asset = await client.assets.upload('image', createReadStream(imgPath), {
      contentType: 'image/png',
      filename: `${post.slug}.png`,
    });
    console.log(`   ✅ Asset ID: ${asset._id}`);

    // 2. Read body markdown
    const bodyPath = resolve(BASE, 'bodies', MES, `${post.file}.md`);
    if (!existsSync(bodyPath)) {
      console.error(`❌ Body no encontrado: ${bodyPath}`);
      continue;
    }
    const md = readFileSync(bodyPath, 'utf-8');
    const { frontmatter, body: mdBody } = parseFrontmatter(md);
    const portableText = markdownToBlocks(mdBody);
    const tableCount = portableText.filter(b => b._type === 'table').length;
    const blockCount = portableText.filter(b => b._type === 'block').length;
    console.log(`📝 Body: ${portableText.length} bloques (${blockCount} texto, ${tableCount} tablas)`);

    // 3. Get excerpt
    let excerpt = frontmatter.excerpt || '';
    if (!excerpt) {
      const firstPara = portableText.find(b => b._type === 'block' && b.style === 'normal');
      excerpt = firstPara ? firstPara.children.map(c => c.text).join('').slice(0, 200) : '';
    }

    // 4. Create post — use explicit slug, never the numeric-prefixed file name
    const title = frontmatter.title || post.file;
    const slug = post.slug;  // Clean slug — no numeric prefix
    const category = frontmatter.category || undefined;

    const doc = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      author: 'Equipo Solinsa',
      mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      ...(category && { category: { _type: 'reference', _ref: category } }),
      excerpt: excerpt.slice(0, 250),
      body: portableText,
      publishedAt: post.publishedAt,
    };

    console.log(`📝 Creando post: "${title}"`);
    const result = await client.create(doc);
    console.log(`   ✅ Post creado: ${result._id} (slug: ${slug})`);

    created.push({ id: result._id, slug, title });
  }

  // 5. Publish all
  console.log(`\n═══ PUBLICANDO ${created.length} POSTS ═══`);
  for (const p of created) {
    const draftId = `drafts.${p.id}`;
    const cleanId = p.id.replace(/^drafts\./, '');
    let draft;
    try { draft = await client.getDocument(draftId); } catch {}
    if (draft) {
      await client.transaction()
        .createOrReplace({ ...draft, _id: cleanId })
        .delete(draftId)
        .commit();
      console.log(`✅ Publicado: ${p.title} → https://solinsa.mx/blog/${p.slug}`);
    } else {
      console.log(`ℹ️  Ya publicado o no-draft: ${p.title}`);
    }
  }

  console.log(`\n🎉 COMPLETADO: ${created.length} posts de febrero 2026 publicados.`);
}

main().catch(e => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
