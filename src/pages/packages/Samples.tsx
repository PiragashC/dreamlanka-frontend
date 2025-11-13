import { motion } from "framer-motion";

const deliverables = [
  {
    title: "Concept narrative",
    description:
      "Vision statements, site response, and experiential storyboards that align stakeholders before detailed design begins.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "BIM-ready drawings",
    description:
      "Coordinated architectural, structural, and MEP models with clash detection reports ready for fabrication and site deployment.",
    image: "https://images.unsplash.com/photo-1550051724-1e96d32e8f02?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Execution playbook",
    description:
      "Phased schedules, logistics plans, QA/QC checklists, and risk registers that keep delivery on time and within budget.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

const Samples = () => {
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
            Package samples
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            See what’s inside a Buildora Engineers package
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Every engagement produces tangible artefacts—strategies, drawings, and playbooks—that bring clarity to your
            team, trades, and investors. Explore representative samples below.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-8 px-4 lg:grid-cols-3">
        {deliverables.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
          >
            <img src={item.image} alt={item.title} loading="lazy" className="h-56 w-full object-cover" />
            <div className="space-y-3 px-6 py-6">
              <h2 className="text-xl font-semibold text-accent">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <button className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Download sample deck
              </button>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default Samples;


