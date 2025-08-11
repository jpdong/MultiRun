import { marked } from 'marked';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import { BlogMetadata } from './types';

// Configure marked with basic options
marked.setOptions({
  breaks: true,
  gfm: true
});

/**
 * Parse frontmatter and content from markdown string
 */
export function parseFrontmatter(markdownContent: string): {
  metadata: BlogMetadata;
  content: string;
} {
  const { data, content } = matter(markdownContent);
  
  // Validate and set defaults for required fields
  const metadata: BlogMetadata = {
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author,
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured)
  };

  return { metadata, content };
}

/**
 * Convert markdown content to HTML
 */
export function markdownToHtml(markdown: string): string {
  try {
    // First convert markdown to HTML
    let html = marked.parse(markdown);
    
    // Fix image paths - convert relative paths to absolute paths for public directory
    html = html.replace(/<img([^>]*?)src="([^"]*?)"([^>]*?)>/g, (match, before, src, after) => {
      // If the src doesn't start with http, https, or /, assume it's in public/images
      if (!src.startsWith('http') && !src.startsWith('https') && !src.startsWith('/')) {
        const newSrc = `/images/${src}`;
        return `<img${before}src="${newSrc}"${after}>`;
      }
      return match;
    });
    
    return html;
  } catch (error) {
    console.error('Markdown conversion failed:', error);
    return `<p>Error rendering content</p>`;
  }
}

/**
 * Calculate reading time based on word count
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Generate slug from title or filename
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Extract slug from filename (supports both YYYY-MM-DD-slug.md and slug.md formats)
 */
export function extractSlugFromFilename(filename: string): string {
  const nameWithoutExt = filename.replace(/\.md$/, '');
  const parts = nameWithoutExt.split('-');
  
  // If filename follows date format (YYYY-MM-DD-slug), extract slug part
  if (parts.length >= 4 && /^\d{4}$/.test(parts[0]) && /^\d{2}$/.test(parts[1]) && /^\d{2}$/.test(parts[2])) {
    return parts.slice(3).join('-');
  }
  
  // Otherwise use entire filename as slug (already clean)
  return nameWithoutExt;
}