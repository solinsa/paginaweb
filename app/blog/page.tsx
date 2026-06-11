import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const metadata: Metadata = {
  title: "Blog | SOLINSA",
  description:
    "Artículos técnicos, guías y novedades sobre cromatografía, HPLC, GC, GCMS y análisis químico en México.",
  openGraph: {
    title: "Blog | SOLINSA",
    description:
      "Artículos técnicos sobre cromatografía y análisis químico. Conocimiento experto para tu laboratorio.",
    url: "https://www.solinsa.mx/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts?.length) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
            Blog
          </h1>
          <p className="text-lg text-primary-blue/60 max-w-md mx-auto">
            Próximamente publicaremos artículos técnicos, guías prácticas y
            novedades del mundo de la cromatografía. ¡Vuelve pronto!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-blue mb-10">
          Blog
        </h1>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                {post.mainImage && (
                  <div className="md:w-72 shrink-0">
                    <img
                      src={urlFor(post.mainImage).width(576).height(324).url()}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    {post.category && (
                      <span className="bg-energetic-yellow/20 text-primary-blue px-2.5 py-0.5 rounded-full font-medium text-xs">
                        {post.category.title}
                      </span>
                    )}
                    <time
                      dateTime={post.publishedAt}
                      className="text-primary-blue/50"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary-blue group-hover:text-primary-blue/70 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-primary-blue/60 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-4 text-sm font-medium text-primary-blue/40 group-hover:text-primary-blue/60 transition-colors">
                    Leer artículo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
