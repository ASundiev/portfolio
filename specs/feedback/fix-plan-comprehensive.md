# Comprehensive Fix Plan - All Feedback Issues

**Branch:** `fix/homepage-sections-alignment`
**Date:** 2025-11-16
**Feedback:** `specs/feedback/feedback_figma-design-alignment.md`

## Issues Summary

### 0. Navigation (VERIFY)
- NavBar should be sticky ✅ Already implemented: `position: sticky; top: 0;`
- **Action:** Verify it's working correctly

### 1. Case Studies Section (Homepage) ✅ DONE
- ✅ Hide title on homepage
- ✅ Add 48px gap between cards
- ✅ Add button to cards

### 2. Articles & Talks Section
- ✅ Add border to cards - DONE
- ✅ Add descriptions - DONE
- ❌ **NEW:** Fix tag copy to match design

### 3. Experience Section **NEW**
- ❌ 3.1: Content doesn't match Figma design
- ❌ 3.2: Hide +/- controls, make non-interactive

### 4. Case Studies Page (Portfolio Page) **NEW**
- ❌ Not using same portfolio card components
- ❌ Not using same navigation component
- ❌ Missing title "Case studies"
- ❌ No margin between cards

---

## NEW ISSUES TO FIX

### Issue 2.3: Article Tags Don't Match Design

**Current Tags:**
```typescript
"Design System"  // All articles 1-4
"Design Process" // Article 5
"Career"         // Article 6
```

**Figma Tags:** (need to extract exact values from Figma)
- All cards in Figma show "Branding" tag

**Fix:** Update article tags in page.tsx to match Figma

---

### Issue 3.1: Experience Content Doesn't Match

**Current Implementation:**
```
- Design Director — Beamery (2021 — Current) ✅ MATCHES
- Creative Director — Walmart (2019 — 2022) ❌ WRONG
- Lead Designer — Revolut (2017 — 2019) ❌ WRONG
- Head of Design — UI/UX (2015 — 2017) ❌ WRONG
```

**Figma Design:**
```
- Design Director — Beamery (2021 — Current) ✅
- Product Designer — Intercom (2018 — 2021)
- Chief Designer — Mail.Ru Group (2016 — 2018)
- Product Design Lead — Yandex (2013 — 2016)
```

**Fix:**
- Update experience items in page.tsx
- Update company names and periods
- Keep only first item expanded with content
- Remove content from other items (to be added later)

**Files:** `src/app/page.tsx`

---

### Issue 3.2: Hide +/- Controls

**Current:** Icons visible and items are interactive
**Required:** Hide icons, make non-interactive

**Fix:**
- Add CSS to hide +/- icons: `display: none` on icon
- Remove click handler OR add disabled state
- Keep first item expanded (but visually hide the minus icon)

**Files:**
- `src/components/cards/ExperienceItem/ExperienceItem.tsx`
- `src/components/cards/ExperienceItem/ExperienceItem.module.css`

**CSS:**
```css
.experienceItem__icon {
  display: none; /* Hide +/- controls */
}

.experienceItem__header {
  cursor: default; /* Remove pointer cursor */
}
```

---

### Issue 4.1: Portfolio Page - Use Same Components

**Current Issues:**
- Uses style06 variant (correct)
- But annotation says "Use the same portfolio cards components as on the homepage"
- Homepage uses style05 variant
- Need to check if there's a visual difference

**Analysis from Figma:**
- Portfolio page DOES show buttons on cards
- Uses same style06 cards with buttons visible
- Gap: 48px between cards

**Fix:**
- Portfolio page cards should show buttons (currently hidden by CSS)
- Remove `.portfolioCard--style06 .portfolioCard__button { display: none; }`
- OR add prop to control button visibility per page

**Files:**
- `src/components/cards/PortfolioCard/PortfolioCard.module.css`
- `src/app/portfolio/page.tsx`

---

### Issue 4.2: Portfolio Page - Missing Title

**Current:** No "Case studies" title on portfolio page
**Required:** Title should be visible ONLY on portfolio page, NOT on homepage

**Fix:**
- Add SectionHeader to portfolio page
- Remove visually-hidden CSS from homepage (already done)
- Ensure title shows with white text on dark background

**Files:** `src/app/portfolio/page.tsx`

---

### Issue 4.3: Portfolio Page - No Margin Between Cards

**Current:** Need to check current gap value
**Figma:** 48px gap between cards

**Fix:** Add gap to portfolio cards container

**Files:** `src/app/portfolio/page.module.css`

---

## Implementation Plan

### Phase 1: Article Tags ✅
1. Extract correct tags from Figma for all 6 articles
2. Update tags in page.tsx

