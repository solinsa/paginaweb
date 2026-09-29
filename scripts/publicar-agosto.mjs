/**
 * Publica los 10 posts de agosto desde bodies/agosto/ y public/agosto/
 * node scripts/publicar-agosto.mjs
 */
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve, basename } from 'path';
import { createReadStream, existsSync, readFileSync } from 'fs';

config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-06-11',
  useCdn: false,
});

const posts = [
  { date: '2025-08-02', title: 'Solinsa en el Congreso ANM 2026: Novedades en Cromatografía de Gases', file: '01-solinsa-congreso-anm-2026', img: '01-solinsa-congreso-anm-2026.png', cat: 'cat-com-eventos', excerpt: 'Cobertura del Congreso ANM 2026 en cromatografía de gases: nuevas tecnologías, tendencias, talleres prácticos y el stand de Solinsa con demostraciones multimarca.' },
  { date: '2025-08-05', title: 'Análisis de Productos Cosméticos por GC-MS: Control de Calidad y Regulación', file: '02-cosmeticos-gcms-control-calidad', img: '02-cosmeticos-gcms-control-calidad.png', cat: 'cat-ind-quimica', excerpt: 'Determinación de fragancias, conservadores, solventes y compuestos prohibidos en cosméticos por GC-MS. Regulación COFEPRIS y preparación de muestra.' },
  { date: '2025-08-08', title: 'Flujo de Trabajo en el Laboratorio Analítico: Cómo Eliminar Cuellos de Botella', file: '03-flujo-trabajo-laboratorio', img: '03-flujo-trabajo-laboratorio.png', cat: 'cat-prod-lab', excerpt: 'Mapeo de flujo de muestras, identificación de cuellos de botella, automatización con LIMS y métricas clave para optimizar la productividad del laboratorio.' },
  { date: '2025-08-11', title: 'Análisis de Contenido de Alcohol en Bebidas por GC-FID: Método Oficial', file: '04-alcohol-bebidas-gc-fid', img: '04-alcohol-bebidas-gc-fid.png', cat: 'cat-ind-tequila', excerpt: 'Determinación de grado alcohólico (% v/v) por GC-FID con estándar interno. Método oficial según NOM-006 y NOM-070 con condiciones cromatográficas.' },
  { date: '2025-08-14', title: 'Cómo Interpretar un Cromatograma: Guía para Analistas que Empiezan', file: '05-interpretar-cromatograma', img: '05-interpretar-cromatograma.png', cat: 'cat-serv-capac', excerpt: 'Guía práctica para leer un cromatograma: tiempo de retención, resolución, factor de asimetría, platos teóricos y diagnóstico de problemas comunes.' },
  { date: '2025-08-17', title: 'Análisis de Dioxinas y Furanos por GC-HRMS: Retos y Métodos', file: '06-dioxinas-furanos-gchighresms', img: '06-dioxinas-furanos-gchighresms.png', cat: 'cat-ind-ambiental', excerpt: 'Muestreo, extracción, clean-up y GC-HRMS para dioxinas y furanos según EPA 1613 y 8290. Toxicidad equivalente (TEQ) y tabla de congéneres.' },
  { date: '2025-08-20', title: 'Análisis de Disolución de Formulaciones Farmacéuticas por HPLC', file: '07-disolucion-formulaciones-hplc', img: '07-disolucion-formulaciones-hplc.png', cat: 'cat-ind-farma', excerpt: 'Prueba de disolución USP con HPLC como método de cuantificación. Aparatos 1-4, muestreo automático, validación y criterios de aceptación Q.' },
  { date: '2025-08-23', title: 'Columnas Capilares para GC: Guía de Selección por Analito y Fase Estacionaria', file: '08-columnas-capilares-gc', img: '08-columnas-capilares-gc.png', cat: 'cat-gc', excerpt: 'Guía completa de selección de columnas capilares GC: fases estacionarias, polaridad, temperatura máxima y tabla de selección cruzada por analito.' },
  { date: '2025-08-26', title: 'Paro de Laboratorio por Mantenimiento Preventivo: Manual de Comunicación', file: '09-paro-laboratorio-mtto', img: '09-paro-laboratorio-mtto.png', cat: 'cat-com-empresa', excerpt: 'Cómo comunicar paros programados de mantenimiento a operaciones, clientes y dirección para minimizar el impacto. Checklist y plan de contingencia.' },
  { date: '2025-08-29', title: 'Análisis de Plásticos y Polímeros por FTIR y GC-MS: Identificación de Materiales', file: '10-plasticos-polimeros-ftir-gcms', img: '10-plasticos-polimeros-ftir-gcms.png', cat: 'cat-ftir', excerpt: 'FTIR-ATR para identificación rápida de polímeros y GC-MS para aditivos y plastificantes. Tabla de picos característicos y casos prácticos.' },
];

