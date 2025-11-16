/**
 * Responsive breakpoint tokens
 */

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
} as const;

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: 1025px)`,
} as const;

export type Breakpoints = typeof breakpoints;

