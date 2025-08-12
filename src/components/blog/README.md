# Blog Components

## HomeBlogSection

A server-side rendered blog section component with world-class interaction design.

### Features

- ✅ **Server-side rendering** - Fully compatible with Next.js App Router
- ✅ **Performance optimized** - CSS modules for optimal loading
- ✅ **Responsive design** - Mobile-first approach
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **SEO friendly** - Proper meta tags and structured data
- ✅ **Print styles** - Optimized for printing
- ✅ **Reduced motion** - Respects user preferences
- ✅ **High contrast** - Supports accessibility modes

### Usage

```tsx
import { HomeBlogSection } from '@/src/components/blog/HomeBlogSection';
import { getAllBlogPosts } from '@/src/lib/blog';

// In your page component (server-side)
export default function HomePage() {
  const blogPosts = getAllBlogPosts().slice(0, 3);
  
  return (
    <div>
      <HomeBlogSection posts={blogPosts} />
    </div>
  );
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `posts` | `BlogPost[]` | Yes | Array of blog posts to display |

### Design Features

- **Clean, minimal design** with subtle gradients and shadows
- **Featured post highlighting** - First post gets special styling
- **Smooth hover animations** with performance optimizations
- **Typography hierarchy** with proper font scaling
- **Color system** based on modern design tokens
- **Spacing system** using consistent margins and padding

### Performance

- **CSS Modules** for optimal bundle splitting
- **No client-side JavaScript** required for basic functionality
- **Optimized animations** with `cubic-bezier` timing functions
- **Reduced motion support** for accessibility
- **Print optimization** for better document printing

### Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast mode support
- Focus indicators
- Proper heading hierarchy

## BlogCardInteractive (Optional)

A client-side wrapper for additional interactivity if needed.

### Usage

```tsx
'use client';

import { BlogCardInteractive } from '@/src/components/blog/BlogCardInteractive';

// For client-side interactions
<BlogCardInteractive post={post} className="custom-class">
  <YourBlogCardContent />
</BlogCardInteractive>
```

This component is optional and only needed if you require client-side interactions like analytics tracking or complex hover states.