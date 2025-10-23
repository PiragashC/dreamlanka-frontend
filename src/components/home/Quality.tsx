import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Award } from "lucide-react";

const Quality = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <Award className="h-32 w-32 text-primary" />
              </div>
              {/* Yellow Circle Accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("quality.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("quality.description")}
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("services.learnMore")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
