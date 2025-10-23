import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: "John Smith", role: "Project Manager" },
    { name: "Sarah Johnson", role: "Site Engineer" },
    { name: "Mike Davis", role: "Construction Lead" },
    { name: "Emily Brown", role: "Safety Officer" },
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
            {t("team.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("team.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 hover-lift">
                <div className="w-full h-80 bg-muted flex items-center justify-center">
                  <div className="text-6xl">👷</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-muted-foreground text-center text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
