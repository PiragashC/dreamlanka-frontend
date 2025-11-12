import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IconCloud } from "../ui/interactive-icon-cloud";

const ConstructionClients = () => {
  const { t } = useTranslation();

  // Construction and building-related company logos from Simple Icons
  // Using only valid slugs that exist in simple-icons package
  const constructionClientSlugs = [
    "caterpillar",      // Caterpillar Inc. - Heavy machinery
    "volvo",           // Volvo - Construction vehicles
    "hitachi",         // Hitachi - Construction equipment
    "bosch",           // Bosch - Construction tools
    "atlassian",       // Atlassian - Project management
    "autodesk",        // Autodesk - CAD software (includes Revit)
    "sketchup",        // SketchUp - 3D modeling
    "microsoft",       // Microsoft - Office tools
    "google",          // Google - Cloud services
    "amazon",          // Amazon AWS - Cloud infrastructure
    "docker",          // Docker - Containerization
    "kubernetes",      // Kubernetes - Container orchestration
    "github",          // GitHub - Version control
    "gitlab",          // GitLab - DevOps platform
    "jenkins",         // Jenkins - CI/CD
    "terraform",       // Terraform - Infrastructure as code
    "ansible",         // Ansible - Automation
    "prometheus",      // Prometheus - Monitoring
    "grafana",         // Grafana - Analytics
    "elastic",         // Elastic - Search and analytics
    "mongodb",         // MongoDB - Database
    "postgresql",      // PostgreSQL - Database
    "react",           // React - Frontend framework
    "nodejs",          // Node.js - Backend runtime
    "typescript",      // TypeScript - Programming language
  ];

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

        {/* Interactive Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex size-full max-w-4xl mx-auto items-center justify-center overflow-hidden rounded-lg border bg-card border-border px-2 pb-4 pt-3 shadow-lg"
        >
          <IconCloud iconSlugs={constructionClientSlugs} />
        </motion.div>
        
      </div>
    </section>
  );
};

export default ConstructionClients;
