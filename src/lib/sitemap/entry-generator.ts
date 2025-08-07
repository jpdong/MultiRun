import { SitemapEntry, SitemapConfig, RouteMetadata, BlogMetadata } from './types';
import { SITEMAP_CONSTANTS } from './constants';

/**
 * Sitemap entry generator for creating sitemap entries from various sources
 */
export class SitemapEntryGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  /**
   * Create sitemap entry from route metadata
   */
  createEntryFromRoute(route: string, metadata?: RouteMetadata): SitemapEntry {
    const url = this.buildFullUrl(route);
    
    if (!this.isValidUrl(url)) {
      throw new Error(`Invalid URL generated: ${url}`);
    }

    const priority = this.getRoutePriority(route);
    const changefreq = this.getRouteChangeFreq(route);
    const lastmod = metadata?.lastModified ? this.formatDate(metadata.lastModified) : undefined;

    return {
      url,
      lastmod: this.config.includeLastMod ? lastmod : undefined,
      changefreq,
      priority
    };
  }

  /**
   * Create sitemap entry from blog metadata
   */
  createEntryFromBlog(blogMetadata: BlogMetadata): SitemapEntry {
    const route = `/blog/${blogMetadata.slug}`;
    const url = this.buildFullUrl(route);
    
    if (!this.isValidUrl(url)) {
      throw new Error(`Invalid blog URL generated: ${url}`);
    }

    // Blog posts get dynamic priority based on recency
    const priority = this.getBlogPostPriority(blogMetadata);
    const changefreq = this.getBlogPostChangeFreq(blogMetadata);
    const lastmod = this.formatDate(blogMetadata.lastModified);

    return {
      url,
      lastmod: this.config.includeLastMod ? lastmod : undefined,
      changefreq,
      priority
    };
  }

  /**
   * Create multiple entries from a list of routes
   */
  createEntriesFromRoutes(routes: string[], metadataMap?: Map<string, RouteMetadata>): SitemapEntry[] {
    const entries: SitemapEntry[] = [];

    for (const route of routes) {
      try {
        if (this.shouldExcludeRoute(route)) {
          continue;
        }

        const metadata = metadataMap?.get(route);
        const entry = this.createEntryFromRoute(route, metadata);
        entries.push(entry);
      } catch (error) {
        console.warn(`Failed to create entry for route ${route}:`, error);
      }
    }

    return entries;
  }

  /**
   * Create multiple entries from blog metadata
   */
  createEntriesFromBlogs(blogMetadataList: BlogMetadata[]): SitemapEntry[] {
    const entries: SitemapEntry[] = [];

    for (const blogMetadata of blogMetadataList) {
      try {
        const entry = this.createEntryFromBlog(blogMetadata);
        entries.push(entry);
      } catch (error) {
        console.warn(`Failed to create entry for blog ${blogMetadata.slug}:`, error);
      }
    }

    return entries;
  }

  /**
   * Build full URL from route
   */
  private buildFullUrl(route: string): string {
    const cleanRoute = route.startsWith('/') ? route : `/${route}`;
    const baseUrl = this.config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    return `${baseUrl}${cleanRoute}`;
  }

  /**
   * Validate URL format
   */
  private isValidUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      
      // Check URL length limit
      if (url.length > SITEMAP_CONSTANTS.MAX_URL_LENGTH) {
        return false;
      }
      
      // Ensure it's HTTP or HTTPS
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  }

  /**
   * Get priority for a route from configuration
   */
  private getRoutePriority(route: string): number {
    // Check exact match first
    if (this.config.priorityMap[route] !== undefined) {
      return this.config.priorityMap[route];
    }

    // Check for pattern matches
    for (const [pattern, priority] of Object.entries(this.config.priorityMap)) {
      if (route.startsWith(pattern)) {
        return priority;
      }
    }

    return SITEMAP_CONSTANTS.DEFAULT_PRIORITY;
  }

  /**
   * Get change frequency for a route from configuration
   */
  private getRouteChangeFreq(route: string): SitemapEntry['changefreq'] {
    // Check exact match first
    if (this.config.changeFreqMap[route]) {
      return this.config.changeFreqMap[route] as SitemapEntry['changefreq'];
    }

    // Check for pattern matches
    for (const [pattern, freq] of Object.entries(this.config.changeFreqMap)) {
      if (route.startsWith(pattern)) {
        return freq as SitemapEntry['changefreq'];
      }
    }

    return SITEMAP_CONSTANTS.DEFAULT_CHANGE_FREQ;
  }

  /**
   * Get priority for blog post based on recency
   */
  private getBlogPostPriority(blogMetadata: BlogMetadata): number {
    const daysSincePublish = (Date.now() - blogMetadata.publishDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSincePublish < 7) {
      return 0.8; // Recent posts
    } else if (daysSincePublish < 30) {
      return 0.7; // Month-old posts
    } else {
      return 0.6; // Older posts
    }
  }

  /**
   * Get change frequency for blog post based on modification time
   */
  private getBlogPostChangeFreq(blogMetadata: BlogMetadata): SitemapEntry['changefreq'] {
    const daysSinceModified = (Date.now() - blogMetadata.lastModified.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSinceModified < 7) {
      return 'weekly';
    } else if (daysSinceModified < 30) {
      return 'monthly';
    } else {
      return 'yearly';
    }
  }

  /**
   * Check if route should be excluded
   */
  private shouldExcludeRoute(route: string): boolean {
    return this.config.excludePaths.some(excludePath => 
      route === excludePath || route.startsWith(excludePath)
    );
  }

  /**
   * Format date for sitemap (YYYY-MM-DD)
   */
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  /**
   * Clean and normalize URL
   */
  private cleanUrl(url: string): string {
    return url
      .replace(/\/+/g, '/') // Remove duplicate slashes
      .replace(/\/$/, '') // Remove trailing slash (except for root)
      .replace(/^\//, '') // Remove leading slash for processing
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .toLowerCase();
  }

  /**
   * Validate sitemap entry
   */
  validateEntry(entry: SitemapEntry): boolean {
    if (!entry.url || !this.isValidUrl(entry.url)) {
      return false;
    }

    if (entry.priority !== undefined && (entry.priority < 0 || entry.priority > 1)) {
      return false;
    }

    if (entry.changefreq && !['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'].includes(entry.changefreq)) {
      return false;
    }

    return true;
  }
}