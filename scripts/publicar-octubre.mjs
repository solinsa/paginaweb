/**
 * Publica los 10 posts de octubre 2025 desde bodies/octubre/ y public/octubre/
 * node scripts/publicar-octubre.mjs
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
  { date: '2025-10-01', title: 'Análisis de Microplásticos en Agua por FTIR y Técnicas Complementarias',   file: '01-microplasticos-ftir',     img: '01-microplasticos-ftir.png',     cat: 'cat-ind-ambiental',   excerpt: 'Identificación y cuantificación de microplásticos (PE, PP, PET, PS) en muestras de agua mediante microscopía FTIR, Raman y técnicas complementarias. Preparación de muestra, bibliotecas espectrales y control de calidad.' },
  { date: '2025-10-04', title: 'Cromatografía de Gases en la Industria del Tequila y Mezcal: Control de Calidad y Autenticidad', file: '02-tequila-mezcal-gc',       img: '02-tequila-mezcal-gc.png',       cat: 'cat-ind-tequila',      excerpt: 'Determinación de metanol, furfural, alcoholes superiores y acetato de etilo por GC-FID según NOM-006-SCFI-2012. Autenticidad, adulteración y perfil de congéneres.' },
  { date: '2025-10-07', title: 'Validación de Métodos por HPLC según FEUM para la Industria Farmacéutica', file: '03-hplc-farmacos',           img: '03-hplc-farmacos.png',           cat: 'cat-ind-farma',       excerpt: 'Guía completa de validación de métodos HPLC conforme a FEUM (MGA 0061) e ICH Q2(R1): sistema, precisión, exactitud, linealidad, LOD/LOQ y robustez.' },
  { date: '2025-10-10', title: 'Diagnóstico de Problemas en Cromatógrafos de Gases: Guía Práctica de Solución de Fallas', file: '04-diagnostico-gc',         img: '04-diagnostico-gc.png',         cat: 'cat-serv-diag',       excerpt: 'Identificación y corrección de fallas comunes en GC: picos fantasma, tailing, deriva de línea base, desplazamiento de tiempos de retención y mantenimiento del inyector.' },
  { date: '2025-10-13', title: 'Análisis de Metales en la Industria Minera por ICP-OES: Métodos y Preparación de Muestra', file: '05-icp-mineria',           img: '05-icp-mineria.png',           cat: 'cat-icp',            excerpt: 'ICP-OES para minería: Au, Ag, Cu, Fe, Zn, Pb. Métodos EPA 6010D/3051A, digestión ácida, fusión alcalina, interferencias y control de calidad.' },
  { date: '2025-10-16', title: 'Cómo Implementar un Programa de Calibración Efectivo en el Laboratorio',    file: '06-calibracion-laboratorio', img: '06-calibracion-laboratorio.png', cat: 'cat-serv-calib',    excerpt: 'Programa de calibración según ISO 17025:2017: trazabilidad metrológica, CRM, intervalos de calibración, verificación, incertidumbre y documentación.' },
  { date: '2025-10-19', title: 'Determinación de Hidrocarburos Aromáticos Policíclicos (HAP) en Alimentos por GC-MS', file: '07-hap-alimentos-gcms',     img: '07-hap-alimentos-gcms.png',     cat: 'cat-ind-alimentos',  excerpt: 'Análisis de los 15+1 HAP prioritarios UE en alimentos ahumados y asados por GC-MS. Regulación EU 1881/2006, extracción, condiciones cromatográficas y control de calidad.' },
  { date: '2025-10-22', title: 'Análisis de Compuestos Orgánicos Volátiles (COV) en la Industria Petroquímica por GC-FID y GC-MS', file: '08-cov-petroquimica',       img: '08-cov-petroquimica.png',       cat: 'cat-ind-petroquimica', excerpt: 'Monitoreo de BTEX, alcanos y alquenos en la industria petroquímica por headspace-GC-FID y GC-MS. Métodos EPA TO-15 y EPA 8260, emisiones fugitivas.' },
  { date: '2025-10-25', title: 'Espectroscopia FTIR-ATR: Aplicaciones en el Control de Calidad de Aceites Esenciales', file: '09-ftir-aceites-esenciales',  img: '09-ftir-aceites-esenciales.png', cat: 'cat-ftir',          excerpt: 'Huella espectral FTIR-ATR para autenticación de aceites esenciales. Detección de adulteración, quimiometría PCA, estándares ISO y flujo de trabajo práctico.' },
  { date: '2025-10-28', title: 'Cumplimiento Normativo en Laboratorios Analíticos: ISO 17025 y Buenas Prácticas de Laboratorio', file: '10-iso-17025-cumplimiento',  img: '10-iso-17025-cumplimiento.png',  cat: 'cat-cumplimiento',   excerpt: 'Guía para la acreditación ISO 17025:2017 y cumplimiento de BPL: manual de calidad, validación, calibración, pruebas de aptitud, auditorías internas y EMA.' },
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
  const imgPath = resolve(`public/octubre/${p.img}`);
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
    author: 'author-solinsa',
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
    const mdPath = resolve(baseDir, `bodies/octubre/${p.file}.md`);
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
  console.log('\n=== RESUMEN OCTUBRE 2025 ===');
  const ok = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok).length;
  results.forEach(r => console.log(`${r.ok ? '✅' : '❌'} ${r.title}${r.ok ? ' (' + r.id + ')' : ' - ' + r.error}`));
  console.log(`\n${ok} publicados, ${fail} fallos`);
}

main().catch(e => { console.error('Error fatal:', e.message); process.exit(1); });
