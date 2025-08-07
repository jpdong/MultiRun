/**
 * Tests for blog scanner functionality
 */

import { BlogScannerImpl } from '../blog-scanner';
import { BlogMetadataHandler } from '../blog-metadata-handler';
import fs from 'fs';
import path from 'path';

// Mock fs module
jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

// Mock path module
jest.mock('path');
const mockPath = path as jest.Mocked<typeof path>;

// Mock blog module
jest.mock('../../blog');

describe('BlogScannerImpl', () => {
  let blogScanner: BlogScannerImpl;

  beforeEach(() => {
    blogScanner = new BlogScannerImpl();
    jest.clearAllMocks();
  });

  describe('getAllBlogSlugs', () => {
    it('should return all blog post slugs', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { slug: 'first-post', title: 'First Post', date: '2024-01-01' },
        { slug: 'second-post', title: 'Second Post', date: '2024-01-02' }
      ]);

      const slugs = await blogScanner.getAllBlogSlugs();

      expect(slugs).toEqual(['first-post', 'second-post']);
    });

    it('should handle blog system errors', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockImplementation(() => {
        throw new Error('Blog system error');
      });

      const slugs = await blogScanner.getAllBlogSlugs();

      expect(slugs).toEqual([]);
    });
  });

  describe('getBlogMetadata', () => {
    it('should return metadata for existing blog post', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { 
          slug: 'test-post', 
          title: 'Test Post', 
          date: '2024-01-01',
          description: 'Test description'
        }
      ]);

      const metadata = await blogScanner.getBlogMetadata('test-post');

      expect(metadata.slug).toBe('test-post');
      expect(metadata.title).toBe('Test Post');
      expect(metadata.publishDate).toEqual(new Date('2024-01-01'));
      expect(metadata.lastModified).toEqual(new Date('2024-01-01'));
    });

    it('should return default metadata for non-existent post', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([]);

      const metadata = await blogScanner.getBlogMetadata('non-existent');

      expect(metadata.slug).toBe('non-existent');
      expect(metadata.title).toBe('non-existent');
      expect(metadata.publishDate).toBeInstanceOf(Date);
      expect(metadata.lastModified).toBeInstanceOf(Date);
    });
  });

  describe('getBlogUrls', () => {
    it('should generate URLs from blog slugs', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { slug: 'url-test-1', title: 'URL Test 1' },
        { slug: 'url-test-2', title: 'URL Test 2' }
      ]);

      const urls = await blogScanner.getBlogUrls();

      expect(urls).toEqual(['/blog/url-test-1', '/blog/url-test-2']);
    });
  });

  describe('getAllBlogEntries', () => {
    it('should return all blog entries with URLs and metadata', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { 
          slug: 'entry-test', 
          title: 'Entry Test', 
          date: '2024-01-01'
        }
      ]);

      const entries = await blogScanner.getAllBlogEntries();

      expect(entries).toHaveLength(1);
      expect(entries[0].url).toBe('/blog/entry-test');
      expect(entries[0].metadata.slug).toBe('entry-test');
      expect(entries[0].metadata.title).toBe('Entry Test');
    });
  });

  describe('isBlogSystemAvailable', () => {
    it('should return true when blog system is available', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([]);

      const isAvailable = await blogScanner.isBlogSystemAvailable();

      expect(isAvailable).toBe(true);
    });

    it('should return false when blog system throws error', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockImplementation(() => {
        throw new Error('Blog system not available');
      });

      const isAvailable = await blogScanner.isBlogSystemAvailable();

      expect(isAvailable).toBe(false);
    });
  });
});

