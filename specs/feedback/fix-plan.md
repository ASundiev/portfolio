# Fix Plan for Feedback Implementation

**Branch:** `fix/figma-design-alignment`
**Date:** 2025-11-16
**Related:** specs/feedback/feedback_spec-kit-documentation.md

## Issues Summary

Based on feedback analysis and Figma design comparison:

### 1. Hero Section (Priority: HIGH)

**Issue 1.1: Full Viewport Height**
- **Current**: `min-height: 100vh` in `.hero`
- **Problem**: Forces full viewport height regardless of content
- **Fix**: Remove `min-height: 100vh`, let content determine height
- **File**: `src/app/page.module.css` line 18

**Issue 1.2: Navigation Bar Stickiness**
- **Current**: NavBar has `position: sticky; top: 0;` but wrapped inside hero container
- **Problem**: Sticky positioning might be affected by parent container
- **Fix**: Ensure NavBar is positioned correctly to be sticky from the top
- **File**: `src/components/layout/NavBar/NavBar.module.css` line 4-5

### 2. Why Me Section (Priority: HIGH)

**Issue 2.1: Incorrect Paddings**
- **Current**: `padding: var(--spacing-88) var(--spacing-240)` = 88px 240px
- **Problem**: Horizontal padding (240px) too large, doesn't match Figma
- **Fix**: Adjust to match Figma design specifications
- **File**: `src/app/page.module.css` line 119
- **Figma Reference**: Need to extract correct padding values

### 3. Case Studies Section (Priority: HIGH)

**Issue 3.1: Incorrect Paddings and Margins**
- **Current**: `padding: var(--spacing-80) var(--spacing-80) 0` = 80px 80px 0
- **Problem**: Paddings don't match Figma design
- **Fix**: Adjust padding and margin values to match Figma
- **File**: `src/app/page.module.css` line 160
- **Figma Reference**: Need to extract correct spacing

### 4. Articles & Talks Section (Priority: MEDIUM)

**Issue 4.1: Unnecessary Max-Width**
- **Current**: `max-width: 1440px; margin: 0 auto;`
- **Problem**: Constrains section width, inconsistent with design
- **Fix**: Remove max-width constraint
- **File**: `src/app/page.module.css` line 259

## Implementation Steps

### Phase 1: Hero Section Fixes
1. Remove `min-height: 100vh` from `.hero`
2. Verify NavBar sticky behavior
3. Test hero section height is content-based
4. Ensure responsive behavior maintained

### Phase 2: Why Me Section Fixes
1. Extract correct padding from Figma design
2. Update `.whyMe` padding values
3. Test at all breakpoints (desktop/tablet/mobile)
4. Verify alignment with design

### Phase 3: Case Studies Section Fixes
1. Extract correct spacing from Figma
2. Update `.portfolioPreview` padding values
3. Verify card spacing and margins
4. Test responsive behavior

### Phase 4: Articles Section Fixes
1. Remove `max-width: 1440px` from `.articles`
2. Remove or adjust `margin: 0 auto`
3. Test full-width layout
4. Verify responsive behavior

### Phase 5: Testing & Validation
1. Visual comparison with Figma designs (desktop/tablet/mobile)
2. Test all breakpoints
3. Verify sticky navigation works
4. Check all spacing and paddings match
5. Build and verify no regressions

### Phase 6: Documentation Updates
1. Update spec 007-homepage.md with corrected values
2. Update IMPLEMENTATION_STATUS.md
3. Add notes about fixes in feedback folder
4. Update any affected component specs

## Expected Outcomes

- ✅ Hero section height determined by content
- ✅ NavBar remains sticky throughout scroll
- ✅ Why Me section paddings match Figma
- ✅ Case Studies section spacing matches Figma
- ✅ Articles section full-width without constraints
- ✅ All responsive breakpoints working correctly
- ✅ Build passes without errors
- ✅ Documentation updated

## Files to Modify

1. `src/app/page.module.css` - Main fixes
2. `src/components/layout/NavBar/NavBar.module.css` - Verify sticky behavior
3. `specs/007-homepage.md` - Update with corrections
4. `specs/feedback/fix-plan.md` - This document
5. `IMPLEMENTATION_STATUS.md` - Add fix notes

## Testing Checklist

- [ ] Hero section: Content-based height
- [ ] Hero section: NavBar sticky on scroll
- [ ] Why Me: Paddings match Figma
- [ ] Case Studies: Spacing matches Figma
- [ ] Articles: Full width without max-width
- [ ] Desktop breakpoint (>1024px)
- [ ] Tablet breakpoint (768-1024px)
- [ ] Mobile breakpoint (<768px)
- [ ] Build passes
- [ ] No TypeScript errors
- [ ] No console warnings

## Next Steps

1. Create new branch: `fix/figma-design-alignment`
2. Implement fixes in order
3. Test thoroughly at each step
4. Commit with clear messages
5. Update documentation
6. Create PR with before/after comparison
