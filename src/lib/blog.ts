import { BlogPost, BlogSearchParams } from './types';

// 静态博客数据将在构建时生成
let blogData: {
  posts: BlogPost[];
  tags: string[];
  generatedAt: string;
} | null = null;

/**
 * 加载静态博客数据
 */
function loadBlogData(): {
  posts: BlogPost[];
  tags: string[];
  generatedAt: string;
} {
  if (blogData) {
    return blogData;
  }

  try {
    // 在构建时，数据文件会被生成到src/data/blog-data.json
    const data = require('../data/blog-data.json');
    blogData = {
      posts: data.posts || [],
      tags: data.tags || [],
      generatedAt: data.generatedAt || new Date().toISOString()
    };
    return blogData;
  } catch (error) {
    console.error('Failed to load blog data:', error);
    // 返回空数据作为降级处理
    blogData = {
      posts: [],
      tags: [],
      generatedAt: new Date().toISOString()
    };
    return blogData;
  }
}

/**
 * 获取所有博客文章
 */
export function getAllBlogPosts(): BlogPost[] {
  const data = loadBlogData();
  return data.posts;
}

/**
 * 根据slug获取博客文章
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const data = loadBlogData();
  return data.posts.find(post => post.slug === slug) || null;
}

/**
 * 获取精选博客文章
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  const data = loadBlogData();
  return data.posts.filter(post => post.featured);
}

/**
 * 获取所有标签
 */
export function getAllTags(): string[] {
  const data = loadBlogData();
  return data.tags;
}

/**
 * 过滤博客文章
 */
export function filterBlogPosts(posts: BlogPost[], params: BlogSearchParams): BlogPost[] {
  let filteredPosts = [...posts];

  // Filter by search query
  if (params.query) {
    const query = params.query.toLowerCase();
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Filter by tag
  if (params.tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.includes(params.tag!)
    );
  }

  return filteredPosts;
}

/**
 * 获取相关博客文章
 */
export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const data = loadBlogData();
  const otherPosts = data.posts.filter(post => post.slug !== currentPost.slug);

  // 基于标签匹配相关文章
  const scoredPosts = otherPosts.map(post => {
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return {
      post,
      score: sharedTags.length
    };
  });

  // 按匹配度排序并返回前limit篇
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}