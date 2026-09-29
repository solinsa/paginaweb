import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getCategory, getCategories } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return { title: "Categoría no encontrada | SOLINSA" };
  }

  return {
    title: `${category.title} | Blog SOLINSA`,
    description:
      category.description ||
      `Artículos sobre ${category.title.toLowerCase()} — cromatografía, análisis instrumental y productividad de laboratorio.`,
    openGraph: {
      title: `${category.title} | Blog SOLINSA`,
      description: category.description || undefined,
      url: `https://www.solinsa.mx/blog/categoria/${slug}`,
      type: "website",
    },
  };
}

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
        <div className="flex items-center gap-2 mb-2">
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

// ─── Sidebar Category Link ─────────────────────────────────────

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

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const [posts, category, allCategories] = await Promise.all([
    getPostsByCategory(slug),
    getCategory(slug),
    getCategories(),
  ]);

  if (!category) notFound();

  return (
    <div className="min-h-screen">
      {/* ================================================================
          CATEGORY HEADER
          ================================================================ */}
      <section className="pt-28 pb-4 px-margin-desktop max-w-container-max mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-blue-grey mb-3">
          <Link href="/blog" className="hover:text-technical-blue transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-primary-dark font-medium">
            {category.icon && <span className="mr-1">{category.icon}</span>}
            {category.title}
          </span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-primary-dark">
          {category.icon && <span className="mr-2">{category.icon}</span>}
          {category.title}
        </h1>
        {category.description && (
          <p className="mt-1.5 text-sm text-muted-blue-grey max-w-xl">
            {category.description}
          </p>
        )}
      </section>

      {/* ================================================================
          CONTENT: Sidebar + Posts
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
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-blue-grey hover:text-primary-dark hover:bg-paper transition-all duration-150"
                  >
                    <span className="text-base shrink-0">📚</span>
                    <span>Todos</span>
                  </Link>
                </li>
                {allCategories.map((cat) => (
                  <SidebarCategory
                    key={cat.slug}
                    category={cat}
                    isActive={cat.slug === slug}
                  />
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Mobile category bar ── */}
          <div className="md:hidden w-full mb-6">
            <h3 className="text-xs font-semibold text-muted-blue-grey uppercase tracking-wider mb-2">
              Categorías
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <Link
                href="/blog"
                className="text-[12px] font-medium bg-white text-muted-blue-grey border border-light-grey px-2.5 py-1 rounded-full hover:text-primary-dark hover:border-technical-blue/30 transition-colors"
              >
                Todos
              </Link>
              {allCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className={`text-[12px] font-medium px-2.5 py-1 rounded-full transition-colors ${
                    cat.slug === slug
                      ? "bg-technical-blue text-white font-semibold"
                      : "bg-white text-muted-blue-grey border border-light-grey hover:text-primary-dark hover:border-technical-blue/30"
                  }`}
                >
                  {cat.icon && <span className="mr-1">{cat.icon}</span>}
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          {/* ── MAIN CONTENT (right) ── */}
          <div className="flex-1 min-w-0">
            {posts.length === 0 ? (
              <div className="text-center py-20 bg-paper rounded-2xl border border-light-grey">
                <div className="text-4xl mb-3">📝</div>
                <h2 className="text-lg font-semibold text-primary-dark mb-2">
                  Aún no hay artículos en esta categoría
                </h2>
                <p className="text-sm text-muted-blue-grey max-w-md mx-auto mb-5">
                  Estamos preparando contenido sobre {category.title.toLowerCase()}.
                  ¡Vuelve pronto o explora otras categorías!
                </p>
                <Link href="/blog" className="btn btn-ghost text-sm">
                  Ver todos los artículos
                </Link>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-blue-grey mb-5">
                  {posts.length} artículo{posts.length !== 1 ? "s" : ""}
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
