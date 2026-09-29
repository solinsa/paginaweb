import { defineType, defineField, defineArrayMember } from "sanity";

/**
 * Custom table block type for Sanity Portable Text.
 *
 * Stores a flat table as an array of rows, each row an array of cell strings.
 * The first row is treated as the header.
 *
 * Usage in Portable Text body:
 *   { _type: "table", rows: [
 *     ["Parámetro", "Rango", "Notas"],
 *     ["Temperatura", "250–300 °C", "No exceder 325 °C"],
 *   ]}
 */
export const table = defineType({
  name: "table",
  title: "Tabla",
  type: "object",
  fields: [
    defineField({
      name: "rows",
      title: "Filas",
      type: "array",
      of: [
        defineArrayMember({
          name: "row",
          title: "Fila",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Celdas",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                  title: "Celda",
                }),
              ],
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }: { cells?: string[] }) {
              return {
                title: cells?.join(" | ") || "(fila vacía)",
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { rows: "rows" },
    prepare({ rows }: { rows?: { cells: string[] }[] }) {
      const count = rows?.length ?? 0;
      const cols = rows?.[0]?.cells?.length ?? 0;
      return {
        title: `Tabla: ${count} filas × ${cols} columnas`,
        subtitle: rows?.[0]?.cells?.join(" | "),
      };
    },
  },
});
