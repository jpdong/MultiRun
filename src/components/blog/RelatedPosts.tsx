import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/lib/types';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-8 max-md:px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Related Articles</h2>
        <p className="text-text-lighter text-lg">You might also be interested in</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out relative hover:-translate-y-1 hover:shadow-xl group">
            <Link href={`/blog/${post.slug}`} className="block no-underline text-inherit h-full">
              <div className="p-6 h-full flex flex-col relative">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">{post.title}</h3>

                {/* Description */}
                <p className="text-text-lighter leading-relaxed mb-6 flex-grow line-clamp-2">{post.description}</p>

                {/* Meta information */}
                <div className="flex items-center gap-2 text-sm text-text-lighter mt-auto">
                  <span>{post.author}</span>
                  <span className="opacity-50">&bull;</span>
                  <span>{formatDate(post.date)}</span>
                  <span className="opacity-50">&bull;</span>
                  <span>{post.readingTime} min</span>
                </div>

                {/* Read more indicator */}
                <div className="absolute top-4 right-4 opacity-0 transition-all duration-300 ease-in-out text-primary group-hover:opacity-100 group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* View all link */}
      <div className="text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-blue-700 text-white no-underline rounded-lg font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)]">
          View all articles
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default RelatedPosts;
