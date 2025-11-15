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

async function startServer() {
  const app = express();
  app.disable("x-powered-by");
  let vite;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(
      serveStatic(resolve("dist/client"), {
        index: false,
        setHeaders(res, filePath) {
          if (filePath.endsWith(".html")) {
            res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
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
      } else {
        const templatePath = resolve("dist/client/index.html");
        template = fs.readFileSync(templatePath, "utf-8");
        lastModified = fs.statSync(templatePath).mtime.toUTCString();
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const appHtml = await render(url);
      const html = template.replace(`<!--app-html-->`, appHtml);

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

