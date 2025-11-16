# Spec 003: Navigation & Layout Components

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/components/layout/](../src/components/layout/)

## Problem Statement

The portfolio needs consistent navigation and footer across all pages. Users need to navigate between pages, access social links, and contact information. Building these separately on each page would lead to maintenance issues and inconsistent behavior.

## Motivation

- Provide consistent navigation experience across all pages
- Enable easy access to social profiles and CV download
- Implement responsive mobile menu for smaller screens
- Create reusable layout components shared across pages
- Follow Figma navigation specifications exactly

## Proposed Solution

Create two essential layout components:

1. **NavBar** - Sticky navigation with social badges and menu links
2. **Footer** - Orange-themed footer with email and navigation

Both components will be reusable across Homepage and Portfolio pages with support for responsive behavior.

## Detailed Design

### 1. NavBar Component

**Desktop Layout:**
```
[LinkedIn Badge] [Download CV Badge]        [Home] [Work] [Experience] [Articles & talks]
```

**Mobile Layout:**
```
[LinkedIn Badge] [Download CV Badge]                                    [☰ Menu Icon]

// When hamburger clicked:
[Home]
[Work]
[Experience]
[Articles & talks]
```

**Features:**
- Sticky positioning (remains at top during scroll)
- Social badges using Badge component
- Desktop: Full horizontal menu
- Mobile: Hamburger menu with slide-down
- Smooth transitions for menu toggle
- Anchor link support for same-page navigation (#experience, #articles)

**API:**
```typescript
interface NavBarProps {
  className?: string;
}
```

**Behavior:**
- State management for mobile menu (open/closed)
- Icons: List (menu open), X (menu close) from Phosphor
- Click outside closes mobile menu (optional enhancement)
- Accessible with aria-label and aria-expanded

**Styling:**
- Transparent background (inherits from parent section)
- Sticky: `position: sticky; top: 0; z-index: 100`
- Responsive breakpoint at 768px
- Smooth height transition for mobile menu

### 2. Footer Component

**Layout:**
```
┌─────────────────────────────────────────┐
│  inbox@asundiev.com                     │
│  [Home] [Work] [Experience] [Articles]  │
└─────────────────────────────────────────┘
```

**Features:**
- Orange background (#FEA75F)
- Email address display (clickable mailto: link)
- Navigation links matching NavBar
- Responsive layout (stacked on mobile)
- Reusable across all pages

**API:**
```typescript
interface FooterProps {
  className?: string;
}
```

**Styling:**
- Background: `var(--color-orange-300)`
- Padding: Large vertical padding for visual breathing room
- Email: Prominent display with hover state
- Links: Horizontal list, stacked on mobile

## Implementation Plan

### Phase 1: NavBar Component
1. Create `src/components/layout/NavBar/NavBar.tsx`
2. Create `src/components/layout/NavBar/NavBar.module.css`
3. Import Badge component for social badges
4. Add useState for mobile menu toggle
5. Implement desktop menu (always visible)
6. Implement mobile hamburger toggle
7. Add List/X icons from Phosphor
8. Style sticky positioning
9. Add responsive breakpoints
10. Test keyboard navigation
11. Create `index.ts` for exports

### Phase 2: Footer Component
1. Create `src/components/layout/Footer/Footer.tsx`
2. Create `src/components/layout/Footer/Footer.module.css`
3. Add email with mailto: link
4. Add navigation links array
5. Style orange background
6. Implement responsive layout
7. Add hover states
8. Create `index.ts` for exports

### Phase 3: Integration
1. Import NavBar in Homepage hero section
2. Import NavBar in Portfolio page
3. Import Footer at bottom of both pages
4. Test navigation between pages
5. Test anchor links (#experience, #articles)
6. Verify sticky behavior on scroll

## Alternatives Considered

### Alternative 1: Next.js App Router Layout Component
**Partially Adopted:**
- Could use `layout.tsx` for persistent navigation
- Decided to keep NavBar in page components for flexibility
- Different pages might need different NavBar styling (dark theme on Portfolio)

### Alternative 2: Headless UI Library (Radix, Headless UI)
**Rejected because:**
- Simple menu doesn't require library complexity
- useState sufficient for toggle behavior
- Avoid additional dependencies

### Alternative 3: CSS-Only Hamburger Menu
**Rejected because:**
- Need React state for icon switching (List ↔ X)
- Better control with JavaScript for animations
- More maintainable with explicit state management

## Success Metrics

### Functionality
- ✅ NavBar sticky positioning works during scroll
- ✅ Mobile menu toggles open/closed
- ✅ All navigation links work correctly
- ✅ Anchor links scroll to correct sections
- ✅ External links open in new tabs
- ✅ Footer email mailto: link works
- ✅ Components reusable on multiple pages

### Accessibility
- ✅ Hamburger button has aria-label
- ✅ Mobile menu has aria-expanded state
- ✅ Keyboard navigation works (Tab, Enter)
- ✅ Focus states visible on all interactive elements
- ✅ Semantic HTML: `<nav>`, `<a>`, `<button>`

### Responsive Design
- ✅ Desktop menu visible > 768px
- ✅ Mobile menu visible < 768px
- ✅ Hamburger icon visible only on mobile
- ✅ Footer stacks properly on mobile
- ✅ All text readable at all breakpoints

### Code Quality
- ✅ TypeScript types for all props
- ✅ Clean component structure
- ✅ Reusable across pages
- ✅ No hardcoded values (uses design tokens)

## Implementation Details

**Files Created:**
- `src/components/layout/NavBar/NavBar.tsx` - 100 lines
- `src/components/layout/NavBar/NavBar.module.css` - 156 lines
- `src/components/layout/NavBar/index.ts` - 1 line
- `src/components/layout/Footer/Footer.tsx` - 45 lines
- `src/components/layout/Footer/Footer.module.css` - 98 lines
- `src/components/layout/Footer/index.ts` - 1 line

**Usage Example:**
```tsx
// In page
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

export default function Page() {
  return (
    <>
      <NavBar />
      {/* Page content */}
      <Footer />
    </>
  );
}
```

**Navigation Links Configuration:**
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#articles', label: 'Articles & talks' },
];
```

## Validation

**Manual Testing:**
- ✅ Click hamburger menu on mobile - opens/closes
- ✅ Click navigation links - navigates correctly
- ✅ Click anchor links - scrolls to section
- ✅ Scroll page - NavBar stays sticky
- ✅ Click social badges - opens external links
- ✅ Click footer email - opens mail client

**Responsive Testing:**
- ✅ Desktop (> 1024px) - Full menu visible
- ✅ Tablet (768-1024px) - Full menu visible
- ✅ Mobile (< 768px) - Hamburger menu visible

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [002-base-ui-components.md](002-base-ui-components.md) - Uses Badge component
- [007-homepage.md](007-homepage.md) - Integrates NavBar and Footer
- [008-portfolio-page.md](008-portfolio-page.md) - Integrates NavBar and Footer
- [009-responsive-design.md](009-responsive-design.md) - Responsive behavior

## Future Enhancements

- Add active link highlighting based on current page
- Add smooth scroll behavior for anchor links
- Add click-outside-to-close for mobile menu
- Add scroll progress indicator
- Add dark theme variant for NavBar (for Portfolio page)
- Add animation for mobile menu slide-in/out
