import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Marina One Residences",
    sector: "High-rise residential",
    location: "Colombo Port City",
    summary:
      "Integrated concept-to-completion package combining waterfront structural solutions, façade optimisation, and luxury interiors aligned to global investor expectations.",
    outcomes: ["12% schedule compression", "Green Building Council pre-certification", "100% sold pre-handover"],
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Northern Learning Campus",
    sector: "Education & civic",
    location: "Jaffna Peninsula",
    summary:
      "Hybrid construction package delivering STEM labs, student commons, and community facilities with prefabricated modules to accelerate rollout.",
    outcomes: ["30% waste reduction", "Expanded local supplier base", "Award-winning community engagement"],
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Global Foods Logistics Hub",
    sector: "Industrial & logistics",
    location: "Hambantota",
    summary:
      "Turnkey delivery of chilled warehouses, cross-dock terminals, and smart yard integration using Buildora’s milestone governance package.",
    outcomes: ["Live digital twin", "24/7 operations readiness", "Operational savings within first quarter"],
    image: "https://images.unsplash.com/photo-1541976076758-75c6b402aa76?auto=format&fit=crop&w=1200&q=80",
  },
];

const Explore = () => {
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
            Explore packages
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            How Buildora packages perform on real projects
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Review case studies showing how our packages adapt to different sectors, sites, and stakeholder goals. From
            coastal skyscrapers to civic campuses, Buildora delivers clarity, velocity, and measurable value.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 space-y-10 px-4">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="grid gap-0 md:grid-cols-[0.6fr,0.4fr]">
              <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="space-y-5 px-8 py-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    {study.sector} · {study.location}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold text-accent">{study.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{study.summary}</p>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    Impact metrics
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default Explore;


