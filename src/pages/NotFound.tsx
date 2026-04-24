import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-lg text-center animate-fade-in">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-primary mb-6 shadow-glow">
          <AlertTriangle className="h-10 w-10 text-primary-foreground" />
        </div>
        <h1 className="font-heading text-7xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The circuit you're looking for seems to be disconnected. Let's get you back on the grid.
        </p>
        <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
