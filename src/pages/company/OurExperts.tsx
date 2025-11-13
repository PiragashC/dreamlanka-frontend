import { motion } from "framer-motion";

const OurExperts = () => {
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
            Company · Our Experts
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Passionate professionals powering every Buildora project
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Our strength lies in our people—a blend of experienced professionals and dynamic young engineers united by
            passion and purpose. From senior advisors to field engineers, every member contributes to a unified mission:
            to deliver projects that define excellence.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">A team built for excellence</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            The company employs “field soldiers”—young Turks with high levels of energy, passion, and determination to
            face challenges head-on. They battle it out in the field to ensure quick, timely completion, impeccable
            quality, and flawless finishing.
          </p>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Senior administrative and technical advisors guide strategy, while eminent structural and architectural
            consultants uphold design rigour. Supporting them is a field troupe of talented, hardworking engineers who
            execute a start-to-finish “Plan – Monitor – Control” approach on every project.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-8 px-4 lg:grid-cols-[0.6fr,0.4fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h3 className="text-xl font-semibold text-accent">Who drives Buildora Engineers?</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-accent">Senior administrative & technical advisors</span> · Provide
              strategic oversight and safeguard service standards.
            </li>
            <li>
              <span className="font-semibold text-accent">Eminent structural & architectural consultants</span> · Bring deep
              domain expertise and vision to every design challenge.
            </li>
            <li>
              <span className="font-semibold text-accent">Field engineers & project captains</span> · Energetic, determined,
              and dedicated professionals who execute with discipline and pride.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-blue-100 bg-white p-8 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h3 className="text-xl font-semibold text-accent">Our approach</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            A start-to-finish “Plan – Monitor – Control” strategy ensures that every project stays aligned to programme,
            quality, and safety benchmarks. The team’s collective enthusiasm fuels Buildora’s reputation for timely handovers
            and enduring craftsmanship.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default OurExperts;


