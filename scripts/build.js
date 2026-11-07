/**
 * build.js
 * Copies src/ -> dist/ for Cloudflare Pages deployment.
 * Run with: npm run build
 */

const fs = require("fs");
const path = require("path");

const SRC = path.resolve(__dirname, "..", "src");
const DIST = path.resolve(__dirname, "..", "dist");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory not found: ${src}`);
    process.exit(1);
  }

  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(SRC, DIST);
console.log(`✅ Build complete: ${SRC} -> ${DIST}`);
