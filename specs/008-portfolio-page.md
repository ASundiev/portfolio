# Spec 008: Portfolio Page Implementation

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/app/portfolio/page.tsx](../src/app/portfolio/page.tsx)

## Problem Statement

Visitors who want to see all case studies need a dedicated portfolio page. The "All Case Studies" button on the homepage should lead to a comprehensive view of all portfolio work. The page needs a dark theme to differentiate it from the homepage and create visual variety.

## Motivation

- Provide dedicated space for all portfolio case studies
- Create visual distinction with dark theme background
- Allow visitors to browse all work systematically
- Support external links to detailed case study presentations
- Maintain consistent navigation and footer

## Proposed Solution

Create a focused Portfolio page with:
- Same NavBar as homepage (with optional dark styling)
- Dark background section (#282828) for case studies
- SectionHeader "Case studies" with white text
- Grid of 7+ PortfolioCard components (style06 variant)
- Same Footer as homepage
- External links to Pitch.com presentations

## Detailed Design

### Page Layout

```
┌─────────────────────────────────────────┐
│ [NavBar]                                │ ← Sticky
├─────────────────────────────────────────┤
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← Dark background
│ ░░                                   ░░ │
│ ░░      Case studies                 ░░ │
│ ░░                                   ░░ │
│ ░░  [Card 1]  [Card 2]              ░░ │
│ ░░  [Card 3]  [Card 4]              ░░ │
│ ░░  [Card 5]  [Card 6]              ░░ │
│ ░░  [Card 7]                        ░░ │
│ ░░                                   ░░ │
└─────────────────────────────────────────┘
│ [Footer]                                │
└─────────────────────────────────────────┘
```

### Dark Theme Section

**Background:** Black/700 (#282828)
**Text:** White (#FFFFFF)

**Features:**
- Large vertical padding for breathing room
- SectionHeader with white text via CSS class
- Cards use style06 variant (stacked layout)
- Responsive grid: 2 columns on desktop, 1 on mobile

### Portfolio Cards

**All 7 Cards:**
1. Supporting strategic goals with design system (2021-2023) - with link
2. Defining design direction in rapid sprint (2021) - with link
3. Custom Reporting at Intercom (2020) - with link
4. First online course on design systems in Russia (2021) - with link
5. Building high-performing org (2025)
6. 2x productivity increase (2023-2024) - with link
7. Consistent design process (2023) - with link

**Card Variant:**
- All cards use `variant="style06"` (stacked: image + content)
- Consistent with mobile layout from homepage
- Works well on dark background

### Navigation

**NavBar:**
- Same NavBar component as homepage
- Optional: Dark theme styling class
- Sticky positioning maintained

**Footer:**
- Same Footer component as homepage
- Orange background (#FEA75F) creates visual break from dark section

## Implementation Plan

### Phase 1: Page Setup
1. Create `src/app/portfolio/page.tsx`
2. Create `src/app/portfolio/page.module.css`
3. Import NavBar, Footer, SectionHeader, PortfolioCard
4. Set up basic page structure

### Phase 2: NavBar Integration
1. Import and render NavBar at top
2. Add optional className for styling
3. Ensure sticky positioning works

### Phase 3: Portfolio Grid Section
1. Create section with dark background (#282828)
2. Add SectionHeader with "Case studies" title
3. Add className for white text styling
4. Create 2-column grid container
5. Add proper padding and spacing

### Phase 4: Portfolio Cards
1. Add all 7 PortfolioCard components
2. Set variant="style06" for all cards
3. Add titles, tags, images, and links
4. Ensure external links have proper attributes

### Phase 5: Footer Integration
1. Import and render Footer at bottom
2. Ensure proper spacing from portfolio section

### Phase 6: Responsive Styling
1. Test 2-column grid on desktop
2. Test 1-column on mobile
3. Adjust card spacing
4. Test all breakpoints

### Phase 7: Dark Theme Styling
1. Create CSS class for dark theme SectionHeader
2. Apply white text color
3. Test contrast and readability
4. Adjust any other elements for dark background

## Alternatives Considered

### Alternative 1: Light Background Like Homepage
**Rejected because:**
- Less visual distinction between pages
- Figma design specifies dark background
- Dark theme creates more sophisticated look
- Better for highlighting card images

### Alternative 2: Style 05 Cards on Portfolio Page
**Rejected because:**
- Style 05 designed for light backgrounds
- Style 06 more consistent across responsive sizes
- Style 06 better for grid of many items

### Alternative 3: Filter/Search Functionality
**Deferred because:**
- Only 7 cards, not overwhelming
- Can be added in future enhancement
- Focus on clean, simple presentation first

## Success Metrics

### Functionality
- ✅ Page loads correctly at /portfolio route
- ✅ NavBar displays and sticky works
- ✅ All 7 cards render correctly
- ✅ External links open in new tabs
- ✅ Footer displays correctly

### Visual Accuracy
- ✅ Dark background matches Figma (#282828)
- ✅ SectionHeader text is white
- ✅ Cards display in 2-column grid
- ✅ Spacing matches design tokens
- ✅ All images load correctly

### Responsive Design
- ✅ Desktop (> 1024px): 2-column grid
- ✅ Tablet (768-1024px): 2-column grid
- ✅ Mobile (< 768px): 1-column stack
- ✅ Cards scale properly

### Accessibility
- ✅ Sufficient contrast on dark background
- ✅ White text readable
- ✅ All interactive elements accessible
- ✅ Semantic HTML structure

### Performance
- ✅ Static generation working
- ✅ Images optimized
- ✅ Fast page load

## Implementation Details

**Files Created:**
- `src/app/portfolio/page.tsx` - 77 lines
- `src/app/portfolio/page.module.css` - 89 lines

**Components Used:**
- NavBar (from spec 003)
- Footer (from spec 003)
- SectionHeader (from spec 002)
- PortfolioCard (from spec 004) - 7 instances

**Routing:**
- URL: `/portfolio`
- Navigation: Linked from homepage "All Case Studies" button
- Navigation: Linked from NavBar "Work" menu item

**Case Study Links:**
All external links point to Pitch.com presentations:
- Design System: pitch.com/v/design-system-k92yxp
- Design Direction: pitch.com/v/design-direction-s7mkjy
- Custom Reporting: pitch.com/v/custom-reporting-4qmvuw
- Online Course: contented.ru/edu/design-systems
- Marketing Design: pitch.com/v/marketing-design-mwtw93
- Designer Enablement: pitch.com/v/designer-enablement-dc69ey

**CSS for Dark Theme:**
```css
.portfolio__header {
  color: var(--color-white);
}

/* Or in globals.css */
.sectionHeader--dark {
  color: var(--color-white);
}
```

## Validation

**Visual Testing:**
- ✅ Dark background displays correctly
- ✅ White text readable on dark background
- ✅ Cards display in grid properly
- ✅ Images load and scale correctly

**Navigation Testing:**
- ✅ Navigate from homepage to /portfolio
- ✅ Click "Work" in NavBar goes to /portfolio
- ✅ Click cards opens external links
- ✅ Footer links work

**Responsive Testing:**
- ✅ 2-column grid on desktop and tablet
- ✅ 1-column stack on mobile
- ✅ NavBar hamburger menu on mobile

**Build Testing:**
```bash
npm run build
# ✅ Static generation successful
# ✅ /portfolio page generated
```

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [002-base-ui-components.md](002-base-ui-components.md) - Uses SectionHeader
- [003-navigation-layout.md](003-navigation-layout.md) - Uses NavBar, Footer
- [004-portfolio-card.md](004-portfolio-card.md) - Uses 7 cards
- [007-homepage.md](007-homepage.md) - Links to this page
- [009-responsive-design.md](009-responsive-design.md) - Responsive grid

## Future Enhancements

- Add filter by year or role
- Add filter by tag (Design System, Product Design, etc.)
- Add search functionality
- Add case study modal/lightbox preview
- Add pagination if more case studies added
- Add back to top button
- Add breadcrumb navigation
- Add animations on scroll
- Add case study view count or engagement metrics
