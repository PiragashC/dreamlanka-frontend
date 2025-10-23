import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and communication are at our core.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of construction.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing new technologies and methods.",
    },
  ];

  const timeline = [
    { year: "2010", event: "Company Founded", description: "Started with a small team of 5" },
    { year: "2015", event: "Major Expansion", description: "Grew to 50+ employees" },
    { year: "2020", event: "100th Project", description: "Completed milestone project" },
    { year: "2024", event: "Industry Leader", description: "350+ projects completed" },
  ];

  const team = [
    { name: "John Smith", role: "CEO & Founder", emoji: "👨‍💼" },
    { name: "Sarah Johnson", role: "Chief Engineer", emoji: "👷‍♀️" },
    { name: "Mike Davis", role: "Operations Director", emoji: "👨‍🔧" },
    { name: "Emily Brown", role: "Safety Manager", emoji: "👷‍♀️" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              {t("about.title")}
            </h1>
            <p className="text-xl text-foreground/80">
              Building tomorrow's infrastructure with today's innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <h2 className="text-3xl font-bold mb-4">{t("about.mission")}</h2>
              <p className="text-muted-foreground">{t("about.missionText")}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <h2 className="text-3xl font-bold mb-4">{t("about.vision")}</h2>
              <p className="text-muted-foreground">{t("about.visionText")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t("about.values")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t("about.timeline")}</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-border relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-1">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t("team.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-6xl">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
