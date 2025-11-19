# Spec 004: Portfolio Card Component

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/components/cards/PortfolioCard/](../src/components/cards/PortfolioCard/)

## Problem Statement

Portfolio case studies need to be displayed as interactive cards with images, titles, tags, and links. The design specifies two different layout styles (overlay vs. stacked) for different viewport sizes. A reusable card component is needed to maintain consistency across Homepage preview and Portfolio page grid.

## Motivation

- Display portfolio work consistently across pages
- Provide clear visual hierarchy with images, titles, and metadata
- Implement engaging hover effects per Figma specifications
- Support responsive layouts (desktop overlay, mobile stacked)
- Enable external links to case study presentations
- Reuse component on Homepage (3 cards) and Portfolio page (7+ cards)

## Proposed Solution

Create a flexible PortfolioCard component with:
- Two style variants: Style 05 (desktop overlay) and Style 06 (mobile stacked)
- Image background with hover zoom effect
- Title and tags (badges) overlay
- Clickable entire card and button
- Support for external URLs from Figma annotations

## Detailed Design

### Component Variants

**Style 05 (Desktop Overlay):**
```
┌─────────────────────────────┐
│                             │
│     [Background Image]      │
│                             │
│  [Title Text]               │
│  [Badge] [Badge]  [Button→] │
└─────────────────────────────┘
```

**Style 06 (Mobile/Tablet Stacked):**
```
┌─────────────────────────────┐
│                             │
│     [Background Image]      │
│                             │
└─────────────────────────────┘
┌─────────────────────────────┐
│  [Title Text]               │
│  [Badge] [Badge]            │
│                   [Button→] │
└─────────────────────────────┘
```

### Features

**Visual:**
- Background image with Next.js Image optimization
- Image scales on hover (transform: scale(1.05))
- Gradient overlay for text readability (Style 05)
- Tags displayed as Badge components
- Arrow button (using Button component)

**Interactive:**
- Entire card clickable (wraps in `<a>` tag)
- Button also clickable (same URL)
- Hover effect: Image zoom with smooth transition
- External links open in new tab

**Responsive:**
- Desktop/Tablet: Style 05 (overlay)
- Mobile: Style 06 (stacked)
- Automatic switching at breakpoint

### API

```typescript
interface PortfolioCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  href?: string;
  variant?: 'style05' | 'style06';
  className?: string;
  theme?: 'light' | 'dark';  // Added 2025-11-18: Controls light/dark styling on mobile
}
```

**Theme Prop (Added 2025-11-18):**
The `theme` prop controls the card's appearance on mobile viewports:
- `'light'` (default): White background with dark text for homepage
- `'dark'`: Dark background with white text for portfolio page

On desktop, all cards use the overlay style regardless of theme. The theme only affects the mobile/tablet stacked layout.

### Styling Details

**Dimensions:**
- Desktop max-height: 600px (added 2025-11-18)
- Aspect ratio: 16:9 (or as designed in Figma)
- Border radius: 24px (mobile), 31px/40px (desktop info box)
- Image container: overflow hidden for zoom effect
- Info box padding: 32px 48px on desktop (updated 2025-11-18)

**Hover Effect:**
- Image transform: scale(1.05)
- Transition: 0.4s ease-out
- Gradient overlay intensity increase (Style 05)

**Typography:**
- Title: Heading/05 (32px/40px)
- Tags: Badge component (14px)
- Button: Small size with arrow

**Colors:**
- Text: White on overlay (Style 05), Black on card (Style 06)
- Gradient: Linear gradient from transparent to rgba(0,0,0,0.7)

## Implementation Plan

### Phase 1: Component Structure
1. Create `src/components/cards/PortfolioCard/PortfolioCard.tsx`
2. Create `src/components/cards/PortfolioCard/PortfolioCard.module.css`
3. Define TypeScript interface
4. Import Badge and Button components
5. Import Next.js Image component
6. Create `index.ts` for exports

### Phase 2: Style 05 Implementation
1. Create card wrapper with link
2. Add image container with overflow hidden
3. Add Next.js Image with fill layout
4. Add gradient overlay
5. Create content overlay section
6. Add title with proper typography
7. Add tags using Badge component
8. Add Button with arrow icon
9. Implement hover effect CSS

