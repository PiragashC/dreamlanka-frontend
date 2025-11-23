import fs from "node:fs";
import path from "node:path";
import express from "express";
import compression from "compression";
import serveStatic from "serve-static";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resolve = (p) => path.resolve(__dirname, p);

const isProd = process.env.NODE_ENV === "production";
const CANONICAL_HOST = process.env.CANONICAL_HOST || "buildoraengineers.com";

async function startServer() {
  const app = express();
  app.set("trust proxy", 1);
  app.disable("x-powered-by");
  let vite;

  // Lightweight health endpoint for Render health checks and uptime monitors
  app.get("/healthz", (_req, res) => {
    res.status(200).type("text/plain").send("ok");
  });

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    // Set CSP for dev mode (using hash for inline script)
    app.use((req, res, next) => {
      res.setHeader(
        "Content-Security-Policy",
        [
          "default-src 'self'",
          `script-src 'self' 'unsafe-inline' 'sha256-eIoiZx1z+daMhxqt6JWedlRfaVOS+kbisFjiPmgM7OE=' 'sha256-shadRLjg5fE9Z2WM7AL6VBV8XxTTTaDJes8nMsaa9ZU=' https://www.googletagmanager.com https://www.google-analytics.com`,
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src 'self' data: https://images.unsplash.com https://www.google-analytics.com https://placehold.co https://framerusercontent.com",
          "font-src 'self' https://fonts.gstatic.com",
          "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; ")
      );
      next();
    });
  } else {
    app.use((req, res, next) => {
      const host = (req.headers.host || "").split(":")[0];
      if (host && host !== CANONICAL_HOST) {
        return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
      }
      res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
      res.setHeader(
        "Content-Security-Policy",
        [
          "default-src 'self'",
          `script-src 'self' 'unsafe-inline' 'sha256-eIoiZx1z+daMhxqt6JWedlRfaVOS+kbisFjiPmgM7OE=' 'sha256-shadRLjg5fE9Z2WM7AL6VBV8XxTTTaDJes8nMsaa9ZU=' https://www.googletagmanager.com https://www.google-analytics.com`,
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src 'self' data: https://images.unsplash.com https://www.google-analytics.com https://placehold.co https://framerusercontent.com",
          "font-src 'self' https://fonts.gstatic.com",
          "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; ")
      );
      next();
    });
    app.use(compression());
    app.use(
      serveStatic(resolve("dist/client"), {
        index: false,
        setHeaders(res, filePath) {
          if (filePath.endsWith(".html")) {
            res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
          } else if (filePath.endsWith(".webmanifest")) {
            res.setHeader("Content-Type", "application/manifest+json");
            res.setHeader("Cache-Control", "public, max-age=86400");
          } else if (filePath.endsWith(".ico")) {
            res.setHeader("Content-Type", "image/x-icon");
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          } else {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );
  }

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;
      let lastModified = new Date().toUTCString();

      if (!isProd) {
        const templatePath = resolve("index.html");
        template = fs.readFileSync(templatePath, "utf-8");
        lastModified = fs.statSync(templatePath).mtime.toUTCString();
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
        
        // No need to inject nonce - using hash in CSP instead
      } else {
        const templatePath = resolve("dist/client/index.html");
        template = fs.readFileSync(templatePath, "utf-8");
        lastModified = fs.statSync(templatePath).mtime.toUTCString();
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const appHtml = await render(url);
      let html = template.replace(`<!--app-html-->`, appHtml);

      // No need to inject nonce - using hash in CSP instead

      res
        .status(200)
        .set({
          "Content-Type": "text/html",
          "Last-Modified": lastModified,
        })
        .end(html);
    } catch (error) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(error);
      }
      console.error(error);
      res.status(500).end(error.stack);
    }
  });

  const port = process.env.PORT || 4173;
  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

startServer();

