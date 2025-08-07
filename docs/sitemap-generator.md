# Sitemap Generator

自动为Next.js项目生成sitemap.xml文件的工具。

## 功能特性

- 🚀 **自动扫描**: 自动扫描app目录下的所有页面文件
- 📝 **博客集成**: 自动包含博客文章到sitemap中
- 🔧 **高度可配置**: 支持自定义优先级、更新频率等
- ⚡ **动态路由**: 智能处理动态路由和参数化页面
- 🛡️ **错误处理**: 优雅的错误处理和验证机制
- 📊 **详细统计**: 生成过程的详细统计信息

## 快速开始

### 1. 基本使用

最简单的使用方式是运行构建脚本：

```bash
npm run build
```

这会自动生成sitemap并保存到`public/sitemap.xml`。

### 2. 独立生成

你也可以单独生成sitemap：

```bash
# 基本生成
npm run sitemap:generate

# 详细输出
npm run sitemap:generate:verbose

# 预览模式（不写入文件）
npm run sitemap:dry-run
```

### 3. 编程方式使用

```typescript
import { SitemapGenerator } from './src/lib/sitemap/sitemap-generator';

const generator = new SitemapGenerator({
  verbose: true,
  config: {
    baseUrl: 'https://your-domain.com'
  }
});

// 生成并写入文件
await generator.generateAndWrite();

// 或者只生成XML
const xml = await generator.generate();
console.log(xml);
```

## 配置

### 配置文件

在项目根目录创建`sitemap.config.js`文件：

```javascript
module.exports = {
  // 网站基础URL
  baseUrl: 'https://multirun.space',
  
  // 输出路径
  outputPath: 'public/sitemap.xml',
  
  // 排除的路径
  excludePaths: [
    '/api',
    '/_next',
    '/404',
    '/500'
  ],
  
  // 页面优先级映射
  priorityMap: {
    '/': 1.0,                    // 首页最高优先级
    '/blog': 0.8,                // 博客列表页
    '/hot-apps': 0.9,            // 热门应用页面
    '/hot-games': 0.9,           // 热门游戏页面
    '/contact': 0.7,             // 联系页面
    '/privacy-policy': 0.5,      // 法律页面
    '/terms-of-use': 0.5
  },
  
  // 更新频率映射
  changeFreqMap: {
    '/': 'daily',                // 首页每日更新
    '/blog': 'weekly',           // 博客每周更新
    '/hot-apps': 'weekly',       // 应用页面每周更新
    '/hot-games': 'weekly',      // 游戏页面每周更新
    '/contact': 'monthly',       // 联系信息每月更新
    '/privacy-policy': 'yearly', // 法律页面每年更新
    '/terms-of-use': 'yearly'
  },
  
  // 是否包含最后修改时间
  includeLastMod: true
};
```

### 配置选项说明

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `baseUrl` | string | `'https://multirun.space'` | 网站的基础URL |
| `outputPath` | string | `'public/sitemap.xml'` | sitemap文件的输出路径 |
| `excludePaths` | string[] | `['/api', '/_next', '/404', '/500']` | 要排除的路径列表 |
| `priorityMap` | object | 见默认配置 | 页面优先级映射（0.0-1.0） |
| `changeFreqMap` | object | 见默认配置 | 页面更新频率映射 |
| `includeLastMod` | boolean | `true` | 是否包含最后修改时间 |

### 更新频率选项

- `always` - 每次访问时都可能改变
- `hourly` - 每小时更新
- `daily` - 每日更新
- `weekly` - 每周更新
- `monthly` - 每月更新
- `yearly` - 每年更新
- `never` - 从不更新

## 高级用法

### 自定义生成器选项

```typescript
const generator = new SitemapGenerator({
  verbose: true,
  config: {
    baseUrl: 'https://custom-domain.com',
    excludePaths: ['/admin', '/private'],
    priorityMap: {
      '/special-page': 0.9
    }
  }
});
```

### 获取生成统计

```typescript
const { xml, stats } = await generator.generateWithStats();

console.log(`生成了 ${stats.totalEntries} 个URL条目`);
console.log(`静态路由: ${stats.staticRoutes}`);
console.log(`动态路由: ${stats.dynamicRoutes}`);
console.log(`博客文章: ${stats.blogEntries}`);
console.log(`生成时间: ${stats.generationTime}ms`);
```

