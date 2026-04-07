import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

export default defineConfig({
  name: "solinsa-website",
  title: "Solinsa CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Productos")
              .icon(() => "🔬")
              .child(
                S.documentList()
                  .title("Productos")
                  .filter('_type == "product"')
                  .defaultOrdering([
                    { field: "title", direction: "asc" },
                  ])
              ),
            S.listItem()
              .title("Partes y Consumibles")
              .icon(() => "🔧")
              .child(
                S.documentList()
                  .title("Partes y Consumibles")
                  .filter('_type == "part"')
                  .defaultOrdering([
                    { field: "title", direction: "asc" },
                  ])
              ),
            S.listItem()
              .title("Aplicaciones")
              .icon(() => "📊")
              .child(
                S.documentList()
                  .title("Aplicaciones")
                  .filter('_type == "application"')
                  .defaultOrdering([
                    { field: "title", direction: "asc" },
                  ])
              ),
            S.listItem()
              .title("Blog / Recursos")
              .icon(() => "📝")
              .child(
                S.documentList()
                  .title("Blog / Recursos")
                  .filter('_type == "blogPost"')
                  .defaultOrdering([
                    { field: "publishedAt", direction: "desc" },
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("Industrias")
              .icon(() => "🏭")
              .child(
                S.documentList()
                  .title("Industrias")
                  .filter('_type == "industry"')
              ),
            S.listItem()
              .title("Categorías de Equipo")
              .icon(() => "📂")
              .child(
                S.documentList()
                  .title("Categorías")
                  .filter('_type == "category"')
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
