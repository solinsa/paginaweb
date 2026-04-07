import { defineField, defineType } from "sanity";

const product = defineType({
  name: "product",
  title: "Producto",
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
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Marca",
      type: "string",
      options: {
        list: [
          { title: "Agilent", value: "agilent" },
          { title: "Waters", value: "waters" },
          { title: "Shimadzu", value: "shimadzu" },
          { title: "Thermo Fisher", value: "thermo-fisher" },
          { title: "PerkinElmer", value: "perkinelmer" },
          { title: "Bruker", value: "bruker" },
          { title: "SCIEX", value: "sciex" },
          { title: "Restek", value: "restek" },
          { title: "Phenomenex", value: "phenomenex" },
          { title: "Hamilton", value: "hamilton" },
          { title: "Solinsa", value: "solinsa" },
        ],
      },
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción corta",
      type: "text",
      rows: 3,
      description: "Resumen breve para tarjetas y listados",
    }),
    defineField({
      name: "description",
      title: "Descripción completa",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
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
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "specifications",
      title: "Especificaciones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "param", title: "Parámetro", type: "string" },
            { name: "value", title: "Valor", type: "string" },
            { name: "method", title: "Método (opcional)", type: "string" },
          ],
          preview: {
            select: { title: "param", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto alternativo",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "thumbnail",
      title: "Imagen principal (thumbnail)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "relatedProducts",
      title: "Productos relacionados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "compatibleParts",
      title: "Partes y consumibles compatibles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "part" }] }],
    }),
    defineField({
      name: "applications",
      title: "Aplicaciones",
      type: "array",
      of: [{ type: "reference", to: [{ type: "application" }] }],
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "badge",
      title: "Etiqueta",
      type: "string",
      description:
        'Etiqueta visible, ej: "Premium Performance", "High Flow", "Automation"',
    }),
    defineField({
      name: "configurations",
      title: "Configuraciones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Nombre", type: "string" },
            {
              name: "features",
              title: "Características",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "reference", title: "Referencia", type: "string" },
          ],
          preview: {
            select: { title: "name", subtitle: "reference" },
          },
        },
      ],
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "string",
      description:
        'Ej: "Solicitar cotización" o rango como "$5,000 - $15,000 USD"',
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
      subtitle: "brand",
      media: "thumbnail",
    },
  },
});

export default product;
