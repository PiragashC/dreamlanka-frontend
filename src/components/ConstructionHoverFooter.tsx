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
  Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
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
        href: "mailto:info@dreamlanka.com",
      },
      {
        Icon: Phone,
        text: t("footer.contact.phone"),
        href: "tel:+15551234567",
      },
      {
        Icon: MapPin,
        text: t("footer.contact.address"),
      },
    ],
    [i18n.language, t]
  );

  return (
    <footer className="relative overflow-hidden bg-[#0F0F11] text-white">
      <FooterBackgroundGradient />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="text-[#3ca2fa] text-3xl" />
              <span className="text-white text-3xl font-bold">{t("footer.brandName")}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {t("footer.brandDescription")}
            </p>
            <div className="flex space-x-3 pt-2">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#3ca2fa] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#3ca2fa] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start space-x-3">
                  <Icon size={18} className="text-[#3ca2fa]" />
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-300 hover:text-[#3ca2fa] transition-colors text-sm"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-300 hover:text-[#3ca2fa] transition-colors text-sm">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Quick Links */}
          <div className="flex space-x-6 text-gray-400">
            <Link to="/" className="hover:text-[#3ca2fa] transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/services" className="hover:text-[#3ca2fa] transition-colors">
              {t("nav.services")}
            </Link>
            <Link to="/projects" className="hover:text-[#3ca2fa] transition-colors">
              {t("nav.projects")}
            </Link>
            <Link to="/about" className="hover:text-[#3ca2fa] transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/contact" className="hover:text-[#3ca2fa] transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-gray-400">
            &copy; {new Date().getFullYear()} {t("footer.brandName")} {t("footer.rights")}
          </p>
        </div>
      </div>

      <div className="flex h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[26rem] -mt-28 sm:-mt-32 lg:-mt-40 -mb-24 sm:-mb-28 lg:-mb-32 justify-center items-center px-6">
        <TextHoverEffect
          text={t("footer.hoverText")}
          className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px]"
        />
      </div>
    </footer>
  );
}

export default React.memo(ConstructionHoverFooter);

