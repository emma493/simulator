# Cloudflare Pages Deployment Guide

This guide walks you through deploying your cloned website from GitHub to Cloudflare Pages.

## Prerequisites

- A GitHub account
- A Cloudflare account
- This repo pushed to GitHub

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial project structure"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-website-clone.git
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create application**
3. Choose **Pages** → **Connect to Git**
4. Select your GitHub account and the `my-website-clone` repository
5. Click **Begin setup**

## Step 3: Configure build settings

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Framework preset | None (static HTML) |

Click **Save and Deploy**.

## Step 4: Verify deployment

- Cloudflare will assign a URL like `https://my-website-clone.pages.dev`
- Every push to `main` triggers a new deployment
- You can add a custom domain in the Pages dashboard

## Troubleshooting

**Build fails:** Check that `npm run build` works locally first.

**404 on refresh:** The `_routes.json` file handles SPA fallback to `index.html`. If you're using pure multi-page HTML (not a SPA), you can remove `_routes.json`.

**Assets not loading:** Make sure all asset paths in your HTML are relative (e.g., `assets/css/style.css`) and the files exist in `src/assets/`.
