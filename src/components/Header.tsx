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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl py-3' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="group z-50">
          <h1 className="font-display text-lg md:text-xl font-bold tracking-tight">
            <span className="text-foreground">Dinero</span>
            <span className="text-primary">Lab</span>
          </h1>
        </Link>
        
        {/* CTA Button */}
        <a 
          href="#join" 
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            isScrolled 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'border border-border text-foreground hover:border-primary hover:text-primary'
          }`}
        >
          Приєднатись
          <ArrowRight size={14} className="sm:w-4 sm:h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
