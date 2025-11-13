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
const Packages = lazy(() => import("./pages/Packages"));
const Resources = lazy(() => import("./pages/Resources"));
const LearningHub = lazy(() => import("./pages/LearningHub"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CompanyAbout = lazy(() => import("./pages/company/AboutCompany"));
const CompanyExperts = lazy(() => import("./pages/company/OurExperts"));
const CompanyJoin = lazy(() => import("./pages/company/JoinBuildora"));
const PackageSamples = lazy(() => import("./pages/packages/Samples"));
const PackageRates = lazy(() => import("./pages/packages/Rates"));
const PackageExplore = lazy(() => import("./pages/packages/Explore"));
const ResourceApprovals = lazy(() => import("./pages/resources/Approvals"));
const ResourceArchitecture = lazy(() => import("./pages/resources/ArchitectureGallery"));
const ResourceInterior = lazy(() => import("./pages/resources/InteriorGallery"));
const ResourceConsultation = lazy(() => import("./pages/resources/FreeConsultation"));

const App = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<AppSuspenseFallback />}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <ConstructionHoverFooter />
    </div>
  </ThemeProvider>
);

export default App;
