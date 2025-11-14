import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Menu, X } from "lucide-react";
import { Menu as HoverMenu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-menu";

const NavigationComponent = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);

  const navItems = useMemo(
    () => [
      {
        key: "company",
        label: t("nav.company"),
        href: "/company/about",
        children: [
          { label: t("nav.companyAbout"), href: "/company/about" },
          { label: t("nav.companyExperts"), href: "/company/experts" },
          { label: t("nav.joinBe"), href: "/company/join" },
        ],
      },
      {
        key: "services",
        label: t("nav.services"),
        href: "/services",
        anchors: [],
      },
      {
        key: "projects",
        label: t("nav.projects"),
        href: "/projects",
        anchors: [],
      },
      {
        key: "packages",
        label: t("nav.packages"),
        href: "/packages",
        children: [
          { label: t("nav.packagesSamples"), href: "/packages/samples" },
          { label: t("nav.packagesRates"), href: "/packages/rates" },
          { label: t("nav.packagesExplore"), href: "/packages/explore" },
        ],
      },
      {
        key: "resources",
        label: t("nav.resources"),
        href: "/resources",
        children: [
          { label: t("nav.resourcesApprovals"), href: "/resources#approvals" },
          { label: t("nav.resourcesArchi"), href: "/resources#architecture-gallery" },
          { label: t("nav.resourcesInterior"), href: "/resources#interior-gallery" },
          { label: t("nav.resourcesConsultation"), href: "/resources#free-consultation" },
        ],
      },
      {
        key: "learningHub",
        label: t("nav.learningHub"),
        href: "/learning-hub",
        anchors: [],
      },
    ],
    [i18n.language, t]
  );

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-blue-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        <Link
          to="/"
          className="flex items-center gap-4"
          aria-label="Buildora Engineers home"
          onClick={closeMobile}
        >
          <img
            src="/be-logo.png"
            alt="Buildora Engineers logo"
            className="h-20 w-auto"
            width="200"
            height="80"
            draggable={false}
          />
          <span className="hidden text-2xl font-semibold tracking-wide text-accent sm:inline">
            Buildora Engineers
          </span>
        </Link>

        <div className="hidden lg:block">
          <HoverMenu setActive={setActiveDesktop} className="px-10">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.children && item.children.some((child) => location.pathname === child.href.split("#")[0]));

              const hasDropdown = Boolean(item.children && item.children.length);

              const panel = hasDropdown ? (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {t("nav.quickLinks")}
                  </span>
                  <HoveredLink to={item.href}>{t("nav.overview")}</HoveredLink>
                  {item.children?.map((child) => (
                    <HoveredLink key={child.label} to={child.href}>
                      {child.label}
                    </HoveredLink>
                  ))}
                </div>
                <div className="grid gap-4">
                  {item.key === "company" && (
                    <>
                      <ProductItem
                        title="About Buildora Engineers"
                        href="/company/about"
                        src="https://images.unsplash.com/photo-1529429617124-aee0014819be?auto=format&fit=crop&w=600&q=80"
                        description="Discover our origins, guiding principles, and delivery ethos."
                      />
                      <ProductItem
                        title="Join Buildora"
                        href="/company/join"
                        src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
                        description="Become part of our specialist network or delivery teams."
                      />
                    </>
                  )}
                  {item.key === "packages" && (
                    <>
                      <ProductItem
                        title="Sample Deliverables"
                        href="/packages/samples"
                        src="https://images.unsplash.com/photo-1555580399-e7d0c8fb828b?auto=format&fit=crop&w=600&q=80"
                        description="Preview drawings, schedules, and playbooks from each package."
                      />
                      <ProductItem
                        title="Investment Guidance"
                        href="/packages/rates"
                        src="https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=600&q=80"
                        description="Understand cost bands and inclusions tailored to your scope."
                      />
                    </>
                  )}
                  {item.key === "resources" && (
                    <>
                      <ProductItem
                        title="Approval Playbook"
                        href="/resources/approvals"
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
                        description="Step-by-step guidance through BOI, UDA, and CEA processes."
                      />
                      <ProductItem
                        title="Design Inspiration"
                        href="/resources/architecture-gallery"
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                        description="Explore Buildora’s architecture and interior concept gallery."
                      />
                    </>
                  )}
                </div>
              </div>
            ) : null;

              return (
                <MenuItem
                  key={item.label}
                  setActive={setActiveDesktop}
                  active={activeDesktop}
                  item={item.label}
                  href={item.href}
                  isActive={isActive}
                >
                  {panel}
                </MenuItem>
              );
            })}
          </HoverMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden whitespace-nowrap rounded-full border border-primary bg-white px-5 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/50 lg:inline-flex"
          >
            {t("nav.contact")}
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-lg border border-blue-100 bg-white p-2 text-accent shadow-sm transition lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-blue-100 bg-white/95 px-4 pb-6 pt-2 shadow-lg lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-blue-100 pb-3 last:border-none">
                <div className="flex items-center justify-between gap-3 text-lg font-semibold text-accent">
                  <Link
                    to={item.href}
                    className="flex-1 text-left"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="rounded-full border border-blue-100 bg-white p-1"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {(item.children || item.anchors) && openDropdown === item.label && (
                  <ul className="mt-3 space-y-2 pl-3">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-accent"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                    {item.anchors?.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-accent"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-primary bg-white px-5 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/50"
                onClick={closeMobile}
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default React.memo(NavigationComponent);