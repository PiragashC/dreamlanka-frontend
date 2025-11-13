import { motion } from "framer-motion";

const approvalSteps = [
  {
    title: "Discovery & site intelligence",
    description:
      "We gather land titles, zoning details, environmental sensitivities, and stakeholder priorities to map the approvals landscape.",
  },
  {
    title: "Strategy & documentation",
    description:
      "Our planners and legal partners create a submission roadmap, coordinate consultant inputs, and prepare BOI, UDA, and CEA documentation packs.",
  },
  {
    title: "Authority engagement",
    description:
      "Buildora facilitates meetings, presents design intent, and responds to clarifications swiftly through a centralised approvals cell.",
  },
  {
    title: "Monitoring & compliance",
    description:
      "Post-approval, we maintain compliance registers, trigger renewals, and embed conditions into construction playbooks and site audits.",
  },
];

const quickLinks = [
  "BOI approvals checklist",
  "UDA design submission standards",
  "CEA environmental reporting guide",
  "Fire & safety clearance templates",
];

const Approvals = () => {
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
            Approvals & compliance
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Navigate Sri Lanka’s approvals process with clarity
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Buildora Engineers manages every approval stage—from feasibility to final NOCs—ensuring design intent, cost,
            and programme stay aligned while working with BOI, UDA, CEA, and municipal authorities.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-8 px-4 lg:grid-cols-[0.6fr,0.4fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">Four-stage approvals pathway</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Our approvals cell coordinates consultants, authorities, and community stakeholders through a proven
            sequence. Each stage includes checklists, timelines, and accountability frameworks.
          </p>
          <div className="mt-8 space-y-5">
            {approvalSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-accent">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h3 className="text-xl font-semibold text-accent">Quick reference guides</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Downloadable resources customised for Sri Lankan regulatory pathways.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {quickLinks.map((link) => (
              <li key={link} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                {link}
              </li>
            ))}
          </ul>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-primary/30 transition hover:bg-primary/90">
            Request approvals consultation
          </button>
        </motion.aside>
      </section>
    </div>
  );
};

export default Approvals;


