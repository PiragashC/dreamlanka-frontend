"use client";

import { cn } from "@/lib/utils";
import { Building2, HardHat, Wrench, Shield, Award, Users } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  imageUrl?: string;
}

function DisplayCard({
  className,
  icon = <Building2 className="size-4 text-primary" />,
  title = "Our Mission",
  description = "Building dreams into reality",
  date = "Since 2010",
  iconClassName = "text-primary",
  titleClassName = "text-primary",
  imageUrl,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-[24rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-primary/30 hover:bg-muted/90 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
            onError={(e) => { 
              e.currentTarget.onerror = null; 
              e.currentTarget.src = 'https://placehold.co/400x200/2d3748/ffffff?text=Construction'; 
            }}
          />
        </div>
      )}
      
      <div className="relative z-10">
        <span className="relative inline-block rounded-full bg-primary/20 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-semibold", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-base font-medium relative z-10">{description}</p>
      <p className="text-muted-foreground text-sm relative z-10">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Building2 className="size-4 text-primary" />,
      title: "Excellence",
      description: "Delivering superior construction quality",
      date: "Our Standard",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-green-500" />,
      title: "Safety First",
      description: "Protecting lives and property",
      date: "Zero Accidents",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Award className="size-4 text-yellow-500" />,
      title: "Innovation",
      description: "Modern techniques and technology",
      date: "Future Ready",
      iconClassName: "text-yellow-500",
      titleClassName: "text-yellow-500",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
