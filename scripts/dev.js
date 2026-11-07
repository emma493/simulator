/**
 * dev.js
 * Simple local dev server for previewing the cloned site before deploying.
 * Run with: npm run dev
 * Opens http://localhost:5173
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PORT = 5173;
const SRC = path.resolve(__dirname, "..", "src");

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

const server = http.createServer((req, res) => {
  let filePath = path.join(SRC, req.url === "/" ? "/index.html" : req.url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mime[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Fallback to index.html for client-side routing (SPA)
        fs.readFile(path.join(SRC, "index.html"), (err2, home) => {
          if (err2) {
            res.writeHead(404);
            res.end("Not found");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(home);
          }
        });
      } else {
        res.writeHead(500);
        res.end("Server error");
      }
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Dev server running at http://localhost:${PORT}`);
  console.log(`   Serving: ${SRC}`);
  console.log(`   Press Ctrl+C to stop`);
});
