/**
 * Utility to prepend the basePath to internal links
 * This ensures links work correctly when deployed to GitHub Pages with a basePath
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Prepends the basePath to a URL path
 * @param path - The path to prepend the basePath to (e.g., '/', '/portfolio')
 * @returns The full path with basePath (e.g., '/portfolio/', '/portfolio/portfolio')
 */
export function withBasePath(path: string): string {
  // Don't prepend basePath to external URLs or anchor-only links
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Handle root path
  if (path === '/') {
    return BASE_PATH || '/';
  }

  // Handle paths with hash fragments
  if (path.includes('#')) {
    const [pathname, hash] = path.split('#');
    return `${BASE_PATH}${pathname}#${hash}`;
  }

  // Handle regular paths
  return `${BASE_PATH}${path}`;
}
