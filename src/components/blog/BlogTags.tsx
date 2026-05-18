'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface BlogTagsProps {
  tags: string[];
  selectedTag?: string;
}

export const BlogTags: React.FC<BlogTagsProps> = ({ tags, selectedTag }) => {
  const searchParams = useSearchParams();

  const createTagUrl = (tag: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');

    if (selectedTag === tag) {
      // If clicking the currently selected tag, deselect it
      params.delete('tag');
    } else {
      params.set('tag', tag);
    }

    // Reset page number
    params.delete('page');

    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ''}`;
  };

  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-dark mb-4">Article Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={createTagUrl(tag)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium no-underline transition-colors duration-200 ${
              selectedTag === tag
                ? 'bg-primary text-white'
                : 'bg-bg-card text-text-light border border-border hover:bg-border'
            }`}
          >
            <span>{tag}</span>
            <span className="opacity-60">#</span>
          </Link>
        ))}
      </div>

      {selectedTag && (
        <div className="mt-4 p-3 bg-bg-lighter rounded-lg border border-border-light">
          <p className="text-sm text-text-light mb-2">Current filter: <strong className="text-dark">{selectedTag}</strong></p>
          <Link href="/blog" className="text-sm text-primary font-medium no-underline hover:underline">
            Clear tag filter
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogTags;
