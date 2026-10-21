'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface BlogSearchProps {
  initialQuery?: string;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (query.trim()) {
      params.set('query', query.trim());
    } else {
      params.delete('query');
    }
    
    // Reset page number
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`/blog${queryString ? `?${queryString}` : ''}`);
  };

  const clearSearch = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.delete('query');
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`/blog${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="blog-search">
      <h3 className="sidebar-title">Search Articles</h3>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, content, or tags..."
            className="search-input"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="search-clear"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <button type="submit" className="search-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          Search
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
