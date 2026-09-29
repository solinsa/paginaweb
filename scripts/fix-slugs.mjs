import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(import.meta.dirname, '..', '.env.local') });
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bei2dj05',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-06-11',
  useCdn: false,
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Map old file-based slugs to new title-based slugs
const slugMap = {
  '01-icp-ms-agua-potable': slugify('ICP-MS para el Analisis de Metales Traza en Agua Potable Metodos EPA 200.8 y USP 232'),
  '02-lcms-bioequivalencia': slugify('Aplicaciones de LC-MS/MS en Estudios de Bioequivalencia y Farmacocinetica'),
  '03-validacion-limpieza-hplc': slugify('Validacion de Metodos de Limpieza por HPLC en la Industria Farmaceutica'),
  '04-ftir-polimeros-recubrimientos': slugify('espectroscopia-ftir-analisis-polimeros-plasticos-recubrimientos-industriales'),
  '05-mantenimiento-preventivo-hplc': slugify('Guia Practica de Mantenimiento Preventivo para Sistemas HPLC'),
  '06-metales-pesados-aguas-icp-oes': slugify('Determinacion de Metales Pesados en Aguas Residuales por ICP-OES NOM-001-SEMARNAT'),
  '07-plaguicidas-gcms-ms-frutas': slugify('Analisis de Plaguicidas en Frutas y Verduras por GC-MS/MS'),
  '08-tph-suelos-gc-fid': slugify('Cuantificacion de TPH en Suelos por GC-FID'),
  '09-capacitacion-cromatografia': slugify('Programa de Capacitacion en Tecnicas Cromatograficas para el Laboratorio'),
  '10-control-calidad-gc-industria-quimica': slugify('Control de Calidad en la Industria Quimica por Cromatografia de Gases'),
};

const posts = await client.fetch('*[_type == "post" && publishedAt >= "2025-11-01" && publishedAt < "2025-12-01"]{_id, title, "oldSlug": slug.current} | order(publishedAt asc)');
for (const p of posts) {
  const newSlug = slugMap[p.oldSlug];
  if (newSlug && newSlug !== p.oldSlug) {
    await client.patch(p._id).set({ slug: { _type: 'slug', current: newSlug } }).commit();
    console.log(`✅ ${p.oldSlug} → ${newSlug}`);
  } else {
    console.log(`ℹ️  Kept: ${p.oldSlug}`);
  }
}
console.log('Done fixing slugs.');
