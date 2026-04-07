import { defineField, defineType } from "sanity";

const application = defineType({
  name: "application",
  title: "Aplicación",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industria",
      type: "reference",
      to: [{ type: "industry" }],
    }),
    defineField({
      name: "methodOverview",
      title: "Resumen del método",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Enlace",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "equipment",
      title: "Equipos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "consumables",
      title: "Consumibles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "part" }] }],
    }),
    defineField({
      name: "detectionLimits",
      title: "Límites de detección",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "analyte", title: "Analito", type: "string" },
            { name: "limit", title: "Límite", type: "string" },
            { name: "unit", title: "Unidad", type: "string" },
          ],
          preview: {
            select: { title: "analyte", subtitle: "limit" },
          },
        },
      ],
    }),
    defineField({
      name: "regulations",
      title: "Normativas",
      type: "array",
      of: [{ type: "string" }],
      description: 'NOM, NMX, FDA, USP, ICH, etc. Ej: "NOM-004-SSA1-2013"',
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "caseStudy",
      title: "Caso de estudio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "downloadFile",
      title: "Archivo descargable",
      type: "file",
    }),
    defineField({
      name: "badge",
      title: "Etiqueta de aplicación",
      type: "string",
      description: 'Ej: "Aplicación Analítica #772-B"',
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title (SEO)",
      type: "string",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
      media: "image",
    },
  },
});

export default application;
