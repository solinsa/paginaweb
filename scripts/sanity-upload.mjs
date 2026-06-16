/**
 * sanity-upload.mjs — CLI tool for uploading images and creating content in Sanity.
 *
 * REQUISITOS:
 *   - Node.js 18+
 *   - @sanity/client instalado (ya está en package.json)
 *   - SANITY_API_WRITE_TOKEN en .env.local
 *
 * USO:
 *   # 1. Subir una imagen
 *   node scripts/sanity-upload.mjs upload-image <ruta-de-la-imagen>
 *
 *   # 2. Crear un post (la imagen se sube automáticamente si das ruta)
 *   --image <ruta>     Ruta a la imagen (la sube automáticamente)
 *   --asset <id>       Asset ID de imagen ya subida (alternativa a --image)
 *   --author <id>      ID del autor
 *   --categories "a,b" IDs de categorías separadas por coma
 *   --excerpt "texto"  Resumen corto
 *
 *   # 3. Asignar imagen a un post existente
 *   node scripts/sanity-upload.mjs assign-image <document-id> <asset-id>
 *
 *   # 4. Publicar un documento
 *   node scripts/sanity-upload.mjs publish <document-id>
 *
 *   # 5. Crear un category
 *   node scripts/sanity-upload.mjs create-category "Nombre" \
 *     --slug "nombre-slug" \
 *     --icon "emoji" \
 *     --image /ruta/a/imagen.jpg
 *
 *   # 5. Listar tipos de documento disponibles
 *   node scripts/sanity-upload.mjs list-types
 *
 *   # 6. Ver info del proyecto
 *   node scripts/sanity-upload.mjs info
 *
 * EJEMPLOS:
 *   node scripts/sanity-upload.mjs upload-image ~/Desktop/foto.jpg
 *   node scripts/sanity-upload.mjs create-post "Nuevo Post" --image ~/Desktop/foto.jpg
 */

import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { readFileSync, existsSync, createReadStream } from 'fs';
import { resolve, extname, basename } from 'path';

// ─── Config ────────────────────────────────────────────────────────────────

// Cargar .env.local
config({ path: resolve(import.meta.dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05';
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production';
const token     = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('❌ ERROR: Falta SANITY_API_WRITE_TOKEN en .env.local');
  console.error('   Agrégalo en ' + resolve(import.meta.dirname, '..', '.env.local'));
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2025-06-11',
  useCdn: false,
});

// ─── Helpers ───────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// ─── Comandos ──────────────────────────────────────────────────────────────

/**
 * Sube una imagen a Sanity assets.
 * @param {string} filePath - Ruta absoluta o relativa al archivo
 * @returns {{ assetId: string, url: string, originalFilename: string }}
 */
async function uploadImage(filePath) {
  const absPath = resolve(filePath);

  if (!existsSync(absPath)) {
    throw new Error(`Archivo no encontrado: ${absPath}`);
  }

  const ext = extname(absPath).toLowerCase();
  const supported = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.tiff', '.bmp'];

  if (!supported.includes(ext)) {
    throw new Error(
      `Formato no soportado: ${ext}. Soportados: ${supported.join(', ')}`
    );
  }

  const mimeMap = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif',
    '.tiff': 'image/tiff',
    '.bmp': 'image/bmp',
  };

  const filename = basename(absPath);

  console.log(`📤 Subiendo ${filename}...`);

  const asset = await client.assets.upload('image', createReadStream(absPath), {
    contentType: mimeMap[ext] || 'image/jpeg',
    filename,
  });

  console.log(`✅ Imagen subida:`);
  console.log(`   Asset ID: ${asset._id}`);
  console.log(`   URL:      ${asset.url}`);
  console.log(`   Size:     ${(asset.size / 1024).toFixed(1)} KB`);

  return {
    assetId: asset._id,
    url: asset.url,
    originalFilename: filename,
  };
}

/**
 * Crea un post en Sanity.
 */
async function createPost(title, options = {}) {
  const {
    author,
    imagePath,
    imageAssetId,
    category,
    excerpt,
    body,
    publishedAt,
  } = options;

  // Subir imagen si se pasó una ruta
  let mainImage = imageAssetId || null;
  if (imagePath) {
    const result = await uploadImage(imagePath);
    mainImage = result.assetId;
  }

  const doc = {
    _type: 'post',
    title,
    slug: {
      _type: 'slug',
      current: slugify(title),
    },
    ...(author && { author }),
    ...(mainImage && {
      mainImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: mainImage },
      },
    }),
    ...(category && { category: { _type: 'reference', _ref: category } }),
    ...(excerpt && { excerpt }),
    ...(body && { body }),
    ...(publishedAt && { publishedAt }),
    publishedAt: publishedAt || new Date().toISOString(),
  };

  console.log(`📝 Creando post: "${title}"...`);

  const result = await client.create(doc);

  console.log(`✅ Post creado:`);
  console.log(`   ID:     ${result._id}`);
  console.log(`   Slug:   ${result.slug?.current}`);
  console.log(`   Estado: borrador (usa 'publish ${result._id}' para publicar)`);

  return result;
}

