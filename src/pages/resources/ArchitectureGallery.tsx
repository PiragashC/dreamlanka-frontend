import { motion } from "framer-motion";

const architectureShots = [
  {
    title: "Skyline terrace tower",
    location: "Colombo Port City",
    image: "/resources/gallery/architecture-01.jpg",
  },
  {
    title: "Civic cultural pavilion",
    location: "Kandy",
    image: "/resources/gallery/architecture-02.jpg",
  },
  {
    title: "Seaside hospitality villa",
    location: "Galle Coast",
    image: "/resources/gallery/architecture-03.jpg",
  },
  {
    title: "Innovation tech hub",
    location: "Malabe",
    image: "/resources/gallery/architecture-04.jpg",
  },
  {
    title: "Urban student residences",
    location: "Jaffna",
    image: "https://images.unsplash.com/photo-1541519481457-763224276691?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Luxury branded residences",
    location: "Colombo 03",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
  },
];

const ArchitectureGallery = () => {
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
            Architecture gallery
          </span>
          <h1 className="mt-6 text-4xl font-bold text-accent md:text-5xl">
            Signature Buildora concepts & built environments
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Browse highlights from our architecture studio—spanning skyline icons, civic landmarks, and human-scaled
            retreats. Each composition balances Sri Lankan context with global design language.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto mt-16 grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {architectureShots.map((shot, index) => (
          <motion.figure
            key={shot.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
          >
            <img
              src={shot.image}
              alt={shot.title}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="px-6 py-6">
              <h2 className="text-lg font-semibold text-accent">{shot.title}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                {shot.location}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </section>
    </div>
  );
};

export default ArchitectureGallery;


