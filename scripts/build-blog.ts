import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

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
): Promise<BlogPostData | null> {
  try {
    console.log(`📄 处理文件: ${filePath}`);

    const fileContent = readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    // 验证必需的frontmatter字段
    const requiredFields = ['title', 'description', 'date', 'author', 'tags'];
    const missingFields = requiredFields.filter((field) => !frontmatter[field]);

    if (missingFields.length > 0) {
      console.warn(
        `⚠️  文件 ${filePath} 缺少必需字段: ${missingFields.join(', ')}`
      );
      return null;
    }

    // 处理markdown内容
    const html = await processMarkdown(content);

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      author: frontmatter.author,
      tags: Array.isArray(frontmatter.tags)
        ? frontmatter.tags
        : [frontmatter.tags],
      content,
      html,
      readingTime: calculateReadingTime(content),
      featured: frontmatter.featured || false,
      coverImage: frontmatter.coverImage || undefined,
    };
  } catch (error) {
    console.error(`❌ 处理文件 ${filePath} 时出错:`, error);
    return null;
  }
}

/**
 * 获取所有markdown文件
 */
function getMarkdownFiles(): string[] {
  if (!existsSync(CONTENT_DIR)) {
    console.warn(`⚠️  目录 ${CONTENT_DIR} 不存在`);
    return [];
  }

  try {
    const files = readdirSync(CONTENT_DIR);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));
  } catch (error) {
    console.error(`❌ 读取目录 ${CONTENT_DIR} 失败:`, error);
    return [];
  }
}

/**
 * 主构建函数
 */
async function buildBlogData(): Promise<void> {
  console.log('🚀 开始构建博客数据...');
  console.log(`📁 内容目录: ${CONTENT_DIR}`);
  console.log(`📤 输出文件: ${OUTPUT_FILE}`);

  try {
    // 确保输出目录存在
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true });
      console.log(`📂 创建输出目录: ${OUTPUT_DIR}`);
    }

    const slugs = getMarkdownFiles();
    console.log(`📊 发现 ${slugs.length} 个markdown文件`);

    if (slugs.length === 0) {
      console.warn('⚠️  没有发现markdown文件');
      return;
    }

    const posts: BlogPostData[] = [];

    // 处理所有markdown文件
    for (const slug of slugs) {
      const filePath = join(CONTENT_DIR, `${slug}.md`);
      const post = await processMarkdownFile(filePath, slug);

      if (post) {
        posts.push(post);
        console.log(`✅ 处理完成: ${post.title}`);
      }
    }

    // 按日期排序（最新的在前）
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // 提取所有标签
    const allTags = Array.from(
      new Set(posts.flatMap((post) => post.tags))
    ).sort();

    // 生成博客数据
    const blogData: BlogData = {
      posts,
      tags: allTags,
      generatedAt: new Date().toISOString(),
    };

    // 写入输出文件
    writeFileSync(OUTPUT_FILE, JSON.stringify(blogData, null, 2), 'utf-8');

    console.log(`\n🎉 博客数据构建完成！`);
    console.log(`📊 文章数量: ${posts.length}`);
    console.log(`🏷️  标签数量: ${allTags.length}`);
    console.log(`📁 输出文件: ${OUTPUT_FILE}`);
    console.log(`⏰ 生成时间: ${blogData.generatedAt}`);
  } catch (error) {
    console.error('❌ 构建过程失败:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  buildBlogData().catch((error) => {
    console.error('❌ 构建失败:', error);
    process.exit(1);
  });
}

export { buildBlogData };
