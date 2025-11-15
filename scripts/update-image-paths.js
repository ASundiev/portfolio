#!/usr/bin/env node

/**
 * Script to automatically detect image files and update image paths
 * Run with: node scripts/update-image-paths.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const imagesConfigPath = path.join(process.cwd(), 'src', 'data', 'images.ts');

// Find all image files
function findImageFiles() {
  if (!fs.existsSync(imagesDir)) {
    console.log('Images directory does not exist:', imagesDir);
    return {};
  }

  const files = fs.readdirSync(imagesDir);
  const images = {
    profile: null,
    portfolio: {},
    articles: {},
  };

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
      return;
    }

    const basename = path.basename(file, ext);
    const fullPath = `/images/${file}`;

    // Profile image
    if (basename.toLowerCase().includes('profile')) {
      images.profile = fullPath;
    }
    // Portfolio images
    else if (basename.toLowerCase().startsWith('portfolio')) {
      const match = basename.match(/portfolio-?(\d+)/i);
      if (match) {
        images.portfolio[match[1]] = fullPath;
      }
    }
    // Article images
    else if (basename.toLowerCase().startsWith('article')) {
      const match = basename.match(/article-?(\d+)/i);
      if (match) {
        images.articles[match[1]] = fullPath;
      }
    }
  });

  return images;
}

// Update the images.ts file
function updateImagePaths() {
  const detectedImages = findImageFiles();
  
  let configContent = `/**
 * Image paths configuration
 * Auto-generated - update these paths to match your actual image file names and extensions
 */

export const imagePaths = {
  profile: ${detectedImages.profile ? `'${detectedImages.profile}'` : "'/images/profile.jpg'"}, // Update extension if needed (.png, .jpg, etc.)
  
  portfolio: {
`;

  // Portfolio images
  for (let i = 1; i <= 7; i++) {
    const path = detectedImages.portfolio[i] || `'/images/portfolio-${i}.jpg'`;
    configContent += `    '${i}': ${path}, // Update extension if needed\n`;
  }

  configContent += `  },
  
  articles: {
`;

  // Article images
  for (let i = 1; i <= 6; i++) {
    const path = detectedImages.articles[i] || `'/images/article-${i}.jpg'`;
    configContent += `    '${i}': ${path}, // Update extension if needed\n`;
  }

  configContent += `  },
};
`;

  fs.writeFileSync(imagesConfigPath, configContent);
  console.log('✅ Updated image paths in:', imagesConfigPath);
  console.log('\nDetected images:');
  console.log('Profile:', detectedImages.profile || 'Not found');
  console.log('Portfolio:', Object.keys(detectedImages.portfolio).length, 'images');
  console.log('Articles:', Object.keys(detectedImages.articles).length, 'images');
}

updateImagePaths();

