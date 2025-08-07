/**
 * Tests for route scanner functionality
 */

import { StaticRouteScanner } from '../route-scanner';
import { DynamicRouteHandler } from '../dynamic-route-handler';
import fs from 'fs';
import path from 'path';

// Mock fs module
jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

// Mock path module
jest.mock('path');
const mockPath = path as jest.Mocked<typeof path>;

describe('StaticRouteScanner', () => {
  let scanner: StaticRouteScanner;

  beforeEach(() => {
    scanner = new StaticRouteScanner();
    jest.clearAllMocks();
  });

  describe('scanStaticRoutes', () => {
    it('should scan and return static routes', async () => {
      // Mock file system structure
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockImplementation((dirPath) => {
        if (dirPath === 'app') {
          return [
            { name: 'page.tsx', isDirectory: () => false, isFile: () => true },
            { name: 'blog', isDirectory: () => true, isFile: () => false },
            { name: 'contact', isDirectory: () => true, isFile: () => false }
          ] as any;
        }
        if (dirPath === 'app/blog') {
          return [
            { name: 'page.tsx', isDirectory: () => false, isFile: () => true },
            { name: '[slug]', isDirectory: () => true, isFile: () => false }
          ] as any;
        }
        if (dirPath === 'app/contact') {
          return [
            { name: 'page.tsx', isDirectory: () => false, isFile: () => true }
          ] as any;
        }
        return [];
      });

      const routes = await scanner.scanStaticRoutes();

      expect(routes).toContain('/');
      expect(routes).toContain('/blog');
      expect(routes).toContain('/contact');
      expect(routes).not.toContain('/blog/[slug]'); // Dynamic route should be filtered out
    });

    it('should handle empty directories', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([]);

      const routes = await scanner.scanStaticRoutes();

      expect(routes).toEqual([]);
    });

    it('should handle non-existent app directory', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(false);

      const routes = await scanner.scanStaticRoutes();

      expect(routes).toEqual([]);
    });

    it('should skip special directories', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([
        { name: '_private', isDirectory: () => true, isFile: () => false },
        { name: 'api', isDirectory: () => true, isFile: () => false },
        { name: '.hidden', isDirectory: () => true, isFile: () => false },
        { name: 'public', isDirectory: () => true, isFile: () => false }
      ] as any);

      const routes = await scanner.scanStaticRoutes();

      expect(routes).toEqual([]);
    });
  });

  describe('getRouteMetadata', () => {
    it('should return metadata for a route', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.statSync.mockReturnValue({
        mtime: new Date('2024-01-01'),
        isFile: () => true
      } as any);

      const metadata = await scanner.getRouteMetadata('/test');

      expect(metadata.path).toBe('/test');
      expect(metadata.type).toBe('static');
      expect(metadata.lastModified).toEqual(new Date('2024-01-01'));
    });

    it('should handle file stat errors gracefully', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.statSync.mockImplementation(() => {
        throw new Error('File not found');
      });

      const metadata = await scanner.getRouteMetadata('/test');

      expect(metadata.path).toBe('/test');
      expect(metadata.lastModified).toBeInstanceOf(Date);
    });
  });
});

describe('DynamicRouteHandler', () => {
  let handler: DynamicRouteHandler;

  beforeEach(() => {
    handler = new DynamicRouteHandler();
    jest.clearAllMocks();
  });

  describe('scanDynamicRoutes', () => {
    it('should find and resolve dynamic routes', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockImplementation((filePath) => {
        return filePath.includes('page.tsx');
      });
      mockFs.readdirSync.mockImplementation((dirPath) => {
        if (dirPath === 'app') {
          return [
            { name: 'blog', isDirectory: () => true, isFile: () => false }
          ] as any;
        }
        if (dirPath === 'app/blog') {
          return [
            { name: '[slug]', isDirectory: () => true, isFile: () => false }
          ] as any;
        }
        return [];
      });

      // Mock the blog import
      jest.doMock('../../blog', () => ({
        getAllBlogPosts: () => [
          { slug: 'test-post-1', title: 'Test Post 1' },
          { slug: 'test-post-2', title: 'Test Post 2' }
        ]
      }));

      const routes = await handler.scanDynamicRoutes();

      expect(routes).toContain('/blog/test-post-1');
      expect(routes).toContain('/blog/test-post-2');
    });

    it('should handle blog system errors gracefully', async () => {
      mockPath.join.mockImplementation((...args) => args.join('/'));
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue([]);

      // Mock blog import to throw error
      jest.doMock('../../blog', () => ({
        getAllBlogPosts: () => {
          throw new Error('Blog system error');
        }
      }));

      const routes = await handler.scanDynamicRoutes();

      expect(routes).toEqual([]);
    });
  });

  describe('getDynamicRouteMetadata', () => {
    it('should return metadata for dynamic route', async () => {
      const metadata = await handler.getDynamicRouteMetadata('/blog/test-slug');

      expect(metadata.path).toBe('/blog/test-slug');
      expect(metadata.type).toBe('dynamic');
      expect(metadata.lastModified).toBeInstanceOf(Date);
    });
  });
});

describe('Route Scanner Integration', () => {
  let scanner: StaticRouteScanner;

  beforeEach(() => {
    scanner = new StaticRouteScanner();
    jest.clearAllMocks();
  });

  it('should integrate static and dynamic route scanning', async () => {
    // Mock file system for static routes
    mockPath.join.mockImplementation((...args) => args.join('/'));
    mockFs.existsSync.mockReturnValue(true);
    mockFs.readdirSync.mockImplementation((dirPath) => {
      if (dirPath === 'app') {
        return [
          { name: 'page.tsx', isDirectory: () => false, isFile: () => true },
          { name: 'about', isDirectory: () => true, isFile: () => false }
        ] as any;
      }
      if (dirPath === 'app/about') {
        return [
          { name: 'page.tsx', isDirectory: () => false, isFile: () => true }
        ] as any;
      }
      return [];
    });

    // Mock blog system for dynamic routes
    jest.doMock('../../blog', () => ({
      getAllBlogPosts: () => [
        { slug: 'dynamic-post', title: 'Dynamic Post' }
      ]
    }));

    const staticRoutes = await scanner.scanStaticRoutes();
    const dynamicRoutes = await scanner.scanDynamicRoutes();

    expect(staticRoutes).toContain('/');
    expect(staticRoutes).toContain('/about');
    expect(dynamicRoutes).toContain('/blog/dynamic-post');
  });
});