describe('BlogMetadataHandler', () => {
  let metadataHandler: BlogMetadataHandler;

  beforeEach(() => {
    metadataHandler = new BlogMetadataHandler();
    jest.clearAllMocks();
  });

  describe('getEnhancedBlogMetadata', () => {
    it('should return enhanced metadata with file stats', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { 
          slug: 'enhanced-test', 
          title: 'Enhanced Test', 
          date: '2024-01-01'
        }
      ]);

      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['enhanced-test.md']);
      mockFs.statSync.mockReturnValue({
        mtime: new Date('2024-01-02')
      } as any);

      const metadata = await metadataHandler.getEnhancedBlogMetadata('enhanced-test');

      expect(metadata.slug).toBe('enhanced-test');
      expect(metadata.publishDate).toEqual(new Date('2024-01-01'));
      expect(metadata.lastModified).toEqual(new Date('2024-01-02'));
    });

    it('should handle missing files gracefully', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { 
          slug: 'missing-file', 
          title: 'Missing File', 
          date: '2024-01-01'
        }
      ]);

      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(false);
      mockFs.statSync.mockImplementation(() => {
        throw new Error('File not found');
      });

      const metadata = await metadataHandler.getEnhancedBlogMetadata('missing-file');

      expect(metadata.slug).toBe('missing-file');
      expect(metadata.publishDate).toEqual(new Date('2024-01-01'));
      expect(metadata.lastModified).toEqual(new Date('2024-01-01')); // Falls back to publish date
    });
  });

  describe('getAllEnhancedBlogMetadata', () => {
    it('should return enhanced metadata for all posts', async () => {
      const mockGetAllBlogPosts = require('../../blog').getAllBlogPosts;
      mockGetAllBlogPosts.mockReturnValue([
        { slug: 'post-1', title: 'Post 1', date: '2024-01-01' },
        { slug: 'post-2', title: 'Post 2', date: '2024-01-02' }
      ]);

      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['post-1.md', 'post-2.md']);
      mockFs.statSync.mockReturnValue({
        mtime: new Date('2024-01-03')
      } as any);

      const metadataList = await metadataHandler.getAllEnhancedBlogMetadata();

      expect(metadataList).toHaveLength(2);
      expect(metadataList[0].slug).toBe('post-1');
      expect(metadataList[1].slug).toBe('post-2');
    });
  });

  describe('getBlogPostPriority', () => {
    it('should return higher priority for recent posts', () => {
      const recentMetadata = {
        slug: 'recent',
        title: 'Recent Post',
        publishDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        lastModified: new Date()
      };

      const priority = metadataHandler.getBlogPostPriority(recentMetadata);

      expect(priority).toBe(0.8);
    });

    it('should return medium priority for month-old posts', () => {
      const monthOldMetadata = {
        slug: 'month-old',
        title: 'Month Old Post',
        publishDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        lastModified: new Date()
      };

      const priority = metadataHandler.getBlogPostPriority(monthOldMetadata);

      expect(priority).toBe(0.7);
    });

    it('should return lower priority for old posts', () => {
      const oldMetadata = {
        slug: 'old',
        title: 'Old Post',
        publishDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
        lastModified: new Date()
      };

      const priority = metadataHandler.getBlogPostPriority(oldMetadata);

      expect(priority).toBe(0.6);
    });
  });

  describe('getBlogPostChangeFreq', () => {
    it('should return weekly for recently modified posts', () => {
      const recentlyModified = {
        slug: 'recent-mod',
        title: 'Recently Modified',
        publishDate: new Date(),
        lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      };

      const changeFreq = metadataHandler.getBlogPostChangeFreq(recentlyModified);

      expect(changeFreq).toBe('weekly');
    });

    it('should return monthly for posts modified within a month', () => {
      const monthlyModified = {
        slug: 'monthly-mod',
        title: 'Monthly Modified',
        publishDate: new Date(),
        lastModified: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000) // 15 days ago
      };

      const changeFreq = metadataHandler.getBlogPostChangeFreq(monthlyModified);

      expect(changeFreq).toBe('monthly');
    });

    it('should return yearly for old posts', () => {
      const oldModified = {
        slug: 'old-mod',
        title: 'Old Modified',
        publishDate: new Date(),
        lastModified: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) // 60 days ago
      };

      const changeFreq = metadataHandler.getBlogPostChangeFreq(oldModified);

      expect(changeFreq).toBe('yearly');
    });
  });

  describe('formatDateForSitemap', () => {
    it('should format date in YYYY-MM-DD format', () => {
      const date = new Date('2024-01-15T10:30:00Z');
      const formatted = metadataHandler.formatDateForSitemap(date);

      expect(formatted).toBe('2024-01-15');
    });
  });

  describe('validateBlogMetadata', () => {
    it('should validate complete metadata', () => {
      const validMetadata = {
        slug: 'valid-post',
        title: 'Valid Post',
        publishDate: new Date('2024-01-01'),
        lastModified: new Date('2024-01-02')
      };

      const isValid = metadataHandler.validateBlogMetadata(validMetadata);

      expect(isValid).toBe(true);
    });

    it('should reject incomplete metadata', () => {
      const invalidMetadata = {
        slug: '',
        title: 'Valid Title',
        publishDate: new Date(),
        lastModified: new Date()
      };

      const isValid = metadataHandler.validateBlogMetadata(invalidMetadata);

      expect(isValid).toBe(false);
    });
  });
});