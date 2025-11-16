# Spec 007: Homepage Implementation

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/app/page.tsx](../src/app/page.tsx)

## Problem Statement

The portfolio needs a compelling homepage that introduces Andrey Sundiev, showcases his value proposition, highlights selected case studies, displays professional experience, and features articles and talks. All sections need to work together cohesively while maintaining visual hierarchy and engagement.

## Motivation

- Create strong first impression for portfolio visitors
- Communicate value proposition clearly (Why Me section)
- Showcase best work upfront (Portfolio Preview)
- Provide detailed professional background (Experience)
- Display thought leadership (Articles & Talks)
- Guide visitors to deeper content (case studies, CV)
- Implement all sections per Figma design specifications

## Proposed Solution

Build a comprehensive homepage with 6 distinct sections:

1. **Hero Section** - Introduction with name, title, profile image, and CTAs
2. **Why Me Section** - Value proposition with 5 key strengths
3. **Portfolio Preview** - Featured case studies with link to full portfolio
4. **Experience Section** - Expandable job history
5. **Articles & Talks** - Grid of content
6. **Footer** - Contact and navigation

## Detailed Design

### 1. Hero Section

**Background:** Brand color (#FFF0E3)

**Layout:**
```
┌─────────────────────────────────────────┐
│ [NavBar - Sticky]                       │
│                                         │
│           Andrey  [👤]  Sundiev         │
│                                         │
│           Design leader                 │
│                                         │
│    I've been leading teams and driving  │
│    change at organisations of various   │
│    scale for over 12 years...           │
│                                         │
│    [LinkedIn]  [Download CV →]          │
└─────────────────────────────────────────┘
```

**Elements:**
- NavBar component (sticky)
- Name split with profile image between "Andrey" and "Sundiev"
- Profile image: 80px × 80px, circular, border
- Heading: "Design leader" (Display/01 typography - 96px/120px)
- Description paragraph (Text/Large)
- Two outline buttons with arrow icons

**Spacing:**
- Section padding: 104px vertical, 136px horizontal
- Name to heading: 24px
- Heading to description: 32px
- Description to buttons: 40px

### 2. Why Me Section

**Background:** Orange (#FEA75F)

**Layout:**
```
┌─────────────────────────────────────────┐
│ Why me                                  │
│                                         │
│ • Spearheading the AI-first            │
│   transformation in Product & Design    │
│ ─────────────────────────────────────  │
│ • Player-coach with a diverse skillset │
│ ─────────────────────────────────────  │
│ • Nurturing high-performance design    │
│   teams for real impact                │
│ ─────────────────────────────────────  │
│ • Strategic thinker, focused on        │
│   tangible outcomes                    │
│ ─────────────────────────────────────  │
│ • Experienced in scaling high-impact   │
│   products                             │
└─────────────────────────────────────────┘
```

**Elements:**
- SectionHeader "Why me" (left aligned, big size)
- List of 5 items with horizontal dividers
- Each item: Heading/07 typography (18px/24px)

**Styling:**
- Dividers: 1px solid, darker orange or black/900
- Item padding: 24px vertical
- Left aligned throughout

### 3. Portfolio Preview Section

**Background:** White

**Layout:**
```
┌─────────────────────────────────────────┐
│          Case studies                   │
│                                         │
│  [Card 1]  [Card 2]  [Card 3]          │
│                                         │
│        [All Case Studies →]             │
└─────────────────────────────────────────┘
```

**Elements:**
- SectionHeader "Case studies" (center aligned, big size)
- 3 PortfolioCard components (style05 variant)
- Button "All Case Studies" with arrow, links to /portfolio

**Cards:**
1. Building high-performing org (2025)
2. 2x productivity increase (2023-2024) - with link
3. Consistent design process (2023) - with link

**Spacing:**
- Cards: 3-column grid, 48px gap
- Section to button: 56px

### 4. Experience Section

**Background:** White

**Layout:**
```
┌─────────────────────────────────────────┐
│ [☆ Icon]  E X P E R I E N C E          │
│                                         │
│ [Expandable Experience Items]          │
│                                         │
│    [Download full CV]                   │
└─────────────────────────────────────────┘
```

**Elements:**
- Custom header with ExperienceIcon and spaced text
- 4 ExperienceItem components:
  - Design Director @ Beamery (2021-Current) - defaultOpen with achievements
  - Creative Director @ Walmart (2019-2022)
  - Lead Designer @ Revolut (2017-2019)
  - Head of Design @ UI/UX (2015-2017)
- Filled button "Download full CV"

**Layout:**
- Two-column on desktop: Title left, Items right
- Single column on mobile: Stacked

### 5. Articles & Talks Section

**Background:** White

**Layout:**
```
┌─────────────────────────────────────────┐
│        Articles & talks                 │
│                                         │
│  [Article 1]    [Article 2]            │
│  [Article 3]    [Article 4]            │
│  [Article 5]    [Article 6]            │
└─────────────────────────────────────────┘
```

**Elements:**
- SectionHeader "Articles & talks" (center aligned, big size)
- 6 ArticleCard components in 2×3 grid
- Mix of YouTube videos and Medium articles

**Grid:**
- Desktop: 2 columns × 3 rows, 48px gap
- Mobile: 1 column

### 6. Footer Section

See [003-navigation-layout.md](003-navigation-layout.md) for Footer spec.

## Implementation Plan

### Phase 1: Page Structure
1. Create `src/app/page.tsx`
2. Create `src/app/page.module.css`
3. Import all required components
4. Set up section structure

### Phase 2: Hero Section
1. Add hero section with brand background
2. Import NavBar component
3. Create name layout with profile image
4. Add heading with Display/01 typography
5. Add description text
6. Add action buttons with links
7. Style responsive layout

### Phase 3: Why Me Section
1. Add section with orange background
2. Add SectionHeader component
3. Create list of 5 items
4. Add dividers between items
5. Style typography (Heading/07)

### Phase 4: Portfolio Preview Section
1. Add section with white background
2. Add SectionHeader centered
3. Create 3-column grid
4. Add 3 PortfolioCard components with data
5. Add "All Case Studies" button
6. Link button to /portfolio

### Phase 5: Experience Section
1. Add section with white background
2. Create custom header with icon
3. Add 4 ExperienceItem components
4. Set first item defaultOpen with achievements data
5. Add "Download full CV" button
6. Implement two-column layout
7. Add responsive single-column

### Phase 6: Articles Section
1. Add section with white background
2. Add SectionHeader centered
3. Create 2-column grid
4. Add 6 ArticleCard components with data
5. Add responsive single-column

### Phase 7: Footer
1. Import Footer component
2. Add at bottom of page

### Phase 8: Responsive Testing
1. Test all breakpoints (mobile, tablet, desktop)
2. Adjust spacing for mobile
3. Test scroll behavior (smooth, NavBar sticky)
4. Test all links and interactions

## Success Metrics

### Functionality
- ✅ All 6 sections render correctly
- ✅ NavBar sticky during scroll
- ✅ All buttons link correctly
- ✅ Profile image loads
- ✅ Portfolio cards display with images
- ✅ Experience items expand/collapse
- ✅ Article cards link externally
- ✅ Footer displays with links

### Visual Accuracy
- ✅ Hero section matches Figma (brand background, layout)
- ✅ Why Me section matches Figma (orange, dividers)
- ✅ Portfolio section matches Figma (3-column grid)
- ✅ Experience section matches Figma (two-column)
- ✅ Articles section matches Figma (2×3 grid)
- ✅ Typography matches design tokens
- ✅ Spacing matches design tokens

### Responsive Design
- ✅ Desktop (> 1024px): Full layouts
- ✅ Tablet (768-1024px): Adjusted grids
- ✅ Mobile (< 768px): Stacked layouts, hamburger menu
- ✅ All text readable at all sizes
- ✅ Images scale properly

### Accessibility
- ✅ Semantic HTML (section, nav, article)
- ✅ Heading hierarchy correct (h1, h2, h3)
- ✅ All images have alt text
- ✅ All interactive elements keyboard accessible
- ✅ Focus states visible

### Performance
- ✅ Images optimized with Next.js Image
- ✅ Static generation working
- ✅ Fast First Contentful Paint
- ✅ No layout shift

## Implementation Details

**Files Created:**
- `src/app/page.tsx` - 246 lines
- `src/app/page.module.css` - 412 lines

**Components Used:**
- NavBar (from spec 003)
- Footer (from spec 003)
- Button (from spec 002)
- SectionHeader (from spec 002)
- PortfolioCard (from spec 004)
- ExperienceItem (from spec 005)
- ArticleCard (from spec 006)
- ExperienceIcon (custom component)

**Data Configuration:**
- Profile image: `/public/images/profile.jpg`
- Portfolio images: `/public/images/portfolio-1-3.jpg`
- Article images: `/public/images/article-1-6.jpg`

**External Links:**
- LinkedIn: https://www.linkedin.com/in/asundiev
- CV: https://www.udrop.com/file/O1sr/Andrei-Sundiev_CV.pdf
- Portfolio case studies: Various Pitch.com presentations
- Articles: YouTube videos and Medium posts

## Validation

**Visual Testing:**
- ✅ All sections display correctly
- ✅ Colors match design tokens
- ✅ Typography matches specifications
- ✅ Spacing consistent throughout

**Interaction Testing:**
- ✅ NavBar links navigate correctly
- ✅ Hero buttons open external links
- ✅ Portfolio cards clickable
- ✅ Experience items expand/collapse
- ✅ Article cards link externally
- ✅ Footer links work

**Responsive Testing:**
- ✅ Desktop layout correct
- ✅ Tablet layout correct
- ✅ Mobile layout correct with hamburger menu

**Performance Testing:**
```bash
npm run build
# ✅ Static generation successful
# ✅ Page size: 3.99 kB
# ✅ First Load JS: 97.8 kB
```

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [002-base-ui-components.md](002-base-ui-components.md) - Uses Button, Badge, SectionHeader
- [003-navigation-layout.md](003-navigation-layout.md) - Uses NavBar, Footer
- [004-portfolio-card.md](004-portfolio-card.md) - Uses 3 cards
- [005-experience-component.md](005-experience-component.md) - Uses 4 items
- [006-article-card.md](006-article-card.md) - Uses 6 cards
- [009-responsive-design.md](009-responsive-design.md) - Implements responsive layouts

## Future Enhancements

- Add scroll animations (fade in, slide up)
- Add parallax effect for hero background
- Add testimonials/recommendations section
- Add contact form
- Add skills/tools section
- Add metrics/impact section
- Add dark mode toggle
- Add language switcher
