'use client';

import React from "react";
import { motion } from "framer-motion";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onNavigate?: () => void;
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
  isActive,
  onNavigate,
}: MenuItemProps) => {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
    setActive(null);
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div transition={{ duration: 0.3 }} className="group relative">
        <Link
          to={href ?? "#"}
          onClick={handleNavigate}
          className={cn(
            "relative cursor-pointer text-lg font-semibold tracking-wide text-slate-600 transition hover:text-accent",
            isActive && "text-accent"
          )}
        >
          {item}
          <span
            className={cn(
              "pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-0.5 transition-all duration-300",
              isActive ? "w-full bg-accent" : "w-0 bg-transparent group-hover:w-full group-hover:bg-accent"
            )}
          />
        </Link>
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

type MenuProps = {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
};

export const Menu = ({ setActive, children, className }: MenuProps) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative flex items-center justify-center space-x-5 rounded-full border border-blue-100 bg-white px-8 py-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      {children}
    </nav>
  );
};

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

export const ProductItem = ({ title, description, href, src }: ProductItemProps) => {
  return (
    <Link to={href} className="flex space-x-3" onClick={() => window.scrollTo({ top: 0 })}>
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        loading="lazy"
        className="h-[70px] w-[140px] flex-shrink-0 rounded-lg object-cover shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-base font-semibold text-accent">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  className,
  children,
  ...rest
}: LinkProps & { className?: string }) => {
  return (
    <Link
      {...rest}
      className={cn(
        "text-sm font-medium text-slate-600 transition hover:text-accent",
        className
      )}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      {children}
    </Link>
  );
};


