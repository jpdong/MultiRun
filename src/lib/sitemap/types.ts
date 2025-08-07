/**
 * Sitemap generator types and interfaces
 */

export interface SitemapConfig {
  baseUrl: string;
  outputPath: string;
  excludePaths: string[];
  priorityMap: Record<string, number>;
  changeFreqMap: Record<string, string>;
  includeLastMod: boolean;
}

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface RouteMetadata {
  path: string;
  type: 'static' | 'dynamic' | 'blog';
  lastModified: Date;
  priority: number;
  changeFreq: string;
}

export interface BlogMetadata {
  slug: string;
  publishDate: Date;
  lastModified: Date;
  title: string;
}

export interface RouteScanner {
  scanStaticRoutes(): Promise<string[]>;
  scanDynamicRoutes(): Promise<string[]>;
  getRouteMetadata(route: string): Promise<RouteMetadata>;
}

export interface BlogScanner {
  getAllBlogSlugs(): Promise<string[]>;
  getBlogMetadata(slug: string): Promise<BlogMetadata>;
}

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SitemapGeneratorOptions {
  config?: Partial<SitemapConfig>;
  verbose?: boolean;
}