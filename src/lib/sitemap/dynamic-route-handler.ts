import fs from 'fs';
import path from 'path';
import { SITEMAP_CONSTANTS, ROUTE_TYPES } from './constants';
import { RouteMetadata } from './types';

/**
 * Dynamic route handler for processing routes with parameters
 */
export class DynamicRouteHandler {
  private appDir: string;

  constructor() {
    this.appDir = path.join(process.cwd(), SITEMAP_CONSTANTS.APP_DIR);
  }

  /**
   * Scan and resolve dynamic routes
   */
  async scanDynamicRoutes(): Promise<string[]> {
    const dynamicRoutes: string[] = [];
    
    try {
      await this.findDynamicRoutes(this.appDir, '', dynamicRoutes);
      const resolvedRoutes: string[] = [];
      
      for (const route of dynamicRoutes) {
        const resolved = await this.resolveDynamicRoute(route);
        resolvedRoutes.push(...resolved);
      }
      
      return resolvedRoutes;
    } catch (error) {
      console.error('Error scanning dynamic routes:', error);
      return [];
    }
  }

  /**
   * Find all dynamic route patterns
   */
  private async findDynamicRoutes(dirPath: string, routePrefix: string, routes: string[]): Promise<void> {
    if (!fs.existsSync(dirPath)) {
      return;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        if (this.shouldSkipDirectory(entry.name)) {
          continue;
        }
        
        const newRoutePrefix = routePrefix + '/' + entry.name;
        
        // Check if this is a dynamic route directory
        if (this.isDynamicDirectory(entry.name)) {
          // Check if it has a page.tsx file
          const pageFile = path.join(fullPath, SITEMAP_CONSTANTS.PAGE_FILE_PATTERN);
          if (fs.existsSync(pageFile)) {
            routes.push(newRoutePrefix);
          }
        }
        
        await this.findDynamicRoutes(fullPath, newRoutePrefix, routes);
      }
    }
  }

  /**
   * Resolve a dynamic route to concrete URLs
   */
  private async resolveDynamicRoute(route: string): Promise<string[]> {
    // Handle blog dynamic routes specifically
    if (route.includes('/blog/[slug]')) {
      return await this.resolveBlogDynamicRoute();
    }
    
    // For other dynamic routes, we'll need to implement specific logic
    // For now, we'll skip them as they require domain-specific knowledge
    console.warn(`Skipping unresolved dynamic route: ${route}`);
    return [];
  }

  /**
   * Resolve blog dynamic routes using the blog system
   */
  private async resolveBlogDynamicRoute(): Promise<string[]> {
    try {
      // Import blog functions dynamically to avoid circular dependencies
      const { getAllBlogPosts } = await import('../blog');
      const blogPosts = getAllBlogPosts();
      
      return blogPosts.map(post => `/blog/${post.slug}`);
    } catch (error) {
      console.warn('Could not resolve blog dynamic routes:', error);
      return [];
    }
  }

  /**
   * Check if directory name indicates a dynamic route
   */
  private isDynamicDirectory(dirName: string): boolean {
    return SITEMAP_CONSTANTS.DYNAMIC_ROUTE_PATTERN.test(dirName) ||
           SITEMAP_CONSTANTS.CATCH_ALL_ROUTE_PATTERN.test(dirName);
  }

  /**
   * Check if a directory should be skipped
   */
  private shouldSkipDirectory(dirName: string): boolean {
    return dirName.startsWith('_') || 
           dirName.startsWith('.') ||
           dirName === 'api';
  }

  /**
   * Extract parameter name from dynamic route segment
   */
  private extractParamName(segment: string): string | null {
    const match = segment.match(/\[([^\]]+)\]/);
    return match ? match[1] : null;
  }

  /**
   * Check if route is a catch-all route
   */
  private isCatchAllRoute(segment: string): boolean {
    return SITEMAP_CONSTANTS.CATCH_ALL_ROUTE_PATTERN.test(segment);
  }

  /**
   * Get metadata for dynamic route
   */
  async getDynamicRouteMetadata(route: string): Promise<RouteMetadata> {
    const filePath = this.getDynamicRouteFilePath(route);
    const stats = await this.getFileStats(filePath);
    
    return {
      path: route,
      type: ROUTE_TYPES.DYNAMIC,
      lastModified: stats?.mtime || new Date(),
      priority: SITEMAP_CONSTANTS.DEFAULT_PRIORITY,
      changeFreq: SITEMAP_CONSTANTS.DEFAULT_CHANGE_FREQ
    };
  }

  /**
   * Get file path for dynamic route
   */
  private getDynamicRouteFilePath(route: string): string {
    // Convert resolved route back to file path pattern
    const segments = route.split('/').filter(Boolean);
    let filePath = this.appDir;
    
    for (const segment of segments) {
      // This is a simplified approach - in reality, we'd need to map back to the original dynamic pattern
      filePath = path.join(filePath, segment);
    }
    
    return path.join(filePath, SITEMAP_CONSTANTS.PAGE_FILE_PATTERN);
  }

  /**
   * Get file statistics safely
   */
  private async getFileStats(filePath: string): Promise<fs.Stats | null> {
    try {
      return fs.statSync(filePath);
    } catch (error) {
      return null;
    }
  }
}