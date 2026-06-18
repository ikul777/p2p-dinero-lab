import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-dvh flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl sm:text-8xl font-black text-gradient mb-4">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-3">
          Сторінку не знайдено
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8">
          Можливо, посилання застаріло або сторінку було видалено.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-primary-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Повернутися на головну
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
