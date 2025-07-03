/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态资源优化
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // 输出配置
  output: 'standalone',
  // 压缩配置
  compress: true,
  // 重定向配置（如果需要）
  async redirects() {
    return [];
  },
  // 重写配置（如果需要）
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
