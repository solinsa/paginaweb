import { defineField, defineType } from "sanity";

const blogPost = defineType({
  name: "blogPost",
  title: "Blog / Recurso",
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
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Nota Técnica", value: "nota-tecnica" },
          { title: "Webinar", value: "webinar" },
          { title: "Guía", value: "guia" },
          { title: "Noticia", value: "noticia" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
      description: "Resumen para tarjetas y SEO",
    }),
    defineField({
      name: "content",
      title: "Contenido",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
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
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto alternativo",
            },
            {
              name: "caption",
              type: "string",
              title: "Pie de foto",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "object",
      fields: [
        { name: "name", title: "Nombre", type: "string" },
        { name: "role", title: "Cargo", type: "string" },
        { name: "image", title: "Foto", type: "image" },
      ],
    }),
    defineField({
      name: "featuredImage",
      title: "Imagen destacada",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "relatedProducts",
      title: "Productos relacionados",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "relatedApplications",
      title: "Aplicaciones relacionadas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "application" }] }],
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
  orderings: [
    {
      title: "Fecha de publicación, más reciente",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});

export default blogPost;
