import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Home, 
  Building2, 
  CheckCircle2,
  Hammer,
  ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextDisperse } from "@/components/ui/text-disperse";
import { cn } from "@/lib/utils";

const Services = () => {
  const { t } = useTranslation();

  const services = useMemo(
    () => [
      {
        icon: ClipboardCheck,
        iconGradient: "from-blue-500 to-cyan-500",
        title: t("services.planning"),
        description: t("services.planningDesc"),
        detailedDescription:
          "Our comprehensive project planning services ensure your construction project is executed flawlessly from conception to completion. We combine strategic vision with meticulous attention to detail.",
        features: [
          "Site analysis and feasibility studies",
          "Budget planning and cost estimation",
          "Timeline development and scheduling",
          "Resource allocation and management",
          "Risk assessment and mitigation strategies",
          "Regulatory compliance and permit acquisition",
        ],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop",
      },
      {
        icon: Hammer,
        iconGradient: "from-orange-500 to-red-500",
        title: t("services.contracting"),
        description: t("services.contractingDesc"),
        detailedDescription:
          "Complete general contracting services that handle every aspect of your construction project. From initial groundwork to final touches, we manage the entire process with precision and expertise.",
        features: [
          "Foundation and structural construction",
          "Electrical and plumbing installations",
          "HVAC systems and climate control",
          "Interior and exterior finishing",
          "Quality control and inspections",
          "Project coordination and site management",
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1740&auto=format&fit=crop",
      },
      {
        icon: Home,
        iconGradient: "from-purple-500 to-pink-500",
        title: t("services.renovation"),
        description: t("services.renovationDesc"),
        detailedDescription:
          "Transform your existing spaces into modern, functional environments that reflect your vision. Our renovation services breathe new life into buildings while preserving their character and value.",
        features: [
          "Structural modifications and upgrades",
          "Interior redesign and remodeling",
          "Kitchen and bathroom renovations",
          "Energy-efficient improvements",
          "Historical preservation and restoration",
          "Smart home technology integration",
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1740&auto=format&fit=crop",
      },
      {
        icon: Building2,
        iconGradient: "from-green-500 to-emerald-500",
        title: t("services.infrastructure"),
        description: t("services.infrastructureDesc"),
        detailedDescription:
          "Large-scale infrastructure projects that build the foundation for communities and businesses. We deliver complex civil engineering solutions with precision, efficiency, and long-term sustainability.",
        features: [
          "Road and bridge construction",
          "Water and wastewater systems",
          "Public facility development",
          "Industrial complex construction",
          "Environmental engineering solutions",
          "Maintenance and infrastructure upgrades",
        ],
        image: "https://images.unsplash.com/photo-1581091215367-59ab6d234ca3?q=80&w=1742&auto=format&fit=crop",
      },
    ],
    [t]
  );

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Service Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations. 
              Discover how we can transform your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section with CardSpotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <CardSpotlight
                  className="h-full min-h-[600px] flex flex-col bg-gradient-to-br from-card via-card/95 to-card/90 border-border/50"
                  radius={400}
                  color="rgba(59, 130, 246, 0.1)"
                >
                  <div className="relative z-20 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 20,
                          delay: 0.2 
                        }}
                        className={cn(
                          "relative inline-flex p-6 rounded-2xl bg-gradient-to-br",
                          service.iconGradient,
                          "shadow-lg shadow-primary/20 group-hover/spotlight:shadow-xl group-hover/spotlight:shadow-primary/30",
                          "transition-all duration-300 group-hover/spotlight:scale-110"
                        )}
                      >
                        <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300" />
                        <service.icon className="relative z-10 h-10 w-10 text-white" />
                      </motion.div>
                      <div className="flex-1 pt-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                      {service.detailedDescription}
                    </p>

                    {/* Service Features */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        What We Offer:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-auto pt-6 border-t border-border/50">
                      <Link to="/contact" className="block">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20">
                          {t("services.learnMore")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-background">
        {/* Background gradient effect */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/.1),transparent_50%)]',
            'blur-[60px]',
          )}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Typewriter Effect for Main Heading */}
            <div className="mb-8">
              <TypewriterEffectSmooth
                words={[
                  { text: "Ready" },
                  { text: "to" },
                  { text: "Start" },
                  { text: "Your" },
                  { 
                    text: "Project?", 
                    className: "text-primary dark:text-primary" 
                  },
                ]}
                className="justify-center"
                cursorClassName="bg-primary"
              />
            </div>

            {/* Description with animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how we can bring your construction vision to life. 
              Our team is ready to provide expert guidance and deliver exceptional results.
            </motion.p>

            {/* Interactive Text Disperse for CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12 flex justify-center"
            >
              <div className="w-full max-w-md">
                <TextDisperse className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Get Started
                </TextDisperse>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Get a Free Quote
                </Button>
              </Link>
              {/* <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
