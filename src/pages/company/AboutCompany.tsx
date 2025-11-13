import { motion } from "framer-motion";

const AboutCompany = () => {
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
            Company · About Us
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Buildora Engineers · Builders of dreams and sustainable spaces
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Buildora Engineers is a trusted design and build company based in the Northern Province of Sri Lanka,
            renowned for delivering high-quality projects with precision, reliability, and innovation. With over a decade
            of experience, we serve residential, commercial, and industrial clients, transforming their aspirations into
            exceptional built environments.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We are more than contractors—we are architects of change and pioneers of sustainable living. Every project we
            undertake reflects our passion for quality, integrity, and innovation.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-8 px-4 lg:grid-cols-[0.6fr,0.4fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-100 bg-white p-10 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">Our Strengths</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <div>
              <h3 className="text-lg font-semibold text-accent">Innovative Planning</h3>
              <p className="mt-2">
                We believe great projects start with great planning. Our team brings dynamic and creative ideas to ensure
                every task is executed with precision and delivered on time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">Collective Teamwork</h3>
              <p className="mt-2">
                Our greatest asset is our people. Through collaboration, dedication, and expertise, our team works
                seamlessly to deliver outstanding results in every project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent">Comprehensive Quality Policy</h3>
              <p className="mt-2">
                We uphold the highest quality standards through technological excellence, innovative methods, and
                continuous improvement—ensuring every project meets or exceeds expectations.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-orange-50 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80"
            alt="Buildora Engineers team on site"
            loading="lazy"
            className="h-64 w-full object-cover"
          />
          <div className="space-y-4 px-8 py-10 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Every Buildora project is guided by meticulous planning, modern technology, and passionate people. From
              feasibility to finishing touches, we ensure precision, transparency, and lasting value.
            </p>
            <p>
              We are proud to be builders of dreams—shaping sustainable, future-ready spaces that elevate lives and
              communities across Sri Lanka.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-primary/20 bg-primary/10 px-8 py-12 text-center backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Partner with Buildora Engineers
          </h2>
          <p className="mt-4 text-sm text-primary/90 md:text-base">
            Share your objectives—we’ll mobilise planners, designers, and delivery leads to co-author a pathway from
            approvals to handover with absolute confidence.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutCompany;