function markdownToPortableText(md) {
  const blocks = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
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
    if (line.startsWith('## ')) {
      blocks.push({ _type: 'block', style: 'h2', children: [{ _type: 'span', marks: [], text: line.replace(/^## /, '') }] });
      i++; continue;
    }
    if (line.startsWith('### ')) {
      blocks.push({ _type: 'block', style: 'h3', children: [{ _type: 'span', marks: [], text: line.replace(/^### /, '') }] });
      i++; continue;
    }
    if (line.startsWith('> ')) {
      blocks.push({ _type: 'block', style: 'blockquote', children: [{ _type: 'span', marks: [], text: line.replace(/^> /, '') }] });
      i++; continue;
    }
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

function makeSlug(title) {
  return title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 96);
}

async function createPost(p, md) {
  const body = markdownToPortableText(md);
  console.log(`📝 ${p.title} → ${body.length} bloques`);

  // Subir imagen
  const imgPath = resolve(`public/agosto/${p.img}`);
  let mainImage = null;
  if (existsSync(imgPath)) {
    console.log(`  📤 Subiendo imagen: ${p.img}`);
    const asset = await client.assets.upload('image', createReadStream(imgPath), {
      contentType: 'image/png', filename: basename(imgPath),
    });
    mainImage = asset._id;
    console.log(`  ✅ Imagen subida: ${asset._id}`);
  }

  const doc = {
    _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: makeSlug(p.title) },
    author: 'Equipo Solinsa',
    ...(mainImage && { mainImage: { _type: 'image', asset: { _type: 'reference', _ref: mainImage } } }),
    category: { _type: 'reference', _ref: p.cat },
    excerpt: p.excerpt,
    body,
    publishedAt: p.date + 'T10:00:00Z',
  };

  const result = await client.create(doc);
  console.log(`  ✅ Post creado: ${result._id}`);

  // Publicar
  const cleanId = result._id.replace(/^drafts\./, '');
  const draft = await client.getDocument(`drafts.${cleanId}`).catch(() => null);
  if (draft) {
    await client.transaction()
      .createOrReplace({ ...draft, _id: cleanId })
      .delete(`drafts.${cleanId}`)
      .commit();
    console.log(`  ✅ Post publicado: ${cleanId}`);
  } else {
    console.log(`  ℹ️  Ya publicado: ${cleanId}`);
  }
  return cleanId;
}

async function main() {
  const baseDir = resolve(import.meta.dirname, '..');
  const results = [];
  for (const p of posts) {
    const mdPath = resolve(baseDir, `bodies/agosto/${p.file}.md`);
    if (!existsSync(mdPath)) {
      console.error(`❌ No se encuentra: ${mdPath}`);
      continue;
    }
    const md = readFileSync(mdPath, 'utf-8');
    try {
      const id = await createPost(p, md);
      results.push({ title: p.title, id, ok: true });
    } catch (e) {
      console.error(`❌ Error en "${p.title}": ${e.message}`);
      results.push({ title: p.title, ok: false, error: e.message });
    }
  }
  console.log('\n=== RESUMEN ===');
  const ok = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok).length;
  results.forEach(r => console.log(`${r.ok ? '✅' : '❌'} ${r.title}${r.ok ? ' (' + r.id + ')' : ' - ' + r.error}`));
  console.log(`\n${ok} publicados, ${fail} fallos`);
}

main().catch(e => { console.error('Error fatal:', e.message); process.exit(1); });
