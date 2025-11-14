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
  let vite;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(serveStatic(resolve("dist/client"), { index: false }));
  }

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProd) {
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = fs.readFileSync(resolve("dist/client/index.html"), "utf-8");
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const appHtml = await render(url);
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
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

