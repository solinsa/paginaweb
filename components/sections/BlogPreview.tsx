import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featuredImage: string;
}

interface BlogPreviewProps {
  posts?: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const items = posts ?? [];

  return (
    <section className="bg-surface-container-low py-24">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-primary">
            Perspectivas Técnicas
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Explora las últimas tendencias en cromatografía y gestión de calidad
            en el laboratorio.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((post) => (
            <article
              key={post._id}
              className="group overflow-hidden rounded-2xl bg-surface-container-lowest transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={post.featuredImage}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-secondary">
                  {post.category}
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold leading-snug text-primary transition-colors group-hover:text-secondary">
                  {post.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm text-on-surface-variant">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Leer más
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
