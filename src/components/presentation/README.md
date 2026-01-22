# Presentation Slide Deck System

A reusable, token-based presentation component system for creating interactive slide decks. Built with Next.js, React, and CSS Modules.

---

## Quick Start

```tsx
import {
    PresentationCanvas,
    CoverSlide,
    TwoColumnSlide,
    HeroWithContentSlide,
    GridSlide,
    SplitContentSlide,
    PresentationCard,
    HandwrittenAnnotation,
} from '@/components/presentation';

export default function MyPresentation() {
    return (
        <PresentationCanvas slideCount={5}>
            <CoverSlide id="slide-1" title="My Presentation" />
            <TwoColumnSlide id="slide-2" breadcrumb="My Presentation" heading="Topic" bullets={[...]} />
            {/* More slides */}
        </PresentationCanvas>
    );
}
```

---

## Architecture

```
src/components/presentation/
├── Annotations/          # Handwritten text, arrows, underlines
├── Card/                 # Reusable card component
├── PresentationCanvas/   # Container with keyboard navigation
├── Slide/                # Base slide wrapper
├── layouts/              # Slide layout components
│   ├── CoverSlide/
│   ├── TwoColumnSlide/
│   ├── HeroWithContentSlide/
│   ├── GridSlide/
│   └── SplitContentSlide/
└── index.ts              # Public exports
```

---

## Design Tokens

All tokens are defined in `src/styles/globals.css` under `:root`.

### Dimensions
| Token | Value | Use |
|-------|-------|-----|
| `--slide-width` | 1920px | Slide canvas width |
| `--slide-height` | 1080px | Slide canvas height |
| `--slide-padding` | 120px | Content padding |

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--slide-bg` | #111111 | Dark slide background |
| `--slide-text-primary` | #FFFFFF | Main headings |
| `--slide-text-secondary` | rgba(255,255,255,0.8) | Body text |
| `--slide-text-muted` | rgba(255,255,255,0.48) | Labels, subtext |
| `--slide-accent-purple` | #9C94FF | Accent color |
| `--slide-accent-purple-soft` | #cfccff | Soft purple for headings |
| `--slide-accent-teal` | #6CABAD | Annotations color |

### Typography
| Token | Value | Use |
|-------|-------|-----|
| `--slide-font-display` | 'Inter Tight' | All slide text |
| `--slide-font-handwritten` | 'Caveat' | Annotations |
| `--slide-text-cover` | 88px | Cover slide title |
| `--slide-text-page` | 64px | Page headings |
| `--slide-text-page-small` | 34px | Sub-headings |
| `--slide-text-body` | 28px | Body copy |

### Gradients
| Token | Use |
|-------|-----|
| `--slide-glow-gradient` | Purple glow blur effect |
| `--slide-heading-gradient` | Silver-to-white heading text |

---

## Layout Components

### CoverSlide
Full-screen title slide with gradient background.

```tsx
<CoverSlide id="slide-1" title="Presentation Title" />
```

### TwoColumnSlide
Heading + bullets on left, illustration on right. Most common layout.

```tsx
<TwoColumnSlide
    id="slide-2"
    breadcrumb="Case Study"
    heading={<span className="gradient">The Topic</span>}
    subHeading="Section Name"       // Optional
    bullets={[...]}
    illustration={<img src="..." />}
    showGlow={true}                 // Default: true
>
    {/* Optional children below bullets */}
</TwoColumnSlide>
```

### HeroWithContentSlide
Large heading with feature cards below.

```tsx
<HeroWithContentSlide
    id="slide-3"
    breadcrumb="Case Study"
    heading={<>Strategy: <span className="gradient">AI-First</span></>}
    bullets={[...]}
    cards={[
        { icon: <Icon />, title: "Feature", description: "Details" }
    ]}
/>
```

### GridSlide
Icon + title + description grid layout.

```tsx
<GridSlide
    id="slide-4"
    breadcrumb="Case Study"
    heading="Challenges"
    columns={2}  // 1 or 2
    items={[
        { icon: <Icon />, title: "Challenge", description: "Details" }
    ]}
/>
```

### SplitContentSlide
Two-column bullet list layout with shared illustration area.

```tsx
<SplitContentSlide
    id="slide-5"
    breadcrumb="Case Study"
    heading={<><span className="gradient">Initiative:</span> Topic</>}
    subHeading="Problems"
    leftBullets={[...]}
    rightBullets={[...]}
    illustration={<div>...</div>}
/>
```

---

## Supporting Components

### PresentationCard
Glassmorphism card with gradient border.

```tsx
// Default style
<PresentationCard>Content</PresentationCard>

// Metric variant (rounded, centered)
<PresentationCard variant="metric">
    <span>100%</span>
    <span>ADOPTION</span>
</PresentationCard>
```

### HandwrittenAnnotation
Handwritten text with optional arrows and underlines.

```tsx
// Text with arrow
<HandwrittenAnnotation
    text="That's me"
    arrow="curvedUpRight"  // | "spiralDown" | "archedRight"
    size={40}              // Optional font size override
/>

// Underlined content
<HandwrittenAnnotation underline="smooth">
    <span>Important text</span>
</HandwrittenAnnotation>
```

---

## Text Styling Classes

Global utility classes for inline text styling:

| Class | Effect |
|-------|--------|
| `.bold-white` | Bold white text for emphasis |
| `.gradient` | Silver-to-purple gradient text |

```tsx
<>Text with <span className="bold-white">emphasis</span></>
<><span className="gradient">Highlighted:</span> Normal text</>
```

---

## Adding New Slides

1. **Choose a layout** from the existing components
2. **Add slide to page.tsx** with unique `id`
3. **Update `slideCount`** in `PresentationCanvas`
4. **Use tokens** for all colors, typography, and spacing
5. **Test navigation** with arrow keys

---

## Code Quality Guidelines

1. **Always use tokens** — never hardcode hex colors or pixel values
2. **Use component props** — avoid `!important` overrides
3. **Keep inline styles minimal** — prefer CSS modules
4. **Test at 1920x1080** — this is the native slide resolution

---

## Files Reference

| File | Purpose |
|------|---------|
| `globals.css` | All design tokens |
| `presentation/index.ts` | Component exports |
| `page.tsx` | Slide content for each presentation |
| `page.module.css` | Page-specific styles |