### Phase 2: Experience Section Content
1. Update experience items with correct companies/periods:
   - Design Director — Beamery (2021 — Current) - keep as is
   - Product Designer — Intercom (2018 — 2021) - update
   - Chief Designer — Mail.Ru Group (2016 — 2018) - update
   - Product Design Lead — Yandex (2013 — 2016) - update
2. Remove descriptions/achievements from items 2-4
3. Hide +/- icons with CSS
4. Remove click functionality (or disable)

### Phase 3: Portfolio Page Fixes
1. Add "Case studies" SectionHeader with white text
2. Add 48px gap between cards
3. Show buttons on cards (remove display: none for style06)
4. Verify using same NavBar component

### Phase 4: Testing
1. Build and verify no errors
2. Test homepage: hidden title, visible buttons, correct experience
3. Test portfolio page: visible title, 48px gaps, visible buttons
4. Test navigation sticky behavior
5. Verify responsive layouts

---

## Detailed Fixes

### Fix 2.3: Update Article Tags

From Figma analysis, all article cards show "Branding" tag. Update to match:

```typescript
// In src/app/page.tsx
<ArticleCard tag="Branding" />  // For all 6 articles
```

### Fix 3.1 & 3.2: Experience Section

```typescript
// In src/app/page.tsx
<ExperienceItem
  title="Design Director"
  company="Beamery"
  period="2021 — Current"
  defaultOpen={true}
  description="Overseeing Product Design and Marketing Design functions..."
  achievements={[...]}
  hideIcon={true}  // NEW PROP
  interactive={false}  // NEW PROP
/>
<ExperienceItem
  title="Product Designer"  // CHANGED
  company="Intercom"  // CHANGED
  period="2018 — 2021"  // CHANGED
  hideIcon={true}
  interactive={false}
/>
<ExperienceItem
  title="Chief Designer"  // CHANGED
  company="Mail.Ru Group"  // CHANGED
  period="2016 — 2018"  // CHANGED
  hideIcon={true}
  interactive={false}
/>
<ExperienceItem
  title="Product Design Lead"  // CHANGED
  company="Yandex"  // CHANGED
  period="2013 — 2016"  // CHANGED
  hideIcon={true}
  interactive={false}
/>
```

```css
/* In ExperienceItem.module.css */
.experienceItem--hideIcon .experienceItem__icon {
  display: none;
}

.experienceItem--nonInteractive .experienceItem__header {
  cursor: default;
  pointer-events: none;
}
```

### Fix 4.1, 4.2, 4.3: Portfolio Page

```typescript
// In src/app/portfolio/page.tsx
<div className={styles.portfolio}>
  <NavBar className={styles.portfolio__nav} />  // ✅ Already using same component

  <section className={styles.portfolio__grid}>
    <div className={styles.portfolio__content}>
      {/* ADD TITLE */}
      <SectionHeader
        title="Case studies"
        alignment="center"
        size="big"
        className={styles.portfolio__header}  // White text styling
      />

      <div className={styles.portfolio__cards}>  {/* ADD 48PX GAP */}
        {/* All cards should show buttons */}
      </div>
    </div>
  </section>

  <Footer />
</div>
```

```css
/* In src/app/portfolio/page.module.css */
.portfolio__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-48);  /* ADD THIS */
}

.portfolio__header {
  color: var(--color-white);  /* White text on dark background */
}
```

```css
/* In PortfolioCard.module.css */
/* REMOVE OR MODIFY THIS: */
.portfolioCard--style06 .portfolioCard__button {
  display: none;  /* CHANGE TO: display: flex; */
}
```

---

## Files to Modify

1. ✅ `src/app/page.tsx` - Update article tags, experience items
2. ✅ `src/app/page.module.css` - Already done (gaps, hidden title)
3. `src/app/portfolio/page.tsx` - Add title, verify components
4. `src/app/portfolio/page.module.css` - Add 48px gap
5. `src/components/cards/ExperienceItem/ExperienceItem.tsx` - Add hideIcon, interactive props
6. `src/components/cards/ExperienceItem/ExperienceItem.module.css` - Hide icon CSS
7. `src/components/cards/PortfolioCard/PortfolioCard.module.css` - Show buttons on style06

---

## Testing Checklist

- [ ] Navigation sticky behavior works
- [ ] Homepage: Case studies title hidden
- [ ] Homepage: Portfolio cards have 48px gap
- [ ] Homepage: Portfolio cards show buttons
- [ ] Homepage: Article cards have border
- [ ] Homepage: Article cards have descriptions
- [ ] Homepage: Article tags match Figma
- [ ] Homepage: Experience content matches Figma
- [ ] Homepage: Experience icons hidden
- [ ] Portfolio page: Title "Case studies" visible (white)
- [ ] Portfolio page: Cards have 48px gap
- [ ] Portfolio page: Cards show buttons
- [ ] Portfolio page: Same NavBar component
- [ ] Build passes
- [ ] No TypeScript errors
