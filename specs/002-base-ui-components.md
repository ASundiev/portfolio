# Spec 002: Base UI Components

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/components/ui/](../src/components/ui/)

## Problem Statement

The portfolio needs foundational UI components (buttons, badges, section headers) that will be reused across multiple pages and sections. Building these ad-hoc would lead to inconsistent styling, duplicated code, and difficult maintenance.

## Motivation

- Establish reusable building blocks for the entire application
- Ensure consistent interactive elements across all pages
- Reduce development time for higher-level features
- Maintain design system consistency
- Provide accessible, semantic components

## Proposed Solution

Build three foundational components that serve as the basis for all pages:

1. **Button Component** - Primary interactive element with multiple variants
2. **Badge Component** - Pill-shaped labels for tags, dates, and roles
3. **SectionHeader Component** - Consistent section headers with flexible layouts

All components will use design tokens and CSS Modules for styling.

## Detailed Design

### 1. Button Component

**Variants:**
- `outline` - Border with transparent background
- `filled` - Solid background color
- `icon-only` - Circular button with only an icon

**Sizes:**
- `large` - 20px font size
- `medium` - 18px font size
- `small` - 16px font size
- `xSmall` - 14px font size

**Features:**
- Optional arrow icon (ArrowUpRight from Phosphor)
- Support for both `<button>` and `<a>` elements
- Automatic target="_blank" for external links
- Hover states with smooth transitions
- Accessible semantics

**API:**
```typescript
interface ButtonProps {
  variant?: 'outline' | 'filled' | 'icon-only';
  size?: 'large' | 'medium' | 'small' | 'xSmall';
  children?: React.ReactNode;
  showArrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  className?: string;
}
```

**Styling:**
- Border radius: 100px (pill shape)
- Padding: Varies by size
- Transition: 0.2s ease for all interactive states
- Colors from design tokens

### 2. Badge Component

**Variants:**
- `light` - Light background for light sections
- `dark` - Dark background for dark sections

**Features:**
- Pill-shaped container
- Text or link content support
- Responsive padding
- Hover states for interactive badges

**API:**
```typescript
interface BadgeProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
}
```

**Styling:**
- Border radius: 100px (full pill)
- Border: 1px solid based on variant
- Padding: 8px 16px
- Font size: 14px

### 3. SectionHeader Component

**Props:**
- `tagline` - Small text above title (optional)
- `title` - Main heading text (required)
- `description` - Paragraph below title (optional)
- `alignment` - 'center' or 'left'
- `size` - 'big' or 'medium'

**Features:**
- Flexible composition (all props optional except title)
- Responsive typography scaling
- Alignment variants for different sections
- Consistent spacing using design tokens

**API:**
```typescript
interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  alignment?: 'center' | 'left';
  size?: 'big' | 'medium';
  className?: string;
}
```

**Styling:**
- Uses typography tokens (Heading/02 or Heading/05)
- Spacing from spacing tokens
- Text alignment based on prop
- Responsive font sizing

## Implementation Plan

### Phase 1: Button Component
1. Create `src/components/ui/Button/Button.tsx`
2. Create `src/components/ui/Button/Button.module.css`
3. Implement all variants and sizes
4. Add arrow icon support with Phosphor
5. Handle href vs onClick logic
6. Add hover and focus states
7. Create `index.ts` for clean exports
8. Test accessibility (keyboard navigation, ARIA)

### Phase 2: Badge Component
1. Create `src/components/ui/Badge/Badge.tsx`
2. Create `src/components/ui/Badge/Badge.module.css`
3. Implement light and dark variants
4. Add proper padding and border styles
5. Support both text and link children
6. Create `index.ts` for exports

### Phase 3: SectionHeader Component
1. Create `src/components/ui/SectionHeader/SectionHeader.tsx`
2. Create `src/components/ui/SectionHeader/SectionHeader.module.css`
3. Implement alignment variants
4. Implement size variants
5. Add responsive styles
6. Create `index.ts` for exports

## Alternatives Considered

### Alternative 1: Use Third-Party UI Library (Material-UI, Chakra UI)
**Rejected because:**
- Need exact Figma design implementation
- Third-party libraries add unnecessary bundle size
- Customization overhead would negate benefits
- Custom design system doesn't align with library patterns

### Alternative 2: Single Component File (No CSS Modules)
**Rejected because:**
- CSS Modules provide better style encapsulation
- Avoid global CSS conflicts
- Better code organization with separate style files

### Alternative 3: Styled Components
**Rejected because:**
- Runtime CSS-in-JS adds overhead
- CSS Modules sufficient for scoping
- Better performance with static CSS

## Success Metrics

### Functionality
- ✅ Button renders correctly for all variants and sizes
- ✅ Button works as both `<button>` and `<a>` element
- ✅ Arrow icon displays correctly with proper sizing
- ✅ Badge renders with correct variant styling
- ✅ SectionHeader supports all layout combinations
- ✅ All components accept className for extension

### Accessibility
- ✅ Buttons have proper semantic HTML
- ✅ External links have `rel="noopener noreferrer"`
- ✅ Keyboard navigation works for all interactive elements
- ✅ Focus states visible and clear
- ✅ Proper heading hierarchy in SectionHeader

### Code Quality
- ✅ TypeScript types for all props
- ✅ No hardcoded colors or spacing
- ✅ Clean, readable component code
- ✅ CSS Modules scope styles properly

### Reusability
- ✅ Button used in Hero, NavBar, Footer, sections
- ✅ Badge used in NavBar, PortfolioCard, ArticleCard
- ✅ SectionHeader used in 4+ sections across pages

### Performance
- ✅ Components render efficiently
- ✅ CSS bundle size minimal
- ✅ No unnecessary re-renders

## Implementation Details

**Files Created:**
- `src/components/ui/Button/Button.tsx` - 70 lines
- `src/components/ui/Button/Button.module.css` - 89 lines
- `src/components/ui/Button/index.ts` - 1 line
- `src/components/ui/Badge/Badge.tsx` - 26 lines
- `src/components/ui/Badge/Badge.module.css` - 45 lines
- `src/components/ui/Badge/index.ts` - 1 line
- `src/components/ui/SectionHeader/SectionHeader.tsx` - 49 lines
- `src/components/ui/SectionHeader/SectionHeader.module.css` - 87 lines
- `src/components/ui/SectionHeader/index.ts` - 1 line

**Usage Example:**
```tsx
// Button with arrow
<Button variant="outline" size="large" showArrow href="/portfolio">
  All Case Studies
</Button>

// Badge
<Badge variant="dark">2023-2024</Badge>

// SectionHeader
<SectionHeader
  title="Case studies"
  alignment="center"
  size="big"
/>
```

## Validation

**Visual Testing:**
- ✅ All variants render correctly in Storybook/browser
- ✅ Hover states work smoothly
- ✅ Responsive scaling works at all breakpoints

**TypeScript Validation:**
```bash
npm run build
# ✅ No type errors
```

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Provides design tokens
- [003-navigation-layout.md](003-navigation-layout.md) - Uses Button and Badge
- [004-portfolio-card.md](004-portfolio-card.md) - Uses Button and Badge
- [007-homepage.md](007-homepage.md) - Uses all three components

## Future Enhancements

- Add loading state to Button component
- Add disabled state styling
- Add Badge size variants if needed
- Add SectionHeader badge integration
- Consider animation variants for SectionHeader
