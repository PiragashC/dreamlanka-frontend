import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";

const News = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: "New sustainable building techniques adopted",
      date: "December 15, 2024",
      excerpt: "Implementing eco-friendly construction methods...",
    },
    {
      title: "Safety protocols updated for 2024",
      date: "December 10, 2024",
      excerpt: "Enhanced safety measures across all sites...",
    },
    {
      title: "Award for excellence in construction",
      date: "December 5, 2024",
      excerpt: "Recognition for outstanding project delivery...",
    },
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
            {t("news.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("news.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg border border-border hover-lift"
            >
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Button variant="link" className="p-0 text-primary">
                {t("news.readMore")} →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
