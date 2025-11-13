import { motion } from "framer-motion";
import { CheckCircle2, HardHat, Ruler, Compass, Building2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const packageTiers = [
  {
    name: "Foundation Blueprint",
    description: "Launch-ready package for private residences and small commercial builds.",
    priceLabel: "From LKR 12.5M",
    highlights: [
      "Site due diligence & approvals kit",
      "Architectural concept + BIM-ready drawings",
      "Structural & MEP coordination reports",
      "Procurement schedule & budget controls",
      "Dedicated Buildora project strategist",
    ],
    icon: HardHat,
    badge: "Popular for homes",
  },
  {
    name: "Milestone Delivery",
    description: "End-to-end delivery pod for medium scale developments and retrofit programmes.",
    priceLabel: "From LKR 28M",
    highlights: [
      "Full design-build delivery team",
      "Digital site management dashboards",
      "Subcontractor procurement & QA/QC",
      "Weekly stakeholder reporting cadence",
      "Interiors, landscape & wayfinding design add-ons",
    ],
    icon: Building2,
    badge: "Most selected",
    featured: true,
  },
  {
    name: "Signature Turnkey",
    description: "Premium experience with concierge-level coordination for flagship assets.",
    priceLabel: "By proposal",
    highlights: [
      "Executive programme governance",
      "Sustainability & ESG advisory desk",
      "Fabrication, mock-up & prototyping lab",
      "Post-handover facility optimisation",
      "Global specialist partner network access",
    ],
    icon: ShieldCheck,
    badge: "Limited intake",
  },
];

const deliveryInclusions = [
  {
    title: "Discovery intensives",
    copy: "Rapid workshops align stakeholders, define success metrics, and shape a delivery roadmap before mobilisation.",
    icon: Ruler,
  },
  {
    title: "Design management",
    copy: "Architecture, engineering, interiors, and landscape partners collaborate in a unified Buildora coordination environment.",
    icon: Compass,
  },
  {
    title: "Transparent reporting",
    copy: "Live dashboards surface schedule, cost, risk, and quality data streams for confident decision making.",
    icon: CheckCircle2,
  },
];

const Packages = () => {
  return (
    <div className="bg-background pt-28 pb-24">
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Build packages
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Packages designed to flex with your project ambition
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Choose the delivery pod that matches your scope and velocity. Every tier is modular—dial services up or down
            as your programme evolves.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packageTiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex h-full flex-col rounded-3xl border ${
                tier.featured ? "border-primary shadow-[0_30px_80px_rgba(249,115,22,0.15)]" : "border-blue-100"
              } bg-white px-6 py-8`}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                  <tier.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent">{tier.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{tier.badge}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
              <p className="mt-4 text-lg font-semibold text-accent">{tier.priceLabel}</p>

              <ul className="mt-6 space-y-3">
                {tier.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    tier.featured
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
                      : "border border-blue-100 bg-white text-accent hover:border-primary hover:text-accent"
                  }`}
                >
                  Arrange a consultation
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-20 grid gap-10 px-4 lg:grid-cols-[0.55fr,0.45fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            What’s inside every package
          </span>
          <h2 className="mt-6 text-3xl font-bold text-accent md:text-4xl">
            Every Buildora engagement plugs into the same high-performance engine
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From first conversation to handover, your team is supported by digital tools, experienced leads, and a
            trusted partner network honed across island-wide builds.
          </p>

          <div className="mt-8 space-y-5">
            {deliveryInclusions.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-accent shadow-inner">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h3 className="text-2xl font-semibold text-accent">Need a bespoke scope?</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We regularly tailor packages for public-private partnerships, logistics hubs, learning environments, and
            hospitality flagships. Give us your ambition—we’ll assemble the right pod.
          </p>
          <div className="mt-6 space-y-3 text-sm text-foreground/85">
            <p>• Hybrid delivery models combining refurbishment & new build</p>
            <p>• Specialist compliance modules for BOI and Green Building Council</p>
            <p>• Rapid deployment playbooks for multi-site retail rollouts</p>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent/90"
          >
            Book a build strategy call
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Packages;


