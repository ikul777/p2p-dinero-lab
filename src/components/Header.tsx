import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
        ? 'bg-background/80 backdrop-blur-xl py-4 border-b border-border/50' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick} className="group">
            <h1 className="text-2xl font-display font-bold tracking-tight">
              <span className="text-foreground group-hover:text-gold transition-colors duration-300">Dinero</span>
              <span className="text-gradient-gold">Lab</span>
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium link-underline">
            Про нас
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium link-underline">
            Відгуки
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium link-underline">
            FAQ
          </a>
        </nav>
        
        <a 
          href="#join" 
          className="button-premium px-5 py-2.5 rounded-lg font-medium text-sm"
        >
          Приєднатись
        </a>
      </div>
    </header>
  );
};

export default Header;
