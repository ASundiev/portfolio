/**
 * Color design tokens extracted from Figma
 */

export const colors = {
  black: {
    900: '#000000',
    700: '#282828',
    500: '#4B4B4B',
  },
  white: '#FFFFFF',
  orange: {
    300: '#FEA75F',
  },
  brand: '#FFF0E3',
  transparent: '#FFFFFF',
} as const;

export type Colors = typeof colors;

