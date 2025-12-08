/**
 * Utility function to get image URL with fallback for different formats
 * Supports jpg, png, gif extensions
 */
export function getImageUrl(basePath: string): string {
  // If the path already has an extension, return as-is
  if (basePath.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return basePath;
  }

  // If no extension, we need to try different formats
  // Since Next.js Image component needs the exact path, we'll return the base path
  // and let the user specify the correct extension in the imageUrl prop
  // For now, default to jpg but this should be updated to match actual file names
  return `${basePath}.jpg`;
}

/**
 * Check if image is a GIF (for unoptimized flag)
 */
export function isGifImage(imageUrl: string): boolean {
  return imageUrl.toLowerCase().endsWith('.gif');
}


/**
 * Check if image is a Video
 */
export function isVideoImage(imageUrl: string): boolean {
  return imageUrl.toLowerCase().match(/\.(mp4|webm)$/) !== null;
}