### 验证设置

```typescript
const validation = await generator.validateSetup();

if (!validation.isValid) {
  console.error('设置验证失败:');
  validation.issues.forEach(issue => console.error(`- ${issue}`));
}

if (validation.warnings.length > 0) {
  console.warn('警告:');
  validation.warnings.forEach(warning => console.warn(`- ${warning}`));
}
```

## 博客集成

sitemap生成器会自动集成现有的博客系统：

1. **自动发现**: 扫描`src/content/blog`目录下的markdown文件
2. **动态优先级**: 根据文章发布时间自动调整优先级
3. **智能更新频率**: 根据文章修改时间设置更新频率
4. **元数据提取**: 从frontmatter提取标题、日期等信息

### 博客文章优先级规则

- 7天内发布的文章: 优先级 0.8
- 30天内发布的文章: 优先级 0.7
- 更老的文章: 优先级 0.6

### 博客文章更新频率规则

- 7天内修改的文章: weekly
- 30天内修改的文章: monthly
- 更老的文章: yearly

## 命令行工具

### 基本命令

```bash
# 生成sitemap
node scripts/generate-sitemap.js

# 详细输出
node scripts/generate-sitemap.js --verbose

# 自定义输出路径
node scripts/generate-sitemap.js --output ./dist/sitemap.xml

# 自定义基础URL
node scripts/generate-sitemap.js --url https://example.com

# 显示帮助
node scripts/generate-sitemap.js --help
```

### ESM版本

```bash
# 预览模式（不写入文件）
node scripts/generate-sitemap.mjs --dry-run

# 详细预览
node scripts/generate-sitemap.mjs --dry-run --verbose
```

## 错误处理

生成器采用优雅降级策略：

1. **非关键错误**: 记录警告但继续执行
2. **URL验证**: 自动过滤无效的URL
3. **文件系统错误**: 提供详细的错误信息
4. **配置验证**: 在启动时验证配置的有效性

### 常见问题

#### 1. 博客系统不可用

```
警告: Blog system not available
```

**解决方案**: 确保`src/lib/blog.ts`文件存在且可以正常导入。

#### 2. 无法写入文件

```
错误: Cannot write to output path: public/sitemap.xml
```

**解决方案**: 检查输出目录的写入权限，确保`public`目录存在。

#### 3. 配置验证失败

```
错误: Invalid configuration provided
```

**解决方案**: 检查`sitemap.config.js`文件的语法和配置值。

## 性能优化

### 缓存策略

- 文件修改时间缓存，避免重复扫描
- 并行处理不同类型的内容
- 增量更新机制

### 大型网站优化

对于包含大量页面的网站：

1. 使用`excludePaths`排除不必要的路径
2. 考虑分割sitemap（未来版本支持）
3. 在CI/CD中生成sitemap以减少构建时间

## 集成到CI/CD

### GitHub Actions示例

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build  # 自动生成sitemap
      
    - name: Deploy
      # 部署步骤...
```

### Vercel集成

在`vercel.json`中：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

构建命令会自动生成sitemap。

## API参考

### SitemapGenerator

主要的sitemap生成器类。

#### 构造函数

```typescript
new SitemapGenerator(options?: SitemapGeneratorOptions)
```

#### 方法

- `generate(): Promise<string>` - 生成sitemap XML
- `generateAndWrite(): Promise<void>` - 生成并写入文件
- `generateWithStats(): Promise<{xml: string, stats: SitemapStats}>` - 生成并返回统计信息
- `validateSetup(): Promise<ValidationResult>` - 验证设置
- `getConfig(): SitemapConfig` - 获取当前配置
- `updateConfig(updates: Partial<SitemapConfig>): void` - 更新配置

### ConfigManager

配置管理器。

#### 方法

- `getConfig(): SitemapConfig` - 获取配置
- `updateConfig(updates: Partial<SitemapConfig>): void` - 更新配置
- `getRouteConfig(route: string): {priority: number, changeFreq: string}` - 获取路由配置
- `setRouteConfig(route: string, priority?: number, changeFreq?: string): void` - 设置路由配置

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！

## 更新日志

### v1.0.0

- 初始版本发布
- 支持静态和动态路由扫描
- 博客系统集成
- 完整的配置系统
- 错误处理和验证
- 命令行工具