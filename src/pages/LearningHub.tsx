import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Video, PenTool } from "lucide-react";
import { AccordionComponent } from "@/components/ui/faq-accordion";
import { Link } from "react-router-dom";

const learningTracks = [
  {
    title: "Construction playbooks",
    description: "Download Buildora methodology guides covering risk, quality, safety, and programme governance.",
    icon: BookOpen,
    linkLabel: "Access playbooks",
  },
  {
    title: "Expert webinars",
    description: "Monthly sessions with Buildora strategists and partner consultants unpacking current topics.",
    icon: Video,
    linkLabel: "View schedule",
  },
  {
    title: "Design inspiration",
    description: "Curated material libraries, palette boards, and spatial strategies for Sri Lankan contexts.",
    icon: PenTool,
    linkLabel: "Browse libraries",
  },
];

const LearningHub = () => {
  return (
    <div className="bg-background pt-28 pb-24">
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Learning hub
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Insight, tools, and answers from Buildora Engineers
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Stay on top of approvals, design, and delivery trends. Our hub brings together frequently asked questions,
            guides, and invitations to collaborative learning moments.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {learningTracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex h-full flex-col rounded-3xl border border-blue-100 bg-white px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                <track.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-accent">{track.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{track.description}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                {track.linkLabel}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold text-accent md:text-4xl">Frequently asked questions</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                We’ve captured the conversations we have most with new Buildora collaborators—from approvals and pricing
                to the way we mobilise teams across Sri Lanka. Have more questions? Our team is an email away.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-accent hover:border-primary"
            >
              Talk to an expert
            </Link>
          </div>

          <div className="mt-10">
            <AccordionComponent />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LearningHub;


