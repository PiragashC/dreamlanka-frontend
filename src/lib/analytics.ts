declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const appendScript = () => {
  if (!GA_ID || typeof document === "undefined") {
    return;
  }

  if (document.getElementById("ga-gtag")) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.id = "ga-gtag";
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (!GA_ID || typeof window === "undefined") {
    console.warn("Google Analytics: VITE_GA_MEASUREMENT_ID not set");
    return;
  }

  appendScript();

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  // Make gtag available globally
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID, {
    anonymize_ip: true,
    send_page_view: false, // We'll send page views manually for SPA
  });
};

export const reportPageView = (path?: string) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  const pagePath = path || window.location.pathname + window.location.search;

  window.gtag("config", GA_ID, {
    page_path: pagePath,
    page_title: document.title,
  });
};


