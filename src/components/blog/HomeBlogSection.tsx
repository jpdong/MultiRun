import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/lib/types';
import Container from '../layout/Container';

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
    <section className="py-24 px-6 bg-bg-lighter border-t border-border-light font-sans">
      <Container>
        <header className="flex justify-between items-end mb-16 gap-8 max-md:flex-col max-md:items-start max-md:gap-6">
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight m-0">Latest Articles</h2>
            <p className="text-lg text-text-lighter m-0">Discover the latest insights, tutorials, and tips</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 py-3 px-8 bg-white border border-border-light rounded-full text-dark no-underline font-bold text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,98,255,0.15)] group" aria-label="View all articles">
            <span>View All</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 ease group-hover:translate-x-1">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {blogPosts.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <article key={post.slug} className={`rounded-2xl overflow-hidden relative transition-all duration-300 group flex flex-col ${isFeatured ? 'bg-dark text-white border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-primary/50' : 'bg-white border border-border-light shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-primary/40'} hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,98,255,0.12)]`}>
                <Link href={`/blog/${post.slug}`} className="block no-underline text-inherit h-full flex flex-col p-8" aria-label={`Read article: ${post.title}`}>
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <time dateTime={post.date} className={`font-medium ${isFeatured ? 'text-white/80' : 'text-text-light'}`}>
                      {formatDate(post.date)}
                    </time>
                    <span className={`relative ${isFeatured ? 'text-white/60' : 'text-text-lighter'} before:content-['•'] before:mr-4 before:text-border`} aria-label={`${post.readingTime} minute read`}>
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mt-0 mb-4 leading-snug tracking-tight transition-colors duration-200 ${isFeatured ? 'text-white' : 'text-dark'} group-hover:text-primary`}>
                    {post.title}
                  </h3>

                  <p className={`leading-relaxed m-0 mb-8 flex-1 text-base ${isFeatured ? 'text-text-lighter' : 'text-text-light'}`}>
                    {truncateText(post.description)}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8" role="list">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`py-1 px-3 rounded-lg text-xs font-medium border transition-colors ${isFeatured ? 'bg-white/10 text-white border-white/20 group-hover:border-primary/40' : 'bg-bg-code text-text-light border-border-light group-hover:border-primary/30'}`} role="listitem">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={`flex items-center gap-2 text-sm font-bold mt-auto transition-all duration-200 ${isFeatured ? 'text-white group-hover:text-primary' : 'text-primary'}`}>
                    <span>Read More</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 ease group-hover:translate-x-1">
                      <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HomeBlogSection;
