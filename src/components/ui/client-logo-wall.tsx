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
    gradient: "from-amber-500/80 via-orange-500/70 to-amber-400/70",
  },
  {
    name: "Volvo Construction",
    tagline: "Smart Vehicles",
    initials: "VOL",
    gradient: "from-sky-500/80 via-blue-500/70 to-slate-500/70",
  },
  {
    name: "Hitachi",
    tagline: "Industrial Systems",
    initials: "HIT",
    gradient: "from-rose-500/80 via-amber-500/70 to-orange-500/70",
  },
  {
    name: "Bosch",
    tagline: "Power Tools",
    initials: "BOS",
    gradient: "from-emerald-500/80 via-green-500/70 to-teal-500/70",
  },
  {
    name: "Autodesk",
    tagline: "Design Software",
    initials: "ADS",
    gradient: "from-cyan-500/80 via-blue-500/70 to-indigo-500/70",
  },
  {
    name: "SketchUp",
    tagline: "3D Modeling",
    initials: "SKU",
    gradient: "from-pink-500/80 via-purple-500/70 to-indigo-500/70",
  },
  {
    name: "Microsoft",
    tagline: "Productivity Stack",
    initials: "MS",
    gradient: "from-blue-500/80 via-blue-400/70 to-sky-400/70",
  },
  {
    name: "Google Cloud",
    tagline: "Cloud Platform",
    initials: "GCP",
    gradient: "from-amber-500/80 via-blue-500/70 to-green-500/70",
  },
  {
    name: "Amazon AWS",
    tagline: "Infrastructure",
    initials: "AWS",
    gradient: "from-orange-500/80 via-amber-500/70 to-yellow-500/70",
  },
  {
    name: "Docker",
    tagline: "Containers",
    initials: "DKR",
    gradient: "from-sky-500/80 via-blue-500/70 to-sky-400/70",
  },
  {
    name: "Kubernetes",
    tagline: "Orchestration",
    initials: "K8S",
    gradient: "from-indigo-500/80 via-blue-500/70 to-indigo-400/70",
  },
  {
    name: "GitHub",
    tagline: "Version Control",
    initials: "GH",
    gradient: "from-neutral-800/90 via-neutral-700/80 to-neutral-600/80",
  },
  {
    name: "GitLab",
    tagline: "DevOps Platform",
    initials: "GL",
    gradient: "from-orange-500/80 via-rose-500/70 to-pink-500/70",
  },
  {
    name: "Prometheus",
    tagline: "Monitoring",
    initials: "PRO",
    gradient: "from-orange-500/80 via-red-500/70 to-rose-500/70",
  },
  {
    name: "Grafana",
    tagline: "Observability",
    initials: "GRA",
    gradient: "from-amber-500/80 via-orange-500/70 to-pink-500/70",
  },
  {
    name: "Elastic",
    tagline: "Search & Analytics",
    initials: "ELS",
    gradient: "from-teal-500/80 via-sky-500/70 to-yellow-500/70",
  },
  {
    name: "MongoDB",
    tagline: "Document Database",
    initials: "MDB",
    gradient: "from-emerald-500/80 via-green-500/70 to-lime-500/70",
  },
  {
    name: "PostgreSQL",
    tagline: "Relational Database",
    initials: "PG",
    gradient: "from-blue-600/80 via-blue-500/70 to-sky-500/70",
  },
  {
    name: "React",
    tagline: "Frontend",
    initials: "RE",
    gradient: "from-sky-500/80 via-cyan-500/70 to-emerald-500/70",
  },
  {
    name: "Node.js",
    tagline: "Backend Runtime",
    initials: "NJ",
    gradient: "from-emerald-500/80 via-green-500/70 to-lime-500/70",
  },
  {
    name: "TypeScript",
    tagline: "Language",
    initials: "TS",
    gradient: "from-blue-500/80 via-blue-400/70 to-indigo-500/70",
  },
];

const tileBase =
  "relative flex h-28 flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card/80 px-4 py-3 text-center shadow-[0_18px_35px_rgba(8,11,30,0.18)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(8,11,30,0.25)]";

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
            <span className="relative z-10 text-xl font-semibold tracking-wide text-clean-white">
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


