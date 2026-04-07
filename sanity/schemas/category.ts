import { defineField, defineType } from "sanity";

const category = defineType({
  name: "category",
  title: "Categoría de Equipo",
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
      name: "description",
      title: "Descripción",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Nombre del Material Symbol, ej: biotech, analytics, opacity",
    }),
    defineField({
      name: "heroImage",
      title: "Imagen hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "parentCategory",
      title: "Categoría padre",
      type: "reference",
      to: [{ type: "category" }],
      description: "Dejar vacío para categorías raíz (ej: HPLC, GC)",
    }),
    defineField({
      name: "specifications",
      title: "Especificaciones de comparación",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Etiqueta", type: "string" },
            { name: "key", title: "Clave", type: "string" },
            { name: "unit", title: "Unidad", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "key" },
          },
        },
      ],
      description:
        "Encabezados de tabla para comparación de productos dentro de esta categoría",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});

export default category;
