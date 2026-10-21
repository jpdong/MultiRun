'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
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
  const queryParams = useSearchParams();
  const tag = queryParams.get('tag') || searchParams.tag;
  const query = queryParams.get('query') || searchParams.query;
  const requestedPage = Number(queryParams.get('page') || searchParams.page || 1);
  const filteredPosts = filterPosts(posts, { tag, query });
  const postsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const page = Number.isFinite(requestedPage) ? Math.min(totalPages, Math.max(1, Math.floor(requestedPage))) : 1;
  const paginatedResult = getPaginatedPosts(filteredPosts, page, postsPerPage);

  if (filteredPosts.length === 0) {
    return (
      <div className="blog-empty">
        <div className="blog-empty-content">
          <div className="blog-empty-icon">📝</div>
          <h3>No Articles Found</h3>
          <p>No articles have been published yet. Stay tuned!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-list">
      {/* Articles grid */}
      <div className="blog-grid">
        {paginatedResult.posts.map((post) => (
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
          baseUrl={tag || query ? `/blog?${new URLSearchParams({ ...(tag ? { tag } : {}), ...(query ? { query } : {}) }).toString()}` : "/blog"}
        />
      )}
    </div>
  );
};

export default BlogList;
