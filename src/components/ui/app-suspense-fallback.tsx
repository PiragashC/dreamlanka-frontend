import { Loader2 } from "lucide-react";

const AppSuspenseFallback = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
      <div className="flex items-center gap-3">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
        <span className="text-sm font-medium tracking-wide uppercase">
          Loading Buildora Engineers experience…
        </span>
      </div>
    </div>
  );
};

export default AppSuspenseFallback;

