/**
 * upload-monthly.mjs — Script único reutilizable para subir posts mensuales.
 *
 * Lee bodies/mes/ y public/mes/, parsea frontmatter de cada .md,
 * sube imágenes a Sanity, crea posts y los publica.
 *
 * El slug SEO-friendly se define en el frontmatter YAML de cada body:
 *   slug: mi-slug-personalizado
 *
 * Uso:  node scripts/upload-monthly.mjs <mes>
 * Ej:   node scripts/upload-monthly.mjs marzo
 *       node scripts/upload-monthly.mjs abril
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve, basename, parse } from 'path';
import { createReadStream, readFileSync, existsSync, readdirSync } from 'fs';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

const client = createClient({ projectId, dataset, token, apiVersion: '2025-06-11', useCdn: false });
const BASE = resolve(import.meta.dirname, '..');

// ─── Markdown → Portable Text ──────────────────────────────────────────────

function mdLineToSpans(line) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIdx = 0, match;
  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIdx) parts.push({ _type: 'span', marks: [], text: line.slice(lastIdx, match.index) });
    if (match[2]) parts.push({ _type: 'span', marks: ['strong'], text: match[2] });
    else if (match[3]) parts.push({ _type: 'span', marks: ['em'], text: match[3] });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < line.length) parts.push({ _type: 'span', marks: [], text: line.slice(lastIdx) });
  return parts.length > 0 ? parts : [{ _type: 'span', marks: [], text: line }];
}

function parseTable(lines, startIdx) {
  const rows = [];
  let i = startIdx;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (!t.startsWith('|')) break;
    if (/^\|[\s\-:]+\|$/.test(t) && !/[a-zA-Z0-9áéíóúñ]/i.test(t)) { i++; continue; }
    const cells = t.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
    if (cells.length > 0) rows.push({ _key: `row-${i}`, cells });
    i++;
  }
  return { block: { _type: 'table', rows }, nextIdx: i };
}

function markdownToBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let inList = false, listItems = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push({ _type: 'block', style: 'normal', listItem: 'bullet', level: 1, children: listItems.map(t => ({ _type: 'span', marks: [], text: t })) });
      listItems = []; inList = false;
    }
  }

  let i = 0;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (!t) { flushList(); i++; continue; }
    if (t.startsWith('# ')) { i++; continue; }

    if (t.startsWith('|')) {
      flushList();
      const r = parseTable(lines, i);
      if (r.block.rows.length > 0) blocks.push(r.block);
      i = r.nextIdx; continue;
    }
    if (t.startsWith('## ')) { flushList(); blocks.push({ _type: 'block', style: 'h2', children: mdLineToSpans(t.replace(/^##\s+/, '')) }); i++; continue; }
    if (t.startsWith('### ')) { flushList(); blocks.push({ _type: 'block', style: 'h3', children: mdLineToSpans(t.replace(/^###\s+/, '')) }); i++; continue; }
    if (t.startsWith('- ')) { inList = true; listItems.push(t.replace(/^-\s+/, '')); i++; continue; }
    if (/^\d+[.)]\s/.test(t)) { flushList(); blocks.push({ _type: 'block', style: 'normal', listItem: 'number', level: 1, children: mdLineToSpans(t.replace(/^\d+[.)]\s+/, '')) }); i++; continue; }
    if (t.startsWith('> ')) { flushList(); blocks.push({ _type: 'block', style: 'blockquote', children: mdLineToSpans(t.replace(/^>\s+/, '')) }); i++; continue; }
    flushList(); blocks.push({ _type: 'block', style: 'normal', children: mdLineToSpans(t) }); i++;
  }
  flushList();
  return blocks;
}

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: md };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const eq = line.indexOf(':');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    if (val.startsWith('[') && val.endsWith(']')) { try { val = JSON.parse(val.replace(/'/g, '"')); } catch {} }
    if (val === 'true') val = true;
    if (val === 'false') val = false;
    fm[key] = val;
  }
  return { frontmatter: fm, body: m[2].trim() };
}

// ─── Main ──────────────────────────────────────────────────────────────────

const MES = process.argv[2];
if (!MES) { console.error('❌ Uso: node scripts/upload-monthly.mjs <mes> (ej: marzo, abril)'); process.exit(1); }

const bodiesDir = resolve(BASE, 'bodies', MES);
const publicDir = resolve(BASE, 'public', MES);

if (!existsSync(bodiesDir)) { console.error(`❌ No existe: ${bodiesDir}`); process.exit(1); }

const mdFiles = readdirSync(bodiesDir)
  .filter(f => f.endsWith('.md'))
  .sort();

console.log(`📂 Mes: ${MES} — ${mdFiles.length} bodies encontrados\n`);

async function main() {
  const created = [];

  for (const file of mdFiles) {
    const stem = parse(file).name;
    console.log(`═══ ${file} ═══`);

    // 1. Read body + frontmatter
    const bodyPath = resolve(bodiesDir, file);
    const md = readFileSync(bodyPath, 'utf-8');
    const { frontmatter, body: mdBody } = parseFrontmatter(md);
    const portableText = markdownToBlocks(mdBody);

    const title       = frontmatter.title || stem;
    const slug        = frontmatter.slug || stem.replace(/^\d+-/, '');
    const category    = frontmatter.category || undefined;
    const publishedAt = frontmatter.published
      ? `${frontmatter.published}T06:00:00Z`
      : undefined;

    console.log(`   📝 "${title}" → /blog/${slug}`);
    if (!frontmatter.slug) console.warn(`   ⚠️  Sin slug en frontmatter. Usado: ${slug}`);

    // 2. Upload image
    const imgPath = resolve(publicDir, `${stem}.png`);
    if (!existsSync(imgPath)) {
      console.error(`   ❌ Imagen no encontrada: ${imgPath}`);
      continue;
    }
    console.log(`   📤 Subiendo imagen: ${basename(imgPath)}`);
    const asset = await client.assets.upload('image', createReadStream(imgPath), {
      contentType: 'image/png',
      filename: `${slug}.png`,
    });
    console.log(`   ✅ Asset: ${asset._id}`);

    // 3. Get excerpt
    let excerpt = frontmatter.excerpt || '';
    if (!excerpt) {
      const firstPara = portableText.find(b => b._type === 'block' && b.style === 'normal');
      excerpt = firstPara ? firstPara.children.map(c => c.text).join('').slice(0, 200) : '';
    }

    // 4. Create post
    const doc = {
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      author: 'Equipo Solinsa',
      mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      ...(category && { category: { _type: 'reference', _ref: category } }),
      excerpt: excerpt.slice(0, 250),
      body: portableText,
      ...(publishedAt && { publishedAt }),
    };

    const result = await client.create(doc);
    console.log(`   ✅ Post creado: ${result._id}`);
    created.push({ id: result._id, slug, title });
  }

  // 5. Publish
  if (created.length > 0) {
    console.log(`\n═══ PUBLICANDO ${created.length} POSTS ═══`);
    for (const p of created) {
      const draftId = `drafts.${p.id}`;
      const cleanId = p.id.replace(/^drafts\./, '');
      let draft;
      try { draft = await client.getDocument(draftId); } catch {}
      if (draft) {
        await client.transaction().createOrReplace({ ...draft, _id: cleanId }).delete(draftId).commit();
        console.log(`✅ ${p.title} → https://solinsa.mx/blog/${p.slug}`);
      } else {
        console.log(`ℹ️  Ya publicado: ${p.title}`);
      }
    }
  }

  console.log(`\n🎉 COMPLETADO: ${created.length} posts de ${MES} 2026.`);
}

main().catch(e => { console.error(`\n❌ Error: ${e.message}`); process.exit(1); });
