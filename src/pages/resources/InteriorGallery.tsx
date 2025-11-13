import { motion } from "framer-motion";

const interiorStories = [
  {
    title: "Executive sky lounge",
    palette: "Warm oak · Midnight blue · Brushed brass",
    description:
      "A hospitality-inspired lounge for a financial services HQ. Layered lighting, acoustic panels, and biophilic textures create a restful retreat with skyline views.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Innovation lab commons",
    palette: "Concrete grey · Citrus orange · Digital teal",
    description:
      "Flexible learning and collaboration zones featuring writable surfaces, modular seating, and sensor-enabled wayfinding for a tech campus.",
    image: "https://images.unsplash.com/photo-1529429617124-aee0014819be?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Coastal villa suites",
    palette: "Coral sandstone · Seafoam · Aged bronze",
    description:
      "Boutique hospitality interiors with locally crafted joinery, climate-responsive shading, and curated artisan decor.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
  },
];

const moodSwatches = [
  { hex: "#1E3A8A", label: "Deep ocean" },
  { hex: "#F97316", label: "Sunset ember" },
  { hex: "#F5F7FB", label: "Soft mist" },
  { hex: "#0F172A", label: "Midnight slate" },
];

const InteriorGallery = () => {
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
            Interior gallery
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Interiors shaped for people, brand, and place
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Buildora Engineers blends materials, lighting, and craftsmanship to create environments that energise teams,
            delight guests, and honour Sri Lankan aesthetics.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 space-y-10 px-4">
        {interiorStories.map((story, index) => (
          <motion.article
            key={story.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="grid gap-0 md:grid-cols-[0.55fr,0.45fr]">
              <img
                src={story.image}
                alt={story.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="space-y-4 px-8 py-8">
                <h2 className="text-2xl font-semibold text-accent">{story.title}</h2>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  Palette · {story.palette}
                </p>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <div className="flex flex-wrap gap-3">
                  {moodSwatches.map((swatch) => (
                    <div key={swatch.hex} className="rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-left">
                      <div
                        className="h-8 w-12 rounded-md"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="mt-2 block text-xs font-semibold text-accent">{swatch.label}</span>
                      <span className="block text-[11px] text-muted-foreground">{swatch.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default InteriorGallery;


