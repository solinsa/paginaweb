/**
 * Publica los 10 posts de junio desde bodies/junio/ y public/junio/
 * node scripts/publicar-junio.mjs
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
  { date: '2026-06-03', title: 'Cómo Calcular la Incertidumbre de tu Método Analítico (Guía Práctica)', file: '01-incertidumbre-metodo-analitico', img: '01-incertidumbre-metodo-analitico.png', cat: 'cat-calidad', excerpt: 'Aprende a calcular la incertidumbre de medición paso a paso con ejemplos prácticos para HPLC. Guía completa con fuentes, cálculo combinado y expandido.' },
  { date: '2026-06-06', title: 'Análisis de Aditivos en Alimentos por HPLC: Conservadores, Colorantes y Edulcorantes', file: '02-aditivos-alimentos-hplc', img: '02-aditivos-alimentos-hplc.png', cat: 'cat-ind-alimentos', excerpt: 'Guía completa para el análisis de aditivos alimentarios por HPLC: conservadores, colorantes sintéticos y edulcorantes con métodos validados.' },
  { date: '2026-06-09', title: 'Espectrometría de Masas para Principiantes: Ionización, Analizadores y Espectros', file: '03-espectrometria-masas-principiantes', img: '03-espectrometria-masas-principiantes.png', cat: 'cat-gcms', excerpt: 'Introducción a la espectrometría de masas: tipos de ionización, analizadores, interpretación de espectros y modos de barrido para analistas principiantes.' },
  { date: '2026-06-12', title: 'Análisis de Estabilidad de Productos Farmacéuticos por HPLC: Métodos ICH', file: '04-estabilidad-farmaceuticos-hplc', img: '04-estabilidad-farmaceuticos-hplc.png', cat: 'cat-ind-farma', excerpt: 'Guía completa para métodos indicadores de estabilidad por HPLC según guías ICH Q1A-Q1E, incluyendo degradación forzada y validación.' },
  { date: '2026-06-15', title: 'Reviviendo Equipos de Laboratorio que el Fabricante ya Abandonó', file: '05-reviviendo-equipos-laboratorio', img: '05-reviviendo-equipos-laboratorio.png', cat: 'cat-ind-academia', excerpt: 'Estrategias para mantener equipos analíticos descontinuados: refacciones genéricas, servicio independiente y actualización de software.' },
  { date: '2026-06-18', title: 'Análisis de Pesticidas en Suelo por GC-ECD y GC-MS: Métodos y Consideraciones', file: '06-pesticidas-suelo-gcecd-gcms', img: '06-pesticidas-suelo-gcecd-gcms.png', cat: 'cat-ind-ambiental', excerpt: 'Guía para el análisis de pesticidas en suelos por GC-ECD y GC-MS con métodos EPA, preparación de muestra y control de calidad.' },
  { date: '2026-06-21', title: 'Gestión de Consumibles en el Laboratorio: Cómo Evitar el Desabasto Crítico', file: '07-gestion-consumibles-laboratorio', img: '07-gestion-consumibles-laboratorio.png', cat: 'cat-prod-lab', excerpt: 'Aprende a gestionar consumibles críticos en el laboratorio con clasificación ABC, puntos de reorden y estrategias para evitar desabastos.' },
  { date: '2026-06-24', title: 'Determinación de Metales en Suelos por AAS e ICP: Métodos NMX y EPA', file: '08-metales-suelos-aas-icp', img: '08-metales-suelos-aas-icp.png', cat: 'cat-ind-ambiental', excerpt: 'Comparativa de métodos EPA y NMX para determinación de metales en suelos por AAS e ICP, incluyendo digestión y control de calidad.' },
  { date: '2026-06-27', title: 'Cómo Funciona un Acoplado GC-MS: Del Cromatógrafo al Espectrómetro de Masas', file: '09-como-funciona-gcms', img: '09-como-funciona-gcms.png', cat: 'cat-gcms', excerpt: 'Explicación detallada del funcionamiento de un GC-MS: interfase, fuente de ionización, analizador cuadrupolar y sistema de vacío.' },
  { date: '2026-06-30', title: '10 Razones por las que tu Laboratorio Debería Tener un Contrato de Servicio Preventivo', file: '10-contrato-servicio-preventivo', img: '10-contrato-servicio-preventivo.png', cat: 'cat-serv-mtto', excerpt: 'Descubre por qué un contrato de servicio preventivo tiene ROI positivo: reduce costos, prolonga la vida del equipo y garantiza cumplimiento normativo.' },
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
  const imgPath = resolve(`public/junio/${p.img}`);
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
    const mdPath = resolve(baseDir, `bodies/junio/${p.file}.md`);
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
