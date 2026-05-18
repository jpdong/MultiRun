import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Assign a placeholder image based on slug if coverImage is not provided
  const getPlaceholderImage = (slug: string) => {
    const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = (hash % 4) + 1;
    return `/multi_run_${index}.webp`;
  };

  return (
    <article className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,98,255,0.08)] hover:border-primary/30 flex flex-col group">
      <Link href={`/blog/${post.slug}`} className="block no-underline text-inherit flex-1 flex flex-col">
        {/* Image Box */}
        <div className="w-full h-52 overflow-hidden relative bg-bg-lighter border-b border-border-light/50">
          <img
            src={post.coverImage || getPlaceholderImage(post.slug)}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {post.tags.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-dark/80 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10 shadow-sm">
                {post.tags[0]}
              </span>
            </div>
          )}
        </div>

        {/* Content Box */}
        <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            {/* Meta information */}
            <div className="flex items-center gap-2 text-xs font-medium text-text-lighter">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-dark m-0 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-text-lighter m-0 leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </div>

          {/* Read More Link */}
          <div className="pt-4 border-t border-border-light/50 flex items-center justify-between mt-auto">
            <span className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              <span>Read More</span>
              <span className="transition-transform duration-200">&rarr;</span>
            </span>
            {post.author && (
              <span className="text-xs text-text-lighter font-medium flex items-center gap-1">
                <span>✍️</span>
                <span>{post.author}</span>
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
