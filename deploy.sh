#!/usr/bin/env bash
# deploy.sh
# Deploys the cloned site to Cloudflare Pages via Wrangler.
#
# Prerequisites:
#   1. npm install -g wrangler   (or npx wrangler)
#   2. wrangler login            (authenticate with Cloudflare)
#   3. GitHub repo connected to Cloudflare Pages (optional, for auto-deploys)
#
# Usage:
#   ./deploy.sh

set -e

echo "================================================"
echo "  Cloudflare Pages Deploy"
echo "================================================"

# 1. Install dependencies
echo "[1/4] Installing dependencies..."
npm install

# 2. Build (src -> dist)
echo "[2/4] Building site..."
npm run build

# 3. Deploy to Cloudflare Pages
echo "[3/4] Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name my-website-clone

# 4. Done
echo "[4/4] Done!"
echo ""
echo "Your site should now be live on Cloudflare Pages."
echo "Check your Cloudflare dashboard for the assigned URL."
echo ""
echo "Tip: To enable automatic deploys on every git push,"
echo "connect this GitHub repo to Cloudflare Pages in the dashboard."
