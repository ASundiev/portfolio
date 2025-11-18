# Fix Plan Round 2 - Case Studies & Articles Alignment

**Branch:** `fix/homepage-sections-alignment`
**Date:** 2025-11-16
**Related Feedback:** `specs/feedback/feedback_figma-design-alignment.md`
**Previous Branch:** `fix/figma-design-alignment`

## Figma Analysis Summary

### Case Studies Section (node: 5104-8877)
**Key Findings from Figma MCP:**
- **NO section title** visible on homepage (title hidden)
- **Gap between cards:** `gap-[48px]` = 48px
- **Cards have circular arrow button:** 58px diameter, border, with arrow icon
- **Card layout:** Image + Info section with title, tags, and button
- **Padding:** 80px horizontal, 80px vertical-top, 0 bottom

### Articles Section (node: 5112-21189)
**Key Findings from Figma MCP:**
- **Has section title:** "Articles & talks" (SectionHeader component)
- **Cards have border:** `border border-[#bdbdbd]` = 1px solid #bdbdbd
- **Cards have description:** 18px text below title, 30px line-height
- **Card structure:**
  - Image (rounded 24px)
  - Info section (48px padding)
  - Title (34px, -1px tracking, 40px line-height)
  - Description (18px, 30px line-height)
  - Badge (12px text)
- **Gap:** 24px between cards
- **Min-width:** 540px per card

## Issues to Fix

### 1. Case Studies Section - Hide Title (Issue 1.1)

**Problem:** Section header "Case studies" is currently visible on homepage but not in Figma
**Complexity:** Must hide on homepage but keep visible on /portfolio page

**Solution:**
- Add conditional prop to SectionHeader component: `hidden` or `visuallyHidden`
- OR: Add CSS class to hide title only on homepage: `.portfolioPreview .sectionHeader`
- Keep semantic HTML for accessibility

**Files to Modify:**
- `src/app/page.tsx` - Add prop/className to SectionHeader
- `src/app/page.module.css` - Add CSS to hide title
- OR `src/components/ui/SectionHeader/SectionHeader.tsx` - Add hidden prop

### 2. Case Studies Section - Add 48px Gap (Issue 1.2)

**Problem:** Currently no margin between cards (uses flex-col gap)
**Figma Value:** 48px

**Solution:**
- Change `.portfolioPreview__cards` from `gap: var(--spacing-51)` to `gap: var(--spacing-48)`
- Note: --spacing-51 doesn't exist in tokens, should be 48

**Files to Modify:**
- `src/app/page.module.css` line ~178

**Before:**
```css
.portfolioPreview__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-51); /* Wrong value */
}
```

**After:**
```css
.portfolioPreview__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-48); /* 48px */
}
```

### 3. Case Studies Section - Add Button to Cards (Issue 1.3)