### Phase 3: Style 06 Implementation
1. Create stacked layout variant
2. Separate image section from content section
3. Remove gradient overlay
4. Adjust text color to black
5. Adjust spacing for stacked layout
6. Implement hover effect for image only

### Phase 4: Responsive Behavior
1. Add CSS media queries for variant switching
2. Style 05 for desktop (> 768px)
3. Style 06 for mobile (< 768px)
4. Test smooth transition between variants

### Phase 5: Image Optimization
1. Add proper Next.js Image props (width, height, alt)
2. Implement image fallback for loading errors
3. Add loading="lazy" for performance
4. Test image optimization in production build

## Alternatives Considered

### Alternative 1: Single Responsive Layout
**Rejected because:**
- Figma specifies two distinct layouts
- User experience better with different treatments
- Style 05 overlay works well for desktop, Style 06 better for mobile

### Alternative 2: Background Image (CSS)
**Rejected because:**
- Next.js Image provides optimization
- Better lazy loading support
- Automatic responsive image sizing
- Better performance

### Alternative 3: Separate Components for Each Style
**Rejected because:**
- Code duplication
- Harder to maintain
- Single component with variants more flexible

## Success Metrics

### Functionality
- ✅ Card displays image, title, tags, and button
- ✅ Entire card is clickable
- ✅ Button is clickable (same URL as card)
- ✅ External links open in new tab with proper rel
- ✅ Hover effect works smoothly
- ✅ Tags render correctly using Badge component

### Responsive Design
- ✅ Style 05 displays on desktop/tablet
- ✅ Style 06 displays on mobile
- ✅ Smooth transition between variants at breakpoint
- ✅ All content readable at all sizes

### Performance
- ✅ Images lazy loaded
- ✅ Next.js Image optimization working
- ✅ No layout shift during image load
- ✅ Smooth hover animation (60fps)

### Code Quality
- ✅ TypeScript types complete
- ✅ Component reusable with props
- ✅ CSS Modules scope styles
- ✅ No hardcoded values

### Visual Accuracy
- ✅ Matches Figma Style 05 design
- ✅ Matches Figma Style 06 design
- ✅ Hover effect matches annotation
- ✅ Spacing and typography accurate

## Implementation Details

**Files Created:**
- `src/components/cards/PortfolioCard/PortfolioCard.tsx` - 85 lines
- `src/components/cards/PortfolioCard/PortfolioCard.module.css` - 178 lines
- `src/components/cards/PortfolioCard/index.ts` - 1 line

**Dependencies:**
- Badge component (from spec 002)
- Button component (from spec 002)
- Next.js Image
- Design tokens

**Usage Example:**
```tsx
// Homepage - light theme (default)
<PortfolioCard
  title="Building a high-performing Product & Marketing design org"
  tags={['2025', 'Head of Design / Design Director']}
  imageUrl="/images/portfolio-1.jpg"
  href="https://pitch.com/v/example"
  variant="style05"
/>

// Portfolio page - dark theme
<PortfolioCard
  title="Building a high-performing Product & Marketing design org"
  tags={['2025', 'Head of Design / Design Director']}
  imageUrl="/images/portfolio-1.jpg"
  href="https://pitch.com/v/example"
  variant="style05"
  theme="dark"
/>
```

## Validation

**Visual Testing:**
- ✅ Hover effect smooth on all browsers
- ✅ Images load properly
- ✅ Text readable over images
- ✅ Responsive switching works at breakpoint

**Interaction Testing:**
- ✅ Click anywhere on card navigates
- ✅ Click button navigates
- ✅ External links work
- ✅ Keyboard navigation works (Tab, Enter)

**Browser Testing:**
- ✅ Chrome, Firefox, Safari
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [002-base-ui-components.md](002-base-ui-components.md) - Uses Badge and Button
- [007-homepage.md](007-homepage.md) - Displays 3 cards
- [008-portfolio-page.md](008-portfolio-page.md) - Displays 7+ cards
- [009-responsive-design.md](009-responsive-design.md) - Responsive variants

## Future Enhancements

- Add skeleton loading state
- Add image blur placeholder
- Add animation on scroll reveal
- Add like/save functionality
- Add category filtering
- Add view count or engagement metrics
