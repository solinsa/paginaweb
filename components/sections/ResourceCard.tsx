import Link from 'next/link';

export interface ResourceCardPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  actionIcon?: string;
}

export interface ResourceCardProps {
  post: ResourceCardPost;
}

export function ResourceCard({ post }: ResourceCardProps) {
  const actionIcon = post.actionIcon || 'download';
  const readTime = post.readTime || '8 Min Lectura';

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  // Determine badge variant based on category
  const getBadgeStyles = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('webinar')) {
      return 'bg-tertiary text-white';
    }
    return 'bg-secondary-container text-on-secondary-container';
  };

  return (
    <article className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px]">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={post.featuredImage}
        />
        <span
          className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${getBadgeStyles(post.category)}`}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-2">
          {post.category === 'Webinar' ? 'Educación • On Demand' : `${post.category} • ${readTime}`}
        </div>
        <h3 className="font-heading text-xl font-bold text-on-surface mb-3 leading-snug group-hover:text-secondary transition-colors">
          {post.title}
        </h3>
        <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-surface-container-high pt-4">
          <span className="text-xs font-medium text-on-surface-variant">
            {formatDate(post.publishedAt)}
          </span>
          <Link href={`/blog/${post.slug}`}>
            <span className="material-symbols-outlined text-secondary hover:translate-x-1 transition-transform cursor-pointer">
              {actionIcon}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
