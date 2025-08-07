import fs from 'fs';
import path from 'path';
import { RouteScanner, RouteMetadata } from './types';
import { SITEMAP_CONSTANTS, ROUTE_TYPES } from './constants';
import { DynamicRouteHandler } from './dynamic-route-handler';

/**
 * Static route scanner implementation
 */
export class StaticRouteScanner implements RouteScanner {
  private appDir: string;
  private dynamicHandler: DynamicRouteHandler;

  constructor() {
    this.appDir = path.join(process.cwd(), SITEMAP_CONSTANTS.APP_DIR);
    this.dynamicHandler = new DynamicRouteHandler();
  }

  /**
   * Scan all static routes in the app directory
   */
  async scanStaticRoutes(): Promise<string[]> {
    const routes: string[] = [];
    
    try {
      await this.scanDirectory(this.appDir, '', routes);
      return routes.filter(route => !this.isDynamicRoute(route));
    } catch (error) {
      console.error('Error scanning static routes:', error);
      return [];
    }
  }

  /**
   * Scan dynamic routes using the dynamic route handler
   */
  async scanDynamicRoutes(): Promise<string[]> {
    return await this.dynamicHandler.scanDynamicRoutes();
  }

  /**
   * Get metadata for a specific route
   */
  async getRouteMetadata(route: string): Promise<RouteMetadata> {
    const filePath = this.getPageFilePath(route);
    const stats = await this.getFileStats(filePath);
    
    return {
      path: route,
      type: this.isDynamicRoute(route) ? ROUTE_TYPES.DYNAMIC : ROUTE_TYPES.STATIC,
      lastModified: stats?.mtime || new Date(),
      priority: SITEMAP_CONSTANTS.DEFAULT_PRIORITY,
      changeFreq: SITEMAP_CONSTANTS.DEFAULT_CHANGE_FREQ
    };
  }

  /**
   * Recursively scan directory for page files
   */
  private async scanDirectory(dirPath: string, routePrefix: string, routes: string[]): Promise<void> {
    if (!fs.existsSync(dirPath)) {
      return;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        // Skip special Next.js directories
        if (this.shouldSkipDirectory(entry.name)) {
          continue;
        }
        
        const newRoutePrefix = routePrefix + '/' + entry.name;
        await this.scanDirectory(fullPath, newRoutePrefix, routes);
      } else if (entry.isFile() && entry.name === SITEMAP_CONSTANTS.PAGE_FILE_PATTERN) {
        // Found a page file, add the route
        const route = routePrefix || '/';
        routes.push(route);
      }
    }
  }

  /**
   * Check if a directory should be skipped
   */
  private shouldSkipDirectory(dirName: string): boolean {
    // Skip directories that start with underscore or are special Next.js directories
    return dirName.startsWith('_') || 
           dirName.startsWith('.') ||
           dirName === 'api';
  }

  /**
   * Check if a route is dynamic (contains brackets)
   */
  private isDynamicRoute(route: string): boolean {
    return SITEMAP_CONSTANTS.DYNAMIC_ROUTE_PATTERN.test(route) ||
           SITEMAP_CONSTANTS.CATCH_ALL_ROUTE_PATTERN.test(route);
  }

  /**
   * Get the file path for a page route
   */
  private getPageFilePath(route: string): string {
    if (route === '/') {
      return path.join(this.appDir, SITEMAP_CONSTANTS.PAGE_FILE_PATTERN);
    }
    return path.join(this.appDir, route, SITEMAP_CONSTANTS.PAGE_FILE_PATTERN);
  }

  /**
   * Get file statistics safely
   */
  private async getFileStats(filePath: string): Promise<fs.Stats | null> {
    try {
      return fs.statSync(filePath);
    } catch (error) {
      console.warn(`Could not get stats for file: ${filePath}`, error);
      return null;
    }
  }

  /**
   * Convert file path to URL route
   */
  private pathToRoute(filePath: string): string {
    const relativePath = path.relative(this.appDir, filePath);
    const route = '/' + relativePath
      .replace(/\\/g, '/') // Convert Windows paths
      .replace(/\/page\.tsx$/, '') // Remove page.tsx
      .replace(/^\//, ''); // Remove leading slash for processing
    
    return route === '/' ? '/' : route || '/';
  }
}