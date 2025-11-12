import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/ui/3d-hero-section-boxes";

const MissionSection = lazy(() => import("@/components/home/Mission"));
const ServicesSection = lazy(() => import("@/components/home/Services"));
const ConstructionClientsSection = lazy(() => import("@/components/home/ConstructionClients"));
const RecentProjectsSection = lazy(() => import("@/components/home/RecentProjects"));
const TestimonialsSection = lazy(() => import("@/components/home/Testimonials"));

const SectionFallback = () => <div className="py-24" aria-busy="true" />;
const lazySections = [
  MissionSection,
  ServicesSection,
  ConstructionClientsSection,
  RecentProjectsSection,
  TestimonialsSection,
];

const Home = () => {
  return (
    <>
      <HeroSection />
      {lazySections.map((Section, index) => (
        <Suspense fallback={<SectionFallback />} key={index}>
          <Section />
        </Suspense>
      ))}
    </>
  );
};

export default Home;
