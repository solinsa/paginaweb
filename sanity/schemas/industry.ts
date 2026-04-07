import { defineField, defineType } from "sanity";

const industry = defineType({
  name: "industry",
  title: "Industria",
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
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Nombre del Material Symbol, ej: science, local_pharmacy, factory",
    }),
    defineField({
      name: "color",
      title: "Color de acento",
      type: "string",
      description: "Color hex para la industria, ej: #059669",
      validation: (Rule) =>
        Rule.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).error(
          "Debe ser un color hex válido, ej: #059669"
        ),
    }),
    defineField({
      name: "applications",
      title: "Aplicaciones",
      type: "array",
      of: [{ type: "reference", to: [{ type: "application" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});

export default industry;
