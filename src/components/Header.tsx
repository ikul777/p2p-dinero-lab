import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 py-3' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="group z-50">
          <h1 className="font-display text-lg md:text-xl font-bold tracking-tight">
            <span className="text-foreground">Dinero</span>
            <span className="text-primary">Lab</span>
          </h1>
        </Link>
        
        {/* Desktop CTA */}
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 md:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a 
                href="#about" 
                className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Про мене
              </a>
              <a 
                href="#solution" 
                className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Рішення
              </a>
              <a 
                href="#testimonials" 
                className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Відгуки
              </a>
              <a 
                href="#join" 
                className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-lg font-medium text-primary-foreground mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Приєднатись
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
