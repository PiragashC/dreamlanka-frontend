import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { initAnalytics } from "./lib/analytics";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

const app = (
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Check if we should hydrate (SSR) or render fresh (CSR)
const shouldHydrate = container.hasChildNodes() && container.children.length > 0;

if (shouldHydrate) {
  try {
    hydrateRoot(container, app);
  } catch (error) {
    // If hydration fails, clear and re-render
    console.error("Hydration failed, re-rendering:", error);
    container.innerHTML = "";
    createRoot(container).render(app);
  }
} else {
  createRoot(container).render(app);
}

initAnalytics();

