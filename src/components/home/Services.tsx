import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Ruler, HardHat, Wrench, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Ruler,
      title: t("services.planning"),
      description: t("services.planningDesc"),
    },
    {
      icon: HardHat,
      title: t("services.contracting"),
      description: t("services.contractingDesc"),
    },
    {
      icon: Wrench,
      title: t("services.renovation"),
      description: t("services.renovationDesc"),
    },
    {
      icon: Building2,
      title: t("services.infrastructure"),
      description: t("services.infrastructureDesc"),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider">
            {t("services.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("services.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-card border border-border rounded-lg hover-lift hover:border-primary"
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <Link to="/services">
                <Button variant="link" className="p-0 text-primary">
                  {t("services.learnMore")} →
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
