import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ClientLogoWall } from "../ui/client-logo-wall";

const ConstructionClients = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            We partner with leading construction companies, technology providers, and industry innovators to deliver exceptional results.
          </p>
        </motion.div>

        {/* Client Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card/80 px-6 py-8 shadow-[0_20px_45px_rgba(8,11,30,0.18)] backdrop-blur"
        >
          <ClientLogoWall />
        </motion.div>
        
      </div>
    </section>
  );
};

export default ConstructionClients;
