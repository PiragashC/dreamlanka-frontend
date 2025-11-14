import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import ConstructionHoverFooter from "@/components/ConstructionHoverFooter";
import "./i18n/config";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AppSuspenseFallback from "@/components/ui/app-suspense-fallback";
import { reportPageView } from "@/lib/analytics";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Packages from "./pages/Packages";
import Resources from "./pages/Resources";
import LearningHub from "./pages/LearningHub";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CompanyAbout from "./pages/company/AboutCompany";
import CompanyExperts from "./pages/company/OurExperts";
import CompanyJoin from "./pages/company/JoinBuildora";
import SiteMap from "./pages/SiteMap";
import SearchPage from "./pages/Search";
import PackageSamples from "./pages/packages/Samples";
import PackageRates from "./pages/packages/Rates";
import PackageExplore from "./pages/packages/Explore";
import ResourceApprovals from "./pages/resources/Approvals";
import ResourceArchitecture from "./pages/resources/ArchitectureGallery";
import ResourceInterior from "./pages/resources/InteriorGallery";
import ResourceConsultation from "./pages/resources/FreeConsultation";

const ROUTE_LOADER_MIN_DURATION = 600;

const App = () => {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(() =>
    typeof window === "undefined" ? false : true
  );
  const loaderTimeoutRef = useRef<number>();

  useEffect(() => {
    if (loaderTimeoutRef.current) {
      window.clearTimeout(loaderTimeoutRef.current);
    }

    setIsRouteLoading(true);

    loaderTimeoutRef.current = window.setTimeout(() => {
      setIsRouteLoading(false);
    }, ROUTE_LOADER_MIN_DURATION);

    return () => {
      if (loaderTimeoutRef.current) {
        window.clearTimeout(loaderTimeoutRef.current);
      }
    };
  }, [location]);

  useEffect(() => {
    reportPageView();
  }, [location]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <ScrollToTop />
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/company" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/company/about" element={<CompanyAbout />} />
            <Route path="/company/experts" element={<CompanyExperts />} />
            <Route path="/company/join" element={<CompanyJoin />} />
            <Route path="/packages/samples" element={<PackageSamples />} />
            <Route path="/packages/rates" element={<PackageRates />} />
            <Route path="/packages/explore" element={<PackageExplore />} />
            <Route path="/resources/approvals" element={<ResourceApprovals />} />
            <Route path="/resources/architecture-gallery" element={<ResourceArchitecture />} />
            <Route path="/resources/interior-gallery" element={<ResourceInterior />} />
            <Route path="/resources/free-consultation" element={<ResourceConsultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ConstructionHoverFooter />

        {isRouteLoading && (
          <div className="fixed inset-0 z-50 bg-background">
            <AppSuspenseFallback />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
