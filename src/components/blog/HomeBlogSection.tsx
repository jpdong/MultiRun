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
    <section className="py-[120px] max-md:py-20 max-[480px]:py-15 relative bg-gradient-to-b from-[#fafbfc] to-white">
      <Container>
        <header className="flex justify-between items-end mb-16 gap-8 max-md:flex-col max-md:items-start max-md:gap-6 max-md:mb-12">
          <div className="flex-1">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] max-md:text-3xl max-[480px]:text-7 font-bold text-[#0f172a] mt-0 mb-2 tracking-tight leading-[1.2]">Latest Articles</h2>
            <p className="text-lg max-md:text-base text-[#64748b] m-0 font-normal">Discover the latest insights and tips</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-5 bg-white border border-[#e2e8f0] rounded-xl text-[#475569] no-underline font-medium text-sm max-[480px]:text-[0.8125rem] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:text-[#334155] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] group" aria-label="View all articles">
            <span>View All</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 ease group-hover:translate-x-0.5">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-5 items-start">
          {blogPosts.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <article key={post.slug} className={`rounded-[20px] overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group ${isFeatured ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none' : 'bg-white border border-[#f1f5f9]'} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] ${isFeatured ? '' : 'hover:border-[#e2e8f0]'} ${isFeatured ? 'hover:shadow-[0_20px_40px_rgba(102,126,234,0.3)]' : ''}`}>
                <Link href={`/blog/${post.slug}`} className="block no-underline text-inherit h-full" aria-label={`Read article: ${post.title}`}>
                  <div className="p-8 max-md:p-6 max-[480px]:p-5 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-5 text-sm">
                      <time dateTime={post.date} className={`font-medium ${isFeatured ? 'text-white/80' : 'text-[#64748b]'}`}>
                        {formatDate(post.date)}
                      </time>
                      <span className={`relative ${isFeatured ? 'text-white/80' : 'text-[#94a3b8]'} before:content-['•'] before:mr-4 before:text-[#cbd5e1]`} aria-label={`${post.readingTime} minute read`}>
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h3 className={`text-xl max-md:text-lg max-[480px]:text-lg font-semibold mt-0 mb-4 leading-[1.4] tracking-tight transition-colors duration-200 ease ${isFeatured ? 'text-white' : 'text-[#0f172a]'} group-hover:text-[#667eea] ${isFeatured ? 'group-hover:text-white' : ''}`}>{post.title}</h3>

                    <p className={`leading-relaxed m-0 mb-6 flex-1 text-[0.9375rem] max-[480px]:text-sm ${isFeatured ? 'text-white' : 'text-[#64748b]'}`}>
                      {truncateText(post.description)}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6" role="list">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-all duration-200 ease ${isFeatured ? 'bg-white/20 text-white border-white/30' : 'bg-[#f8fafc] text-[#475569] border-[#e2e8f0] group-hover:bg-[#f1f5f9] group-hover:border-[#cbd5e1]'}`} role="listitem">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={`flex items-center gap-1.5 text-sm font-medium mt-auto transition-all duration-200 ease group-hover:gap-2 ${isFeatured ? 'text-white/90' : 'text-[#667eea]'}`}>
                      <span>Read More</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 ease group-hover:translate-x-0.5">
                        <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
