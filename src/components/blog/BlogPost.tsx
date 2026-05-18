import React from 'react';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/src/lib/types';
import ShareButton from './ShareButton';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Back link */}
      <div className="pt-6 px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium transition-all duration-200 hover:text-blue-700 hover:-translate-x-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <header className="px-8 pt-8 pb-4 border-b border-border">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-4 py-2 bg-gradient-to-br from-primary to-blue-700 text-white no-underline rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(59,130,246,0.4)]"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4 tracking-tight">{post.title}</h1>

        {/* Description */}
        <p className="text-xl text-text-lighter leading-relaxed mb-8">{post.description}</p>

        {/* Meta information */}
        <div className="flex items-center gap-8 text-sm text-text-lighter max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base">&#128100;</span>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">&#128197;</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">&#9201;&#65039;</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="p-8 max-md:p-6">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

      {/* Article footer */}
      <footer className="p-8 border-t border-border flex justify-between items-center flex-wrap gap-6 max-md:flex-col max-md:items-start">
        <div>
          <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 font-semibold no-underline rounded-lg transition-all duration-200 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white">
            View More Articles
          </Link>
        </div>

        {/* Share button */}
        <div>
          <h4 className="m-0 mb-4 text-base font-semibold text-gray-800">Share this article</h4>
          <div className="flex gap-2">
            <ShareButton
              title={post.title}
              description={post.description}
            />
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;
