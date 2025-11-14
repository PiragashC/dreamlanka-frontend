import { HeroSection } from "@/components/ui/3d-hero-section-boxes";
import MissionSection from "@/components/home/Mission";
import ServicesSection from "@/components/home/Services";
import ConstructionClientsSection from "@/components/home/ConstructionClients";
import RecentProjectsSection from "@/components/home/RecentProjects";
import TestimonialsSection from "@/components/home/Testimonials";
import { Link } from "react-router-dom";

const SeoOverviewSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto flex flex-col gap-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
          Purpose-Built Construction Services Across Sri Lanka
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
          Buildora Engineers combines design intelligence, field precision, and collaborative project
          management to deliver enduring residential, commercial, and infrastructure spaces in every
          province of Sri Lanka. From pre-construction planning through post-handover support, our
          teams focus on transparent communication, smart material choices, and safe, on-time delivery.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <article className="space-y-4 rounded-3xl border border-primary/10 bg-primary/5 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-primary">
            Full-Lifecycle Project Delivery
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">
            Our approach brings architects, cost consultants, engineers, and site crews together from
            day one. We align budgets, coordinate approvals, and plan logistics so your build stays
            ahead of schedule and within scope. Explore our
            {" "}
            <Link to="/services" className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 hover:text-accent/80">
              integrated services
            </Link>
            {" "}
            to see how we tailor delivery models for residential towers, hospitality assets, education
            facilities, and civic infrastructure.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Recent collaborations include coastal eco-resorts, heritage restorations in Jaffna, and
            energy-efficient logistics hubs. Visit our
            {" "}
            <Link to="/projects" className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 hover:text-accent/80">
              project gallery
            </Link>
            {" "}
            for highlights that demonstrate our quality benchmarks and community impact.
          </p>
        </article>

        <article className="space-y-4 rounded-3xl border border-accent/10 bg-accent/5 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-accent">
            Trusted Partnerships & Ongoing Support
          </h3>
          <p className="text-base leading-relaxed text-foreground/80">
            Clients choose Buildora for the long term. We provide responsive maintenance teams,
            technical documentation, and data-rich reporting to protect your investment. Discover how
            our specialists collaborate with developers, municipalities, and private owners in the
            {" "}
            <Link to="/about" className="font-semibold text-primary underline decoration-primary/50 underline-offset-4 hover:text-primary/80">
              Buildora story
            </Link>
            {" "}
            and meet the experts shaping our collective success.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Whether you&apos;re exploring budget tiers or need compliance guidance, we share practical
            tools in the
            {" "}
            <Link to="/resources" className="font-semibold text-primary underline decoration-primary/50 underline-offset-4 hover:text-primary/80">
              resources hub
            </Link>
            {" "}
            and tailor packages in our
            {" "}
            <Link to="/packages" className="font-semibold text-primary underline decoration-primary/50 underline-offset-4 hover:text-primary/80">
              pricing suites
            </Link>
            . Ready to begin? Reach out to our
            {" "}
            <Link to="/contact" className="font-semibold text-accent underline decoration-accent/50 underline-offset-4 hover:text-accent/80">
              collaborative team
            </Link>
            {" "}
            for a consultation.
          </p>
        </article>
      </div>

    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ConstructionClientsSection />
      <RecentProjectsSection />
      <TestimonialsSection />
      <SeoOverviewSection />
    </>
  );
};

export default Home;
