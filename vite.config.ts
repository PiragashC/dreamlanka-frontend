import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: isSsrBuild ? "dist/server" : "dist",
    ssrManifest: !isSsrBuild,
    rollupOptions: isSsrBuild
      ? {}
      : {
        input: path.resolve(__dirname, "index.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-router")) {
                return "vendor-react";
              }
              if (
                id.includes("framer-motion") ||
                id.includes("lucide-react") ||
                id.includes("usehooks-ts") ||
                id.includes("@tabler/icons-react")
              ) {
                return "vendor-visuals";
              }
            }
          },
        },
      },
    chunkSizeWarningLimit: 900,
  },
}));
