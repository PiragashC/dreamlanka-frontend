import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Ruler, HardHat, Wrench, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Ruler,
      title: t("services.planning"),
      description: t("services.planningDesc"),
      features: [
        "Site analysis and feasibility studies",
        "Budget planning and cost estimation",
        "Timeline development and scheduling",
        "Risk assessment and mitigation",
      ],
    },
    {
      icon: HardHat,
      title: t("services.contracting"),
      description: t("services.contractingDesc"),
      features: [
        "Foundation and structural work",
        "Complete building construction",
        "Quality control and inspections",
        "Project management and coordination",
      ],
    },
    {
      icon: Wrench,
      title: t("services.renovation"),
      description: t("services.renovationDesc"),
      features: [
        "Interior and exterior remodeling",
        "Space optimization and redesign",
        "Structural improvements",
        "Modern system upgrades",
      ],
    },
    {
      icon: Building2,
      title: t("services.infrastructure"),
      description: t("services.infrastructureDesc"),
      features: [
        "Roads and highways development",
        "Bridges and tunnels construction",
        "Water and sewer systems",
        "Public facility development",
      ],
    },
  ];

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
              {t("services.title")}
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg border border-border hover-lift"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-6">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {t("services.learnMore")}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
