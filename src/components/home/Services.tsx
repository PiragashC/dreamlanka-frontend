import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { HomeServicesAccordion } from "../ui/home-services-accordion";
import { Compare } from "../ui/compare";
import { FeatureCarousel, type ImageSet } from "@/components/ui/animated-feature-carousel";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>

     {/* Interactive Services Accordion */}
     <HomeServicesAccordion />
      {/* Construction Services Feature Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Construction Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end delivery from planning and engineering to handover and ongoing support.
            </p>
          </div>
          {(() => {
            const images: ImageSet = {
              alt: "Construction workflow",
              step1img1:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1740&auto=format&fit=crop",
              step1img2:
                "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1740&auto=format&fit=crop",
              step2img1:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1661&auto=format&fit=crop",
              step2img2:
                "https://images.unsplash.com/photo-1581091012184-7c54d6896a52?q=80&w=1674&auto=format&fit=crop",
              step3img:
                "https://images.unsplash.com/photo-1517089596392-fb9a9033e05a?q=80&w=1740&auto=format&fit=crop",
              step4img:
                "https://images.unsplash.com/photo-1581091215367-59ab6d234ca3?q=80&w=1742&auto=format&fit=crop",
            };
            return <FeatureCarousel image={images} />;
          })()}
        </div>
      </section>

      {/* Before/After Construction Comparison Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Excellence Since Day One
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our commitment to quality and innovation has made us a trusted partner in construction projects across the region.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Compare Component */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="p-4 border rounded-3xl bg-card border-border shadow-lg">
                  <Compare
                    firstImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop"
                    secondImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop"
                    firstImageClassName="object-cover object-center"
                    secondImageClassname="object-cover object-center"
                    className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                    slideMode="hover"
                    autoplay={true}
                    autoplayDuration={3000}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 max-w-lg"
              >
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Our Construction Philosophy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that exceptional construction is built on a foundation of trust, transparency, and unwavering commitment to quality. 
                      Every project we undertake is approached with meticulous planning, attention to detail, and a deep understanding of our clients' 
                      vision. Our philosophy centers around delivering not just buildings, but lasting legacies that stand the test of time.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Industry-Leading Standards
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our construction processes adhere to the highest industry standards and regulations. We maintain rigorous quality control 
                      measures throughout every phase of construction, from initial planning to final inspection. Our team undergoes continuous 
                      training to stay updated with the latest construction techniques, safety protocols, and environmental best practices.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Ready to Experience the Difference?
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Join hundreds of satisfied clients who have trusted us with their construction projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link to="/contact">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Start Your Project Today
                        </Button>
                      </Link>
                      {/* <Link to="/about">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          Learn More About Us
                        </Button>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
