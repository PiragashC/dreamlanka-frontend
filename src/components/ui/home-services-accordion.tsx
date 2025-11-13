import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

// --- Data for the construction services accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Project Planning',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'General Contracting',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=3840&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Renovations',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { 
  item: typeof accordionItems[0], 
  isActive: boolean, 
  onMouseEnter: () => void 
}) => {
  return (
    <div
      className={`
        relative h-[350px] rounded-xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[300px]' : 'w-[50px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => { 
          e.currentTarget.onerror = null; 
          e.currentTarget.src = 'https://placehold.co/300x350/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-accent/70"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-base font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-4 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom
              : 'w-auto text-left bottom-20 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Home Services Accordion Component ---
export function HomeServicesAccordion() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(1); // Start with "General Contracting" as active

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 uppercase tracking-wider">
              {t("services.subtitle")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("services.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/services"
                className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
              >
                View All Services
              </a>
              {/* <a
                href="/contact"
                className="inline-block border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Get Quote
              </a> */}
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
