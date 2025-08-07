import fs from 'fs';
import path from 'path';
import { BlogMetadata } from './types';
import { SITEMAP_CONSTANTS } from './constants';
import { getAllBlogPosts } from '../blog';

/**
 * Blog metadata handler for extracting and processing blog post metadata
 */
export class BlogMetadataHandler {
  private blogContentDir: string;

  constructor() {
    this.blogContentDir = path.join(process.cwd(), SITEMAP_CONSTANTS.BLOG_CONTENT_DIR);
  }

  /**
   * Get enhanced blog metadata with file system information
   */
  async getEnhancedBlogMetadata(slug: string): Promise<BlogMetadata> {
    try {
      // Get metadata from blog system
      const blogPosts = getAllBlogPosts();
      const post = blogPosts.find(p => p.slug === slug);
      
      if (!post) {
        throw new Error(`Blog post not found: ${slug}`);
      }

      // Get file modification time
      const filePath = this.getMarkdownFilePath(slug);
      const fileStats = await this.getFileStats(filePath);
      
      return {
        slug: post.slug,
        publishDate: new Date(post.date),
        lastModified: fileStats?.mtime || new Date(post.date),
        title: post.title
      };
    } catch (error) {
      console.error(`Error getting enhanced blog metadata for ${slug}:`, error);
      return this.getDefaultBlogMetadata(slug);
    }
  }

  /**
   * Get all blog posts with enhanced metadata
   */
  async getAllEnhancedBlogMetadata(): Promise<BlogMetadata[]> {
    try {
      const blogPosts = getAllBlogPosts();
      const enhancedMetadata: BlogMetadata[] = [];

      for (const post of blogPosts) {
        const metadata = await this.getEnhancedBlogMetadata(post.slug);
        enhancedMetadata.push(metadata);
      }

      return enhancedMetadata;
    } catch (error) {
      console.error('Error getting all enhanced blog metadata:', error);
      return [];
    }
  }

  /**
   * Get blog post priority based on metadata
   */
  getBlogPostPriority(metadata: BlogMetadata): number {
    // Newer posts get slightly higher priority
    const daysSincePublish = (Date.now() - metadata.publishDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSincePublish < 7) {
      return 0.8; // Recent posts
    } else if (daysSincePublish < 30) {
      return 0.7; // Month-old posts
    } else {
      return 0.6; // Older posts
    }
  }

  /**
   * Get blog post change frequency based on metadata
   */
  getBlogPostChangeFreq(metadata: BlogMetadata): string {
    // Check if post was recently modified
    const daysSinceModified = (Date.now() - metadata.lastModified.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSinceModified < 7) {
      return 'weekly';
    } else if (daysSinceModified < 30) {
      return 'monthly';
    } else {
      return 'yearly';
    }
  }

  /**
   * Format date for sitemap
   */
  formatDateForSitemap(date: Date): string {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  }

  /**
   * Get markdown file path for a blog post slug
   */
  private getMarkdownFilePath(slug: string): string {
    // Try to find the markdown file that corresponds to this slug
    if (!fs.existsSync(this.blogContentDir)) {
      throw new Error(`Blog content directory does not exist: ${this.blogContentDir}`);
    }

    const files = fs.readdirSync(this.blogContentDir);
    const markdownFiles = files.filter(file => file.endsWith(SITEMAP_CONSTANTS.MARKDOWN_EXTENSION));
    
    // Look for a file that contains the slug
    for (const file of markdownFiles) {
      if (file.includes(slug) || this.extractSlugFromFilename(file) === slug) {
        return path.join(this.blogContentDir, file);
      }
    }
    
    // Fallback: assume the file is named after the slug
    return path.join(this.blogContentDir, `${slug}.md`);
  }

  /**
   * Extract slug from filename (similar to the blog system)
   */
  private extractSlugFromFilename(filename: string): string {
    return filename
      .replace(SITEMAP_CONSTANTS.MARKDOWN_EXTENSION, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Get file statistics safely
   */
  private async getFileStats(filePath: string): Promise<fs.Stats | null> {
    try {
      return fs.statSync(filePath);
    } catch (error) {
      console.warn(`Could not get stats for blog file: ${filePath}`);
      return null;
    }
  }

  /**
   * Get default blog metadata when extraction fails
   */
  private getDefaultBlogMetadata(slug: string): BlogMetadata {
    return {
      slug,
      publishDate: new Date(),
      lastModified: new Date(),
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    };
  }

  /**
   * Validate blog metadata
   */
  validateBlogMetadata(metadata: BlogMetadata): boolean {
    return !!(
      metadata.slug &&
      metadata.title &&
      metadata.publishDate instanceof Date &&
      metadata.lastModified instanceof Date
    );
  }
}