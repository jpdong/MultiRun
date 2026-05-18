'use client';

import React, { useState, useCallback } from 'react';
import { BlogPost } from '@/src/lib/types';

interface BlogCardInteractiveProps {
  post: BlogPost;
  children: React.ReactNode;
  className?: string;
}

// Client-side interactive wrapper for blog cards
const BlogCardInteractive: React.FC<BlogCardInteractiveProps> = ({
  post,
  children,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Analytics tracking could go here
    console.log('Blog card clicked:', post.slug);
  }, [post.slug]);

  return (
    <div
      className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${isHovered ? '-translate-y-1 motion-reduce:translate-y-0' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default BlogCardInteractive;
