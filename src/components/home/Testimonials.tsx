import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: "Great quality of service & delivered on time",
      author: "Robert Martinez",
      company: "Tech Corp",
      rating: 5,
    },
    {
      quote: "Professional team with excellent communication",
      author: "Lisa Anderson",
      company: "Retail Solutions",
      rating: 5,
    },
    {
      quote: "Exceeded our expectations in every way",
      author: "David Wilson",
      company: "Property Ventures",
      rating: 5,
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
            {t("testimonials.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("testimonials.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border hover-lift"
            >
              <Quote className="h-10 w-10 text-primary mb-4" />
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
