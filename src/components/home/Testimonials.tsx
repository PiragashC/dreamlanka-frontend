import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CircularTestimonials } from "../ui/circular-testimonials";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: "DreamLanka Construction exceeded all our expectations! Their attention to detail and commitment to quality is unmatched. The project was completed on time and within budget.",
      name: "Sarah Johnson",
      designation: "Project Manager, TechCorp",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "Working with DreamLanka was a game-changer for our company. Their innovative approach and professional team delivered exceptional results that transformed our office space.",
      name: "Michael Chen",
      designation: "CEO, Innovation Labs",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "The quality of work and professionalism shown by DreamLanka Construction is outstanding. They turned our vision into reality with precision and excellence.",
      name: "Emily Rodriguez",
      designation: "Property Developer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "From planning to completion, DreamLanka Construction provided exceptional service. Their expertise in modern construction techniques is truly impressive.",
      name: "David Thompson",
      designation: "Architect, Design Studio",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "DreamLanka Construction delivered our dream home with perfection. Their craftsmanship and attention to detail made all the difference in creating our perfect space.",
      name: "Lisa Anderson",
      designation: "Homeowner",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider">
            {t("testimonials.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "hsl(var(--foreground))",
                designation: "hsl(var(--muted-foreground))",
                testimony: "hsl(var(--foreground))",
                arrowBackground: "hsl(var(--primary))",
                arrowForeground: "hsl(var(--primary-foreground))",
                arrowHoverBackground: "hsl(var(--primary) / 0.8)",
              }}
              fontSizes={{
                name: "1.75rem",
                designation: "1rem",
                quote: "1.125rem",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;