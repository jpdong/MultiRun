# Sitemap Generator for Next.js

一个为Next.js项目自动生成sitemap.xml的强大工具。

## ✨ 特性

- 🚀 **自动扫描**: 自动发现app目录下的所有页面
- 📝 **博客集成**: 智能集成博客文章
- 🔧 **高度可配置**: 灵活的配置选项
- ⚡ **动态路由**: 支持参数化路由
- 🛡️ **错误处理**: 优雅的错误处理机制
- 📊 **详细统计**: 生成过程统计信息

## 🚀 快速开始

### 安装和配置

1. 项目已包含所有必要文件，无需额外安装
2. 配置文件位于项目根目录：`sitemap.config.js`

### 基本使用

```bash
# 构建项目时自动生成sitemap
npm run build

# 单独生成sitemap
npm run sitemap:generate

# 详细输出模式
npm run sitemap:generate:verbose

# 预览模式（不写入文件）
npm run sitemap:dry-run
```

## ⚙️ 配置

### 基本配置

编辑`sitemap.config.js`文件：

```javascript
module.exports = {
  baseUrl: 'https://multirun.space',
  outputPath: 'public/sitemap.xml',
  excludePaths: ['/api', '/_next', '/404', '/500'],
  priorityMap: {
    '/': 1.0,
    '/blog': 0.8,
    '/hot-apps': 0.9,
    '/hot-games': 0.9
  },
  changeFreqMap: {
    '/': 'daily',
    '/blog': 'weekly',
    '/hot-apps': 'weekly'
  },
  includeLastMod: true
};
```

### 高级配置

```typescript
import { SitemapGenerator } from './src/lib/sitemap/sitemap-generator';

const generator = new SitemapGenerator({
  verbose: true,
  config: {
    baseUrl: 'https://your-domain.com',
    excludePaths: ['/admin'],
    priorityMap: {
      '/special': 0.9
    }
  }
});

await generator.generateAndWrite();
```

## 📝 博客集成

系统自动集成博客文章：

- **自动发现**: 扫描`src/content/blog`目录
- **智能优先级**: 新文章优先级更高
- **动态更新频率**: 根据修改时间调整

### 博客优先级规则

| 文章年龄 | 优先级 |
|----------|--------|
| < 7天    | 0.8    |
| < 30天   | 0.7    |
| > 30天   | 0.6    |

## 🛠️ 命令行工具

### 可用命令

```bash
# 基本生成
node scripts/generate-sitemap.js

# 详细输出
node scripts/generate-sitemap.js --verbose

# 自定义URL
node scripts/generate-sitemap.js --url https://example.com

# 自定义输出路径
node scripts/generate-sitemap.js --output ./dist/sitemap.xml

# 帮助信息
node scripts/generate-sitemap.js --help
```

### ESM版本

```bash
# 预览模式
node scripts/generate-sitemap.mjs --dry-run --verbose
```

## 📊 统计信息

获取详细的生成统计：

```typescript
const { xml, stats } = await generator.generateWithStats();

console.log(`总URL数: ${stats.totalEntries}`);
console.log(`静态路由: ${stats.staticRoutes}`);
console.log(`动态路由: ${stats.dynamicRoutes}`);
console.log(`博客文章: ${stats.blogEntries}`);
console.log(`生成时间: ${stats.generationTime}ms`);
```

## 🔍 验证和调试

### 设置验证

```typescript
const validation = await generator.validateSetup();

if (!validation.isValid) {
  console.error('验证失败:', validation.issues);
}

if (validation.warnings.length > 0) {
  console.warn('警告:', validation.warnings);
}
```

### 错误处理

系统采用优雅降级策略：

- ✅ 非关键错误继续执行
- ✅ 自动过滤无效URL
- ✅ 详细的错误日志
- ✅ 配置验证

## 🏗️ 项目结构

```
src/lib/sitemap/
├── types.ts              # 类型定义
├── config.ts             # 配置管理
├── constants.ts          # 常量定义
├── route-scanner.ts      # 路由扫描器
├── dynamic-route-handler.ts # 动态路由处理
├── blog-scanner.ts       # 博客扫描器
├── blog-metadata-handler.ts # 博客元数据处理
├── entry-generator.ts    # 条目生成器
├── xml-generator.ts      # XML生成器
├── file-writer.ts        # 文件写入器
├── error-handler.ts      # 错误处理器
├── config-manager.ts     # 配置管理器
├── sitemap-generator.ts  # 主生成器
└── __tests__/           # 单元测试
    ├── route-scanner.test.ts
    ├── blog-scanner.test.ts
    └── xml-generator.test.ts
```

## 🧪 测试

运行测试套件：

```bash
# 运行所有测试
npm test

# 运行特定测试
npm test -- --testPathPattern=sitemap

# 测试覆盖率
npm test -- --coverage
```

## 🚀 部署集成

### GitHub Actions

```yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build  # 自动生成sitemap
```

### Vercel

构建命令会自动生成sitemap，无需额外配置。

## 🔧 故障排除

### 常见问题

#### 博客系统不可用
```
警告: Blog system not available
```
**解决**: 确保`src/lib/blog.ts`存在且可导入

#### 无法写入文件
```
错误: Cannot write to output path
```
**解决**: 检查`public`目录权限

#### 配置验证失败
```
错误: Invalid configuration provided
```
**解决**: 检查`sitemap.config.js`语法

### 调试技巧

1. 使用`--verbose`标志获取详细日志
2. 使用`--dry-run`预览生成结果
3. 检查生成的统计信息
4. 验证配置文件语法

## 📈 性能优化

- ✅ 文件修改时间缓存
- ✅ 并行内容处理
- ✅ 智能URL验证
- ✅ 增量更新机制

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License - 详见LICENSE文件

## 🆘 支持

如有问题，请：

1. 查看文档：`docs/sitemap-generator.md`
2. 检查已知问题
3. 提交Issue
4. 联系维护者

---

**生成的sitemap示例**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://multirun.space/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://multirun.space/blog</loc>
    <lastmod>2024-01-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- 更多URL条目... -->
</urlset>
```

🎉 **现在你的Next.js项目拥有了强大的自动sitemap生成功能！**