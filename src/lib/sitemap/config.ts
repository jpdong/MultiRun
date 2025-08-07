import { SitemapConfig } from './types';
import path from 'path';
import fs from 'fs';

/**
 * Default sitemap configuration
 */
export const DEFAULT_SITEMAP_CONFIG: SitemapConfig = {
  baseUrl: 'https://multirun.space',
  outputPath: 'public/sitemap.xml',
  excludePaths: ['/api', '/_next', '/404', '/500'],
  priorityMap: {
    '/': 1.0,
    '/blog': 0.8,
    '/hot-apps': 0.9,
    '/hot-games': 0.9,
    '/contact': 0.7,
    '/privacy-policy': 0.5,
    '/terms-of-use': 0.5
  },
  changeFreqMap: {
    '/': 'daily',
    '/blog': 'weekly',
    '/hot-apps': 'weekly',
    '/hot-games': 'weekly',
    '/contact': 'monthly',
    '/privacy-policy': 'yearly',
    '/terms-of-use': 'yearly'
  },
  includeLastMod: true
};

/**
 * Load sitemap configuration from file or use defaults
 */
export function loadSitemapConfig(): SitemapConfig {
  const configPath = path.join(process.cwd(), 'sitemap.config.js');
  
  try {
    if (fs.existsSync(configPath)) {
      // Clear require cache to ensure fresh config load
      delete require.cache[require.resolve(configPath)];
      const userConfig = require(configPath);
      
      return {
        ...DEFAULT_SITEMAP_CONFIG,
        ...userConfig,
        priorityMap: {
          ...DEFAULT_SITEMAP_CONFIG.priorityMap,
          ...userConfig.priorityMap
        },
        changeFreqMap: {
          ...DEFAULT_SITEMAP_CONFIG.changeFreqMap,
          ...userConfig.changeFreqMap
        },
        excludePaths: [
          ...DEFAULT_SITEMAP_CONFIG.excludePaths,
          ...(userConfig.excludePaths || [])
        ]
      };
    }
  } catch (error) {
    console.warn('Failed to load sitemap config, using defaults:', error);
  }
  
  return DEFAULT_SITEMAP_CONFIG;
}

/**
 * Validate sitemap configuration
 */
export function validateSitemapConfig(config: SitemapConfig): boolean {
  try {
    // Validate base URL
    new URL(config.baseUrl);
    
    // Validate output path
    if (!config.outputPath || typeof config.outputPath !== 'string') {
      throw new Error('Invalid output path');
    }
    
    // Validate priority values
    Object.values(config.priorityMap).forEach(priority => {
      if (typeof priority !== 'number' || priority < 0 || priority > 1) {
        throw new Error(`Invalid priority value: ${priority}`);
      }
    });
    
    // Validate change frequency values
    const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
    Object.values(config.changeFreqMap).forEach(freq => {
      if (!validFreqs.includes(freq)) {
        throw new Error(`Invalid change frequency: ${freq}`);
      }
    });
    
    return true;
  } catch (error) {
    console.error('Sitemap config validation failed:', error);
    return false;
  }
}