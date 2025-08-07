/**
 * Constants for sitemap generation
 */

export const SITEMAP_CONSTANTS = {
  // XML namespace and version
  XML_HEADER: '<?xml version="1.0" encoding="UTF-8"?>',
  SITEMAP_NAMESPACE: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  
  // File paths
  APP_DIR: 'app',
  BLOG_CONTENT_DIR: 'src/content/blog',
  PUBLIC_DIR: 'public',
  
  // File patterns
  PAGE_FILE_PATTERN: 'page.tsx',
  MARKDOWN_EXTENSION: '.md',
  
  // Route patterns
  DYNAMIC_ROUTE_PATTERN: /\[([^\]]+)\]/g,
  CATCH_ALL_ROUTE_PATTERN: /\[\.\.\.([^\]]+)\]/g,
  
  // Default values
  DEFAULT_PRIORITY: 0.5,
  DEFAULT_CHANGE_FREQ: 'weekly' as const,
  
  // Date format
  DATE_FORMAT: 'YYYY-MM-DD',
  
  // Limits
  MAX_URLS: 50000,
  MAX_URL_LENGTH: 2048
} as const;

export const ROUTE_TYPES = {
  STATIC: 'static',
  DYNAMIC: 'dynamic',
  BLOG: 'blog'
} as const;

export const CHANGE_FREQUENCIES = [
  'always',
  'hourly', 
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'never'
] as const;