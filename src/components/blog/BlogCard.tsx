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
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-link">
        <div className="blog-card-content">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="blog-card-tags">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="blog-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="blog-card-title">{post.title}</h3>

          {/* Description */}
          <p className="blog-card-description">{post.description}</p>

          {/* Meta information */}
          <div className="blog-card-meta">
            <div className="blog-card-author">
              <span className="author-avatar">👤</span>
              <span className="author-name">{post.author}</span>
            </div>
            <div className="blog-card-date">
              {formatDate(post.date)}
            </div>
            <div className="blog-card-reading-time">
              {post.readingTime} min read
            </div>
          </div>
        </div>

        {/* Hover effect */}
        <div className="blog-card-hover-overlay">
          <span className="read-more">Read more →</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
