import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-16">
      <div className="text-center px-4">
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
        <p className="mb-8 text-2xl font-semibold">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist. Try the links below to find what you need.
        </p>
        <div className="mx-auto mb-8 flex max-w-xl flex-wrap items-center justify-center gap-3 text-sm">
          <Link to="/services" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Services
          </Link>
          <Link to="/projects" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Projects
          </Link>
          <Link to="/packages" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Packages
          </Link>
          <Link to="/resources" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Resources
          </Link>
          <Link to="/about" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Contact
          </Link>
          <Link to="/sitemap" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Site Map
          </Link>
          <Link to="/search" className="rounded-full border border-blue-100 px-4 py-2 transition hover:bg-blue-50 hover:text-accent">
            Search
          </Link>
        </div>
        <Link to="/">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
