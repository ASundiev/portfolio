# Spec 006: Article Card Component

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/components/cards/ArticleCard/](../src/components/cards/ArticleCard/)

## Problem Statement

The Articles & Talks section needs to display articles, talks, and media appearances in a grid format. Each card should show an image, title, and category tag, with the ability to link to external content (YouTube videos, Medium articles, etc.).

## Motivation

- Display articles and talks in a visually appealing grid
- Provide clear categorization with tags (Design System, Design Process, Career)
- Support external links to content platforms
- Implement engaging hover effects
- Maintain consistent card styling with other components
- Work in responsive grid layout (2x3 on desktop, responsive on mobile)

## Proposed Solution

Create an ArticleCard component that:
- Displays article/talk image
- Shows title with proper typography
- Displays category tag as Badge
- Links to external URL
- Implements hover effect with image scaling
- Works in CSS Grid layout

## Detailed Design

### Component Layout

```
┌─────────────────────────┐
│                         │
│    [Article Image]      │
│                         │
├─────────────────────────┤
│ [Category Badge]        │
│                         │
│ Article Title Here      │
│                         │
└─────────────────────────┘
```

### Features

**Visual Elements:**
- Image: Full-width at top of card
- Badge: Category tag (Design System, Design Process, Career)
- Title: Multi-line title with line clamping
- Card container: Border radius, shadow on hover

**Interactive:**
- Entire card is clickable link
- Hover effect: Image scales up (1.05x)
- Hover effect: Card shadow increases
- External links open in new tab

**Responsive:**
- Desktop: 2 columns × 3 rows grid
- Tablet: 2 columns, auto rows
- Mobile: 1 column, auto rows

### API

```typescript
interface ArticleCardProps {
  title: string;
  imageUrl: string;
  tag: string;           // Category: "Design System", "Design Process", "Career"
  href?: string;         // Link to article/video
  className?: string;
}
```

### Styling Details

**Card Container:**
- Border radius: 24px
- Background: White
- Border: 1px solid #E5E5E5 (optional)
- Transition: box-shadow 0.3s ease

**Image:**
- Aspect ratio: 16:9
- Border radius: 24px 24px 0 0
- Overflow: hidden
- Hover: transform scale(1.05)
- Transition: 0.4s ease-out

**Typography:**
- Title: Heading/06 (24px/32px)
- Line clamp: 3 lines max
- Color: Black/700

**Spacing:**
- Image to content: 24px padding
- Badge to title: 12px gap
- Title padding: 24px horizontal
- Desktop content padding: 48px (all sides)
- Mobile/tablet content padding: 24px (all sides) - updated 2025-11-18

**Hover Effect:**
- Image: transform: scale(1.05)
- Card: box-shadow increases
- Smooth transition

## Implementation Plan

### Phase 1: Component Structure
1. Create `src/components/cards/ArticleCard/ArticleCard.tsx`
2. Create `src/components/cards/ArticleCard/ArticleCard.module.css`
3. Define TypeScript interface
4. Import Badge component
5. Import Next.js Image
6. Create `index.ts` for exports

### Phase 2: Card Layout
1. Create card wrapper (anchor element)
2. Add image container with overflow hidden
3. Add Next.js Image component
4. Create content section
5. Add Badge for category tag
6. Add title with proper typography
7. Style spacing and layout

### Phase 3: Hover Effects
1. Add image scale transform on card hover
2. Add card shadow on hover
3. Set transition properties
4. Test smooth animation

### Phase 4: Responsive Grid Integration
1. Create grid layout in parent section
2. Test 2-column layout on desktop
3. Test responsive breakpoints
4. Adjust card sizing for grid

### Phase 5: Image Optimization
1. Add Next.js Image optimization
2. Set proper width and height
3. Add loading="lazy"
4. Add alt text from title

## Alternatives Considered

### Alternative 1: Include Description Text
**Rejected because:**
- Figma design doesn't include description
- Keep cards simple and scannable
- Focus on visual and title

### Alternative 2: Fixed Height Cards
**Rejected because:**
- Titles vary in length
- Fixed height causes awkward spacing
- Auto height more flexible

### Alternative 3: Icon Instead of Badge
**Rejected because:**
- Badge more prominent and readable
- Consistent with PortfolioCard design
- Better visual hierarchy

## Success Metrics

### Functionality
- ✅ Card displays image, title, and tag
- ✅ Entire card is clickable
- ✅ External links open in new tab
- ✅ Hover effects work smoothly
- ✅ Badge displays category correctly

### Responsive Design
- ✅ 2-column grid on desktop (> 1024px)
- ✅ 2-column grid on tablet (768-1024px)
- ✅ 1-column on mobile (< 768px)
- ✅ Cards scale properly in grid

### Performance
- ✅ Images lazy loaded
- ✅ Next.js Image optimization working
- ✅ Smooth hover animation (60fps)
- ✅ No layout shift

### Visual Quality
- ✅ Images load without distortion
- ✅ Typography hierarchy clear
- ✅ Spacing consistent
- ✅ Matches Figma design

## Implementation Details

**Files Created:**
- `src/components/cards/ArticleCard/ArticleCard.tsx` - 52 lines
- `src/components/cards/ArticleCard/ArticleCard.module.css` - 98 lines
- `src/components/cards/ArticleCard/index.ts` - 1 line

**Dependencies:**
- Badge component (from spec 002)
- Next.js Image
- Design tokens

**Usage Example:**
```tsx
<ArticleCard
  title="Design Systems and the Volatile Economy"
  imageUrl="/images/article-2.jpg"
  tag="Design System"
  href="https://youtu.be/example"
/>
```

**Grid Layout (Parent Section):**
```css
.articles__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}

@media (max-width: 768px) {
  .articles__grid {
    grid-template-columns: 1fr;
  }
}
```

## Validation

**Visual Testing:**
- ✅ Cards render in grid correctly
- ✅ Images load and display properly
- ✅ Hover effects smooth on all browsers
- ✅ Text readable and properly sized

**Interaction Testing:**
- ✅ Click card navigates to link
- ✅ External links open in new tab
- ✅ Keyboard navigation works (Tab, Enter)

**Responsive Testing:**
- ✅ Desktop 2-column grid works
- ✅ Tablet 2-column grid works
- ✅ Mobile 1-column stacking works

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [002-base-ui-components.md](002-base-ui-components.md) - Uses Badge
- [007-homepage.md](007-homepage.md) - Used in Articles section (6 cards)
- [009-responsive-design.md](009-responsive-design.md) - Responsive grid

## Future Enhancements

- Add read time estimate
- Add published date
- Add author information
- Add view count
- Add bookmark/save functionality
- Add filter by category
- Add "Load more" pagination
- Add animation on scroll reveal
