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
    <div className="blog-tags">
      <h3 className="sidebar-title">Article Tags</h3>
      <div className="tags-container">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={createTagUrl(tag)}
            className={`tag-link ${selectedTag === tag ? 'active' : ''}`}
          >
            <span className="tag-name">{tag}</span>
            <span className="tag-hash">#</span>
          </Link>
        ))}
      </div>
      
      {selectedTag && (
        <div className="selected-tag-info">
          <p>Current filter: <strong>{selectedTag}</strong></p>
          <Link href="/blog" className="clear-tag">
            Clear tag filter
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogTags;
