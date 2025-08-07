import { SitemapConfig } from './types';
import { loadSitemapConfig, validateSitemapConfig, DEFAULT_SITEMAP_CONFIG } from './config';
import fs from 'fs';
import path from 'path';

/**
 * Configuration manager for sitemap generation
 */
export class ConfigManager {
  private config: SitemapConfig;
  private configPath: string;

  constructor(customConfigPath?: string) {
    this.configPath = customConfigPath || path.join(process.cwd(), 'sitemap.config.js');
    this.config = this.loadConfiguration();
  }

  /**
   * Get current configuration
   */
  getConfig(): SitemapConfig {
    return { ...this.config };
  }

  /**
   * Update configuration
   */
  updateConfig(updates: Partial<SitemapConfig>): void {
    this.config = {
      ...this.config,
      ...updates,
      priorityMap: {
        ...this.config.priorityMap,
        ...updates.priorityMap
      },
      changeFreqMap: {
        ...this.config.changeFreqMap,
        ...updates.changeFreqMap
      },
      excludePaths: updates.excludePaths || this.config.excludePaths
    };

    if (!validateSitemapConfig(this.config)) {
      throw new Error('Invalid configuration provided');
    }
  }

  /**
   * Reload configuration from file
   */
  reloadConfig(): void {
    this.config = this.loadConfiguration();
  }

  /**
   * Save current configuration to file
   */
  saveConfig(): void {
    const configContent = this.generateConfigFileContent();
    
    try {
      fs.writeFileSync(this.configPath, configContent, 'utf8');
      console.log(`Configuration saved to ${this.configPath}`);
    } catch (error) {
      console.error('Failed to save configuration:', error);
      throw error;
    }
  }

  /**
   * Check if configuration file exists
   */
  configFileExists(): boolean {
    return fs.existsSync(this.configPath);
  }

  /**
   * Create default configuration file
   */
  createDefaultConfigFile(): void {
    if (this.configFileExists()) {
      throw new Error('Configuration file already exists');
    }

    const defaultContent = this.generateConfigFileContent(DEFAULT_SITEMAP_CONFIG);
    
    try {
      fs.writeFileSync(this.configPath, defaultContent, 'utf8');
      console.log(`Default configuration created at ${this.configPath}`);
    } catch (error) {
      console.error('Failed to create default configuration:', error);
      throw error;
    }
  }

  /**
   * Get configuration for a specific route
   */
  getRouteConfig(route: string): { priority: number; changeFreq: string } {
    const priority = this.getRoutePriority(route);
    const changeFreq = this.getRouteChangeFreq(route);
    
    return { priority, changeFreq };
  }

  /**
   * Add or update route-specific configuration
   */
  setRouteConfig(route: string, priority?: number, changeFreq?: string): void {
    if (priority !== undefined) {
      if (priority < 0 || priority > 1) {
        throw new Error('Priority must be between 0 and 1');
      }
      this.config.priorityMap[route] = priority;
    }

    if (changeFreq !== undefined) {
      const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
      if (!validFreqs.includes(changeFreq)) {
        throw new Error('Invalid change frequency');
      }
      this.config.changeFreqMap[route] = changeFreq;
    }
  }

  /**
   * Add path to exclude list
   */
  addExcludePath(path: string): void {
    if (!this.config.excludePaths.includes(path)) {
      this.config.excludePaths.push(path);
    }
  }

  /**
   * Remove path from exclude list
   */
  removeExcludePath(path: string): void {
    this.config.excludePaths = this.config.excludePaths.filter(p => p !== path);
  }

  /**
   * Load configuration from file or use defaults
   */
  private loadConfiguration(): SitemapConfig {
    try {
      const config = loadSitemapConfig();
      
      if (!validateSitemapConfig(config)) {
        console.warn('Invalid configuration detected, using defaults');
        return DEFAULT_SITEMAP_CONFIG;
      }
      
      return config;
    } catch (error) {
      console.warn('Failed to load configuration, using defaults:', error);
      return DEFAULT_SITEMAP_CONFIG;
    }
  }

  /**
   * Get priority for a specific route
   */
  private getRoutePriority(route: string): number {
    // Check exact match first
    if (this.config.priorityMap[route] !== undefined) {
      return this.config.priorityMap[route];
    }

    // Check for pattern matches (longest match first)
    const patterns = Object.keys(this.config.priorityMap)
      .filter(pattern => route.startsWith(pattern))
      .sort((a, b) => b.length - a.length);

    if (patterns.length > 0) {
      return this.config.priorityMap[patterns[0]];
    }

    return 0.5; // Default priority
  }

  /**
   * Get change frequency for a specific route
   */
  private getRouteChangeFreq(route: string): string {
    // Check exact match first
    if (this.config.changeFreqMap[route]) {
      return this.config.changeFreqMap[route];
    }

    // Check for pattern matches (longest match first)
    const patterns = Object.keys(this.config.changeFreqMap)
      .filter(pattern => route.startsWith(pattern))
      .sort((a, b) => b.length - a.length);

    if (patterns.length > 0) {
      return this.config.changeFreqMap[patterns[0]];
    }

    return 'weekly'; // Default change frequency
  }

  /**
   * Generate configuration file content
   */
  private generateConfigFileContent(config: SitemapConfig = this.config): string {
    return `/**
 * Sitemap configuration file
 * This file allows customization of sitemap generation behavior
 */

module.exports = {
  // Base URL for your website
  baseUrl: '${config.baseUrl}',
  
  // Output path for the sitemap file (relative to project root)
  outputPath: '${config.outputPath}',
  
  // Paths to exclude from sitemap
  excludePaths: ${JSON.stringify(config.excludePaths, null, 4)},
  
  // Priority mapping for different routes
  // Values should be between 0.0 and 1.0
  priorityMap: ${JSON.stringify(config.priorityMap, null, 4)},
  
  // Change frequency mapping for different routes
  changeFreqMap: ${JSON.stringify(config.changeFreqMap, null, 4)},
  
  // Whether to include lastmod dates
  includeLastMod: ${config.includeLastMod}
};`;
  }

  /**
   * Validate configuration object
   */
  validateConfig(config: Partial<SitemapConfig>): boolean {
    try {
      const fullConfig = { ...DEFAULT_SITEMAP_CONFIG, ...config };
      return validateSitemapConfig(fullConfig);
    } catch {
      return false;
    }
  }

  /**
   * Get configuration summary
   */
  getConfigSummary(): string {
    return `Sitemap Configuration Summary:
- Base URL: ${this.config.baseUrl}
- Output Path: ${this.config.outputPath}
- Excluded Paths: ${this.config.excludePaths.length} paths
- Priority Rules: ${Object.keys(this.config.priorityMap).length} rules
- Change Frequency Rules: ${Object.keys(this.config.changeFreqMap).length} rules
- Include Last Modified: ${this.config.includeLastMod}`;
  }
}