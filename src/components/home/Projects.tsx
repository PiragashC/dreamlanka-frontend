import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Modern Office Complex",
      location: "Downtown City",
      category: "Commercial",
    },
    {
      title: "Residential Tower",
      location: "Riverside District",
      category: "Residential",
    },
    {
      title: "Shopping Mall Renovation",
      location: "Central Plaza",
      category: "Renovation",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("projects.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg hover-lift"
            >
              <div className="w-full h-80 bg-muted flex items-center justify-center">
                <span className="text-6xl">🏗️</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              {t("projects.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
