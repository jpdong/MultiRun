import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  renameSync,
  rmSync,
} from 'fs';
import { createHash } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

import matter from 'gray-matter';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));

const CONTENT_DIR = join(scriptDirectory, '../src/content/blog');
const OUTPUT_DIR = join(scriptDirectory, '../src/data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'blog-data.json');

interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  html: string;
  readingTime: number;
  featured?: boolean;
  coverImage?: string;
}

interface BlogData {
  posts: BlogPostData[];
  tags: string[];
  generatedAt: string;
  sourceHash: string;
}

/**
 * 计算阅读时间（分钟）
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * 使用unified生态链处理markdown
 */
async function processMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug) // 添加ID到标题
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor'],
        ariaHidden: 'true',
        tabIndex: -1,
      },
    })
    .use(rehypeHighlight, {
      // 使用highlight.js的CSS类
      detect: true,
      ignoreMissing: true,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return String(result);
}

/**
 * 处理单个markdown文件
 */
async function processMarkdownFile(
  filePath: string,
  slug: string
): Promise<BlogPostData> {
  try {
    console.log(`📄 处理文件: ${filePath}`);

    const fileContent = readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    // 验证必需的frontmatter字段
    const requiredFields = ['title', 'description', 'date', 'author', 'tags'];
    const missingFields = requiredFields.filter((field) => !frontmatter[field]);

    if (missingFields.length > 0) {
      throw new Error(`缺少必需字段: ${missingFields.join(', ')}`);
    }

    for (const field of ['title', 'description', 'author']) {
      if (
        typeof frontmatter[field] !== 'string' ||
        !frontmatter[field].trim()
      ) {
        throw new Error(`${field} 必须是非空字符串`);
      }
    }
    const date =
      frontmatter.date instanceof Date
        ? frontmatter.date.toISOString()
        : frontmatter.date;
    if (typeof date !== 'string' || !Number.isFinite(Date.parse(date))) {
      throw new Error('date 必须是有效日期');
    }
    const tags = Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : [frontmatter.tags];
    if (tags.some((tag: unknown) => typeof tag !== 'string' || !tag.trim())) {
      throw new Error('tags 必须是字符串或字符串数组');
    }

    // 处理markdown内容
    const html = await processMarkdown(content);

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date,
      author: frontmatter.author,
      tags,
      content,
      html,
      readingTime: calculateReadingTime(content),
      featured: frontmatter.featured || false,
      coverImage: frontmatter.coverImage || undefined,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`处理 ${filePath} 失败: ${message}`);
  }
}

/**
 * 获取所有markdown文件
 */
function getMarkdownFiles(): string[] {
  // Missing/unreadable directories are errors, not an empty successful build.
  return readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => file.replace(/\.md$/, ''));
}

function getSourceHash(slugs: string[]): string {
  const hash = createHash('sha256');
  hash.update(readFileSync(fileURLToPath(import.meta.url)));
  hash.update(readFileSync(join(scriptDirectory, '../pnpm-lock.yaml')));
  for (const slug of slugs) {
    hash.update(
      JSON.stringify([
        slug,
        readFileSync(join(CONTENT_DIR, `${slug}.md`), 'utf-8'),
      ])
    );
  }
  return hash.digest('hex');
}

function isBlogDataCurrent(sourceHash: string): boolean {
  if (!existsSync(OUTPUT_FILE)) return false;
  try {
    const previous = JSON.parse(readFileSync(OUTPUT_FILE, 'utf-8')) as BlogData;
    return (
      previous.sourceHash === sourceHash &&
      Array.isArray(previous.posts) &&
      Array.isArray(previous.tags)
    );
  } catch {
    // Rebuild a missing, malformed, or pre-fingerprint output.
    return false;
  }
}

/**
 * 主构建函数
 */
async function buildBlogData({
  ifChanged = false,
}: { ifChanged?: boolean } = {}): Promise<void> {
  console.log('🚀 开始构建博客数据...');
  console.log(`📁 内容目录: ${CONTENT_DIR}`);
  console.log(`📤 输出文件: ${OUTPUT_FILE}`);

  // 确保输出目录存在
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📂 创建输出目录: ${OUTPUT_DIR}`);
  }

  const slugs = getMarkdownFiles();
  console.log(`📊 发现 ${slugs.length} 个markdown文件`);

  const sourceHash = getSourceHash(slugs);
  if (ifChanged && isBlogDataCurrent(sourceHash)) {
    console.log('✅ 博客内容未变化，跳过解析和 JSON 生成');
    return;
  }

  const posts: BlogPostData[] = [];

  // 处理所有markdown文件
  for (const slug of slugs) {
    const filePath = join(CONTENT_DIR, `${slug}.md`);
    const post = await processMarkdownFile(filePath, slug);

    posts.push(post);
    console.log(`✅ 处理完成: ${post.title}`);
  }

  // 按日期排序（最新的在前）
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 提取所有标签
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // 生成博客数据
  const blogData: BlogData = {
    posts,
    tags: allTags,
    generatedAt: new Date().toISOString(),
    sourceHash,
  };

  // 写入输出文件
  const temporaryFile = `${OUTPUT_FILE}.${process.pid}.tmp`;
  try {
    writeFileSync(temporaryFile, JSON.stringify(blogData, null, 2), 'utf-8');
    renameSync(temporaryFile, OUTPUT_FILE);
  } finally {
    rmSync(temporaryFile, { force: true });
  }

  console.log(`\n🎉 博客数据构建完成！`);
  console.log(`📊 文章数量: ${posts.length}`);
  console.log(`🏷️  标签数量: ${allTags.length}`);
  console.log(`📁 输出文件: ${OUTPUT_FILE}`);
  console.log(`⏰ 生成时间: ${blogData.generatedAt}`);
}

// 如果直接运行此脚本
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  buildBlogData({ ifChanged: process.argv.includes('--if-changed') }).catch(
    (error) => {
      console.error('❌ 构建失败:', error);
      process.exit(1);
    }
  );
}

export { buildBlogData };
