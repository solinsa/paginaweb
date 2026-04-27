import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';

export interface BlogHeroPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
}

export interface BlogHeroProps {
  post: BlogHeroPost;
}

export function BlogHero({ post }: BlogHeroProps) {
  return (
    <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left: Text Content (7 cols) */}
      <div className="lg:col-span-7">
        <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
          Nota de Aplicación Destacada
        </span>
        <h1 className="font-heading text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tighter mb-6">
          {post.title.split(' ').map((word, i, arr) => {
            // Highlight the middle phrase with secondary color
            const mid = Math.floor(arr.length * 0.4);
            if (i >= mid && i < mid + 3) {
              return (
                <span key={i} className="text-secondary">
                  {word}{' '}
                </span>
              );
            }
            return <span key={i}>{word} </span>;
          })}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/blog/${post.slug}`}
            className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center gap-2 group"
          >
            Leer Documento Completo
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider">
            Ver Webinar
          </button>
        </div>
      </div>

      {/* Right: Image + Stats Chip (5 cols) */}
      <div className="lg:col-span-5 relative">
        <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low">
          <img
            alt={post.title}
            className="w-full h-full object-cover"
            src={post.featuredImage}
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
        {/* Stats Chip */}
        <GlassCard className="absolute -bottom-6 -left-6 p-6 rounded-xl border border-outline-variant/20 shadow-2xl">
          <div className="text-3xl font-heading font-black text-on-surface">
            99.9%
          </div>
          <div className="text-xs font-body uppercase tracking-widest text-on-surface-variant">
            Precisión Analítica
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