/**
 * Crea un category en Sanity.
 */
async function createCategory(name, options = {}) {
  const { slug, icon, imagePath } = options;

  // Subir imagen si se pasó una ruta
  let image = null;
  if (imagePath) {
    const result = await uploadImage(imagePath);
    image = {
      _type: 'image',
      asset: { _type: 'reference', _ref: result.assetId },
    };
  }

  const doc = {
    _type: 'category',
    title: name,
    slug: {
      _type: 'slug',
      current: slug || slugify(name),
    },
    ...(icon && { icon }),
    ...(image && { image }),
  };

  console.log(`📁 Creando category: "${name}"...`);

  const result = await client.create(doc);

  console.log(`✅ Category creado:`);
  console.log(`   ID:   ${result._id}`);
  console.log(`   Slug: ${result.slug?.current}`);

  return result;
}

/**
 * Publica un documento (borrador → publicado).
 * Funciona tanto para drafts (drafts.xxx) como para documentos directos.
 */
async function publishDocument(documentId) {
  // Normalizar ID
  const cleanId = documentId.replace(/^drafts\./, '');
  const draftId = `drafts.${cleanId}`;

  console.log(`📌 Publicando ${draftId}...`);

  // Intentar obtener el draft primero
  let draft;
  try {
    draft = await client.getDocument(draftId);
  } catch (e) {
    // ignorar
  }

  if (draft) {
    // Es un draft MCP → publicar via transaction
    const result = await client.transaction()
      .createOrReplace({ ...draft, _id: cleanId })
      .delete(draftId)
      .commit();
    console.log(`✅ Publicado (era draft MCP):`);
    console.log(`   ID: ${result.results?.[0]?.id || cleanId}`);
    return result;
  }

  // No era draft — verificar si ya existe publicado
  const existing = await client.getDocument(cleanId).catch(() => null);
  if (existing) {
    console.log(`ℹ️  El documento ${cleanId} ya está publicado.`);
    return existing;
  }

  throw new Error(`No se encontró el documento: ${draftId} ni ${cleanId}`);
}

/**
 * Lista los tipos de documento disponibles en el dataset.
 */
async function listTypes() {
  const types = await client.fetch(`array::unique(*[]._type)`);
  console.log('📋 Tipos de documento en el dataset:');
  types.forEach(t => console.log(`   - ${t}`));
  return types;
}

/**
 * Muestra info del proyecto.
 */
async function showInfo() {
  console.log(`📦 Proyecto Sanity`);
  console.log(`   Project ID: ${projectId}`);
  console.log(`   Dataset:    ${dataset}`);
  console.log(`   Token:      ${token.slice(0, 10)}...${token.slice(-6)}`);
  console.log();

  // Contar documentos por tipo - query simple
  const groups = await client.fetch(`{ "types": array::unique(*[]._type) }`);
  const typeCounts = [];

  for (const t of groups.types) {
    const count = await client.fetch(`count(*[_type == $type])`, { type: t });
    typeCounts.push({ _type: t, count });
  }

  const total = typeCounts.reduce((a, b) => a + b.count, 0);
  console.log(`📊 Documentos: ${total}`);
  typeCounts.forEach(t => {
    console.log(`   ${t._type}: ${t.count}`);
  });

  return typeCounts;
}

/**
 * Asigna una imagen (asset) al mainImage de un documento existente.
 */
async function assignImage(documentId, assetId) {
  console.log(`🖼️  Asignando imagen ${assetId} → ${documentId}...`);

  const result = await client.patch(documentId)
    .set({
      mainImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: assetId },
      },
    })
    .commit();

  console.log(`✅ Imagen asignada:`);
  console.log(`   Documento: ${result._id}`);
  console.log(`   Asset ID:  ${assetId}`);
  console.log(`   URL:       https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId.replace('image-', '').replace(/-[a-z0-9]+$/, '')}.${assetId.split('-').pop()}`);

  return result;
}

// ─── CLI ───────────────────────────────────────────────────────────────────

const [,, command, ...args] = process.argv;

