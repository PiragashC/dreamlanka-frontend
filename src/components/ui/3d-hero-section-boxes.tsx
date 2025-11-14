"use client";

import React, { useEffect, useRef, useState } from 'react';
import { TextRotate } from './text-rotate';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EtherealShadow } from './etheral-shadow';
import { useMediaQuery } from 'usehooks-ts';

// Enhanced Animated Number Component
const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span id={`stat-${value}`}>
      {count}
      {suffix}
    </span>
  );
};
function HeroAnimatedBackground({
  active,
  reducedMotion,
  isMobile,
}: {
  active: boolean;
  reducedMotion: boolean;
  isMobile: boolean;
}) {
  const gradientLayers = [
    'radial-gradient(circle at 12% 25%, hsl(var(--accent) / 0.35), transparent 58%)',
    'radial-gradient(circle at 78% 18%, hsl(var(--primary) / 0.3), transparent 62%)',
    'radial-gradient(circle at 48% 82%, hsl(var(--accent) / 0.18), transparent 72%)',
  ];

  const staticLayers = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/30 backdrop-blur-[1px]" />
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 12%, rgba(15,23,42,0.14), transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 88%, rgba(249,115,22,0.16), transparent 72%)',
        }}
      />
    </>
  );

  if (reducedMotion || isMobile) {
    return <div className="relative h-full w-full overflow-hidden">{staticLayers}</div>;
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {active && (
        <EtherealShadow
          sizing="fill"
          hideHeading
          color="hsl(var(--accent) / 0.55)"
          animation={{ scale: 82, speed: 60 }}
          noise={{ opacity: 0.4, scale: 1.15 }}
          gradientLayers={gradientLayers}
          backgroundImage="linear-gradient(145deg, rgba(15,23,42,0.08), rgba(249,115,22,0.1))"
          noiseBlendMode="soft-light"
          className="absolute inset-0 z-0"
        />
      )}
      {staticLayers}
      {active && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, hsl(var(--primary) / 0.2), transparent 68%)',
          }}
          animate={{ opacity: [0.14, 0.26, 0.14] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}

function HeroContent() {
  const { t } = useTranslation();
  
  return (
    <div className="flex w-full flex-col gap-10 text-foreground">
      <div className="w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
          <span className="block">{t("hero.title")}</span>
          <span className="mt-4 flex min-h-[60px] items-center justify-start">
            <TextRotate
              texts={[
                "Excellence",
                "Quality",
                "Innovation",
                "Trust",
                "Success",
                "Reliability"
              ]}
              mainClassName="text-white bg-accent px-8 py-4 rounded-xl inline-block shadow-lg font-bold min-w-fit whitespace-nowrap"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-visible"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2500}
            />
          </span>
        </h1>
        <div className="relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full border border-accent/20 bg-accent/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_16px_35px_rgba(15,23,42,0.12)]">
          <span className="absolute inset-0 -z-10 blur-2xl bg-primary/20" />
          <span className="relative">CONSTRUCTION \ BUILDING \ DESIGN \ QUALITY \ TRUST</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-start">
        <p className="mb-6 max-w-xl rounded-3xl border border-accent/10 bg-white px-7 py-6 text-base leading-relaxed text-foreground shadow-[0_18px_48px_rgba(15,23,42,0.1)]">
          Transforming visions into reality with innovative construction solutions and exceptional craftsmanship that stands the test of time.
        </p>
        <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-primary bg-primary px-6 py-3 text-base font-semibold text-[#0c1e3a] transition duration-300 hover:bg-primary/90 sm:w-auto sm:px-8"
          >
            {t("hero.getStarted")}
          </Link>
        </div>
      </div>

    </div>
  );
}

const HeroVisual = ({ isMobile }: { isMobile: boolean }) => {
  const baseClass =
    "w-full min-h-[320px] overflow-hidden rounded-[2.5rem] border border-blue-100 bg-cover bg-center shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:min-h-[480px] lg:min-h-[660px] xl:min-h-[720px]";
  const style = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=2200&q=80')",
  };

  if (isMobile) {
    return (
      <div className={baseClass} style={style}>
        <div className="h-full w-full bg-gradient-to-br from-white/50 via-transparent to-blue-100/60" />
      </div>
    );
  }

  return (
    <motion.div
      className={baseClass}
      style={style}
      initial={{
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      }}
      animate={{
        clipPath: 'polygon(32% 0, 100% 0, 100% 100%, 0% 100%)',
      }}
      transition={{ duration: 1.1, ease: 'circOut' }}
    >
      <div className="h-full w-full bg-gradient-to-br from-white/50 via-transparent to-blue-100/60" />
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-white py-20">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
    <div className="pointer-events-none absolute top-0 left-1/5 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 right-1/5 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
          Our Achievements
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Numbers that speak to our commitment to excellence and client satisfaction
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { value: 350, suffix: "+", label: "Projects Completed", icon: "🏗️" },
          { value: 65, suffix: "+", label: "Happy Clients", icon: "😊" },
          { value: 80, suffix: "+", label: "Expert Staff", icon: "👷" },
          { value: 100, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              type: "spring",
              stiffness: 110,
            }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-primary/60 hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-4 text-4xl"
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.45, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-muted-foreground"
              >
                {stat.label}
              </motion.p>
              <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 rounded-full bg-primary/30 transition-colors duration-300 group-hover:bg-primary/60" />
              <div className="pointer-events-none absolute bottom-2 left-2 h-1 w-1 rounded-full bg-accent/20 transition-colors duration-300 group-hover:bg-accent/40" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="mx-auto max-w-2xl rounded-xl border border-blue-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
          <p className="text-lg text-foreground/80">
            "Building dreams, creating futures, and delivering excellence since our inception."
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-2 w-2 rounded-full bg-accent/70" />
            <div className="h-2 w-2 rounded-full bg-accent/40" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [backgroundActive, setBackgroundActive] = useState(false);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) {
      setBackgroundActive(false);
      return;
    }
    const container = backgroundRef.current;
    if (!container) {
      setBackgroundActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setBackgroundActive(true));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [prefersReducedMotion, isMobile]);

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0" ref={backgroundRef}>
        <HeroAnimatedBackground
          active={backgroundActive}
          reducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </div>

      <motion.section
        className="relative z-10 container mx-auto flex flex-col items-center gap-12 px-4 pb-20 pt-32 md:flex-row md:items-stretch md:justify-between md:px-6 md:pb-24 md:pt-28 lg:px-8"
        initial={prefersReducedMotion || isMobile ? false : { opacity: 0, y: 40 }}
        animate={prefersReducedMotion || isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-full md:w-[58%] lg:w-[55%]">
          <HeroContent />
        </div>
        <div className="w-full md:w-[42%] lg:w-[40%]">
          <HeroVisual isMobile={isMobile} />
        </div>
      </motion.section>

      <div className="relative z-10">
        <StatsSection />
      </div>
    </div>
  );
};

export { HeroSection }