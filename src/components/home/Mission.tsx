"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DisplayCards from "@/components/ui/display-cards";
import { Building2, Shield, Award, Users, HardHat, Wrench } from "lucide-react";

const MissionSection = () => {
  const { t } = useTranslation();

  const missionCards = [
    {
      icon: <Building2 className="size-4 text-primary" />,
      title: t("home.mission.cards.0.title"),
      description: t("home.mission.cards.0.description"),
      date: t("home.mission.cards.0.tag"),
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-green-500" />,
      title: t("home.mission.cards.1.title"),
      description: t("home.mission.cards.1.description"),
      date: t("home.mission.cards.1.tag"),
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Award className="size-4 text-yellow-500" />,
      title: t("home.mission.cards.2.title"),
      description: t("home.mission.cards.2.description"),
      date: t("home.mission.cards.2.tag"),
      iconClassName: "text-yellow-500",
      titleClassName: "text-yellow-500",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const missionPoints = t("home.mission.points", { returnObjects: true }) as string[];
  const missionIcons = [
    <HardHat className="w-5 h-5 text-primary" />,
    <Users className="w-5 h-5 text-primary" />,
    <Wrench className="w-5 h-5 text-primary" />,
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                {t("home.mission.label")}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("home.mission.title")}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t("home.mission.description")}
            </motion.p>

            {/* Mission Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0">{missionIcons[index]}</div>
                  <p className="text-muted-foreground text-sm">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/about"
                className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
              >
                {t("home.mission.cta")}
              </a>
              {/* <a
                href="/contact"
                className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Start Your Project
              </a> */}
            </motion.div>
          </motion.div>

          {/* Right Side: Display Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-3xl">
              <DisplayCards cards={missionCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
