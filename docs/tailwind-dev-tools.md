# TailwindCSS 开发工具配置指南

本文档描述了为 TailwindCSS 集成配置的开发工具，包括 VS Code 设置、Prettier 格式化和 ESLint 规则。

## VS Code 配置

### 智能提示和自动完成

配置文件：`.vscode/settings.json`

- **TailwindCSS 智能提示**：支持 TypeScript、JavaScript 和 React 文件中的 Tailwind 类名自动完成
- **实验性类名正则**：支持 `cva`、`cx`、`cn` 等工具函数中的类名提示
- **验证和 Lint**：实时检查 Tailwind 类名的有效性和冲突

### 关键配置项

```json
{
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "tailwindCSS.validate": true,
  "tailwindCSS.lint.cssConflict": "warning"
}
```

## Prettier 配置

### 自动格式化和类名排序

配置文件：`.prettierrc.js`

- **TailwindCSS 插件**：自动排序 Tailwind 类名
- **支持工具函数**：`clsx`、`cn`、`cva` 函数中的类名也会被排序
- **文件类型支持**：TypeScript、JavaScript、CSS、JSON

### 使用方法

```bash
# 格式化所有文件
npm run format

# 检查格式化状态
npm run format:check
```

### 类名排序示例

**格式化前：**
```tsx
<div className="text-white bg-blue-500 p-4 rounded-lg hover:bg-blue-600">
```

**格式化后：**
```tsx
<div className="rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600">
```

## ESLint 配置

### 代码质量和最佳实践

配置文件：`.eslintrc.js`

- **Next.js 集成**：基于 `next/core-web-vitals` 配置
- **TypeScript 支持**：完整的 TypeScript 规则集
- **导入排序**：自动排序和分组导入语句
- **React 最佳实践**：组件命名、props 类型检查

### TailwindCSS 特定规则

配置文件：`.eslintrc.tailwind.js`

- **矛盾类名检查**：检测冲突的 Tailwind 类名（如 `block` 和 `hidden`）
- **自定义类名警告**：提醒使用 Tailwind 工具类替代自定义类名
- **UI 组件规则**：针对 UI 组件的特殊规则

### 常见规则示例

```javascript
// ❌ 错误：矛盾的类名
<div className="block hidden">

// ❌ 警告：推荐使用 Tailwind 类
<div className="container">

// ✅ 正确：使用 Tailwind 工具类
<div className="max-w-7xl mx-auto px-4">
```

## 开发工作流

### 保存时自动处理

VS Code 配置了保存时自动执行：

1. **ESLint 修复**：自动修复可修复的 ESLint 错误
2. **导入排序**：自动排序和清理导入语句
3. **Prettier 格式化**：格式化代码和排序 Tailwind 类名

### 推荐的开发流程

1. **编写代码**：使用 Tailwind 类名，享受智能提示
2. **保存文件**：自动格式化和修复
3. **提交前检查**：运行 `npm run lint` 和 `npm run format:check`

## 故障排除

### 常见问题

**智能提示不工作**
- 确保安装了 "Tailwind CSS IntelliSense" VS Code 扩展
- 检查 `tailwind.config.js` 文件是否存在
- 重启 VS Code

**Prettier 不排序类名**
- 确保安装了 `prettier-plugin-tailwindcss`
- 检查 `.prettierrc.js` 配置
- 验证 `tailwindConfig` 路径是否正确

**ESLint 错误**
- 运行 `npm run lint` 查看详细错误
- 检查 `.eslintrc.js` 配置
- 确保所有依赖都已安装

### 调试命令

```bash
# 检查 Prettier 配置
npx prettier --check .

# 运行 ESLint
npm run lint

# 查看 Tailwind 配置
npx tailwindcss --help
```

## 扩展配置

### 添加新的工具函数

如果使用了新的类名工具函数，需要在多个地方添加配置：

1. **VS Code 设置**（`.vscode/settings.json`）：
```json
"tailwindCSS.experimental.classRegex": [
  ["yourFunction\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
]
```

2. **Prettier 配置**（`.prettierrc.js`）：
```javascript
tailwindFunctions: ['clsx', 'cn', 'cva', 'yourFunction']
```

### 自定义 ESLint 规则

可以在 `.eslintrc.tailwind.js` 中添加项目特定的规则：

```javascript
rules: {
  'your-custom-rule': 'error'
}
```

## 性能优化

### VS Code 性能

- 限制 TailwindCSS 扫描范围
- 使用 `.vscode/settings.json` 中的文件关联
- 定期清理 VS Code 缓存

### 构建性能

- Prettier 和 ESLint 仅在开发环境运行
- 使用 `.prettierignore` 和 `.eslintignore` 排除不必要的文件
- 配置合理的文件扫描模式

这些工具配置将显著提升使用 TailwindCSS 的开发体验，确保代码质量和一致性。