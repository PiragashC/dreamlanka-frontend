export type SiteLink = {
  path: string;
  title: string;
  description: string;
  category: "Company" | "Services" | "Projects" | "Resources" | "Packages" | "Support" | "Learning";
};

export const siteLinks: SiteLink[] = [
  {
    path: "/",
    title: "Home",
    description: "Buildora Engineers overview, hero stories, and featured stats.",
    category: "Company",
  },
  {
    path: "/about",
    title: "About Buildora",
    description: "Mission, vision, and company history.",
    category: "Company",
  },
  {
    path: "/company/about",
    title: "Company Overview",
    description: "Detailed narrative about Buildora Engineers and culture.",
    category: "Company",
  },
  {
    path: "/company/experts",
    title: "Our Experts",
    description: "Meet the architects, engineers, and delivery specialists.",
    category: "Company",
  },
  {
    path: "/company/join",
    title: "Join Buildora",
    description: "Careers and collaboration opportunities.",
    category: "Company",
  },
  {
    path: "/services",
    title: "Services",
    description: "Full-lifecycle construction and design offerings.",
    category: "Services",
  },
  {
    path: "/projects",
    title: "Projects",
    description: "Case studies and highlight reels across Sri Lanka.",
    category: "Projects",
  },
  {
    path: "/packages",
    title: "Packages",
    description: "Compare delivery packages and inclusions.",
    category: "Packages",
  },
  {
    path: "/packages/samples",
    title: "Package Samples",
    description: "Look inside Buildora deliverables.",
    category: "Packages",
  },
  {
    path: "/packages/rates",
    title: "Package Rates",
    description: "Investment ranges and pricing tiers.",
    category: "Packages",
  },
  {
    path: "/packages/explore",
    title: "Package Explorer",
    description: "Interactive view of package features.",
    category: "Packages",
  },
  {
    path: "/resources",
    title: "Resources",
    description: "Compliance tips, galleries, and consult options.",
    category: "Resources",
  },
  {
    path: "/resources/approvals",
    title: "Approvals Guide",
    description: "BOI, UDA, and CEA process playbooks.",
    category: "Resources",
  },
  {
    path: "/resources/architecture-gallery",
    title: "Architecture Gallery",
    description: "Exterior inspiration and concept images.",
    category: "Resources",
  },
  {
    path: "/resources/interior-gallery",
    title: "Interior Gallery",
    description: "Interior build-outs and finish inspirations.",
    category: "Resources",
  },
  {
    path: "/resources/free-consultation",
    title: "Free Consultation",
    description: "Book a session with Buildora specialists.",
    category: "Resources",
  },
  {
    path: "/learning-hub",
    title: "Learning Hub",
    description: "Insights, guides, and educational material.",
    category: "Learning",
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Phone, email, and location details.",
    category: "Support",
  },
  {
    path: "/sitemap",
    title: "HTML Sitemap",
    description: "Complete list of Buildora pages.",
    category: "Support",
  },
  {
    path: "/search",
    title: "Search",
    description: "Keyword search across Buildora pages.",
    category: "Support",
  },
];

