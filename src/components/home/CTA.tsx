import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("cta.title")}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-foreground text-primary hover:bg-foreground/90">
                  {t("cta.button")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-primary">
                  {t("cta.contact")}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Geometric Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <div className="absolute inset-0 grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-foreground/10 rounded-lg"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
