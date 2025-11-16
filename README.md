Buildora Engineers Frontend

Environment variables

Create a .env file in the project root for local development. Copy from .env.example:

VITE_GA_MEASUREMENT_ID=
CANONICAL_HOST=buildoraengineers.com

What they do

- VITE_GA_MEASUREMENT_ID (optional, client-side)
  - Enables Google Analytics gtag.js integration.
  - If empty, analytics stays disabled without errors.
  - Example: G-XXXXXXXXXX

- CANONICAL_HOST (server-side)
  - The single host name you want to serve (no www/non-www duplicates).
  - server.js will 301-redirect other hosts to this one and add HSTS.
  - Example: buildora-lgn9.onrender.com

Where to set in Render

- Web Service → Settings → Environment
  - Add VITE_GA_MEASUREMENT_ID (if you want GA in production).
  - Add CANONICAL_HOST to match your chosen primary host/subdomain.

Local setup

1) cp .env.example .env
2) Fill any values you need (e.g., VITE_GA_MEASUREMENT_ID).
3) npm run dev

Notes

- Only variables starting with VITE_ are exposed to the browser by Vite.
- Server-side variables (like CANONICAL_HOST) are not exposed to the client; set them in your hosting environment for production.


