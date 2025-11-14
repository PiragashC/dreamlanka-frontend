import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { siteLinks } from "@/data/siteLinks";

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) {
      return siteLinks;
    }
    return siteLinks.filter(
      (link) =>
        link.title.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query) ||
        link.path.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <section className="bg-slate-50/70 py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header className="mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Search</p>
          <h1 className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
            Find Buildora Pages
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Enter a keyword to explore Buildora content, or browse the suggestions below. All search
            results stay on-site and prioritize construction knowledge, packages, and contact paths.
          </p>
          <form
            role="search"
            method="get"
            className="flex flex-col gap-3 rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-md sm:flex-row sm:items-center"
          >
            <label htmlFor="site-search-input" className="text-sm font-semibold text-slate-600">
              Keyword
            </label>
            <input
              id="site-search-input"
              name="q"
              defaultValue={params.get("q") ?? ""}
              placeholder="e.g. approvals, packages, projects"
              className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-base text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="rounded-2xl bg-primary px-6 py-2 text-sm font-semibold text-[#0c1e3a] transition hover:bg-primary/90"
            >
              Search
            </button>
          </form>
        </header>

        <p className="text-sm text-foreground/70">
          Showing {results.length} result{results.length === 1 ? "" : "s"}
          {query && (
            <>
              {" "}
              for <span className="font-semibold text-accent">&ldquo;{query}&rdquo;</span>
            </>
          )}
        </p>

        <ul className="mt-6 space-y-4">
          {results.map((result) => (
            <li key={result.path} className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
              <Link
                to={result.path}
                className="text-lg font-semibold text-primary underline-offset-4 hover:underline"
              >
                {result.title}
              </Link>
              <p className="mt-1 text-sm text-foreground/75">{result.description}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                {result.category}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm text-foreground/80">
          Prefer a complete list? Visit the{" "}
          <Link
            to="/sitemap"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            HTML site map
          </Link>{" "}
          or fetch the{" "}
          <a
            href="/sitemap.xml"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            XML file
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default SearchPage;

