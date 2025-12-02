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
    <article className="blog-post">
      {/* Back link */}
      <div className="blog-post-nav">
        <Link href="/blog" className="back-to-blog">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <header className="blog-post-header">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="blog-post-tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="blog-post-title">{post.title}</h1>

        {/* Description */}
        <p className="blog-post-description">{post.description}</p>

        {/* Meta information */}
        <div className="blog-post-meta">
          <div className="meta-item">
            <span className="meta-icon">👤</span>
            <span className="meta-text">{post.author}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span className="meta-text">{formatDate(post.date)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span className="meta-text">{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="blog-post-content">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

      {/* Article footer */}
      <footer className="blog-post-footer">
        <div className="post-actions">
          <Link href="/blog" className="btn btn-outline">
            View More Articles
          </Link>
        </div>

        {/* Share button */}
        <div className="post-share">
          <h4>Share this article</h4>
          <div className="share-buttons">
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
