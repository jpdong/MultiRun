/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态资源优化
  images: {
    unoptimized: true,
  },
  // 禁用React严格模式以避免hydration问题
  reactStrictMode: false,
  // 压缩配置
  compress: true,
}

module.exports = nextConfig
