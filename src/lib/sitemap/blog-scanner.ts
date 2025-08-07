import { BlogScanner, BlogMetadata } from './types';
import { getAllBlogPosts } from '../blog';
import { ROUTE_TYPES } from './constants';

/**
 * Blog scanner implementation that integrates with existing blog system
 */
export class BlogScannerImpl implements BlogScanner {
  
  /**
   * Get all blog post slugs
   */
  async getAllBlogSlugs(): Promise<string[]> {
    try {
      const blogPosts = getAllBlogPosts();
      return blogPosts.map(post => post.slug);
    } catch (error) {
      console.error('Error getting blog slugs:', error);
      return [];
    }
  }

  /**
   * Get metadata for a specific blog post
   */
  async getBlogMetadata(slug: string): Promise<BlogMetadata> {
    try {
      const blogPosts = getAllBlogPosts();
      const post = blogPosts.find(p => p.slug === slug);
      
      if (!post) {
        throw new Error(`Blog post not found: ${slug}`);
      }

      return {
        slug: post.slug,
        publishDate: new Date(post.date),
        lastModified: new Date(post.date), // Use publish date as fallback
        title: post.title
      };
    } catch (error) {
      console.error(`Error getting blog metadata for ${slug}:`, error);
      // Return default metadata
      return {
        slug,
        publishDate: new Date(),
        lastModified: new Date(),
        title: slug
      };
    }
  }

  /**
   * Generate blog URLs from slugs
   */
  async getBlogUrls(): Promise<string[]> {
    const slugs = await this.getAllBlogSlugs();
    return slugs.map(slug => `/blog/${slug}`);
  }

  /**
   * Get all blog posts with their URLs and metadata
   */
  async getAllBlogEntries(): Promise<Array<{ url: string; metadata: BlogMetadata }>> {
    try {
      const blogPosts = getAllBlogPosts();
      
      return blogPosts.map(post => ({
        url: `/blog/${post.slug}`,
        metadata: {
          slug: post.slug,
          publishDate: new Date(post.date),
          lastModified: new Date(post.date),
          title: post.title
        }
      }));
    } catch (error) {
      console.error('Error getting all blog entries:', error);
      return [];
    }
  }

  /**
   * Check if blog system is available
   */
  async isBlogSystemAvailable(): Promise<boolean> {
    try {
      getAllBlogPosts();
      return true;
    } catch (error) {
      console.warn('Blog system not available:', error);
      return false;
    }
  }
}