# GitHub Pages Deployment Guide

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**

### 2. Configure Base Path (if needed)

The deployment is currently configured for a project page at `https://asundiev.github.io/portfolio/`

**If you're using a custom domain or deploying to a root domain:**
- Update `.github/workflows/deploy.yml` and remove or change the `NEXT_PUBLIC_BASE_PATH` environment variable
- For custom domain: Set `NEXT_PUBLIC_BASE_PATH: ""` (empty string)

**If your repository name is different from "portfolio":**
- Update the `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml` to match your repository name:
  ```yaml
  NEXT_PUBLIC_BASE_PATH: /your-repo-name
  ```

### 3. Deploy

The site will automatically deploy when you push to the `main` branch.

You can also manually trigger a deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### 4. Verify Deployment

After the workflow completes, your site will be available at:
- **Project page**: `https://asundiev.github.io/portfolio/`
- **Custom domain**: Your configured domain

## Local Testing

To test the static export locally:

```bash
# Build the static site
npm run build

# The output will be in the /out directory
# You can serve it locally using any static server, for example:
npx serve out
```

## Configuration Files

- **next.config.js**: Next.js configuration with static export settings
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment
- **public/.nojekyll**: Prevents GitHub Pages from processing files with Jekyll

## Troubleshooting

### Images not loading
- Ensure all images are in the `public` directory
- Check that image paths don't have a leading slash if using basePath

### 404 errors on navigation
- Make sure `trailingSlash: true` is set in next.config.js
- Verify the basePath matches your deployment URL

### Styles not loading
- Clear your browser cache
- Check the browser console for any 404 errors
- Verify the basePath is correctly set in the workflow

## Custom Domain Setup

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Update `.github/workflows/deploy.yml`:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: ""
   ```
3. Configure your domain's DNS settings to point to GitHub Pages
4. In GitHub repository settings → Pages, add your custom domain
