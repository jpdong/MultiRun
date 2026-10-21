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
    <section className="related-posts">
      <div className="related-posts-header">
        <h2 className="related-posts-title">Related Articles</h2>
        <p className="related-posts-subtitle">You might also be interested in</p>
      </div>

      <div className="related-posts-grid">
        {posts.map((post) => (
          <article key={post.slug} className="related-post-card">
            <Link href={`/blog/${post.slug}`} className="related-post-link">
              <div className="related-post-content">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="related-post-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="related-post-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="related-post-title">{post.title}</h3>

                {/* Description */}
                <p className="related-post-description">{post.description}</p>

                {/* Meta information */}
                <div className="related-post-meta">
                  <span className="related-post-author">{post.author}</span>
                  <span className="related-post-separator">•</span>
                  <span className="related-post-date">{formatDate(post.date)}</span>
                  <span className="related-post-separator">•</span>
                  <span className="related-post-reading-time">{post.readingTime} min</span>
                </div>

                {/* Read more indicator */}
                <div className="related-post-arrow">
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
      <div className="related-posts-footer">
        <Link href="/blog" className="view-all-posts">
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
