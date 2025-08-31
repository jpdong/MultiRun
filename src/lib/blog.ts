import fs from 'fs';
import path from 'path';
import { BlogPost, BlogSearchParams } from './types';
import { 
  parseFrontmatter, 
  markdownToHtml, 
  calculateReadingTime, 
  extractSlugFromFilename 
} from './markdown';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all blog post filenames
 */
function getBlogFilenames(): string[] {
  try {
    if (!fs.existsSync(BLOG_CONTENT_PATH)) {
      console.warn('Blog content directory does not exist:', BLOG_CONTENT_PATH);
      return [];
    }
    
    return fs.readdirSync(BLOG_CONTENT_PATH)
      .filter(filename => filename.endsWith('.md'))
      .sort((a, b) => b.localeCompare(a)); // Sort by filename (newest first)
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

/**
 * Read and parse a single blog post
 */
function parseBlogPost(filename: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_PATH, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { metadata, content } = parseFrontmatter(fileContent);
    const slug = extractSlugFromFilename(filename);
    const htmlContent = markdownToHtml(content);
    const readingTime = calculateReadingTime(content);
    
    return {
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      author: metadata.author,
      tags: metadata.tags,
      content: htmlContent,
      readingTime,
      featured: metadata.featured
    };
  } catch (error) {
    console.error(`Error parsing blog post ${filename}:`, error);
    return null;
  }
}

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  const filenames = getBlogFilenames();
  const posts = filenames
    .map(parseBlogPost)
    .filter((post): post is BlogPost => post !== null);
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured);
}

/**
 * Get all unique tags from blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}

/**
 * Filter blog posts based on search parameters
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
 * Get paginated blog posts
 */
export function getPaginatedBlogPosts(
  posts: BlogPost[], 
  page: number = 1, 
  postsPerPage: number = 10
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  
  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
}

/**
 * Get related blog posts based on tags
 */
export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
  
  // Score posts based on shared tags
  const scoredPosts = otherPosts.map(post => {
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return {
      post,
      score: sharedTags.length
    };
  });
  
  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}