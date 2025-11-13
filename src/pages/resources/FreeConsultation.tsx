import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const consultationAgenda = [
  {
    title: "Discovery briefing",
    description:
      "Share your project vision, stakeholder priorities, site conditions, and any existing documentation so our strategists can understand the opportunity.",
  },
  {
    title: "Feasibility snapshot",
    description:
      "We review constraints, regulatory pathways, and delivery considerations, highlighting initial risks and optimisation opportunities.",
  },
  {
    title: "Roadmap & next steps",
    description:
      "Receive a concise report summarising recommendations, indicative timelines, and packaged pathways that align with your scope and budget.",
  },
];

const readinessChecklist = [
  "Project intent, target outcomes, and desired delivery window",
  "Available drawings, surveys, or previous feasibility studies",
  "Key stakeholders and decision makers involved in approvals",
  "Target investment band or funding structure (if available)",
];

const FreeConsultation = () => {
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
            Free consultation
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Kick-start your project with a Buildora strategy session
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            In a 45-minute virtual workshop, our specialists explore your ambitions, decode complexities, and provide an
            actionable summary to guide next steps—at no cost.
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
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">What we cover</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            The consultation is tailored to your sector and project stage. You leave with a Buildora insights memo that
            outlines delivery options, risk watchpoints, and recommended packages.
          </p>
          <div className="mt-8 space-y-5">
            {consultationAgenda.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                  Session {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-accent">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
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
          <h3 className="text-xl font-semibold text-accent">Prepare for the call</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Bring the following to make the most of your consultation.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {readinessChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-primary/30 transition hover:bg-primary/90"
          >
            Book your session
          </Link>
        </motion.aside>
      </section>
    </div>
  );
};

export default FreeConsultation;


