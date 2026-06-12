import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Categoría",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 2,
      description: "Breve descripción de la categoría para mostrarla en el listado del blog.",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Emoji o nombre de ícono para representar la categoría visualmente.",
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      description: "Número de orden para controlar la posición en el listado. Menor = primero.",
      initialValue: 99,
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      description: "Imagen representativa de la categoría. Se muestra en la página de categorías.",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        },
      ],
    }),
  ],
  orderings: [
    { title: "Orden personalizado", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Título A–Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
