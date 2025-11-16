# Spec 005: Experience Component

**Status:** ✅ Implemented
**Created:** 2025-11-16
**Implementation:** [src/components/cards/ExperienceItem/](../src/components/cards/ExperienceItem/)

## Problem Statement

The Experience section needs to display multiple job positions with expandable/collapsible details. Users should be able to see job titles, companies, and dates at a glance, with the ability to expand items for more details about achievements and responsibilities.

## Motivation

- Display professional experience in a scannable format
- Allow users to dive deeper into specific roles
- Save vertical space by collapsing details by default
- Provide smooth, engaging interaction for expanding/collapsing
- Follow common accordion/disclosure pattern for familiarity

## Proposed Solution

Create an ExperienceItem component that:
- Displays job title, company, and period in a header
- Supports expandable content with description and achievements list
- Uses Plus/Minus icons to indicate state
- Implements smooth expand/collapse animation
- Supports defaultOpen prop for highlighting current role
- Uses button semantics for accessibility

## Detailed Design

### Component States

**Collapsed State:**
```
┌─────────────────────────────────────────────┐
│ Design Director — Beamery    2021 — Current  [+] │
└─────────────────────────────────────────────┘
```

**Expanded State:**
```
┌─────────────────────────────────────────────┐
│ Design Director — Beamery    2021 — Current  [-] │
│                                             │
│ Overseeing Product Design and Marketing    │
│ Design functions...                        │
│                                             │
│ • Achievement 1                             │
│ • Achievement 2                             │
│ • Achievement 3                             │
└─────────────────────────────────────────────┘
```

### Features

**Header:**
- Job title and company: "Design Director — Beamery"
- Period: "2021 — Current"
- Toggle icon: Plus (closed) / Minus (open)
- Entire header is clickable button

**Content:**
- Description paragraph (optional)
- Achievements list with bullet points (optional)
- Smooth height transition on expand/collapse
- Content only in DOM when expanded (optional optimization)

**Interaction:**
- Click header to toggle open/closed
- Smooth animation (0.3s ease)
- Icon rotates or switches between Plus/Minus
- Keyboard accessible (Space/Enter to toggle)

### API

```typescript
interface ExperienceItemProps {
  title: string;              // Job title
  company: string;            // Company name
  period: string;             // Date range
  description?: string;       // Optional description paragraph
  achievements?: string[];    // Optional achievements list
  defaultOpen?: boolean;      // Default to expanded
  className?: string;
}
```

### Styling Details

**Layout:**
- Header: Flexbox with space-between
- Left side: Title, company, period stacked
- Right side: Icon centered
- Border bottom: 1px solid divider

**Typography:**
- Title + Company: Heading/07 (18px/24px)
- Period: Text/Small (14px)
- Description: Text/Medium (16px)
- Achievements: Text/Medium (16px) with bullets

**Animation:**
- Property: max-height or transform: scaleY
- Duration: 0.3s
- Easing: ease-in-out
- Overflow: hidden during transition

**Icons:**
- Plus/Minus from Phosphor React
- Size: 24px
- Color: Black/700

## Implementation Plan

### Phase 1: Component Structure
1. Create `src/components/cards/ExperienceItem/ExperienceItem.tsx`
2. Create `src/components/cards/ExperienceItem/ExperienceItem.module.css`
3. Define TypeScript interface
4. Import Plus/Minus icons from Phosphor
5. Create `index.ts` for exports

### Phase 2: State Management
1. Add useState for isOpen state
2. Initialize with defaultOpen prop
3. Create toggleOpen handler
4. Update icon based on state

### Phase 3: Header Implementation
1. Create button element for header
2. Add aria-expanded attribute
3. Display title + company
4. Display period
5. Add Plus/Minus icon
6. Style flexbox layout
7. Add hover state

### Phase 4: Content Implementation
1. Create content container
2. Conditionally render based on isOpen
3. Add description paragraph if provided
4. Add achievements list if provided
5. Style with proper spacing

### Phase 5: Animation
1. Add CSS transition for max-height or transform
2. Set overflow: hidden
3. Test smooth expand/collapse
4. Adjust timing if needed

### Phase 6: Accessibility
1. Add aria-expanded to header button
2. Ensure keyboard navigation works
3. Add focus styles
4. Test with screen reader

## Alternatives Considered

### Alternative 1: CSS-Only Accordion (checkbox hack)
**Rejected because:**
- Need React state for icon switching
- Need programmatic control (defaultOpen prop)
- Better control with JavaScript

### Alternative 2: Always Show All Content
**Rejected because:**
- Takes up too much vertical space
- Doesn't match Figma design
- Less scannable for users

### Alternative 3: Details/Summary HTML Elements
**Rejected because:**
- Limited styling control for animation
- Harder to customize icon
- Want consistent cross-browser behavior

### Alternative 4: Third-Party Accordion Library
**Rejected because:**
- Simple enough to implement directly
- Avoid additional dependencies
- Full control over animation and styling

## Success Metrics

### Functionality
- ✅ Click header toggles open/closed state
- ✅ Plus icon shows when closed
- ✅ Minus icon shows when open
- ✅ Content displays when open
- ✅ Content hidden when closed
- ✅ defaultOpen prop works correctly
- ✅ Multiple instances work independently

### Accessibility
- ✅ Header uses button element
- ✅ aria-expanded attribute updates
- ✅ Keyboard navigation works (Tab, Space, Enter)
- ✅ Focus visible on header
- ✅ Screen reader announces state

### Animation
- ✅ Smooth expand transition (0.3s)
- ✅ Smooth collapse transition (0.3s)
- ✅ No layout shift during animation
- ✅ 60fps performance

### Code Quality
- ✅ TypeScript types complete
- ✅ Clean useState implementation
- ✅ No hardcoded values
- ✅ Reusable across multiple items

## Implementation Details

**Files Created:**
- `src/components/cards/ExperienceItem/ExperienceItem.tsx` - 76 lines
- `src/components/cards/ExperienceItem/ExperienceItem.module.css` - 134 lines
- `src/components/cards/ExperienceItem/index.ts` - 1 line

**State Management:**
```typescript
const [isOpen, setIsOpen] = useState(defaultOpen);

const toggleOpen = () => {
  setIsOpen(!isOpen);
};
```

**Usage Example:**
```tsx
<ExperienceItem
  title="Design Director"
  company="Beamery"
  period="2021 — Current"
  defaultOpen={true}
  description="Overseeing Product Design and Marketing Design functions..."
  achievements={[
    "Inspired an active phase of work on conversational AI",
    "Established design review process",
    "Rebuilt Marketing Design as a lean function",
  ]}
/>
```

## Validation

**Interaction Testing:**
- ✅ Click to expand - works
- ✅ Click to collapse - works
- ✅ Multiple items independent - works
- ✅ defaultOpen prop - works
- ✅ Keyboard Space/Enter - works

**Animation Testing:**
- ✅ Smooth expand animation
- ✅ Smooth collapse animation
- ✅ No jank or layout shift

**Browser Testing:**
- ✅ Chrome, Firefox, Safari
- ✅ Mobile browsers

## Related Specs

- [001-project-foundation.md](001-project-foundation.md) - Uses design tokens
- [007-homepage.md](007-homepage.md) - Used in Experience section
- [009-responsive-design.md](009-responsive-design.md) - Responsive layout

## Future Enhancements

- Add slide animation from side
- Add icon rotation animation
- Add "Expand All" / "Collapse All" functionality
- Add deep linking to expanded items
- Add keyboard shortcuts (arrow keys to navigate)
- Add scroll to item when expanded from off-screen
