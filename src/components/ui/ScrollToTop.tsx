import { useEffect, useLayoutEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const supportsSmoothScroll = () =>
  typeof document !== "undefined" &&
  document.documentElement != null &&
  "scrollBehavior" in document.documentElement.style;

const scrollToTopSmoothly = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (supportsSmoothScroll()) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    window.scrollTo(0, 0);
  }
};

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useIsomorphicLayoutEffect(() => {
    scrollToTopSmoothly();
  }, [pathname]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
};

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 400);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTopSmoothly}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-primary/40 bg-background/90 p-3 text-primary shadow-lg backdrop-blur transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/80 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

const ScrollHandler = () => (
  <>
    <ScrollToTopOnRoute />
    <ScrollTopButton />
  </>
);

export default ScrollHandler;
