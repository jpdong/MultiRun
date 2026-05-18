'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/src/lib/types';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

interface BlogListProps {
  posts: BlogPost[];
  searchParams: {
    query?: string;
    tag?: string;
    page?: number;
  };
}

// Local filtering function
function filterPosts(posts: BlogPost[], params: { query?: string; tag?: string }): BlogPost[] {
  let filteredPosts = [...posts];

  // Filter by search query
  if (params.query) {
    const query = params.query.toLowerCase();
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Filter by tag
  if (params.tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.includes(params.tag!)
    );
  }

  return filteredPosts;
}

// Local pagination function
function getPaginatedPosts(
  posts: BlogPost[],
  page: number = 1,
  postsPerPage: number = 10
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
}

export const BlogList: React.FC<BlogListProps> = ({ posts, searchParams }) => {
  const { page = 1 } = searchParams;

  // Pagination
  const postsPerPage = 10; // 1 featured + 9 grid
  const paginatedResult = getPaginatedPosts(posts, page, postsPerPage);

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-white rounded-3xl border border-border-light shadow-sm my-8">
        <div className="text-center max-w-[400px] space-y-4">
          <div className="text-6xl">&#128221;</div>
          <h3 className="text-2xl font-bold text-dark m-0">No Articles Found</h3>
          <p className="text-text-lighter m-0 leading-relaxed">No articles have been published yet. Stay tuned!</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isFirstPage = page === 1;
  const featuredPost = isFirstPage && paginatedResult.posts.length > 0 ? paginatedResult.posts[0] : null;
  const gridPosts = isFirstPage ? paginatedResult.posts.slice(1) : paginatedResult.posts;

  return (
    <div>
      {/* Featured Post Card (Carbon Black) */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="block no-underline group mb-16">
          <div className="bg-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row gap-12 items-center overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_16px_40px_rgba(0,98,255,0.15)] hover:-translate-y-1">
            <div className="flex-1 space-y-6 min-w-0">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>{formatDate(featuredPost.date)}</span>
                <span>•</span>
                <span>{featuredPost.readingTime} min read</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300 m-0 tracking-tight leading-snug line-clamp-2">
                {featuredPost.title}
              </h3>
              <p className="text-base md:text-lg text-text-lighter m-0 leading-relaxed line-clamp-3">
                {featuredPost.description}
              </p>
              <div className="pt-6 flex items-center gap-4 border-t border-white/10">
                <span className="px-3 py-1 bg-white/10 text-white/90 text-xs font-medium rounded-lg border border-white/10">
                  {featuredPost.tags[0] || 'Tutorial'}
                </span>
                <span className="text-primary font-bold text-base group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden shrink-0 relative bg-white/5 border border-white/10">
              <img src={featuredPost.coverImage || '/multi_run_4.webp'} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </Link>
      )}

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {gridPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {paginatedResult.totalPages > 1 && (
        <Pagination
          currentPage={paginatedResult.currentPage}
          totalPages={paginatedResult.totalPages}
          hasNextPage={paginatedResult.hasNextPage}
          hasPrevPage={paginatedResult.hasPrevPage}
          baseUrl="/blog"
        />
      )}
    </div>
  );
};

export default BlogList;
