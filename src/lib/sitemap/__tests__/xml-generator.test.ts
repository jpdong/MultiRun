/**
 * Tests for XML generator and configuration
 */

import { XmlGenerator } from '../xml-generator';
import { SitemapEntryGenerator } from '../entry-generator';
import { ConfigManager } from '../config-manager';
import { SitemapEntry, SitemapConfig } from '../types';
import fs from 'fs';

// Mock fs module
jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

describe('XmlGenerator', () => {
  let xmlGenerator: XmlGenerator;

  beforeEach(() => {
    xmlGenerator = new XmlGenerator();
    jest.clearAllMocks();
  });

  describe('generateSitemapXml', () => {
    it('should generate valid XML for simple entries', () => {
      const entries: SitemapEntry[] = [
        {
          url: 'https://example.com/',
          lastmod: '2024-01-01',
          changefreq: 'daily',
          priority: 1.0
        },
        {
          url: 'https://example.com/about',
          lastmod: '2024-01-02',
          changefreq: 'monthly',
          priority: 0.8
        }
      ];

      const xml = xmlGenerator.generateSitemapXml(entries);

      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(xml).toContain('<loc>https://example.com/</loc>');
      expect(xml).toContain('<loc>https://example.com/about</loc>');
      expect(xml).toContain('<lastmod>2024-01-01</lastmod>');
      expect(xml).toContain('<changefreq>daily</changefreq>');
      expect(xml).toContain('<priority>1.0</priority>');
      expect(xml).toContain('</urlset>');
    });

    it('should handle entries with missing optional fields', () => {
      const entries: SitemapEntry[] = [
        {
          url: 'https://example.com/minimal'
        }
      ];

      const xml = xmlGenerator.generateSitemapXml(entries);

      expect(xml).toContain('<loc>https://example.com/minimal</loc>');
      expect(xml).not.toContain('<lastmod>');
      expect(xml).not.toContain('<changefreq>');
      expect(xml).not.toContain('<priority>');
    });

    it('should escape XML special characters', () => {
      const entries: SitemapEntry[] = [
        {
          url: 'https://example.com/path?param=value&other=<test>'
        }
      ];

      const xml = xmlGenerator.generateSitemapXml(entries);

      expect(xml).toContain('&lt;test&gt;');
      expect(xml).toContain('&amp;');
    });

    it('should sort entries by priority and URL', () => {
      const entries: SitemapEntry[] = [
        {
          url: 'https://example.com/z-page',
          priority: 0.5
        },
        {
          url: 'https://example.com/a-page',
          priority: 0.8
        },
        {
          url: 'https://example.com/b-page',
          priority: 0.8
        }
      ];

      const xml = xmlGenerator.generateSitemapXml(entries);

      const aPageIndex = xml.indexOf('a-page');
      const bPageIndex = xml.indexOf('b-page');
      const zPageIndex = xml.indexOf('z-page');

      expect(aPageIndex).toBeLessThan(bPageIndex);
      expect(bPageIndex).toBeLessThan(zPageIndex);
    });

    it('should filter out invalid entries', () => {
      const entries: SitemapEntry[] = [
        {
          url: 'https://example.com/valid',
          priority: 0.5
        },
        {
          url: 'invalid-url',
          priority: 0.5
        },
        {
          url: 'https://example.com/invalid-priority',
          priority: 2.0 // Invalid priority
        }
      ];

      const xml = xmlGenerator.generateSitemapXml(entries);

      expect(xml).toContain('https://example.com/valid');
      expect(xml).not.toContain('invalid-url');
      expect(xml).not.toContain('invalid-priority');
    });

    it('should handle empty entries array', () => {
      const entries: SitemapEntry[] = [];

      const xml = xmlGenerator.generateSitemapXml(entries);

      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(xml).toContain('</urlset>');
      expect(xml).not.toContain('<url>');
    });
  });

  describe('generateSitemapIndexXml', () => {
    it('should generate sitemap index XML', () => {
      const sitemapUrls = [
        'https://example.com/sitemap1.xml',
        'https://example.com/sitemap2.xml'
      ];

      const xml = xmlGenerator.generateSitemapIndexXml(sitemapUrls);

      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(xml).toContain('<loc>https://example.com/sitemap1.xml</loc>');
      expect(xml).toContain('<loc>https://example.com/sitemap2.xml</loc>');
      expect(xml).toContain('</sitemapindex>');
    });
  });

  describe('validateXml', () => {
    it('should validate correct XML structure', () => {
      const validXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
  </url>
</urlset>`;

      const isValid = xmlGenerator.validateXml(validXml);

      expect(isValid).toBe(true);
    });

    it('should reject invalid XML structure', () => {
      const invalidXml = `<urlset>
  <url>
    <loc>https://example.com/</loc>
  </url>`;

      const isValid = xmlGenerator.validateXml(invalidXml);

      expect(isValid).toBe(false);
    });
  });
});

describe('SitemapEntryGenerator', () => {
  let entryGenerator: SitemapEntryGenerator;
  let mockConfig: SitemapConfig;

  beforeEach(() => {
    mockConfig = {
      baseUrl: 'https://example.com',
      outputPath: 'public/sitemap.xml',
      excludePaths: ['/admin', '/api'],
      priorityMap: {
        '/': 1.0,
        '/blog': 0.8,
        '/about': 0.7
      },
      changeFreqMap: {
        '/': 'daily',
        '/blog': 'weekly',
        '/about': 'monthly'
      },
      includeLastMod: true
    };

    entryGenerator = new SitemapEntryGenerator(mockConfig);
    jest.clearAllMocks();
  });

  describe('createEntryFromRoute', () => {
    it('should create entry with correct URL and metadata', () => {
      const entry = entryGenerator.createEntryFromRoute('/about');

      expect(entry.url).toBe('https://example.com/about');
      expect(entry.priority).toBe(0.7);
      expect(entry.changefreq).toBe('monthly');
    });

    it('should use default values for unknown routes', () => {
      const entry = entryGenerator.createEntryFromRoute('/unknown');

      expect(entry.url).toBe('https://example.com/unknown');
      expect(entry.priority).toBe(0.5); // Default priority
      expect(entry.changefreq).toBe('weekly'); // Default change frequency
    });

    it('should include lastmod when configured', () => {
      const metadata = {
        path: '/test',
        type: 'static' as const,
        lastModified: new Date('2024-01-01'),
        priority: 0.5,
        changeFreq: 'weekly'
      };

      const entry = entryGenerator.createEntryFromRoute('/test', metadata);

      expect(entry.lastmod).toBe('2024-01-01');
    });

    it('should exclude lastmod when not configured', () => {
      const configWithoutLastMod = { ...mockConfig, includeLastMod: false };
      const generator = new SitemapEntryGenerator(configWithoutLastMod);

      const metadata = {
        path: '/test',
        type: 'static' as const,
        lastModified: new Date('2024-01-01'),
        priority: 0.5,
        changeFreq: 'weekly'
      };

      const entry = generator.createEntryFromRoute('/test', metadata);

      expect(entry.lastmod).toBeUndefined();
    });
  });

  describe('createEntryFromBlog', () => {
    it('should create blog entry with dynamic priority', () => {
      const blogMetadata = {
        slug: 'test-post',
        title: 'Test Post',
        publishDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        lastModified: new Date()
      };

      const entry = entryGenerator.createEntryFromBlog(blogMetadata);

      expect(entry.url).toBe('https://example.com/blog/test-post');
      expect(entry.priority).toBe(0.8); // Recent post priority
      expect(entry.changefreq).toBe('weekly');
    });
  });

  describe('createEntriesFromRoutes', () => {
    it('should create entries for multiple routes', () => {
      const routes = ['/', '/about', '/contact'];

      const entries = entryGenerator.createEntriesFromRoutes(routes);

      expect(entries).toHaveLength(3);
      expect(entries[0].url).toBe('https://example.com/');
      expect(entries[1].url).toBe('https://example.com/about');
      expect(entries[2].url).toBe('https://example.com/contact');
    });

    it('should exclude routes in excludePaths', () => {
      const routes = ['/', '/admin', '/api/test', '/about'];

      const entries = entryGenerator.createEntriesFromRoutes(routes);

      expect(entries).toHaveLength(2);
      expect(entries.find(e => e.url.includes('/admin'))).toBeUndefined();
      expect(entries.find(e => e.url.includes('/api'))).toBeUndefined();
    });
  });

  describe('validateEntry', () => {
    it('should validate correct entry', () => {
      const validEntry: SitemapEntry = {
        url: 'https://example.com/valid',
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: '2024-01-01'
      };

      const isValid = entryGenerator.validateEntry(validEntry);

      expect(isValid).toBe(true);
    });

    it('should reject entry with invalid URL', () => {
      const invalidEntry: SitemapEntry = {
        url: 'not-a-url'
      };

      const isValid = entryGenerator.validateEntry(invalidEntry);

      expect(isValid).toBe(false);
    });

    it('should reject entry with invalid priority', () => {
      const invalidEntry: SitemapEntry = {
        url: 'https://example.com/test',
        priority: 1.5 // Invalid priority
      };

      const isValid = entryGenerator.validateEntry(invalidEntry);

      expect(isValid).toBe(false);
    });
  });
});

describe('ConfigManager', () => {
  let configManager: ConfigManager;

  beforeEach(() => {
    configManager = new ConfigManager();
    jest.clearAllMocks();
  });

  describe('getConfig', () => {
    it('should return default configuration', () => {
      mockFs.existsSync.mockReturnValue(false);

      const config = configManager.getConfig();

      expect(config.baseUrl).toBe('https://multirun.space');
      expect(config.outputPath).toBe('public/sitemap.xml');
      expect(config.includeLastMod).toBe(true);
    });
  });

  describe('updateConfig', () => {
    it('should update configuration', () => {
      const updates = {
        baseUrl: 'https://newdomain.com',
        priorityMap: {
          '/new': 0.9
        }
      };

      configManager.updateConfig(updates);
      const config = configManager.getConfig();

      expect(config.baseUrl).toBe('https://newdomain.com');
      expect(config.priorityMap['/new']).toBe(0.9);
    });

    it('should throw error for invalid configuration', () => {
      const invalidUpdates = {
        baseUrl: 'not-a-url'
      };

      expect(() => {
        configManager.updateConfig(invalidUpdates);
      }).toThrow('Invalid configuration provided');
    });
  });

  describe('getRouteConfig', () => {
    it('should return route-specific configuration', () => {
      const routeConfig = configManager.getRouteConfig('/blog');

      expect(routeConfig.priority).toBe(0.8);
      expect(routeConfig.changeFreq).toBe('weekly');
    });

    it('should return default values for unknown routes', () => {
      const routeConfig = configManager.getRouteConfig('/unknown');

      expect(routeConfig.priority).toBe(0.5);
      expect(routeConfig.changeFreq).toBe('weekly');
    });
  });

  describe('setRouteConfig', () => {
    it('should set route-specific configuration', () => {
      configManager.setRouteConfig('/new-route', 0.9, 'daily');
      const routeConfig = configManager.getRouteConfig('/new-route');

      expect(routeConfig.priority).toBe(0.9);
      expect(routeConfig.changeFreq).toBe('daily');
    });

    it('should throw error for invalid priority', () => {
      expect(() => {
        configManager.setRouteConfig('/test', 2.0);
      }).toThrow('Priority must be between 0 and 1');
    });

    it('should throw error for invalid change frequency', () => {
      expect(() => {
        configManager.setRouteConfig('/test', 0.5, 'invalid');
      }).toThrow('Invalid change frequency');
    });
  });

  describe('addExcludePath', () => {
    it('should add path to exclude list', () => {
      configManager.addExcludePath('/new-exclude');
      const config = configManager.getConfig();

      expect(config.excludePaths).toContain('/new-exclude');
    });

    it('should not add duplicate paths', () => {
      configManager.addExcludePath('/api');
      const config = configManager.getConfig();

      const apiCount = config.excludePaths.filter(path => path === '/api').length;
      expect(apiCount).toBe(1);
    });
  });

  describe('removeExcludePath', () => {
    it('should remove path from exclude list', () => {
      configManager.removeExcludePath('/api');
      const config = configManager.getConfig();

      expect(config.excludePaths).not.toContain('/api');
    });
  });
});