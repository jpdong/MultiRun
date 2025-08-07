/**
 * Sitemap configuration file
 * This file allows customization of sitemap generation behavior
 */

module.exports = {
  // Base URL for your website
  baseUrl: 'https://multirun.space',
  
  // Output path for the sitemap file (relative to project root)
  outputPath: 'public/sitemap.xml',
  
  // Paths to exclude from sitemap
  excludePaths: [
    '/api',
    '/_next',
    '/404',
    '/500'
  ],
  
  // Priority mapping for different routes
  // Values should be between 0.0 and 1.0
  priorityMap: {
    '/': 1.0,                    // Homepage - highest priority
    '/blog': 0.8,                // Blog listing page
    '/hot-apps': 0.9,            // Hot apps section
    '/hot-games': 0.9,           // Hot games section
    '/contact': 0.7,             // Contact page
    '/privacy-policy': 0.5,      // Legal pages
    '/terms-of-use': 0.5
  },
  
  // Change frequency mapping for different routes
  changeFreqMap: {
    '/': 'daily',                // Homepage updates daily
    '/blog': 'weekly',           // Blog section updates weekly
    '/hot-apps': 'weekly',       // App pages update weekly
    '/hot-games': 'weekly',      // Game pages update weekly
    '/contact': 'monthly',       // Contact info changes monthly
    '/privacy-policy': 'yearly', // Legal pages change rarely
    '/terms-of-use': 'yearly'
  },
  
  // Whether to include lastmod dates
  includeLastMod: true
};