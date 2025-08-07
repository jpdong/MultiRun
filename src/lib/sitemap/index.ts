/**
 * Sitemap Generator - Main Export File
 * 
 * This file exports all the main components of the sitemap generator
 * for easy importing and usage.
 */

// Main generator class
export { SitemapGenerator } from './sitemap-generator';
export type { SitemapStats, ValidationResult } from './sitemap-generator';

// Configuration management
export { ConfigManager } from './config-manager';
export { loadSitemapConfig, validateSitemapConfig, DEFAULT_SITEMAP_CONFIG } from './config';

// Core components
export { StaticRouteScanner } from './route-scanner';
export { DynamicRouteHandler } from './dynamic-route-handler';
export { BlogScannerImpl } from './blog-scanner';
export { BlogMetadataHandler } from './blog-metadata-handler';
export { SitemapEntryGenerator } from './entry-generator';
export { XmlGenerator } from './xml-generator';
export { SitemapFileWriter } from './file-writer';
export type { FileInfo, SitemapComparison } from './file-writer';

// Error handling
export { 
  SitemapErrorHandler, 
  UrlValidator,
  SitemapError,
  SitemapValidationError,
  SitemapFileError,
  SitemapConfigError
} from './error-handler';
export type { ValidationResult as UrlValidationResult, BatchValidationResult } from './error-handler';

// Types and interfaces
export type {
  SitemapConfig,
  SitemapEntry,
  RouteMetadata,
  BlogMetadata,
  RouteScanner,
  BlogScanner,
  ChangeFrequency,
  SitemapGeneratorOptions
} from './types';

// Constants
export { SITEMAP_CONSTANTS, ROUTE_TYPES, CHANGE_FREQUENCIES } from './constants';

// Convenience function for quick sitemap generation
export async function generateSitemap(options?: SitemapGeneratorOptions): Promise<string> {
  const generator = new SitemapGenerator(options);
  return await generator.generate();
}

// Convenience function for generating and writing sitemap
export async function generateAndWriteSitemap(options?: SitemapGeneratorOptions): Promise<void> {
  const generator = new SitemapGenerator(options);
  await generator.generateAndWrite();
}