# Portfolio Website

A modern portfolio website built with Next.js 14, React, and TypeScript, following a design system first approach.

## Features Implemented

### ✅ Feature 1: Project Foundation & Design System
- Next.js 14+ with App Router and TypeScript
- Design token system (colors, typography, spacing, breakpoints, border radius)
- Inter font family integration
- Phosphor Icons library
- CSS architecture with CSS Modules

### ✅ Feature 2: Base UI Components
- **Button**: Multiple variants (outline, filled, icon-only) and sizes
- **Badge**: Reusable pill-shaped badge component
- **SectionHeader**: Flexible section header with alignment and size variants

### ✅ Feature 3: Navigation & Layout Components
- **NavBar**: Sticky navigation with responsive mobile menu
- **Footer**: Reusable footer with email and navigation links

### ✅ Feature 4: Portfolio Card Component
- Responsive variants (Style 05 for desktop, Style 06 for mobile/tablet)
- Hover effects with image scaling
- External link support

### ✅ Feature 5: Experience Component
- Expandable/collapsible experience items
- Smooth animations

### ✅ Feature 6: Article Card Component
- Grid layout support
- Hover effects

### ✅ Feature 7: Homepage Implementation
- Hero section with profile image
- Why Me section
- Portfolio Preview section
- Experience section
- Articles & Talks section
- Footer

### ✅ Feature 8: Portfolio Page Implementation
- Portfolio grid with case study cards
- Dark theme navigation
- Footer

### ✅ Feature 9: Responsive Design
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## Next Steps

### Images
Place images in `/public/images/` directory:
- `profile.jpg` - Profile avatar image
- `portfolio-1.jpg` through `portfolio-7.jpg` - Portfolio project images
- `article-1.jpg` through `article-6.jpg` - Article/talk images

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── portfolio/
│   │   └── page.tsx       # Portfolio page
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   └── cards/             # Card components
├── tokens/                # Design tokens
└── styles/                # Global styles
```

## Design Tokens

All styles use design tokens from `/src/tokens/`:
- Colors: Black/700, Black/500, Black/900, White, Orange/300, Brand
- Typography: Display/01, Heading/01-07, Text variants, Button sizes
- Spacing: 4px base scale
- Border Radius: 24px, 31px, 39px, 40px, 50px, 100px
- Breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
