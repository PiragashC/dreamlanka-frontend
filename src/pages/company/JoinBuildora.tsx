import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinBuildora = () => {
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
            Company · Join Buildora
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Help us build the future of Sri Lankan construction
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We’re looking for passionate professionals who want to shape sustainable residential, commercial, and
            industrial spaces. At Buildora Engineers you’ll be part of a forward-thinking team that values creativity,
            collaboration, and integrity.
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
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">Join Buildora Engineers</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            We’re always searching for talented individuals—engineers, architects, planners, and specialists—who are eager
            to make an impact. Explore our current openings or share your portfolio to start a conversation.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-accent">Experienced Professionals</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bring your technical expertise, leadership, and creativity to guide complex projects from plan to handover.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-accent">Emerging Talent</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If you’re a young engineer with passion and drive, we offer mentorship, field exposure, and growth
                opportunities in a supportive environment.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-primary/30 transition hover:bg-primary/90"
          >
            View openings / Submit CV
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default JoinBuildora;

