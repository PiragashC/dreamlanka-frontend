import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import ConstructionHoverFooter from "@/components/ConstructionHoverFooter";
import "./i18n/config";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AppSuspenseFallback from "@/components/ui/app-suspense-fallback";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<AppSuspenseFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <ConstructionHoverFooter />
    </div>
  </ThemeProvider>
);

export default App;
