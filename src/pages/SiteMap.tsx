import { Link } from "react-router-dom";
import { siteLinks, type SiteLink } from "@/data/siteLinks";

const groupByCategory = siteLinks.reduce<Record<string, SiteLink[]>>((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});

const SiteMap = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="mb-10 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Buildora Engineers
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
          HTML Site Map
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
          Browse every public page on our site from a single, accessible directory. Use the links
          below for direct navigation or head to the search page for keyword discovery.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(groupByCategory).map(([category, links]) => (
          <article
            key={category}
            className="rounded-3xl border border-blue-100 bg-slate-50/70 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-accent">{category}</h2>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.path} className="flex flex-col rounded-2xl bg-white/80 p-4 shadow">
                  <Link
                    to={link.path}
                    className="text-base font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {link.title}
                  </Link>
                  <p className="text-sm text-foreground/70">{link.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm text-foreground/80">
        <p>
          Need something specific? Try the{" "}
          <Link
            to="/search"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            on-site search
          </Link>{" "}
          or download the XML sitemap via{" "}
          <a
            href="/sitemap.xml"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            /sitemap.xml
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);

export default SiteMap;

