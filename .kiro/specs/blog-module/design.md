# Design Document

## Overview

The blog module will be integrated into the existing Next.js application using the established architectural patterns. It will leverage the current design system, component structure, and styling approach while introducing new components specifically for blog functionality. The module will support markdown-to-HTML conversion with frontmatter metadata parsing, providing a professional and clean reading experience that matches the existing site's aesthetic.

## Architecture

### File Structure
```
app/
├── blog/
│   ├── page.tsx                 # Blog listing page
│   ├── [slug]/
│   │   └── page.tsx            # Individual blog post page
│   └── loading.tsx             # Loading component
├── globals.css                 # Extended with blog-specific styles
└── layout.tsx                  # Updated with blog metadata

src/
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx        # Blog post preview card
│   │   ├── BlogContent.tsx     # Rendered blog content
│   │   ├── BlogHeader.tsx      # Blog post header with metadata
│   │   ├── BlogNavigation.tsx  # Breadcrumb and navigation
│   │   ├── BlogSearch.tsx      # Search and filter functionality
│   │   └── BlogTags.tsx        # Tag display and filtering
│   └── elements/
│       └── NavBar.tsx          # Updated with blog link
├── lib/
│   ├── blog.ts                 # Blog data fetching and processing
│   ├── markdown.ts             # Markdown processing utilities
│   └── types.ts                # TypeScript interfaces
└── content/
    └── blog/                   # Markdown blog posts directory
        ├── 2024-01-15-getting-started.md
        ├── 2024-01-20-advanced-features.md
        └── ...
```

### Technology Stack Integration
- **Next.js 15**: Utilizing App Router for file-based routing
- **TypeScript**: Type-safe blog post interfaces and utilities
- **Tailwind CSS**: Consistent with existing styling approach (disabled preflight)
- **React Icons**: For consistent iconography
- **Markdown Processing**: 
  - `gray-matter` for frontmatter parsing
  - `marked` for markdown-to-HTML conversion
  - `highlight.js` for syntax highlighting

## Components and Interfaces

### Core Interfaces

```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags: string[];
  content: string;
  readingTime: number;
  featured?: boolean;
}

interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags: string[];
  featured?: boolean;
}
```

### Component Architecture

#### BlogCard Component
- **Purpose**: Display blog post previews in listing
- **Props**: `BlogPost` interface
- **Features**: 
  - Responsive card design matching existing app cards
  - Reading time estimation
  - Tag display
  - Hover animations consistent with site design

#### BlogContent Component
- **Purpose**: Render processed markdown content
- **Props**: `content: string`, `metadata: BlogMetadata`
- **Features**:
  - Syntax highlighting for code blocks
  - Responsive typography
  - Image optimization
  - Table of contents generation

#### BlogHeader Component
- **Purpose**: Display blog post metadata and title
- **Props**: `BlogMetadata`
- **Features**:
  - Publication date formatting
  - Author information
  - Tag display
  - Social sharing buttons

#### BlogSearch Component
- **Purpose**: Search and filter functionality
- **Props**: `posts: BlogPost[]`, `onFilter: (filtered: BlogPost[]) => void`
- **Features**:
  - Real-time search through titles, descriptions, and content
  - Tag-based filtering
  - URL state management for bookmarkable searches

### Navigation Integration

The existing NavBar component will be updated to include a "Blog" link:

```typescript
// Updated navigation structure
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/hot-apps', label: 'Hot Apps' },
  { href: '/hot-games', label: 'Hot Games' },
  { href: '/technology', label: 'Technology' },
  { href: '/blog', label: 'Blog' },        // New blog link
  { href: '/contact', label: 'Contact' }
];
```

## Data Models

### Frontmatter Structure
```yaml
---
title: "Blog Post Title"
description: "Brief description of the blog post"
date: "2024-01-15"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
featured: true
---
```

### File Naming Convention
- Format: `YYYY-MM-DD-slug.md`
- Example: `2024-01-15-getting-started-with-multi-run.md`
- Slug generation: Automatic from filename or frontmatter

