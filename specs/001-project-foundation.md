# Spec 001: Project Foundation & Design System

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/tokens/](../src/tokens/), [src/styles/globals.css](../src/styles/globals.css)

## Problem Statement

Building a portfolio website requires consistent visual design across all pages and components. Without a design system, developers may use inconsistent spacing, colors, and typography, leading to a fragmented user experience and difficult maintenance.

## Motivation

- Ensure visual consistency across the entire portfolio
- Enable rapid component development with predefined design tokens
- Make the codebase maintainable by centralizing design decisions
- Follow design-system-first approach as specified in Figma designs
- Provide type-safe access to design tokens via TypeScript

## Proposed Solution

Create a comprehensive design token system extracted from Figma designs, implementing:

1. **Color Tokens** - All colors from Figma color palette
2. **Typography Tokens** - Complete type scale (Display through Heading levels)
3. **Spacing Tokens** - 4px base scale for consistent spacing
4. **Border Radius Tokens** - Predefined border radius values
5. **Breakpoint Tokens** - Responsive design breakpoints
6. **Global Styles** - CSS custom properties and base styles

## Detailed Design

### Color System
```typescript
colors = {
  black: {
    900: '#000000',  // Pure black
    700: '#282828',  // Dark gray (primary text)
    500: '#4B4B4B',  // Medium gray (secondary text)
  },
  white: '#FFFFFF',
  orange: {
    300: '#FEA75F',  // Accent color
  },
  brand: '#FFF0E3',  // Brand background
}
```

### Typography System
- **Display/01** - Hero headings (96px/120px, -2px letter-spacing)
- **Heading/01-07** - Section and component headings
- **Text/Large, Medium, Small** - Body text variants
- **Button/Large, Medium, Small, XSmall** - Button text sizes

### Spacing Scale (4px base)
`4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 80, 88, 104, 136px`

### Border Radius
`24, 31, 39, 40, 50, 100px`

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Technology Choices

**Font Loading:**
- Google Fonts for Inter family
- Weights: 400, 500, 600, 700
- `font-display: swap` for better performance

**Icon Library:**
- Phosphor React for consistent icon system
- Matches Figma icon style
- Tree-shakeable for optimal bundle size

**CSS Architecture:**
- CSS Modules for component-scoped styles
- CSS Custom Properties for runtime token access
- TypeScript constants for compile-time type safety

## Implementation Plan

### Phase 1: Token Definitions
1. Create `/src/tokens/colors.ts` with TypeScript color definitions
2. Create `/src/tokens/typography.ts` with font size, line height, letter spacing
3. Create `/src/tokens/spacing.ts` with spacing scale
4. Create `/src/tokens/borderRadius.ts` with radius values
5. Create `/src/tokens/breakpoints.ts` with media query breakpoints
6. Create `/src/tokens/index.ts` to export all tokens

### Phase 2: Global Styles
1. Create `/src/styles/globals.css` with CSS custom properties
2. Map TypeScript tokens to CSS variables
3. Add CSS reset and base styles
4. Configure Inter font from Google Fonts
5. Set up smooth scrolling and base accessibility styles

### Phase 3: Framework Setup
1. Initialize Next.js 14+ with App Router
2. Configure TypeScript with strict mode
3. Install Phosphor React icons
4. Set up project structure (components, tokens, styles)
5. Configure `next.config.js` for optimizations

## Alternatives Considered

### Alternative 1: CSS-in-JS (Styled Components, Emotion)
**Rejected because:**
- Adds runtime overhead
- Larger bundle size
- CSS Modules provide sufficient scoping with better performance

### Alternative 2: Tailwind CSS
**Rejected because:**
- Design tokens are predefined in Figma
- Custom design system doesn't align with Tailwind's utility classes
- Need more control over exact design token implementation

### Alternative 3: Sass/SCSS
**Rejected because:**
- CSS Custom Properties provide runtime theming if needed later
- CSS Modules sufficient for scoping
- Avoid additional build complexity

## Success Metrics

### Functionality
- ✅ All color tokens accessible via TypeScript
- ✅ All typography tokens defined with proper type scale
- ✅ Spacing scale available in both TS and CSS
- ✅ Breakpoints working in responsive components
- ✅ Inter font loading properly
- ✅ Phosphor icons integrated

### Code Quality
- ✅ TypeScript strict mode passes
- ✅ No hardcoded colors in component files
- ✅ No hardcoded spacing values in component files
- ✅ CSS custom properties accessible globally

### Performance
- ✅ Font loading optimized with `font-display: swap`
- ✅ Icons tree-shakeable (only imported icons bundled)
- ✅ CSS bundle size minimal

### Developer Experience
- ✅ IntelliSense for all token values
- ✅ Type safety prevents invalid token usage
- ✅ Clear file structure for token organization
- ✅ Easy to add new tokens in the future

## Implementation Details

**Files Created:**
- `src/tokens/colors.ts` - 17 lines
- `src/tokens/typography.ts` - 89 lines
- `src/tokens/spacing.ts` - 18 lines
- `src/tokens/borderRadius.ts` - 13 lines
- `src/tokens/breakpoints.ts` - 13 lines
- `src/tokens/index.ts` - 6 lines
- `src/styles/globals.css` - 88 lines

**Dependencies Added:**
- `next@^14.2.0`
- `react@^18.3.0`
- `react-dom@^18.3.0`
- `phosphor-react@^1.4.1`
- `typescript@^5`
- `@types/react`, `@types/react-dom`, `@types/node`

## Validation

**Build Validation:**
```bash
npm run build
# ✅ Compiled successfully
# ✅ Types validated
```

**Usage Example:**
```typescript
import { colors, spacing, typography } from '@/tokens';

const heroStyle = {
  backgroundColor: colors.brand,
  padding: spacing[48],
  fontSize: typography.display['01'].fontSize,
};
```

## Related Specs

- [002-base-ui-components.md](002-base-ui-components.md) - Uses design tokens
- [003-navigation-layout.md](003-navigation-layout.md) - Uses design tokens
- [009-responsive-design.md](009-responsive-design.md) - Uses breakpoint tokens

## Notes

- Design tokens match Figma variables exactly
- All components MUST use tokens instead of hardcoded values
- Token system is extensible for future additions (shadows, transitions, etc.)
- CSS custom properties allow runtime theming if needed in future
