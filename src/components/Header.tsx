import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="group">
          <h1 className="font-display text-xl font-bold tracking-tight">
            <span className="text-foreground group-hover:text-foreground/80 transition-colors">Dinero</span>
            <span className="text-primary">Lab</span>
          </h1>
        </Link>
        
        <a 
          href="#join" 
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
            isScrolled 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'border border-border text-foreground hover:border-primary hover:text-primary'
          }`}
        >
          Приєднатись
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
};

export default Header;
