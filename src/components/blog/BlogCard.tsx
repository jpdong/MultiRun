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
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 relative transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block no-underline text-inherit h-full">
        <div className="p-6 h-full flex flex-col">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gradient-to-br from-primary to-blue-700 text-white text-xs font-medium rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 leading-snug line-clamp-2">{post.title}</h3>

          {/* Description */}
          <p className="text-text-lighter leading-relaxed mb-6 flex-grow line-clamp-3">{post.description}</p>

          {/* Meta information */}
          <div className="flex items-center gap-4 text-sm text-text-lighter mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-base">&#128100;</span>
              <span>{post.author}</span>
            </div>
            <div>
              {formatDate(post.date)}
            </div>
            <div>
              {post.readingTime} min read
            </div>
          </div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-800/90 flex items-center justify-center opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 peer-hover:opacity-100 group-hover:opacity-100">
          <span className="text-white font-semibold text-lg translate-y-5 transition-all duration-300 ease-in-out">Read more &rarr;</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
