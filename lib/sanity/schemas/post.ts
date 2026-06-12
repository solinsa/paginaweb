import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Artículo del blog",
  type: "document",
  groups: [
    { name: "content", title: "Contenido", default: true },
    { name: "seo", title: "SEO" },
    { name: "media", title: "Media" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().min(5).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
      group: "content",
    }),
    defineField({
      name: "author",
      title: "Autor/a",
      type: "string",
      group: "content",
      description: "Nombre de la persona que escribió el artículo.",
      validation: (rule) => rule.required().min(3).max(80),
      initialValue: "SOLINSA",
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo (alt text)",
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Extracto",
      type: "text",
      group: "content",
      rows: 3,
      description: "Resumen corto para listados de blog y meta description.",
      validation: (rule) => rule.max(250),
    }),
    defineField({
      name: "body",
      title: "Cuerpo",
      type: "blockContent",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "Título SEO",
      type: "string",
      group: "seo",
      description: "Opcional. Si se deja vacío, se usa el título del artículo.",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "Descripción SEO",
      type: "text",
      group: "seo",
      rows: 2,
      description: "Opcional. Si se deja vacío, se usa el extracto.",
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "Sin fecha",
        media,
      };
    },
  },
  orderings: [
    { title: "Más reciente", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
    { title: "Más antiguo", name: "publishedAtAsc", by: [{ field: "publishedAt", direction: "asc" }] },
  ],
});