// Parsear flags tipo --key value o --key=value
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
          ? argv[i + 1]
          : true;
        if (typeof opts[key] !== 'boolean') i++;
      }
    }
  }
  return opts;
}

async function main() {
  const opts = parseArgs(args);

  switch (command) {
    case 'upload-image': {
      const filePath = args[0];
      if (!filePath) {
        console.error('❌ Uso: node sanity-upload.mjs upload-image <ruta>');
        process.exit(1);
      }
      await uploadImage(filePath);
      break;
    }

    case 'create-post': {
      const title = args[0];
      if (!title) {
        console.error('❌ Uso: node sanity-upload.mjs create-post "Título" [opciones]');
        console.error('   --image       Ruta al archivo de imagen');
        console.error('   --asset       Asset ID de imagen ya subida (alternativa a --image)');
        console.error('   --author      Nombre del autor (string)');
        console.error('   --category    ID de la categoría (single reference)');
        console.error('   --excerpt     Resumen corto');
        console.error('   --body-file   Ruta a archivo JSON con el body Portable Text');
        console.error('   --publishedAt Fecha ISO (opcional, por defecto ahora)');
        process.exit(1);
      }

      // Leer body desde archivo si se proporcionó
      let bodyParsed = undefined;
      if (opts['body-file']) {
        const bodyPath = resolve(opts['body-file']);
        if (!existsSync(bodyPath)) {
          console.error(`❌ Archivo body no encontrado: ${bodyPath}`);
          process.exit(1);
        }
        try {
          bodyParsed = JSON.parse(readFileSync(bodyPath, 'utf-8'));
        } catch (e) {
          console.error(`❌ Error parseando body JSON: ${e.message}`);
          process.exit(1);
        }
      }

      await createPost(title, {
        imagePath: opts.image,
        imageAssetId: opts.asset,
        author: opts.author,
        category: opts.category,
        excerpt: opts.excerpt,
        body: bodyParsed,
        publishedAt: opts.publishedAt,
      });
      break;
    }

    case 'create-category': {
      const name = args[0];
      if (!name) {
        console.error('❌ Uso: node sanity-upload.mjs create-category "Nombre" [opciones]');
        console.error('   --slug   Slug (opcional, se auto-genera del nombre)');
        console.error('   --icon   Emoji (ej: 🔬)');
        console.error('   --image  Ruta al archivo de imagen');
        process.exit(1);
      }
      await createCategory(name, {
        slug: opts.slug,
        icon: opts.icon,
        imagePath: opts.image,
      });
      break;
    }

    case 'assign-image': {
      const docId = args[0];
      const assetId = args[1];
      if (!docId || !assetId) {
        console.error('❌ Uso: node sanity-upload.mjs assign-image <document-id> <asset-id>');
        process.exit(1);
      }
      await assignImage(docId, assetId);
      break;
    }

    case 'publish': {
      const docId = args[0];
      if (!docId) {
        console.error('❌ Uso: node sanity-upload.mjs publish <document-id>');
        process.exit(1);
      }
      await publishDocument(docId);
      break;
    }

    case 'list-types': {
      await listTypes();
      break;
    }

    case 'info': {
      await showInfo();
      break;
    }

    default: {
      console.log(`
🔧 sanity-upload.mjs — Sube imágenes y crea contenido en Sanity

USO:
  node scripts/sanity-upload.mjs upload-image <ruta>
      Sube una imagen a Sanity y devuelve su Asset ID.

  node scripts/sanity-upload.mjs create-post "Título" [opciones]
      Crea un post nuevo (borrador). Opciones:
        --image <ruta>     Ruta a la imagen (la sube automáticamente)
        --asset <id>       Asset ID de imagen ya subida
        --author <id>      ID del autor
        --categories "a,b" IDs de categorías separadas por coma
        --excerpt "texto"  Resumen corto

  node scripts/sanity-upload.mjs create-category "Nombre" [opciones]
      Crea una categoría. Opciones:
        --slug <slug>, --icon <emoji>, --image <ruta>

  node scripts/sanity-upload.mjs publish <document-id>
      Publica un borrador.

  node scripts/sanity-upload.mjs list-types
      Lista los tipos de documento del dataset.

  node scripts/sanity-upload.mjs info
      Muestra información del proyecto Sanity.

FLUJO TÍPICO:
  1. Subir imagen:     node sanity-upload.mjs upload-image ~/foto.jpg
  2. Crear post:       node sanity-upload.mjs create-post "Mi Post" --image ~/foto.jpg
  3. Publicar:         node sanity-upload.mjs publish drafts.xxxxx
`);
      process.exit(1);
    }
  }
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
