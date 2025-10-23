import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

  const projects = [
    {
      title: "Modern Office Complex",
      location: "Downtown City",
      category: "Commercial",
      year: "2024",
      description: "50,000 sq ft state-of-the-art office building with sustainable features.",
    },
    {
      title: "Luxury Residential Tower",
      location: "Riverside District",
      category: "Residential",
      year: "2024",
      description: "30-story residential building with 200 units and premium amenities.",
    },
    {
      title: "Highway Bridge Construction",
      location: "Interstate 45",
      category: "Infrastructure",
      year: "2023",
      description: "2-mile bridge connecting major metropolitan areas.",
    },
    {
      title: "Shopping Mall Renovation",
      location: "Central Plaza",
      category: "Renovation",
      year: "2023",
      description: "Complete modernization of 200,000 sq ft retail space.",
    },
    {
      title: "Industrial Warehouse",
      location: "Industrial Park",
      category: "Commercial",
      year: "2023",
      description: "150,000 sq ft distribution center with automated systems.",
    },
    {
      title: "School Campus",
      location: "Suburban Area",
      category: "Commercial",
      year: "2024",
      description: "New educational facility with modern classrooms and facilities.",
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {t("projects.title")}
            </h1>
            <p className="text-xl text-foreground/80">
              {t("projects.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border border-border hover-lift"
              >
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <span className="text-6xl">🏗️</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
