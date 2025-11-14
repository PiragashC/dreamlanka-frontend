"use client";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const SOCIAL_LINKS = [
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/BuildoraEngineers",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/BuildoraEngineers",
  },
  {
    Icon: Twitter,
    label: "X (Twitter)",
    href: "https://twitter.com/BuildoraEng",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/buildora-engineers",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@BuildoraEngineers",
  },
];

function ConstructionHoverFooter() {
  const { t, i18n } = useTranslation();

  const footerLinks = useMemo(
    () => [
      {
        title: t("footer.sections.services.title"),
        links: [
          { label: t("footer.sections.services.links.0"), href: "/services" },
          { label: t("footer.sections.services.links.1"), href: "/services" },
          { label: t("footer.sections.services.links.2"), href: "/services" },
          { label: t("footer.sections.services.links.3"), href: "/services" },
        ],
      },
      {
        title: t("footer.sections.company.title"),
        links: [
          { label: t("footer.sections.company.links.0"), href: "/about" },
          { label: t("footer.sections.company.links.1"), href: "/about" },
          { label: t("footer.sections.company.links.2"), href: "/contact" },
          {
            label: t("footer.sections.company.links.3"),
            href: "/contact",
            pulse: true,
          },
        ],
      },
    ],
    [i18n.language, t]
  );

  const contactInfo = useMemo(
    () => [
      {
        Icon: Mail,
        text: t("footer.contact.email"),
        href: "mailto:hello@buildoraengineers.com",
      },
      {
        Icon: Phone,
        text: t("footer.contact.phone"),
        href: "tel:+94214567890",
      },
      {
        Icon: MapPin,
        text: t("footer.contact.address"),
      },
    ],
    [i18n.language, t]
  );

  return (
    <footer className="relative overflow-hidden bg-[#f4f7ff] text-foreground">
      <FooterBackgroundGradient />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/be-logo.png"
                alt={t("footer.brandName") ?? "Buildora Engineers"}
                className="h-12 w-auto"
                width="160"
                height="48"
                draggable={false}
              />
              <span className="text-3xl font-bold text-accent">{t("footer.brandName")}</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/70">
              {t("footer.brandDescription")}
            </p>
            <div className="flex space-x-3 pt-2">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/50 transition-colors hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-accent">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/65 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-accent">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start space-x-3">
                  <Icon size={18} className="text-primary" />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-foreground/70 transition-colors hover:text-accent"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-foreground/70">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-blue-100" />

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-foreground/60 md:justify-start">
            <Link to="/" className="transition-colors hover:text-accent">
              {t("nav.home")}
            </Link>
            <Link to="/services" className="transition-colors hover:text-accent">
              {t("nav.services")}
            </Link>
            <Link to="/projects" className="transition-colors hover:text-accent">
              {t("nav.projects")}
            </Link>
            <Link to="/about" className="transition-colors hover:text-accent">
              {t("nav.about")}
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              {t("nav.contact")}
            </Link>
            <Link to="/sitemap" className="transition-colors hover:text-accent">
              {t("nav.siteMap")}
            </Link>
            <Link to="/search" className="transition-colors hover:text-accent">
              {t("nav.search")}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-foreground/60 md:text-left">
            &copy; {new Date().getFullYear()} {t("footer.brandName")} {t("footer.rights")}
          </p>
        </div>
      </div>

      <div className="flex h-[18rem] -mb-24 -mt-28 justify-center px-6 sm:h-[20rem] sm:-mb-28 sm:-mt-32 md:h-[22rem] lg:h-[26rem] lg:-mb-32 lg:-mt-40">
        <TextHoverEffect
          text={t("footer.hoverText")}
          className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px]"
        />
      </div>
    </footer>
  );
}

export default React.memo(ConstructionHoverFooter);

