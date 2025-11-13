import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, HeartPulse, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TextDisperse } from "@/components/ui/text-disperse";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import type { MapConnection } from "@/components/ui/map";
import { lazy } from "react";

const LazyWorldMap = lazy(() =>
  import("@/components/ui/map").then((module) => ({ default: module.WorldMap }))
);

const About = () => {
  const { t } = useTranslation();
  const mapSectionRef = useRef<HTMLDivElement | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    if (isMapVisible) return;
    const node = mapSectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMapVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isMapVisible]);

  const heroMetrics = [
    { label: "Years building", value: "15+" },
    { label: "Projects delivered", value: "350" },
    { label: "Global partners", value: "42" },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence as standard",
      description:
        "Every beam, bolt, and finish is held to rigorous QA benchmarks so our structures outlast expectations.",
    },
    {
      icon: Users,
      title: "One agile team",
      description:
        "Designers, engineers, PMs, and field leaders collaborate in one transparent delivery model.",
    },
    {
      icon: Lightbulb,
      title: "Innovation applied",
      description:
        "Digital twins, prefabrication, and data-rich dashboards de-risk delivery and accelerate handover.",
    },
    {
      icon: HeartPulse,
      title: "Safety & wellbeing",
      description:
        "From worker safety programs to community impact audits, people stay at the heart of every milestone.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Blueprint & beginnings",
      detail:
        "Buildora Engineers launches with a five-person crew, delivering bespoke residences that champion craftsmanship and trust.",
    },
    {
      year: "2015",
      title: "Scaling complexity",
      detail:
        "Our integrated design-build model unlocks large civic and commercial wins, growing our team to 80+ specialists.",
    },
    {
      year: "2020",
      title: "Digital-native delivery",
      detail:
        "We invest in BIM automation, prefabrication labs, and immersive coordination suites to de-risk mega developments.",
    },
    {
      year: "2024",
      title: "Global partner network",
      detail:
        "With partner offices across 6 regions, we orchestrate 350+ projects with consistent quality and cultural intelligence.",
    },
  ];

  const leadership = [
    {
      name: "Anika Fernando",
      role: "Founder & Executive Chair",
      bio: "Guides strategic growth while championing social impact, workforce development, and design excellence across every engagement.",
      image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Miguel Alvarez",
      role: "Chief Delivery Officer",
      bio: "Leads integrated project delivery—from preconstruction analytics to commissioning—ensuring timelines and budgets stay predictive.",
      image: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Dr. Meera Seneviratne",
      role: "Head of Sustainability",
      bio: "Architects our decarbonization framework, embedding circular strategies and community wellbeing metrics into every brief.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const globalConnections: MapConnection[] = [
    {
      start: { lat: 6.9271, lng: 79.8612, label: "Colombo Studio" },
      end: { lat: 25.2048, lng: 55.2708, label: "Dubai Hub" },
    },
    {
      start: { lat: 6.9271, lng: 79.8612, label: "Colombo Studio" },
      end: { lat: 51.5072, lng: -0.1276, label: "London Lab" },
    },
    {
      start: { lat: 40.7128, lng: -74.006, label: "New York Ops" },
      end: { lat: 34.0522, lng: -118.2437, label: "LA Delivery" },
    },
    {
      start: { lat: 52.3676, lng: 4.9041, label: "Amsterdam BIM" },
      end: { lat: 1.3521, lng: 103.8198, label: "Singapore PMO" },
    },
    {
      start: { lat: 35.6895, lng: 139.6917, label: "Tokyo Factory" },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney Prefab" },
    },
  ];

  return (
    <div className="bg-background pt-16">
      {/* Hero */}
      <section id="about-us" className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute left-1/2 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <TextDisperse className="text-2xl font-semibold tracking-tight text-primary/90 md:text-3xl">
                Buildora Engineers
              </TextDisperse>
            </div>
            <TypewriterEffectSmooth
              words={[
                { text: "Engineering" },
                { text: "places" },
                { text: "that" },
                { text: "elevate" },
                { text: "communities", className: "text-primary" },
              ]}
              className="my-6 flex flex-wrap justify-center gap-3 text-center text-4xl font-bold md:text-6xl"
              cursorClassName="bg-primary"
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Buildora Engineers is a multidisciplinary team of architects, engineers, makers, and project futurists
              delivering landmark developments with precision and humanity. Our integrated delivery model bridges vision
              and buildability, sustainability and speed, data and design.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-primary/20 bg-card/80 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-semibold text-primary">{metric.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story & Timeline */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <CardSpotlight className="rounded-3xl border border-border/60 bg-card/80">
            <div className="grid gap-10 lg:grid-cols-[0.7fr,1.3fr]">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Our story</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  What began as a boutique studio crafting bespoke residences has evolved into a global construction
                  collective. Today we orchestrate cross-continent delivery teams, modular fabrication labs, and
                  community-first engagement to build at the speed of change.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Along the way we have fostered long-term partnerships with clients, consultants, and craft experts who
                  share our commitment to safety, sustainability, and design excellence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:block" />
                <div className="space-y-10 md:pl-16">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="relative rounded-2xl border border-border/60 bg-background/70 p-6"
                    >
                      <div className="absolute -left-8 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-card md:flex">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-primary">{milestone.year}</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">{milestone.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{milestone.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground md:text-4xl"
            >
              Our operating principles
            </motion.h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              We invest in systems, partnerships, and culture that keep us accountable to excellence—across sites,
              supply chains, and the communities we serve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="h-full rounded-3xl border border-border/60 bg-card/90 p-6 shadow-lg shadow-primary/5 backdrop-blur">
                <div className="inline-flex rounded-2xl bg-primary/10 p-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="our-experts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground md:text-4xl"
            >
              Leadership in action
            </motion.h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Our leadership collective blends architecture, engineering, business strategy, and sustainability to
              steward complex programs with empathy and precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                    <div className="text-lg font-semibold text-white">{leader.name}</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">{leader.role}</div>
                  </div>
                </div>
                <div className="p-6 text-sm leading-relaxed text-muted-foreground">{leader.bio}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map */}
      <section ref={mapSectionRef} className="relative overflow-hidden bg-primary/5 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground md:text-4xl"
            >
              A global network with local intelligence
            </motion.h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Project intelligence flows seamlessly between our studios in Asia, Europe, the Middle East, Australia,
              and North America—ensuring every site benefits from shared learnings and specialized talent.
            </p>
          </div>
          {isMapVisible ? (
            <Suspense
              fallback={
                <div className="flex h-[320px] items-center justify-center rounded-3xl border border-border/60 bg-card/80 text-sm text-muted-foreground">
                  Loading map...
                </div>
              }
            >
              <LazyWorldMap dots={globalConnections} lineColor="#0EA5E9" />
            </Suspense>
          ) : (
            <div className="flex h-[320px] items-center justify-center rounded-3xl border border-border/60 bg-card/80 text-sm text-muted-foreground">
              Loading map...
            </div>
          )}
        </div>
      </section>

      {/* Join Buildora */}
      <section id="join-be" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground md:text-4xl"
            >
              Join the Buildora Engineers collective
            </motion.h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Whether you are an experienced construction professional or a specialist partner, we are always expanding
              our network of collaborators who share a passion for purposeful builds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_25px_65px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold text-accent">Careers & apprenticeships</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Step into a delivery pod where designers, planners, and field teams collaborate as one. We support
                professional certifications, leadership mentoring, and on-the-job innovation labs.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li>• Site leadership roles across island-wide programmes</li>
                <li>• Graduate apprenticeships in design management</li>
                <li>• Rotations through sustainability & digital construction teams</li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-accent hover:border-primary"
              >
                Share your profile
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 p-8 shadow-[0_25px_65px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold text-accent">Delivery partners & suppliers</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Join our preferred network spanning specialist trades, fabrication, technology, and sustainable material
                sourcing. Buildora maintains transparent evaluation and rapid onboarding.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li>• ISO-aligned procurement and QA processes</li>
                <li>• Prompt payment commitments with digital tracking</li>
                <li>• Visibility into upcoming tenders and design competitions</li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-primary/30 transition hover:bg-primary/90"
              >
                Register your interest
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-primary/10 px-8 py-12 text-center backdrop-blur">
            <h2 className="text-3xl font-bold text-primary">Let’s build your next landmark with Buildora</h2>
            <p className="mt-4 text-sm text-primary/90 md:text-base">
              Share your vision and we’ll orchestrate the strategy, teams, and technology to bring it to life—on time,
              on budget, and built to endure.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Talk to our team
                </Button>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center"
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Explore services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
