# Changes Ready for Review

**Branch:** `fix/homepage-sections-alignment`
**Date:** 2025-11-16
**Status:** ⏳ AWAITING USER APPROVAL - DO NOT COMMIT YET

## Summary

All issues from `specs/feedback/feedback_figma-design-alignment.md` have been implemented using Figma MCP analysis.

## Changes Implemented

### ✅ 1. Case Studies Section - Title Hidden (Issue 1.1)

**Change:** Added CSS to visually hide the "Case studies" title on homepage while keeping it for screen readers

**File:** `src/app/page.module.css`
```css
/* Hide section title on homepage (not on portfolio page) */
.portfolioPreview__header {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Result:** Title invisible on homepage, still visible on /portfolio page ✅

---

### ✅ 2. Case Studies Section - 48px Gap Between Cards (Issue 1.2)

**Change:** Fixed gap value from `var(--spacing-51)` to `var(--spacing-48)`

**File:** `src/app/page.module.css`
```css
.portfolioPreview__cards {
  gap: var(--spacing-48); /* Was: var(--spacing-51) which doesn't exist */
}

.portfolioPreview__content {
  gap: var(--spacing-48); /* Also updated */
}
```

**Result:** 48px margin between cards as per Figma ✅

---

### ✅ 3. Case Studies Section - Button on Cards (Issue 1.3)

**Change:** Modified PortfolioCard to show button based on `showButton` prop instead of only when `href` exists

**Files Modified:**
- `src/components/cards/PortfolioCard/PortfolioCard.tsx`
- `src/components/cards/PortfolioCard/PortfolioCard.module.css`

**Changes:**
```typescript
// Added showButton prop
export interface PortfolioCardProps {
  showButton?: boolean;  // NEW - defaults to true
}

// Changed condition from {href && ...} to {showButton && ...}
{showButton && (
  <button
    disabled={!href}  // Disabled if no href
    aria-label={href ? `View ${title}` : title}
  >
    <ArrowUpRight />
  </button>
)}
```

```css
/* Added disabled state styling */
.portfolioCard__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Result:**
- All cards on homepage now show the circular arrow button ✅
- First card (no href) shows disabled button ✅
- Cards on /portfolio page don't show button (style06 hides it) ✅

---

### ✅ 4. Articles Section - Border Added (Issue 2.1)

**Change:** Added 1px solid #bdbdbd border to article cards

**File:** `src/components/cards/ArticleCard/ArticleCard.module.css`
```css
.articleCard {
  border: 1px solid #bdbdbd;  /* NEW */
  border-radius: var(--radius-40);
  padding: var(--spacing-24);
  overflow: hidden;
}
```

**Result:** Cards have border matching Figma design ✅

---

### ✅ 5. Articles Section - Description Added (Issue 2.2)

**Changes:**
1. Added description prop to ArticleCard component
2. Added description styling
3. Added descriptions to all 6 articles from Figma

**Files Modified:**
- `src/components/cards/ArticleCard/ArticleCard.tsx`
- `src/components/cards/ArticleCard/ArticleCard.module.css`
- `src/app/page.tsx`

**Component Changes:**
```typescript
export interface ArticleCardProps {
  description?: string;  // NEW
}

// In render:
{description && (
  <p className={styles.articleCard__description}>{description}</p>
)}
```

**Styling:**
```css
.articleCard__title {
  font-size: 34px;        /* Updated from 20px */
  line-height: 40px;      /* Updated from 28px */
  letter-spacing: -1px;   /* NEW */
}

.articleCard__description {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}

.articleCard__content {
  gap: var(--spacing-16);  /* Updated from 12px */
  padding: var(--spacing-48);
}
```

**Descriptions Added (from Figma):**
1. "Exploring Wise.com's Design System implementation alongside a group of industry professionals"
2. "An honest conversation about the life of design systems and design ops specialists in the current economic environment. Challenges, hopes and nuggets of advice from the past 8 years in this field."
3. "I shared how new challenges forced me to become more flexible and pragmatic whilst abandoning some of the old mental models."
4. "Long-lasting design systems need solid foundations. Sometimes this requires taking a step back."
5. "It's increasingly clear that the tools we use shape the work we do in all sorts of ways, so picking the right tool for your task is absolutely critical."
6. "The design industry speaks English. The articles we read, the tools we use, the conferences we attend: we all speak the same language when it comes to design."

**Result:** All article cards now show description text matching Figma ✅

---

## Files Modified Summary

1. ✅ `src/app/page.module.css` - Fixed gaps, hidden title
2. ✅ `src/app/page.tsx` - Added article descriptions
3. ✅ `src/components/cards/PortfolioCard/PortfolioCard.tsx` - Added showButton prop
4. ✅ `src/components/cards/PortfolioCard/PortfolioCard.module.css` - Added disabled styles
5. ✅ `src/components/cards/ArticleCard/ArticleCard.tsx` - Added description prop
6. ✅ `src/components/cards/ArticleCard/ArticleCard.module.css` - Added border, updated typography

## Build Status

```
✅ Compiled successfully
✅ Types validated
✅ 5 pages generated
✅ No errors or warnings

Bundle sizes (slightly increased due to descriptions):
- Homepage: 4.06 kB (was 3.99 kB)
- Portfolio: 2.10 kB (was 2.07 kB)
```

## Visual Changes

### Case Studies Section
- ❌ Before: Title visible, uneven gaps, missing buttons
- ✅ After: Title hidden, 48px gaps, all cards have buttons

### Articles Section
- ❌ Before: No border, no description
- ✅ After: 1px #bdbdbd border, full descriptions with proper typography

## Testing Checklist

- [x] Build passes without errors
- [x] TypeScript compilation successful
- [x] Homepage loads correctly
- [x] Portfolio page loads correctly
- [x] Case Studies title hidden on homepage
- [x] Case Studies title visible on /portfolio page
- [x] Portfolio cards show buttons (homepage)
- [x] Portfolio cards don't show buttons (/portfolio page)
- [x] Article cards have border
- [x] Article cards have descriptions
- [x] All gaps match Figma (48px for portfolio, 24px for articles)

## Figma MCP Analysis Used

**Case Studies (node: 5104-8877):**
- Confirmed no title in design
- Gap: 48px between cards
- Button: 58px circular with arrow icon
- Card info padding: 48px

**Articles (node: 5112-21189):**
- Border: 1px solid #bdbdbd
- Card padding: 24px outer
- Info padding: 48px inner
- Title: 34px, -1px letter-spacing, 40px line-height
- Description: 18px, 30px line-height
- Gap between cards: 24px

## Next Steps

**For User:**
1. ✅ Review these changes
2. ✅ Test locally if desired: `npm run dev`
3. ✅ Approve changes
4. ⏳ I will then commit and push

**After Approval:**
1. Commit with comprehensive message
2. Push to remote
3. Update PR or create new one
4. Update specs documentation

## Notes

- All changes match Figma specifications exactly
- No breaking changes to existing functionality
- Portfolio page unaffected (buttons still hidden on style06)
- Accessibility maintained (visually hidden title, disabled button state)
- Performance impact minimal (slightly larger bundle due to descriptions)

---

**⚠️ AWAITING USER APPROVAL - DO NOT COMMIT UNTIL APPROVED**
