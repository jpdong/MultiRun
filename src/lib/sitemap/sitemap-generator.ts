import { SitemapEntry, SitemapGeneratorOptions } from './types';
import { ConfigManager } from './config-manager';
import { StaticRouteScanner } from './route-scanner';
import { BlogScannerImpl } from './blog-scanner';
import { BlogMetadataHandler } from './blog-metadata-handler';
import { SitemapEntryGenerator } from './entry-generator';
import { XmlGenerator } from './xml-generator';
import { SitemapFileWriter } from './file-writer';
import { SitemapErrorHandler, UrlValidator } from './error-handler';

/**
 * Main sitemap generator class that orchestrates all components
 */
export class SitemapGenerator {
  private configManager: ConfigManager;
  private routeScanner: StaticRouteScanner;
  private blogScanner: BlogScannerImpl;
  private blogMetadataHandler: BlogMetadataHandler;
  private entryGenerator: SitemapEntryGenerator;
  private xmlGenerator: XmlGenerator;
  private fileWriter: SitemapFileWriter;
  private errorHandler: SitemapErrorHandler;
  private verbose: boolean;

  constructor(options: SitemapGeneratorOptions = {}) {
    this.verbose = options.verbose || false;
    this.configManager = new ConfigManager();
    
    // Update config if provided
    if (options.config) {
      this.configManager.updateConfig(options.config);
    }

    // Initialize components
    const config = this.configManager.getConfig();
    this.routeScanner = new StaticRouteScanner();
    this.blogScanner = new BlogScannerImpl();
    this.blogMetadataHandler = new BlogMetadataHandler();
    this.entryGenerator = new SitemapEntryGenerator(config);
    this.xmlGenerator = new XmlGenerator();
    this.fileWriter = new SitemapFileWriter();
    this.errorHandler = new SitemapErrorHandler(this.verbose);
  }

  /**
   * Generate complete sitemap
   */
  async generate(): Promise<string> {
    try {
      this.errorHandler.clear();
      this.log('Starting sitemap generation...');
      
      // Collect all entries
      const entries = await this.collectAllEntries();
      
      this.log(`Collected ${entries.length} sitemap entries`);
      
      // Validate entries
      const validEntries = this.validateEntries(entries);
      
      if (validEntries.length === 0) {
        throw new Error('No valid entries found for sitemap generation');
      }
      
      if (validEntries.length < entries.length) {
        this.log(`Filtered out ${entries.length - validEntries.length} invalid entries`);
      }
      
      // Generate XML
      const xml = this.xmlGenerator.generateSitemapXml(validEntries);
      
      // Validate generated XML
      if (!this.xmlGenerator.validateXml(xml)) {
        throw new Error('Generated XML is invalid');
      }
      
      this.log('Sitemap generation completed successfully');
      
      // Log summary if there were any issues
      const summary = this.errorHandler.getErrorSummary();
      if (summary !== 'No errors or warnings') {
        this.log(`Generation completed with issues: ${summary}`);
      }
      
      return xml;
      
    } catch (error) {
      this.handleError(error as Error, 'sitemap generation', true);
      throw error;
    }
  }

  /**
   * Generate and write sitemap to file
   */
  async generateAndWrite(): Promise<void> {
    try {
      const config = this.configManager.getConfig();
      
      // Validate output path
      const canWrite = await this.fileWriter.validateOutputPath(config.outputPath);
      if (!canWrite) {
        throw new Error(`Cannot write to output path: ${config.outputPath}`);
      }
      
      // Generate sitemap
      const xml = await this.generate();
      
      // Write to file with backup
      await this.fileWriter.writeSitemapWithBackup(xml, config.outputPath);
      
      this.log(`Sitemap written to ${config.outputPath}`);
      
    } catch (error) {
      this.handleError(error as Error, 'sitemap generation and writing');
      throw error;
    }
  }

  /**
   * Generate sitemap and return statistics
   */
  async generateWithStats(): Promise<{ xml: string; stats: SitemapStats }> {
    const startTime = Date.now();
    
    try {
      // Collect entries with detailed tracking
      const staticRoutes = await this.collectStaticRoutes();
      const dynamicRoutes = await this.collectDynamicRoutes();
      const blogEntries = await this.collectBlogEntries();
      
      const allEntries = [...staticRoutes, ...dynamicRoutes, ...blogEntries];
      
      // Generate XML
      const xml = this.xmlGenerator.generateSitemapXml(allEntries);
      
      const endTime = Date.now();
      
      const stats: SitemapStats = {
        totalEntries: allEntries.length,
        staticRoutes: staticRoutes.length,
        dynamicRoutes: dynamicRoutes.length,
        blogEntries: blogEntries.length,
        generationTime: endTime - startTime,
        timestamp: new Date().toISOString()
      };
      
      return { xml, stats };
      
    } catch (error) {
      this.handleError(error as Error, 'sitemap generation with stats');
      throw error;
    }
  }

  /**
   * Collect all sitemap entries
   */
  private async collectAllEntries(): Promise<SitemapEntry[]> {
    const entries: SitemapEntry[] = [];
    
    try {
      // Collect static routes
      const staticEntries = await this.collectStaticRoutes();
      entries.push(...staticEntries);
      this.log(`Added ${staticEntries.length} static route entries`);
      
      // Collect dynamic routes
      const dynamicEntries = await this.collectDynamicRoutes();
      entries.push(...dynamicEntries);
      this.log(`Added ${dynamicEntries.length} dynamic route entries`);
      
      // Collect blog entries
      const blogEntries = await this.collectBlogEntries();
      entries.push(...blogEntries);
      this.log(`Added ${blogEntries.length} blog entries`);
      
    } catch (error) {
      this.handleError(error as Error, 'collecting entries');
    }
    
    return entries;
  }

