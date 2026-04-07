import { defineField, defineType } from "sanity";

const part = defineType({
  name: "part",
  title: "Parte / Consumible",
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
      name: "partNumber",
      title: "Número de parte",
      type: "string",
      description: "SKU o número de catálogo del fabricante",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Columna", value: "columna" },
          { title: "Fase Móvil", value: "fase-movil" },
          { title: "Vial", value: "vial" },
          { title: "Filtro", value: "filtro" },
          { title: "Jeringa", value: "jeringa" },
          { title: "Liner", value: "liner" },
          { title: "Septum", value: "septum" },
          { title: "Detector Lamp", value: "detector-lamp" },
          { title: "Tubing / Fitting", value: "tubing-fitting" },
          { title: "Guard Column", value: "guard-column" },
          { title: "Sample Vial Cap", value: "vial-cap" },
          { title: "Solvente", value: "solvente" },
          { title: "Accesorio", value: "accesorio" },
          { title: "Otro", value: "otro" },
        ],
      },
    }),
    defineField({
      name: "compatibleWith",
      title: "Compatible con",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
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
      name: "description",
      title: "Descripción",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "string",
    }),
    defineField({
      name: "stock",
      title: "Disponibilidad",
      type: "string",
      options: {
        list: [
          { title: "Disponible", value: "disponible" },
          { title: "Bajo pedido", value: "bajo-pedido" },
          { title: "Agotado", value: "agotado" },
        ],
      },
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
      subtitle: "partNumber",
      media: "images.0",
    },
  },
});

export default part;
