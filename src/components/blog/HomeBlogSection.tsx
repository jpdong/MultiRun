import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/lib/types';
import Container from '../layout/Container';
import styles from './HomeBlogSection.module.css';

interface HomeBlogSectionProps {
  posts: BlogPost[];
}

// Server-side date formatting function
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Truncate text utility
const truncateText = (text: string, maxLength: number = 120): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

// Server-side rendered blog section
const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ posts }) => {
  const blogPosts = posts || [];

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className={styles.blogSection}>
      <Container>
        <header className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>Latest Articles</h2>
            <p className={styles.sectionSubtitle}>Discover the latest insights and tips</p>
          </div>
          <Link href="/blog" className={styles.viewAllBtn} aria-label="View all articles">
            <span>View All</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <div className={styles.articlesGrid}>
          {blogPosts.map((post, index) => (
            <article key={post.slug} className={`${styles.articleCard} ${index === 0 ? styles.featured : ''}`}>
              <Link href={`/blog/${post.slug}`} className={styles.articleLink} aria-label={`Read article: ${post.title}`}>
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <time dateTime={post.date} className={styles.articleDate}>
                      {formatDate(post.date)}
                    </time>
                    <span className={styles.readingTime} aria-label={`${post.readingTime} minute read`}>
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h3 className={styles.articleTitle}>{post.title}</h3>

                  <p className={styles.articleDescription}>
                    {truncateText(post.description)}
                  </p>

                  {post.tags.length > 0 && (
                    <div className={styles.articleTags} role="list">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.tag} role="listitem">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.readMore}>
                    <span>Read More</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeBlogSection;