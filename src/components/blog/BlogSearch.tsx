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
    <div className="mb-6">
      <h3 className="text-lg font-bold text-dark mb-4">Search Articles</h3>
      <form onSubmit={handleSearch} className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, content, or tags..."
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-text-lighter hover:text-text text-lg leading-none"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
        <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-primary-hover">
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
