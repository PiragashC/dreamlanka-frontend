"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ClientBadge = {
  name: string;
  tagline: string;
  initials: string;
  gradient: string;
};

const CLIENT_BADGES: ClientBadge[] = [
  {
    name: "Caterpillar",
    tagline: "Heavy Machinery",
    initials: "CAT",
    gradient: "from-primary/90 via-primary/75 to-primary/60",
  },
  {
    name: "Volvo Construction",
    tagline: "Smart Vehicles",
    initials: "VOL",
    gradient: "from-accent/90 via-accent/75 to-blue-600/65",
  },
  {
    name: "Hitachi",
    tagline: "Industrial Systems",
    initials: "HIT",
    gradient: "from-primary/85 via-primary/70 to-orange-400/60",
  },
  {
    name: "Bosch",
    tagline: "Power Tools",
    initials: "BOS",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "Autodesk",
    tagline: "Design Software",
    initials: "ADS",
    gradient: "from-primary/88 via-primary/72 to-accent/60",
  },
  {
    name: "SketchUp",
    tagline: "3D Modeling",
    initials: "SKU",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "Microsoft",
    tagline: "Productivity Stack",
    initials: "MS",
    gradient: "from-accent/88 via-blue-600/72 to-sky-400/60",
  },
  {
    name: "Google Cloud",
    tagline: "Cloud Platform",
    initials: "GCP",
    gradient: "from-primary/90 via-primary/72 to-accent/58",
  },
  {
    name: "Amazon AWS",
    tagline: "Infrastructure",
    initials: "AWS",
    gradient: "from-primary/90 via-primary/75 to-yellow-400/60",
  },
  {
    name: "Docker",
    tagline: "Containers",
    initials: "DKR",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "Kubernetes",
    tagline: "Orchestration",
    initials: "K8S",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "GitHub",
    tagline: "Version Control",
    initials: "GH",
    gradient: "from-accent/95 via-accent/80 to-blue-600/65",
  },
  {
    name: "GitLab",
    tagline: "DevOps Platform",
    initials: "GL",
    gradient: "from-primary/88 via-primary/72 to-orange-400/60",
  },
  {
    name: "Prometheus",
    tagline: "Monitoring",
    initials: "PRO",
    gradient: "from-primary/85 via-primary/70 to-orange-400/60",
  },
  {
    name: "Grafana",
    tagline: "Observability",
    initials: "GRA",
    gradient: "from-primary/85 via-primary/70 to-accent/60",
  },
  {
    name: "Elastic",
    tagline: "Search & Analytics",
    initials: "ELS",
    gradient: "from-primary/88 via-primary/72 to-accent/58",
  },
  {
    name: "MongoDB",
    tagline: "Document Database",
    initials: "MDB",
    gradient: "from-accent/92 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "PostgreSQL",
    tagline: "Relational Database",
    initials: "PG",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
  {
    name: "React",
    tagline: "Frontend",
    initials: "RE",
    gradient: "from-accent/88 via-blue-600/72 to-sky-400/60",
  },
  {
    name: "Node.js",
    tagline: "Backend Runtime",
    initials: "NJ",
    gradient: "from-accent/88 via-blue-600/72 to-sky-400/60",
  },
  {
    name: "TypeScript",
    tagline: "Language",
    initials: "TS",
    gradient: "from-accent/90 via-blue-700/75 to-blue-500/60",
  },
];

const tileBase =
  "relative flex h-28 flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 text-center shadow-[0_18px_35px_rgba(15,23,42,0.08)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,23,42,0.15)]";

export const ClientLogoWall = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {CLIENT_BADGES.map((badge) => (
          <article key={badge.name} className={tileBase}>
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-x-6 top-4 h-20 rounded-3xl blur-2xl transition-opacity duration-500",
                `bg-gradient-to-r ${badge.gradient}`
              )}
            />
            <span className="relative z-10 text-xl font-semibold tracking-wide text-white drop-shadow-sm">
              {badge.initials}
            </span>
            <span className="relative z-10 mt-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/80">
              {badge.name}
            </span>
            <span className="relative z-10 mt-1 text-[11px] text-muted-foreground/70">
              {badge.tagline}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};


