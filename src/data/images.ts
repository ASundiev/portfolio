/**
 * Image paths configuration
 * Updated to match actual image file names and extensions
 * Paths will automatically include basePath when needed
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const withBasePath = (path: string) => `${BASE_PATH}${path}`;

export const imagePaths = {
  profile: withBasePath('/images/profile.jpg'),

  portfolio: {
    '1': withBasePath('/images/portfolio-1.mp4'),
    '2': withBasePath('/images/portfolio-2.gif'),
    '3': withBasePath('/images/portfolio-3.png'),
    '4': withBasePath('/images/portfolio-4.png'),
    '5': withBasePath('/images/portfolio-5.png'),
    '6': withBasePath('/images/portfolio-6.jpg'),
    '7': withBasePath('/images/portfolio-7.gif'),
  },

  projects: {
    '1': withBasePath('/images/projects-1.mp4'),
    '2': withBasePath('/images/projects-2.mp4'),
  },

  articles: {
    '1': withBasePath('/images/article-1.jpg'),
    '2': withBasePath('/images/article-2.jpg'),
    '3': withBasePath('/images/article-3.jpg'),
    '4': withBasePath('/images/article-4.jpg'),
    '5': withBasePath('/images/article-5.jpg'),
    '6': withBasePath('/images/article-6.jpg'),
    '7': withBasePath('/images/article-7.jpg'),
  },
};
