import { motion } from "framer-motion";

const rateTiers = [
  {
    name: "Foundation Blueprint",
    investment: "LKR 12.5M – 18M",
    summary:
      "Ideal for bespoke homes, boutique hospitality, and targeted refurbishments requiring planning, design, and mobilisation clarity.",
    inclusions: [
      "Discovery sprint & feasibility modelling",
      "Concept design + BIM documentation (LOD 300)",
      "Approval management and stakeholder coordination",
      "Construction playbook with 3-month lookahead",
    ],
  },
  {
    name: "Milestone Delivery",
    investment: "LKR 28M – 45M",
    summary:
      "Best suited to medium-scale commercial, civic, and mixed-use developments with accelerated timelines and multiple trades.",
    inclusions: [
      "Integrated design-build pod with embedded project controls",
      "Procurement strategy, tender evaluation, and contract admin",
      "Digital site management dashboards & quality surveillance",
      "Interior, façade, and landscape coordination",
    ],
    featured: true,
  },
  {
    name: "Signature Turnkey",
    investment: "By proposal",
    summary:
      "Tailored for flagship campuses, smart logistics, and public-private partnerships requiring concierge-level governance.",
    inclusions: [
      "Executive governance councils & reporting cadences",
      "Sustainability & ESG advisory with certification pathways",
      "Fabrication mock-ups, innovation labs, and commissioning",
      "Post-handover facility optimisation & warranty management",
    ],
  },
];

const Rates = () => {
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
            Package rates
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Transparent investment bands aligned to your scope
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Buildora Engineers packages flex based on complexity, programme duration, and specialist requirements. Use
            these bands as guidance—we’ll refine figures after a discovery session.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-6 px-4 lg:grid-cols-3">
        {rateTiers.map((tier, index) => (
          <motion.article
            key={tier.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={`flex h-full flex-col rounded-3xl border ${
              tier.featured ? "border-primary shadow-[0_30px_90px_rgba(249,115,22,0.18)]" : "border-blue-100"
            } bg-white px-6 py-8`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-accent">{tier.name}</h2>
              {tier.featured && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground">
                  Most selected
                </span>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              {tier.investment}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{tier.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              {tier.inclusions.map((inclusion) => (
                <li key={inclusion} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                  {inclusion}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <button className="inline-flex w-full items-center justify-center rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-accent transition hover:border-primary hover:text-accent">
                Discuss this tier
              </button>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default Rates;


