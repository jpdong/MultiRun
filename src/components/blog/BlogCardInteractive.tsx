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
      className={`blog-card-interactive ${className} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      
      <style jsx>{`
        .blog-card-interactive {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-card-interactive.hovered {
          transform: translateY(-4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-card-interactive {
            transition: none;
          }
          
          .blog-card-interactive.hovered {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogCardInteractive;