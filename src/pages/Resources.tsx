import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Images, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    label: "Civic atrium concept",
  },
  {
    src: "https://images.unsplash.com/photo-1613483972373-d6f5f08d0557?auto=format&fit=crop&w=1200&q=80",
    label: "Mixed-use lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
    label: "Central business district",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    label: "Workplace interior",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    label: "Residential terrace",
  },
  {
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200&q=80",
    label: "Retail flagship",
  },
];

const Resources = () => {
  return (
    <div className="bg-background pt-28 pb-24">
      <section className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Buildora resources
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Approvals, visuals, and tools to accelerate your build
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Everything you need to move from intent to mobilisation: compliance guidance, inspirational galleries, and
            a direct line to Buildora specialists.
          </p>
        </motion.div>
      </section>

      <section
        id="approvals"
        className="container mx-auto mt-16 grid gap-8 px-4 lg:grid-cols-[0.55fr,0.45fr] lg:items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-semibold text-accent">Approvals & compliance toolkit</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Navigate BOI, UDA, CEA, and provincial approvals with our templated documentation packs and compliance
            playbooks. Buildora’s approvals cell is on call to guide submissions and accelerate clearances.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/85">
            <li>• Checklist for planning, building, fire, and environmental stages</li>
            <li>• Submission-ready drawing index and document naming standards</li>
            <li>• Stakeholder engagement and public notice templates</li>
            <li>• Health, safety, and environmental management frameworks</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-primary/30 transition hover:bg-primary/90"
          >
            Connect with approvals desk
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 p-10"
        >
          <h3 className="text-xl font-semibold text-accent">Downloadable resources</h3>
          <div className="mt-5 space-y-4">
            <ResourceLink
              title="Permitting roadmap"
              description="Step-by-step flow covering agency touchpoints, durations, and parallel tracks."
            />
            <ResourceLink
              title="Budget guardrails"
              description="Guidelines to align approvals milestones with cashflow strategies."
            />
            <ResourceLink
              title="Sustainability checklist"
              description="Capture design decisions early to support Green Building Council submissions."
            />
          </div>
        </motion.div>
      </section>

      <section
        id="architecture-gallery"
        className="container mx-auto mt-20 px-4"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                <Images className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-accent">Architecture gallery</h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Explore built and in-progress Buildora studies across hospitality, commercial, and civic developments.
              Each concept balances Sri Lankan context with global craft.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-accent hover:border-primary"
          >
            View full project library
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <img
                src={image.src}
                alt={image.label}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="px-5 py-4 text-sm font-semibold text-accent">
                {image.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section
        id="interior-gallery"
        className="container mx-auto mt-20 px-4"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
              <PenTool className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-semibold text-accent">Interior inspiration boards</h2>
          </div>
          <Link
            to="/learning-hub"
            className="inline-flex items-center justify-center rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-accent hover:border-primary"
          >
            Explore learning hub
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-lg font-semibold text-accent">Signature palette</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Warm timber, brushed metal, and luminous stone pairings that soften contemporary forms.
            </p>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {["#f6a256", "#1e3a8a", "#0f172a", "#f9fafb"].map((color) => (
                <div key={color} className="rounded-xl border border-blue-100 p-4 text-center text-xs font-semibold text-accent">
                  <span className="block h-12 w-full rounded-lg" style={{ backgroundColor: color }} />
                  {color}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-lg font-semibold text-accent">Experience zones</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Create hospitality-inspired breakouts, concierge desks, and collaboration lounges with curated FF&E mood
              boards.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              <li>• Acoustic lighting and ceiling landscapes</li>
              <li>• Bespoke carpentry detailing packs</li>
              <li>• Material lifecycle and maintenance guidance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section
        id="free-consultation"
        className="container mx-auto mt-20 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.1)]"
        >
          <h2 className="text-3xl font-bold text-accent md:text-4xl">Book a free Buildora consultation</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
            Share drawings, ambitions, or bottlenecks. We’ll assemble the right Buildora Engineers strategists for a
            45-minute virtual workshop and send you an actionable summary within 48 hours.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-foreground/85 md:flex-row">
            <span>• Feasibility and cost calibration</span>
            <span>• Approvals sequencing insights</span>
            <span>• Package recommendation</span>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent/90"
          >
            Reserve my session
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const ResourceLink = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-left shadow-sm transition hover:border-primary">
    <h4 className="text-sm font-semibold text-accent">{title}</h4>
    <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-primary">
      Download PDF
      <FileText className="h-4 w-4" />
    </div>
  </div>
);

export default Resources;


