declare global {
  interface Window {
    dataLayer: unknown[];
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
    return;
  }

  appendScript();

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }

  gtag("js", new Date());
  gtag("config", GA_ID, {
    anonymize_ip: true,
  });
};

export const reportPageView = () => {
  if (!GA_ID || typeof window === "undefined" || !window.dataLayer) {
    return;
  }

  window.dataLayer.push(["event", "page_view"]);
};


