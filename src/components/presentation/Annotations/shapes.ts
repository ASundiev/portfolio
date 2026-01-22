/**
 * SVG Path data for handwritten arrows and underlines.
 * Extracted from Figma (2415:254).
 */

export const ANNOTATION_SHAPES = {
    arrows: {
        /** Curved arrow pointing up-right, like in "That's me" */
        curvedUpRight: {
            viewBox: "0 0 100 87",
            path: "M5.5 81.5C30.5 80.5 60.5 70.5 88.5 28.5L84.5 54.5M88.5 28.5L58.5 32.5",
        },
        /** Loopy/spiral arrow */
        spiralDown: {
            viewBox: "0 0 282 227",
            path: "M199.88 18.63C226.54 28.55 272.58 64.91 268.22 108.99C263.85 153.07 197.69 193.36 127.35 220.21C57 247.06 12.06 226.73 3 176.49C-6.06 126.24 35.53 73.19 123.47 62.47C211.4 51.74 254.91 97.23 252.17 141.28C249.44 185.33 194.26 215.15 127.35 220.21",
        },
        /** Simple arched arrow */
        archedRight: {
            viewBox: "0 0 83 65",
            path: "M3.5 61.5C15.5 30.5 45.5 12.5 79.5 3.5L58.5 2.5M79.5 3.5L78.5 24.5",
        }
    },
    underlines: {
        /** Simple smooth underline */
        smooth: {
            viewBox: "0 0 172 11",
            path: "M2.5 5.5C28.5 2.5 143.5 2.5 169.5 8.5",
        },
        /** Rougher, double-stroke-like underline */
        rough: {
            viewBox: "0 0 240 22",
            path: "M3.5 14.5C40.5 10.5 198.5 10.5 236.5 18.5M22.5 18.5C59.5 14.5 180.5 14.5 218.5 20.5",
        },
        /** Arched/curved underline for emphasis */
        arched: {
            viewBox: "0 0 513 22",
            path: "M0.5 18.5C80.5 6.5 432.5 6.5 512.5 16.5M19.5 16.5C92.5 6.5 419.5 6.5 492.5 14.5",
        }
    }
} as const;

export type ArrowType = keyof typeof ANNOTATION_SHAPES.arrows;
export type UnderlineType = keyof typeof ANNOTATION_SHAPES.underlines;
