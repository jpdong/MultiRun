# HotArea Component

A world-class, minimalist design component showcasing popular apps and games.

## Features

- ✅ **Modern Design** - Clean, minimalist interface with subtle gradients
- ✅ **Responsive Layout** - Mobile-first design that adapts to all screen sizes
- ✅ **Performance Optimized** - CSS modules for optimal loading and bundle splitting
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Micro-interactions** - Smooth hover effects and transitions
- ✅ **SEO Friendly** - Proper semantic structure and meta information
- ✅ **Print Optimized** - Dedicated print styles for better document printing

## Design Highlights

### Visual Hierarchy
- **Gradient text title** with modern typography
- **Categorized sections** for apps and games
- **Card-based layout** with subtle shadows and borders
- **Color-coded discover cards** for better visual distinction

### Interaction Design
- **Smooth hover animations** with transform and shadow effects
- **Progressive disclosure** with category-based organization
- **Visual feedback** on all interactive elements
- **Consistent spacing** using a systematic design token approach

### Responsive Behavior
- **Mobile-first approach** with breakpoints at 480px, 768px, and 1024px
- **Flexible grid system** that adapts to content
- **Touch-friendly targets** on mobile devices
- **Optimized typography scaling** using clamp() functions

## Usage

```tsx
import HotArea from '@/src/pages/HotArea';

// In your page component
export default function HomePage() {
  return (
    <div>
      <HotArea />
    </div>
  );
}
```

## Data Structure

The component uses structured data for easy maintenance:

```tsx
const appsData = [
  { name: 'Instagram', icon: '📸', href: '/hot-apps/instagram' },
  { name: 'Facebook', icon: '👥', href: '/hot-apps/facebook' },
  // ... more apps
];

const gamesData = [
  { name: 'Roblox', icon: '🧱', href: '/hot-games/roblox' },
  { name: 'Grow a Garden', icon: '🌱', href: '/hot-games/growagarden' },
  // ... more games
];
```

## Customization

### Adding New Apps/Games

1. Add new entries to `appsData` or `gamesData` arrays
2. Ensure the `href` points to the correct route
3. Choose an appropriate emoji icon

### Styling Modifications

The component uses CSS modules located at `src/components/hot/HotArea.module.css`. Key customization points:

- **Colors**: Modify gradient values and color tokens
- **Spacing**: Adjust padding and margin values
- **Typography**: Update font sizes and weights
- **Animations**: Modify transition timing and effects

## Performance Features

- **CSS Modules** for optimal bundle splitting
- **Reduced motion support** for accessibility
- **Optimized animations** using hardware acceleration
- **Efficient hover states** with minimal repaints

## Accessibility Features

- **Semantic HTML** structure with proper headings
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **High contrast mode** compatibility
- **Focus indicators** for all interactive elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- Print media support

## File Structure

```
src/components/hot/
├── HotArea.module.css    # Styles
└── README.md            # Documentation

src/pages/
└── HotArea.tsx          # Main component
```