**Problem:** Cards missing circular arrow button
**Figma Specs:**
- 58px diameter
- 2px border (#4b4b4b)
- Arrow icon inside
- Positioned in bottom-right of info section

**Solution:**
- Add button to PortfolioCard component when used on homepage
- Button should be variant of existing Button component (icon-only)
- Position absolute or flexbox in card info section

**Files to Modify:**
- `src/components/cards/PortfolioCard/PortfolioCard.tsx` - Add button
- `src/components/cards/PortfolioCard/PortfolioCard.module.css` - Style button
- `src/app/page.tsx` - Pass showButton prop

**Design Specs:**
```css
.portfolioCard__button {
  width: 58px;
  height: 58px;
  border: 2px solid #4b4b4b;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 4. Articles Section - Add Border (Issue 2.1)

**Problem:** Cards don't have border
**Figma Value:** 1px solid #bdbdbd

**Solution:**
- Add border to ArticleCard component

**Files to Modify:**
- `src/components/cards/ArticleCard/ArticleCard.module.css`

**Add:**
```css
.articleCard {
  border: 1px solid #bdbdbd;
}
```

### 5. Articles Section - Add Description (Issue 2.2)

**Problem:** Cards missing description text
**Figma Specs:**
- 18px font size
- 30px line height
- Regular weight
- Below title, above badge

**Solution:**
- Add description prop to ArticleCard component
- Add description text to article data
- Style with proper typography

**Files to Modify:**
- `src/components/cards/ArticleCard/ArticleCard.tsx` - Add description prop
- `src/components/cards/ArticleCard/ArticleCard.module.css` - Style description
- `src/app/page.tsx` - Add description text to each article

**Design Specs:**
```typescript
interface ArticleCardProps {
  title: string;
  description: string; // NEW
  imageUrl: string;
  tag: string;
  href?: string;
}
```

```css
.articleCard__description {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: var(--color-black-700);
  margin-top: 16px;
}
```

## Implementation Plan

### Phase 1: Create Branch
```bash
git checkout -b fix/homepage-sections-alignment
```

### Phase 2: Fix Case Studies Section

**Step 1: Hide Title**
- Add CSS to hide SectionHeader in portfolio preview
- Test that title still shows on /portfolio page

**Step 2: Fix Card Gap**
- Change spacing-51 to spacing-48
- Verify 48px gap visually

**Step 3: Add Button to Cards**
- Update PortfolioCard component
- Add circular button with arrow
- Position correctly in info section
- Add hover effects

### Phase 3: Fix Articles Section

**Step 1: Add Border**
- Add 1px solid #bdbdbd border to cards
- Verify border radius maintained

**Step 2: Add Descriptions**
- Update ArticleCard component with description prop
- Add descriptions to all 6 articles in page.tsx
- Style with correct typography

### Phase 4: Testing
- Visual comparison with Figma screenshots
- Test both desktop and responsive views
- Verify no regressions on /portfolio page
- Run build to check for errors

## Article Descriptions from Figma

1. **"Inspect & Reflect Wise com's Design System"**
   - Description: "Exploring Wise.com's Design System implementation alongside a group of industry professionals"

2. **"Design Systems and the Volatile Economy"**
   - Description: "An honest conversation about the life of design systems and design ops specialists in the current economic environment. Challenges, hopes and nuggets of advice from the past 8 years in this field."

3. **"Building the design system as you fly it"**
   - Description: "I shared how new challenges forced me to become more flexible and pragmatic whilst abandoning some of the old mental models."

4. **"Design direction as a step before design system"**
   - Description: "Long-lasting design systems need solid foundations. Sometimes this requires taking a step back."

5. **"Tool tips: How our design team switched to Figma"**
   - Description: "It's increasingly clear that the tools we use shape the work we do in all sorts of ways, so picking the right tool for your task is absolutely critical."

6. **"Working as a designer in a foreign language"**
   - Description: "The design industry speaks English. The articles we read, the tools we use, the conferences we attend: we all speak the same language when it comes to design."

## Files to Modify

1. `src/app/page.tsx` - Add descriptions, button props, hide title
2. `src/app/page.module.css` - Fix gaps, hide title CSS
3. `src/components/cards/PortfolioCard/PortfolioCard.tsx` - Add button
4. `src/components/cards/PortfolioCard/PortfolioCard.module.css` - Style button
5. `src/components/cards/ArticleCard/ArticleCard.tsx` - Add description
6. `src/components/cards/ArticleCard/ArticleCard.module.css` - Style description, border

## Success Criteria

- [ ] Case Studies title hidden on homepage (still visible on /portfolio)
- [ ] 48px gap between portfolio cards
- [ ] Circular arrow button on each portfolio card (homepage only)
- [ ] 1px #bdbdbd border on article cards
- [ ] Description text on all article cards
- [ ] Build passes without errors
- [ ] Visual match with Figma designs
- [ ] No regressions on /portfolio page

## Notes

- Be careful with PortfolioCard changes - used on both homepage and /portfolio page
- Consider using conditional props (showButton, showTitle) rather than different variants
- Test both pages thoroughly after changes