### Content Processing Pipeline
1. **File Discovery**: Scan `/src/content/blog/` directory
2. **Frontmatter Parsing**: Extract metadata using gray-matter
3. **Content Processing**: Convert markdown to HTML with marked
4. **Syntax Highlighting**: Apply highlight.js to code blocks
5. **Reading Time**: Calculate based on word count
6. **Sorting**: Order by publication date (newest first)

## Error Handling

### File System Errors
- **Missing blog directory**: Graceful fallback with empty state
- **Malformed markdown**: Skip invalid files with console warnings
- **Missing frontmatter**: Use filename-based defaults

### Runtime Errors
- **404 handling**: Custom not-found page for invalid blog slugs
- **Loading states**: Skeleton components during data fetching
- **Search errors**: Fallback to showing all posts

### User Experience
- **Empty states**: Informative messages when no posts match filters
- **Progressive enhancement**: Core functionality works without JavaScript
- **Accessibility**: Proper ARIA labels and semantic HTML

## Testing Strategy

### Unit Testing
- **Markdown processing**: Test frontmatter parsing and HTML conversion
- **Search functionality**: Test filtering and search algorithms
- **Component rendering**: Test blog components with various props
- **Utility functions**: Test date formatting, reading time calculation

### Integration Testing
- **Page routing**: Test navigation between blog listing and individual posts
- **Search integration**: Test search URL state management
- **Responsive design**: Test layout on various screen sizes

### Content Testing
- **Markdown validation**: Ensure all blog posts have valid frontmatter
- **Link checking**: Verify internal and external links work correctly
- **Image optimization**: Test image loading and responsive behavior

### Performance Testing
- **Bundle size**: Monitor impact of markdown processing libraries
- **Loading performance**: Test blog listing with many posts
- **Search performance**: Test search functionality with large content sets

## SEO and Performance Optimization

### Metadata Generation
- **Dynamic meta tags**: Generate from blog post frontmatter
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Canonical URLs**: Prevent duplicate content issues

### Performance Features
- **Static generation**: Pre-render blog posts at build time
- **Image optimization**: Use Next.js Image component
- **Code splitting**: Lazy load blog-specific components
- **Caching**: Implement appropriate cache headers

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard navigation**: Full keyboard accessibility
- **Screen reader support**: ARIA labels and descriptions
- **Color contrast**: Meet WCAG 2.1 AA standards

## Design System Integration

### Typography Scale
Following existing design patterns:
- **Blog titles**: `page-title` class (2.5rem, font-weight: 700)
- **Section headings**: `section-title` class (2rem, margin-bottom: 50px)
- **Body text**: Optimized line-height (1.7) for reading
- **Code blocks**: Monospace font with syntax highlighting

### Color Palette
Consistent with existing design:
- **Primary**: #1890ff (existing blue)
- **Text**: #2c3e50 (existing dark text)
- **Secondary text**: #666 (existing gray)
- **Background**: #f7f9fb (existing light background)
- **Cards**: White with subtle shadows

### Spacing and Layout
- **Container**: Max-width 1200px with 20px padding
- **Card spacing**: 2rem gap in grid layouts
- **Section padding**: 80px vertical (desktop), 40px (mobile)
- **Reading width**: Max 800px for optimal readability

### Interactive Elements
- **Hover effects**: Consistent with existing card animations
- **Transitions**: 0.3s ease for all interactive elements
- **Focus states**: Visible focus indicators for accessibility
- **Loading states**: Skeleton components matching existing patterns

## Mobile Responsiveness

### Breakpoints
Following existing responsive design:
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Mobile Optimizations
- **Typography**: Reduced font sizes for mobile
- **Grid layout**: Single column on mobile devices
- **Touch targets**: Minimum 44px for interactive elements
- **Navigation**: Integration with existing mobile menu

### Reading Experience
- **Line length**: Optimal 45-75 characters per line
- **Font size**: Minimum 16px on mobile to prevent zoom
- **Spacing**: Adequate white space for comfortable reading
- **Images**: Responsive and properly sized for mobile screens