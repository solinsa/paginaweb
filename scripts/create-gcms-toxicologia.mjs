/**
 * Crea el post de GC-MS en Toxicología Forense.
 * Lee el body markdown y lo convierte a Portable Text.
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

// Función simple para convertir markdown a Portable Text
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
        if (lines[i].match(/^\|[\s\-:]+\|/)) {
          i++;
          continue;
        }
        const cells = lines[i]
          .split('|')
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map(c => c.trim());
        if (cells.length > 0) {
          rows.push({ cells });
        }
        i++;
      }
      if (rows.length > 0) {
        blocks.push({ _type: 'table', rows });
      }
      continue;
    }

    // Encabezados
    if (line.startsWith('## ')) {
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', marks: [], text: line.replace(/^## /, '') }],
      });
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      blocks.push({
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', marks: [], text: line.replace(/^### /, '') }],
      });
      i++;
      continue;
    }

    // Lista con guiones
    if (line.trim().startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().replace(/^- /, ''));
        i++;
      }
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: items.map((item, idx) => ({
          _type: 'span',
          marks: [],
          text: (idx > 0 ? '\n' : '') + '• ' + item,
        })),
      });
      continue;
    }

    // Números de lista
    if (line.trim().match(/^\d+\.\s/)) {
      const items = [];
      while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: items.map((item, idx) => ({
          _type: 'span',
          marks: [],
          text: (idx > 0 ? '\n' : '') + (idx + 1) + '. ' + item,
        })),
      });
      continue;
    }

    // Párrafo normal (con soporte para **bold** y *italic*)
    if (line.trim() && !line.startsWith('|') && !line.startsWith('---')) {
      const text = line.trim();

      const children = [];
      let remaining = text;
      while (remaining.length > 0) {
        const strongMatch = remaining.match(/\*\*(.+?)\*\*/);
        const emMatch = remaining.match(/\*(.+?)\*/);

        let nextMatch = null;
        let markType = null;

        if (strongMatch && emMatch) {
          if (strongMatch.index < emMatch.index) {
            nextMatch = strongMatch;
            markType = 'strong';
          } else {
            nextMatch = emMatch;
            markType = 'em';
          }
        } else if (strongMatch) {
          nextMatch = strongMatch;
          markType = 'strong';
        } else if (emMatch) {
          nextMatch = emMatch;
          markType = 'em';
        }

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

      blocks.push({
        _type: 'block',
        style: 'normal',
        children: children.length > 0 ? children : [{ _type: 'span', marks: [], text }],
      });
      i++;
      continue;
    }

    i++;
  }

  return blocks;
}

async function main() {
  // 1. Subir imagen
  const imagePath = resolve(import.meta.dirname, '..', 'public/abril/02-gcms-toxicologia.png');
  console.log(`📤 Subiendo imagen: ${imagePath}`);
  const asset = await client.assets.upload('image', createReadStream(imagePath), {
    contentType: 'image/png',
    filename: '02-gcms-toxicologia.png',
  });
  console.log(`✅ Imagen subida: ${asset._id}`);

  // 2. Leer y convertir body
  const bodyMd = readFileSync('/Users/samuelnavarro/Desktop/body-gcms-toxicologia.md', 'utf-8');
  const body = markdownToPortableText(bodyMd);
  console.log(`📝 Body: ${body.length} bloques generados`);

  // 3. Crear post
  const doc = {
    _type: 'post',
    title: 'GC-MS en Toxicología Forense y Análisis de Drogas: Aplicaciones y Configuración',
    slug: { _type: 'slug', current: 'gc-ms-toxicologia-forense-analisis-drogas-aplicaciones-configuracion' },
    author: 'Equipo Solinsa',
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    category: { _type: 'reference', _ref: 'cat-ind-quimica' },
    excerpt: 'Aplicaciones del GC-MS en toxicología forense: análisis de drogas de abuso, alcohol en sangre, fármacos. Derivatización, modo SIM/scan, librerías espectrales y cadena de custodia.',
    body,
    publishedAt: '2026-04-04T06:00:00Z',
  };

  const result = await client.create(doc);
  console.log(`✅ Post creado: ${result._id}`);

  // 4. Publicar
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
