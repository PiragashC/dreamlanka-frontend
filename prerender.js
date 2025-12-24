import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toAbs = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Automatically extract routes from App.tsx
const appContent = fs.readFileSync(toAbs('src/App.tsx'), 'utf-8');
const routeMatches = appContent.matchAll(/path="([^"]+)"/g);
const routesToPrerender = Array.from(routeMatches)
    .map(match => match[1])
    .filter(route => route !== '*');

// Add root and 404 manually to ensure they are present
if (!routesToPrerender.includes('/')) routesToPrerender.push('/');
if (!routesToPrerender.includes('/404')) routesToPrerender.push('/404');

(async () => {
    console.log('Detected routes:', routesToPrerender);

    for (const url of routesToPrerender) {
        try {
            const appHtml = await render(url);
            const html = template.replace(`<!--app-html-->`, appHtml);

            let finalPath;
            if (url === '/') {
                finalPath = toAbs('dist/index.html');
            } else if (url === '/404' || url === '404') {
                finalPath = toAbs('dist/404.html');
            } else {
                // Ensure path starts with / and remove trailing / for consistency
                const cleanUrl = url.startsWith('/') ? url : `/${url}`;
                finalPath = toAbs(`dist${cleanUrl}/index.html`);
            }

            const dir = path.dirname(finalPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(finalPath, html);
            console.log('pre-rendered:', url, '->', finalPath);
        } catch (e) {
            console.error(`Failed to pre-render ${url}:`, e);
        }
    }

    console.log('Finished pre-rendering.');
})();
