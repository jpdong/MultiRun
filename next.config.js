const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态资源优化
  images: {
    unoptimized: true,
  },
  // 禁用React严格模式以避免hydration问题
  reactStrictMode: false,
  // 确保正确的trailing slash配置
  trailingSlash: false,
  // ESLint 配置 - 允许警告但不阻止构建
  eslint: {
    // 在构建时忽略 ESLint 错误
    ignoreDuringBuilds: false,
    // 只在特定目录运行 ESLint
    dirs: ['app', 'src'],
  },
  webpack: (config, { isServer }) => {
    // 只在构建时执行一次
    if (isServer && !process.env.BLOG_BUILT) {
      console.log('📝 正在构建博客数据...');

      try {
        // 检查是否需要重新构建
        const blogDataPath = path.join(process.cwd(), 'src/data/blog-data.json');
        const contentDir = path.join(process.cwd(), 'src/content/blog');

        if (fs.existsSync(blogDataPath) && fs.existsSync(contentDir)) {
          const dataMtime = fs.statSync(blogDataPath).mtime;
          const contentFiles = fs.readdirSync(contentDir);
          const latestFile = contentFiles
            .filter(f => f.endsWith('.md'))
            .map(f => fs.statSync(path.join(contentDir, f)).mtime)
            .sort((a, b) => b - a)[0];

          // 如果数据文件比内容新，跳过构建
          if (latestFile && dataMtime > latestFile) {
            console.log('✅ 博客数据已是最新，跳过构建');
            process.env.BLOG_BUILT = 'true';
            return config;
          }
        }

        // 执行博客构建
        execSync('tsx scripts/build-blog.ts', { stdio: 'inherit' });
        process.env.BLOG_BUILT = 'true';
        console.log('✅ 博客数据构建完成');
      } catch (error) {
        console.error('❌ 博客数据构建失败:', error.message);
        // 不中断构建过程，使用已有的数据文件
      }
    }

    return config;
  },
}

module.exports = nextConfig
