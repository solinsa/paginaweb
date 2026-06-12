import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const metadata: Metadata = {
  title: "Blog de Cromatografía | SOLINSA",
  description:
    "Artículos técnicos, guías prácticas y conocimiento experto sobre cromatografía de gases, HPLC, GC-MS, normas y productividad de laboratorio en México.",
  openGraph: {
    title: "Blog de Cromatografía | SOLINSA",
    description:
      "Conocimiento experto para tu laboratorio: cromatografía, métodos, normas y productividad.",
    url: "https://www.solinsa.mx/blog",
    type: "website",
  },
};

// ─── Helpers ───────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ─── Post Card ─────────────────────────────────────────────────

function PostCard({ post }: { post: any }) {
  const imgUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(340).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-light-grey hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="aspect-[16/9] overflow-hidden bg-paper">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-dark/5 to-technical-blue/10">
            <span className="text-2xl font-bold text-primary-dark/15 font-mono">SOLINSA</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {post.category && (
            <span className="text-[11px] font-semibold bg-energetic-yellow/15 text-primary-dark px-2 py-0.5 rounded-full">
              {post.category.icon && <span className="mr-1">{post.category.icon}</span>}
              {post.category.title}
            </span>
          )}
          <time dateTime={post.publishedAt} className="text-[11px] text-muted-blue-grey">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h3 className="text-[15px] font-semibold text-primary-dark leading-snug group-hover:text-technical-blue transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-1.5 text-[13px] text-muted-blue-grey leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

// ─── Category Sidebar Link ─────────────────────────────────────

function SidebarCategory({
  category,
  isActive = false,
}: {
  category: NonNullable<Awaited<ReturnType<typeof getCategories>>[number]>;
  isActive?: boolean;
}) {
  return (
    <li>
      <Link
        href={`/blog/categoria/${category.slug}`}
        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
          isActive
            ? "bg-technical-blue/10 text-technical-blue font-semibold"
            : "text-muted-blue-grey hover:text-primary-dark hover:bg-paper"
        }`}
      >
        {category.icon && <span className="text-base shrink-0">{category.icon}</span>}
        <span className="truncate">{category.title}</span>
      </Link>
    </li>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  const featured = posts?.[0] ?? null;
  const gridPosts = posts?.slice(1, 7) ?? []; // max 6 posts after featured

  // ── Empty state ──
  if (!posts?.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <span className="eyebrow justify-center">Blog</span>
          <h1 className="h1 mt-4">
            Conocimiento técnico
            <span className="accent"> en camino.</span>
          </h1>
          <p className="lead mx-auto">
            Próximamente publicaremos artículos técnicos, guías prácticas y
            novedades sobre cromatografía de gases, HPLC, GC-MS y análisis
            instrumental para laboratorios en México.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn btn-primary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const featuredImgUrl = featured?.mainImage
    ? urlFor(featured.mainImage).width(1200).height(600).url()
    : null;

  return (
    <div className="min-h-screen">
      {/* ================================================================
          HERO — Featured Post (full width)
          ================================================================ */}
      <section className="pt-28 pb-12 px-margin-desktop max-w-container-max mx-auto">
        <span className="eyebrow">Blog</span>

        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-5 grid md:grid-cols-2 gap-0 bg-primary-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden min-h-[220px] md:min-h-[340px]">
              {featuredImgUrl ? (
                <img
                  src={featuredImgUrl}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-technical-blue/30 to-primary-dark flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/10 font-mono">SOLINSA</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/0 via-primary-dark/40 to-primary-dark/90" />
            </div>

            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {featured.category && (
                  <span className="text-[11px] font-semibold bg-energetic-yellow/20 text-energetic-yellow px-2.5 py-1 rounded-full">
                    {featured.category.icon && <span className="mr-1">{featured.category.icon}</span>}
                    {featured.category.title}
                  </span>
                )}
                <time dateTime={featured.publishedAt} className="text-[11px] text-white/50">
                  {formatDate(featured.publishedAt)}
                </time>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-energetic-yellow transition-colors">
                {featured.title}
              </h2>

              {featured.excerpt && (
                <p className="mt-4 text-white/65 leading-relaxed line-clamp-3 max-w-lg text-sm md:text-base">
                  {featured.excerpt}
                </p>
              )}

              <span className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-energetic-yellow text-primary-dark font-semibold text-sm rounded-lg group-hover:bg-yellow-dark transition-colors w-fit">
                Leer artículo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        )}
      </section>

      {/* ================================================================
          CONTENT AREA — Sidebar + Post Grid
          ================================================================ */}
      <section className="pb-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="flex gap-10">
          {/* ── SIDEBAR (left) ── */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold text-muted-blue-grey uppercase tracking-wider mb-3 px-3">
                Categorías
              </h3>
              <ul className="space-y-0.5">
                {/* "Todos" link */}
                <li>
                  <span className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold bg-technical-blue/10 text-technical-blue">
                    <span className="text-base shrink-0">📚</span>
                    <span>Todos</span>
                  </span>
                </li>
                {categories.map((cat) => (
                  <SidebarCategory key={cat.slug} category={cat} />
                ))}
              </ul>

              {/* Ver todas las categorías */}
              <Link
                href="/blog/categorias"
                className="flex items-center gap-1.5 mt-3 px-3 py-2 rounded-lg text-xs font-medium text-technical-blue hover:bg-technical-blue/5 transition-colors"
              >
                Ver todas las categorías
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </aside>

          {/* ── Mobile category bar (only visible < md) ── */}
          <div className="md:hidden w-full mb-8 -mt-2">
            <h3 className="text-xs font-semibold text-muted-blue-grey uppercase tracking-wider mb-2">
              Categorías
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[12px] font-semibold bg-technical-blue text-white px-2.5 py-1 rounded-full">
                Todos
              </span>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className="text-[12px] font-medium bg-white text-muted-blue-grey border border-light-grey px-2.5 py-1 rounded-full hover:text-primary-dark hover:border-technical-blue/30 transition-colors"
                >
                  {cat.icon && <span className="mr-1">{cat.icon}</span>}
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          {/* ── MAIN CONTENT (right) ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-primary-dark">
                Últimos artículos
              </h2>
              <Link
                href="/blog"
                className="text-xs font-medium text-technical-blue hover:underline"
              >
                Ver todos →
              </Link>
            </div>

            {gridPosts.length === 0 ? (
              <div className="text-center py-16 bg-paper rounded-2xl border border-light-grey">
                <p className="text-muted-blue-grey text-sm">
                  Más artículos próximamente. ¡Vuelve pronto!
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                {gridPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
