import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  Factory,
  Hammer,
  Home,
  LineChart,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import {
  AnimatedCard,
  type AnimatedCardProps,
} from "@/components/ui/feature-block-animated-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectMetric = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type ProjectStory = {
  id: number;
  title: string;
  location: string;
  categoryLabel: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

type ProjectCategory = {
  key: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  hero: {
    headline: string;
    narrative: string;
  };
  stats: { label: string; value: string }[];
  highlights: AnimatedCardProps[];
  projects: ProjectStory[];
};

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    key: "commercial",
    title: "Commercial",
    icon: Building2,
    accent: "from-sky-500/20 via-sky-400/10 to-transparent",
    hero: {
      headline: "Commercial destinations that accelerate business performance",
      narrative:
        "Our commercial portfolio spans headquarters, innovation campuses, hospitality-grade workplaces, and adaptive reuse. Each project balances brand identity with building intelligence, delivering spaces where teams thrive and operations scale effortlessly.",
    },
    stats: [
      { label: "Cumulative commercial GFA", value: "8.6M sq ft" },
      { label: "Average ROI uplift", value: "+18%" },
      { label: "Repeat clients", value: "92%" },
    ],
    highlights: [
      {
        title: "Hybrid workplace ecosystems",
        description:
          "Digital twins, flexible cores, and smart services keep tenant experience friction-free across hybrid teams.",
        icons: [
          { icon: <Building2 className="h-6 w-6 text-sky-400" />, size: "md" },
          { icon: <LineChart className="h-6 w-6 text-emerald-400" />, size: "md" },
          { icon: <Users className="h-6 w-6 text-indigo-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-sky-50/70 to-blue-50/40 dark:from-white/5 dark:to-white/[0.08] border border-sky-200/30 dark:border-sky-500/20",
      },
      {
        title: "Sustainability at scale",
        description:
          "Net-zero ready systems and biophilic design reduce operational cost while boosting WELL scores.",
        icons: [
          { icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />, size: "md" },
          { icon: <Sparkles className="h-5 w-5 text-lime-400" />, size: "sm" },
          { icon: <Factory className="h-6 w-6 text-slate-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-emerald-50/70 via-white/60 to-emerald-100/40 dark:from-white/5 dark:via-white/[0.04] dark:to-white/[0.02] border border-emerald-200/20 dark:border-emerald-500/15",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Downtown Innovation Campus",
        location: "Business District, CA",
        categoryLabel: "Commercial Construction",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        summary:
          "A 15-story mixed-use headquarters designed for hybrid teams with hospitality-grade amenities and wellness terraces.",
        challenge:
          "Deliver a future-proof hub while tenants continued operations in adjacent towers and the client demanded aggressive energy targets.",
        solution:
          "Implemented modular prefabricated pods, digital twin commissioning, and a microgrid-ready energy loop that integrates solar canopies with battery storage.",
        metrics: [
          { label: "Schedule", value: "18 months", icon: Clock },
          { label: "Gross floor area", value: "250,000 sq ft", icon: Ruler },
          { label: "Pre-leasing", value: "98%", icon: Users },
        ],
        outcomes: [
          "LEED Platinum certification with 32% reduction in energy intensity",
          "Digital twin analytics cut maintenance response times by 45%",
          "Tenant app adoption hit 94% in the first 30 days",
        ],
        testimonial: {
          quote:
            "Their team orchestrated construction, technology, and workplace experience in a single, seamless narrative.",
          author: "Maya Chen",
          role: "Chief Workplace Officer, Horizon Labs",
        },
      },
      {
        id: 2,
        title: "Tech Hub Adaptive Reuse",
        location: "Austin Innovation Corridor, TX",
        categoryLabel: "Adaptive Reuse",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Industrial warehouse transformed into a campus for R&D, showcasing modular labs, event venues, and prototype bays.",
        challenge:
          "Phase construction without downtime for existing tenants while integrating redundant power for sensitive equipment.",
        solution:
          "Introduced mezzanine walkways, VR-enabled design approvals, and a redundant microgrid with hot-swappable lab utilities.",
        metrics: [
          { label: "Timeline compression", value: "-22%", icon: Clock },
          { label: "Innovation suites", value: "12 modules", icon: Building2 },
          { label: "Capital efficiency", value: "$210/ft²", icon: LineChart },
        ],
        outcomes: [
          "Event-ready atrium secured 18 new strategic partnerships",
          "IoT monitoring reduced maintenance tickets by 38%",
          "Labs reconfigure in 6 hours to support evolving product teams",
        ],
      },
      {
        id: 3,
        title: "Riverfront Retail Pavilion",
        location: "River District, OR",
        categoryLabel: "Experiential Retail",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Reimagined retail destination combining flagship stores, curated F&B, and waterfront activations.",
        challenge:
          "Increase dwell time and sales while protecting against seasonal flooding.",
        solution:
          "Installed hydraulic plazas, interactive media facades, and a unified loyalty platform powering geo-targeted experiences.",
        metrics: [
          { label: "Weekly visitors", value: "42k", icon: Users },
          { label: "Average spend", value: "+24%", icon: LineChart },
          { label: "Activation space", value: "18,000 sq ft", icon: Building2 },
        ],
        outcomes: [
          "Anchor tenants saw 31% revenue uplift during first quarter",
          "Lighting masterplan extended evening footfall by 2.3 hours",
          "Smart kiosks gather 12k feedback datapoints monthly",
        ],
      },
    ],
  },
  {
    key: "residential",
    title: "Residential",
    icon: Home,
    accent: "from-rose-500/20 via-rose-400/10 to-transparent",
    hero: {
      headline: "Signature residences crafted for legacy living",
      narrative:
        "Our residential portfolio fuses architectural heritage with future-ready comforts. From hillside estates to skyline penthouses, each commission is bespoke—curated with artisanship, resilient systems, and emotional resonance.",
    },
    stats: [
      { label: "Luxury homes delivered", value: "85" },
      { label: "Average energy gain", value: "-28%" },
      { label: "Client satisfaction", value: "4.9★" },
    ],
    highlights: [
      {
        title: "Curated craftsmanship",
        description:
          "Millwork ateliers, stone studios, and lighting labs collaborate to realize one-of-one interiors.",
        icons: [
          { icon: <Hammer className="h-6 w-6 text-rose-400" />, size: "md" },
          { icon: <Sparkles className="h-5 w-5 text-amber-400" />, size: "sm" },
          { icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-rose-50/70 via-amber-50/40 to-rose-100/30 dark:from-white/5 dark:via-white/[0.04] dark:to-white/[0.02] border border-rose-200/30 dark:border-rose-500/20",
      },
      {
        title: "Connected sanctuaries",
        description:
          "Discreet smart-home infrastructure orchestrates lighting, climate, wellness, and art protection with ease.",
        icons: [
          { icon: <Home className="h-6 w-6 text-indigo-400" />, size: "md" },
          { icon: <Users className="h-6 w-6 text-slate-400" />, size: "md" },
          { icon: <LineChart className="h-6 w-6 text-emerald-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-indigo-50/70 to-blue-50/40 dark:from-white/5 dark:to-white/[0.08] border border-indigo-200/30 dark:border-indigo-500/15",
      },
    ],
    projects: [
      {
        id: 4,
        title: "Hillside Estate Renewal",
        location: "Beverly Hills, CA",
        categoryLabel: "Luxury Renovation",
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Historic hillside residence reimagined with wellness suites, terraced living, and gallery lighting.",
        challenge:
          "Preserve heritage stonework while introducing geothermal conditioning and seismic upgrades.",
        solution:
          "Threaded a glass atrium through original masonry, deployed geothermal loops, and crafted spa suites with electrolyte hydrotherapy.",
        metrics: [
          { label: "Project span", value: "12 months", icon: Clock },
          { label: "Interior program", value: "18,500 sq ft", icon: Ruler },
          { label: "Energy savings", value: "-34%", icon: LineChart },
        ],
        outcomes: [
          "Automated glazing protects art pieces from UV exposure",
          "Greywater irrigation covers 85% of landscape demand",
          "Curated artisan network delivered 120 bespoke pieces",
        ],
        testimonial: {
          quote:
            "They honored our home's story while delivering a lifestyle we never thought possible.",
          author: "Evelyn Hart",
          role: "Homeowner",
        },
      },
      {
        id: 5,
        title: "Skyline Penthouse",
        location: "Seattle, WA",
        categoryLabel: "Penthouse Fit-out",
        image:
          "https://images.unsplash.com/photo-1512914890250-3351d24c58bf?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Two-story penthouse with sculpted stair, infinity-edge lounge, and kinetic acoustic ceiling.",
        challenge:
          "Integrate immersive AV and wellness tech without compromising panoramic views or artisanal finishes.",
        solution:
          "Concealed infrastructure within floating millwork, synchronized lighting sculpture to circadian rhythms, and installed acoustic glazing.",
        metrics: [
          { label: "Delivery", value: "8 months", icon: Clock },
          { label: "Smart scenes", value: "42", icon: LineChart },
          { label: "Bespoke pieces", value: "120+", icon: Sparkles },
        ],
        outcomes: [
          "Biophilic lighting improved residents' sleep scores by 18%",
          "Wine gallery stabilized at 55°F with vibration isolation",
          "Acoustic glazing reduced downtown noise by 38 dB",
        ],
      },
      {
        id: 6,
        title: "Coastal Family Retreat",
        location: "Malibu Bluffs, CA",
        categoryLabel: "Ground-up Residence",
        image:
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Oceanfront retreat with retractable glazing, hurricane-rated shell, and wellness spa deck.",
        challenge:
          "Deliver a seamless indoor-outdoor home resilient to salt air and extreme weather conditions.",
        solution:
          "Used marine-grade materials, passive ventilation loops, and centralized storm shutters that deploy in under 90 seconds.",
        metrics: [
          { label: "Siteworks", value: "6 months", icon: Hammer },
          { label: "Indoor/outdoor zones", value: "9", icon: Home },
          { label: "Resilience rating", value: "Category 5", icon: ShieldCheck },
        ],
        outcomes: [
          "Passive cooling keeps interiors 5°F cooler without mechanical load",
          "Family suites reconfigure for multigenerational living",
          "Storm mitigation reduced insurance premiums by 22%",
        ],
      },
    ],
  },
  {
    key: "infrastructure",
    title: "Infrastructure",
    icon: Factory,
    accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    hero: {
      headline: "Resilient infrastructure for connected regions",
      narrative:
        "We engineer the arteries of thriving regions—transport corridors, utility backbones, logistics parks, and smart urban frameworks—crafted to endure and evolve across generations.",
    },
    stats: [
      { label: "Civil infrastructure delivered", value: "480 km" },
      { label: "Average schedule savings", value: "11%" },
      { label: "Safety commendations", value: "27" },
    ],
    highlights: [
      {
        title: "Future-ready mobility",
        description:
          "Multimodal corridors and EV-ready hubs improve throughput while slashing emissions.",
        icons: [
          { icon: <Factory className="h-6 w-6 text-slate-400" />, size: "md" },
          { icon: <LineChart className="h-6 w-6 text-emerald-400" />, size: "md" },
          { icon: <ShieldCheck className="h-6 w-6 text-sky-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-emerald-50/70 via-white/50 to-emerald-100/30 dark:from-white/5 dark:via-white/[0.05] dark:to-white/[0.02] border border-emerald-200/25 dark:border-emerald-500/15",
      },
      {
        title: "Operational resilience",
        description:
          "Predictive maintenance, redundancy, and ESG dashboards keep critical assets online.",
        icons: [
          { icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />, size: "md" },
          { icon: <LineChart className="h-6 w-6 text-sky-400" />, size: "md" },
          { icon: <Users className="h-6 w-6 text-slate-400" />, size: "md" },
        ],
        className:
          "bg-gradient-to-br from-slate-50/80 via-sky-50/40 to-slate-100/30 dark:from-white/5 dark:via-white/[0.04] dark:to-white/[0.02] border border-slate-200/30 dark:border-sky-500/15",
      },
    ],
    projects: [
      {
        id: 7,
        title: "Tech Valley Infrastructure Program",
        location: "Silicon Valley, CA",
        categoryLabel: "Integrated Infrastructure",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Comprehensive infrastructure backbone enabling a new tech campus with resilient utilities and community amenities.",
        challenge:
          "Coordinate 40+ stakeholders while upgrading utilities without disrupting busy arterial roads.",
        solution:
          "Phased trenchless installations, synchronized traffic modeling, and a district energy plant feeding smart grids.",
        metrics: [
          { label: "Program timeline", value: "24 months", icon: Clock },
          { label: "Roadway delivered", value: "5.2 miles", icon: Ruler },
          { label: "Utility uptime", value: "99.98%", icon: ShieldCheck },
        ],
        outcomes: [
          "Smart lighting reduced energy consumption by 46%",
          "Dedicated mobility lanes boosted transit ridership by 36%",
          "Community park network added 18 acres of public realm",
        ],
      },
      {
        id: 8,
        title: "Smart Transit Hub",
        location: "Metro Core, WA",
        categoryLabel: "Transportation",
        image:
          "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Intermodal transit hub connecting commuter rail, BRT, cycling, and micro-mobility with real-time orchestration.",
        challenge:
          "Fuse legacy systems with new platforms while managing peak-hour congestion and security.",
        solution:
          "Installed adaptive scheduling, AI-driven safety analytics, and cloud-based control center with predictive routing.",
        metrics: [
          { label: "Daily throughput", value: "126k riders", icon: Users },
          { label: "Platform expansion", value: "+40%", icon: Building2 },
          { label: "Incident reduction", value: "-55%", icon: ShieldCheck },
        ],
        outcomes: [
          "Transit app integrates ticketing across seven operators",
          "Regenerative braking feeds district microgrid",
          "Dynamic signage reduced perceived wait time by 20%",
        ],
      },
      {
        id: 9,
        title: "Advanced Logistics Park",
        location: "Port District, NJ",
        categoryLabel: "Industrial Infrastructure",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
        summary:
          "Logistics campus with automated warehouses, cold-chain storage, and green freight corridors.",
        challenge:
          "Deliver resilient utilities and robotics-ready facilities on a reclaimed brownfield site.",
        solution:
          "Installed modular warehouses, EV freight charging, stormwater remediation, and digital twin inventory tracking.",
        metrics: [
          { label: "Carbon reduction", value: "-30%", icon: LineChart },
          { label: "Dock doors", value: "260", icon: Factory },
          { label: "Throughput", value: "2.4M pallets/yr", icon: Users },
        ],
        outcomes: [
          "Solar canopies offset 65% of facility power demand",
          "Inventory accuracy hit 99.7% with robotics",
          "Blue-green infrastructure restored 12 acres of wetlands",
        ],
      },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = useMemo(
    () =>
      PROJECT_CATEGORIES.map((category) => ({
        title: category.title,
        icon: category.icon,
      })),
    []
  );

  const activeCategory = PROJECT_CATEGORIES[activeIndex] ?? PROJECT_CATEGORIES[0];
  const heroProject = activeCategory.projects[0];
  const secondaryProjects = activeCategory.projects.slice(1);

  return (
    <div className="bg-background pt-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pb-20 pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t("projects.subtitle")}
            </span>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-6xl">
              {t("projects.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We deliver transformative projects across commercial, residential, and infrastructure sectors—each meticulously crafted with technical precision, narrative-driven design, and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 flex max-w-3xl justify-center"
          >
            <ExpandableTabs
              tabs={tabs}
              defaultIndex={activeIndex}
              allowDeselect={false}
              onChange={(index) => {
                if (typeof index === "number") {
                  setActiveIndex(index);
                }
              }}
              className="backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-10 lg:grid-cols-[1.4fr,0.6fr]">
              {/* Hero case study */}
              <article className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-xl shadow-primary/5 backdrop-blur">
                <div className="relative">
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    className="h-[420px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                      <activeCategory.icon className="h-4 w-4" />
                      {heroProject.categoryLabel}
                    </div>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                      {heroProject.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin className="h-4 w-4" />
                      {heroProject.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 p-8 sm:p-12">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        The challenge
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {heroProject.challenge}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Our solution
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {heroProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroProject.metrics.map((metric) => (
                      <div
                        key={`${heroProject.id}-${metric.label}`}
                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 p-4"
                      >
                        <metric.icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground">
                            {metric.label}
                          </div>
                          <div className="text-lg font-semibold text-foreground">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Impact highlights
                    </h4>
                    <ul className="space-y-3">
                      {heroProject.outcomes.map((outcome, idx) => (
                        <li key={`${heroProject.id}-outcome-${idx}`} className="flex items-start gap-3">
                          <BadgeCheck className="mt-1 h-5 w-5 text-primary" />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {heroProject.testimonial && (
                    <blockquote className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-left text-primary-foreground">
                      <p className="text-sm italic leading-relaxed">
                        “{heroProject.testimonial.quote}”
                      </p>
                      <footer className="mt-4 text-xs uppercase tracking-wide text-primary">
                        {heroProject.testimonial.author} · {heroProject.testimonial.role}
                      </footer>
                    </blockquote>
                  )}

                  {/* <Button className="group inline-flex items-center gap-2">
                    Download case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button> */}
                </div>
              </article>

              <aside className="space-y-8">
                <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 backdrop-blur">
                  <div className="border-b border-border/50 px-8 py-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {activeCategory.hero.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {activeCategory.hero.narrative}
                    </p>
                  </div>
                  <div className="grid gap-4 px-8 py-6">
                    {activeCategory.stats.map((stat) => (
                      <div
                        key={`${activeCategory.key}-${stat.label}`}
                        className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
                      >
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                          {stat.label}
                        </span>
                        <span className="text-lg font-semibold text-foreground">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  {activeCategory.highlights.map((highlight, index) => (
                    <AnimatedCard
                      key={`${activeCategory.key}-highlight-${index}`}
                      title={highlight.title}
                      description={highlight.description}
                      icons={highlight.icons}
                      className={cn(
                        "max-w-full bg-card/80 text-left",
                        "border border-border/50 dark:border-border/60",
                        highlight.className
                      )}
                    />
                  ))}
                </div>
              </aside>
            </div>

            {secondaryProjects.length > 0 && (
              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                {secondaryProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/70 backdrop-blur"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                          <Sparkles className="h-4 w-4" />
                          {project.categoryLabel}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold text-white">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>

                      <div className="grid gap-3">
                        {project.metrics.slice(0, 2).map((metric) => (
                          <div
                            key={`${project.id}-${metric.label}`}
                            className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/60 px-3 py-2"
                          >
                            <metric.icon className="h-4 w-4 text-primary" />
                            <div>
                              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                                {metric.label}
                              </div>
                              <div className="text-sm font-semibold text-foreground">
                                {metric.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <ul className="flex flex-1 flex-col gap-2">
                        {project.outcomes.slice(0, 2).map((outcome, idx) => (
                          <li key={`${project.id}-summary-${idx}`} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                            <Sparkles className="mt-1 h-3.5 w-3.5 text-primary" />
                            {outcome}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="group mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Explore details
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 rounded-3xl border border-primary/20 bg-primary/10 px-8 py-12 text-center backdrop-blur"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to unlock your next landmark project?
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-primary/90">
              Our integrated team partners from feasibility to facilities handover—aligning design, construction, and technology to exceed expectations. Share your vision and we’ll architect the path there.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule a consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
