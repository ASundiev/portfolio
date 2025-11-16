'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
}

/**
 * Image component that tries multiple formats (jpg, png, gif)
 * Useful when image format is unknown
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  sizes,
  priority,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  // Extensions to try in order
  const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const isGif = imageSrc.toLowerCase().endsWith('.gif');

  const handleError = () => {
    if (errorCount < extensions.length) {
      // Try next extension
      const basePath = src.replace(/\.(jpg|jpeg|png|gif)$/i, '');
      const nextSrc = `${basePath}${extensions[errorCount]}`;
      setImageSrc(nextSrc);
      setErrorCount(errorCount + 1);
    }
  };

  const imageProps = {
    src: imageSrc,
    alt,
    className,
    style,
    sizes,
    priority,
    unoptimized: isGif,
    onError: handleError,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return (
    <Image
      {...imageProps}
      width={width || 800}
      height={height || 600}
    />
  );
};

