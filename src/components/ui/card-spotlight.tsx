"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

import React, {
  MouseEvent as ReactMouseEvent,
  useMemo,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const glowStyle = useMemo(() => {
    const stopColor = color.includes("rgba")
      ? color.replace(/rgba?\((.+)\)/, "rgba($1, 0.55)")
      : `${color}88`;

    return {
      background: `radial-gradient(circle at center, ${stopColor} 0%, transparent 65%)`,
    } as React.CSSProperties;
  }, [color]);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-border bg-card",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <div className="pointer-events-none absolute inset-0 rounded-md">
            <div
              className="absolute inset-0 animate-pulse rounded-md opacity-80 blur-2xl transition duration-300"
              style={glowStyle}
            />
            <div className="absolute inset-0 rounded-md border border-white/10 opacity-30" />
          </div>
        )}
      </motion.div>
      {children}
    </div>
  );
};

