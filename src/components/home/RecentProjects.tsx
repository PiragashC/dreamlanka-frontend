import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Wrench, Ruler } from "lucide-react";

const RecentProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex Construction",
      location: "Downtown Business District, CA",
      category: "Commercial Construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description: "A state-of-the-art 15-story office complex featuring sustainable design, modern amenities, and cutting-edge technology infrastructure.",
      icon: Building2,
      stats: {
        duration: "18 months",
        floors: "15 stories",
        area: "250,000 sq ft"
      }
    },
    {
      id: 2,
      title: "Luxury Residential Renovation",
      location: "Beverly Hills, CA",
      category: "Residential Renovation",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      description: "Complete renovation of a historic mansion, preserving original architectural elements while adding modern luxury features.",
      icon: Wrench,
      stats: {
        duration: "12 months",
        rooms: "8 bedrooms",
        area: "12,000 sq ft"
      }
    },
    {
      id: 3,
      title: "Infrastructure Development Project",
      location: "Silicon Valley, CA",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      description: "Large-scale infrastructure development including roads, utilities, and public facilities for a new tech campus.",
      icon: Ruler,
      stats: {
        duration: "24 months",
        roads: "5 miles",
        area: "500 acres"
      }
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mx-4">RECENT WORK</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Take a look at our most recent projects
          </h2>
        </motion.div>

        {/* Main Project - Large Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Large Project */}
          <Link to="/projects" className="relative group block cursor-pointer">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {projects[0].title}
                </h3>
                <div className="h-px w-12 bg-primary mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-white text-sm">{projects[0].category}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {projects[0].description}
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{projects[0].stats.duration}</div>
                <p className="text-sm text-muted-foreground">Duration</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{projects[0].stats.floors}</div>
                <p className="text-sm text-muted-foreground">Floors</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{projects[0].stats.area}</div>
                <p className="text-sm text-muted-foreground">Area</p>
              </div>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-colors duration-300 w-fit"
            >
              Browse Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Secondary Projects - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <Link key={project.id} to="/projects" className="relative group block cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg"
              >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-white text-sm">{project.category}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
