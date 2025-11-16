/**
 * Typography design tokens extracted from Figma
 */

export const typography = {
  display: {
    '01': {
      fontSize: '140px',
      fontWeight: 600,
      lineHeight: '144px',
      letterSpacing: '-7.5px',
      fontFamily: 'Inter, sans-serif',
    },
  },
  heading: {
    '01': {
      fontSize: '84px',
      fontWeight: 600,
      lineHeight: '89px',
      letterSpacing: '-3.5px',
      fontFamily: 'Inter, sans-serif',
    },
    '02': {
      fontSize: '63px',
      fontWeight: 600,
      lineHeight: '73px',
      letterSpacing: '-2.5px',
      fontFamily: 'Inter, sans-serif',
    },
    '04': {
      fontSize: '42px',
      fontWeight: 600,
      lineHeight: '46px',
      letterSpacing: '-2px',
      fontFamily: 'Inter, sans-serif',
    },
    '05': {
      fontSize: '34px',
      fontWeight: 600,
      lineHeight: '40px',
      letterSpacing: '-1px',
      fontFamily: 'Inter, sans-serif',
    },
    '06': {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '34px',
      letterSpacing: '-0.6px',
      fontFamily: 'Inter, sans-serif',
    },
    '07': {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      fontFamily: 'Inter, sans-serif',
    },
  },
  text: {
    '18px': {
      regular: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '30px',
        fontFamily: 'Inter, sans-serif',
      },
    },
    '16px': {
      regular: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '26px',
        fontFamily: 'Inter, sans-serif',
      },
      semibold: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '26px',
        fontFamily: 'Inter, sans-serif',
      },
      bold: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '26px',
        fontFamily: 'Inter, sans-serif',
      },
    },
    '14px': {
      regular: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        fontFamily: 'Inter, sans-serif',
      },
      medium: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '22px',
        fontFamily: 'Inter, sans-serif',
      },
      semibold: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '22px',
        fontFamily: 'Inter, sans-serif',
      },
      bold: {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '22px',
        fontFamily: 'Inter, sans-serif',
      },
    },
    '12px': {
      semibold: {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '20px',
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  button: {
    large: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '34px',
      letterSpacing: '-0.2px',
      fontFamily: 'Inter, sans-serif',
    },
    medium: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '-0.2px',
      fontFamily: 'Inter, sans-serif',
    },
    small: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '28px',
      fontFamily: 'Inter, sans-serif',
    },
    xSmall: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily: 'Inter, sans-serif',
    },
  },
} as const;

export type Typography = typeof typography;

