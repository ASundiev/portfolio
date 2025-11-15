/**
 * Border radius design tokens
 */

export const borderRadius = {
  24: '24px',
  31: '31px',
  39: '39px',
  40: '40px',
  50: '50px',
  100: '100px', // Pill shape
} as const;

export type BorderRadius = typeof borderRadius;