  /**
   * Collect static route entries
   */
  private async collectStaticRoutes(): Promise<SitemapEntry[]> {
    try {
      const routes = await this.routeScanner.scanStaticRoutes();
      const entries: SitemapEntry[] = [];
      
      for (const route of routes) {
        try {
          const metadata = await this.routeScanner.getRouteMetadata(route);
          const entry = this.entryGenerator.createEntryFromRoute(route, metadata);
          entries.push(entry);
        } catch (error) {
          this.handleError(error as Error, `processing static route ${route}`);
        }
      }
      
      return entries;
    } catch (error) {
      this.handleError(error as Error, 'collecting static routes');
      return [];
    }
  }

  /**
   * Collect dynamic route entries
   */
  private async collectDynamicRoutes(): Promise<SitemapEntry[]> {
    try {
      const routes = await this.routeScanner.scanDynamicRoutes();
      const entries: SitemapEntry[] = [];
      
      for (const route of routes) {
        try {
          const metadata = await this.routeScanner.getRouteMetadata(route);
          const entry = this.entryGenerator.createEntryFromRoute(route, metadata);
          entries.push(entry);
        } catch (error) {
          this.handleError(error as Error, `processing dynamic route ${route}`);
        }
      }
      
      return entries;
    } catch (error) {
      this.handleError(error as Error, 'collecting dynamic routes');
      return [];
    }
  }

  /**
   * Collect blog entries
   */
  private async collectBlogEntries(): Promise<SitemapEntry[]> {
    try {
      // Check if blog system is available
      const isBlogAvailable = await this.blogScanner.isBlogSystemAvailable();
      if (!isBlogAvailable) {
        this.log('Blog system not available, skipping blog entries');
        return [];
      }
      
      const blogMetadataList = await this.blogMetadataHandler.getAllEnhancedBlogMetadata();
      return this.entryGenerator.createEntriesFromBlogs(blogMetadataList);
      
    } catch (error) {
      this.handleError(error as Error, 'collecting blog entries');
      return [];
    }
  }

  /**
   * Get current configuration
   */
  getConfig() {
    return this.configManager.getConfig();
  }

  /**
   * Update configuration
   */
  updateConfig(updates: Partial<SitemapGeneratorOptions['config']>) {
    if (updates) {
      this.configManager.updateConfig(updates);
      
      // Recreate entry generator with new config
      const config = this.configManager.getConfig();
      this.entryGenerator = new SitemapEntryGenerator(config);
    }
  }

  /**
   * Validate current setup
   */
  async validateSetup(): Promise<ValidationResult> {
    const issues: string[] = [];
    const warnings: string[] = [];
    
    try {
      // Validate configuration
      const config = this.configManager.getConfig();
      if (!config.baseUrl) {
        issues.push('Base URL is not configured');
      }
      
      try {
        new URL(config.baseUrl);
      } catch {
        issues.push('Base URL is not a valid URL');
      }
      
      // Check if app directory exists
      try {
        await this.routeScanner.scanStaticRoutes();
      } catch (error) {
        warnings.push('Could not scan static routes: ' + (error as Error).message);
      }
      
      // Check blog system
      const isBlogAvailable = await this.blogScanner.isBlogSystemAvailable();
      if (!isBlogAvailable) {
        warnings.push('Blog system is not available');
      }
      
      return {
        isValid: issues.length === 0,
        issues,
        warnings
      };
      
    } catch (error) {
      issues.push('Setup validation failed: ' + (error as Error).message);
      return {
        isValid: false,
        issues,
        warnings
      };
    }
  }

  /**
   * Handle errors with context
   */
  private handleError(error: Error, context: string, critical: boolean = false): void {
    this.errorHandler.handleError(error, context, critical);
  }

  /**
   * Get error summary
   */
  getErrorSummary(): string {
    return this.errorHandler.getErrorSummary();
  }

  /**
   * Validate all URLs in entries
   */
  private validateEntries(entries: SitemapEntry[]): SitemapEntry[] {
    const validEntries: SitemapEntry[] = [];
    
    for (const entry of entries) {
      const validation = UrlValidator.validateUrl(entry.url);
      
      if (validation.isValid) {
        validEntries.push(entry);
      } else {
        this.errorHandler.addWarning(`Invalid URL skipped: ${entry.url} - ${validation.issues.join(', ')}`);
      }
    }
    
    return validEntries;
  }

  /**
   * Log messages if verbose mode is enabled
   */
  private log(message: string): void {
    if (this.verbose) {
      console.log(`[SitemapGenerator] ${message}`);
    }
  }
}

/**
 * Sitemap generation statistics
 */
export interface SitemapStats {
  totalEntries: number;
  staticRoutes: number;
  dynamicRoutes: number;
  blogEntries: number;
  generationTime: number;
  timestamp: string;
}

/**
 * Setup validation result
 */
export interface ValidationResult {
  isValid: boolean;
  issues: string[];
  warnings: string[];
}