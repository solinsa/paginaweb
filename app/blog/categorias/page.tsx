import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const metadata: Metadata = {
  title: "Categorías del Blog | SOLINSA",
  description:
    "Explora todas las categorías de nuestro blog técnico: cromatografía, industria, normas, productividad y más.",
};

// ─── Category color palette for gradients ──────────────────────

const CAT_COLORS = [
  "from-technical-blue to-primary-dark",
  "from-primary-dark to-primary-blue",
  "from-[#0D9488] to-[#0F766E]",
  "from-[#7C3AED] to-[#5B21B6]",
  "from-[#DC2626] to-[#991B1B]",
  "from-[#EA580C] to-[#C2410C]",
  "from-[#2563EB] to-[#1D4ED8]",
  "from-[#059669] to-[#047857]",
  "from-[#D97706] to-[#B45309]",
  "from-[#4F46E5] to-[#3730A3]",
  "from-[#0891B2] to-[#0E7490]",
  "from-[#BE185D] to-[#9D174D]",
];

function catGradient(index: number) {
  return CAT_COLORS[index % CAT_COLORS.length];
}

// ─── Category Card ─────────────────────────────────────────────

function CategoryCard({
  category,
  index,
}: {
  category: NonNullable<Awaited<ReturnType<typeof getCategories>>[number]>;
  index: number;
}) {
  const sanityImg = category.image
    ? urlFor(category.image).width(600).height(340).url()
    : null;

  return (
    <Link
      href={`/blog/categoria/${category.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-light-grey hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image area */}
      <div className="aspect-[16/9] overflow-hidden relative">
        {sanityImg ? (
          <img
            src={sanityImg}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${catGradient(index)} flex items-center justify-center`}>
            <span className="text-6xl opacity-30 select-none">
              {category.icon || "📄"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {category.icon && <span className="text-lg">{category.icon}</span>}
          <h3 className="text-base font-semibold text-primary-dark group-hover:text-technical-blue transition-colors">
            {category.title}
          </h3>
        </div>
        {category.description && (
          <p className="text-sm text-muted-blue-grey leading-relaxed line-clamp-2">
            {category.description}
          </p>
        )}
        <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-technical-blue group-hover:gap-2 transition-all">
          Ver artículos
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default async function CategoriasPage() {
  const categories = await getCategories();

  if (!categories?.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary-dark mb-4">
            No hay categorías aún
          </h1>
          <p className="text-muted-blue-grey mb-6">
            Las categorías se crean desde Sanity Studio. Una vez creadas,
            aparecerán aquí.
          </p>
          <Link href="/blog" className="btn btn-ghost">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-8 px-margin-desktop max-w-container-max mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-blue-grey mb-4">
          <Link href="/blog" className="hover:text-technical-blue transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-primary-dark font-medium">Categorías</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
          Categorías del blog
        </h1>
        <p className="mt-3 text-muted-blue-grey max-w-xl">
          Explora nuestro contenido por tema. Cada categoría reúne artículos
          técnicos, guías y análisis especializados.
        </p>
      </section>

      {/* Category Grid */}
      <section className="pb-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
