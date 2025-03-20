
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dinero-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <span className="text-white">Dinero</span>
            <span className="text-dinero-red">Lab</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium text-white hover:text-dinero-red transition-colors">
            Про нас
          </a>
          <a href="#problems" className="text-sm font-medium text-white hover:text-dinero-red transition-colors">
            Проблеми
          </a>
          <a href="#solution" className="text-sm font-medium text-white hover:text-dinero-red transition-colors">
            Рішення
          </a>
          <a href="#testimonials" className="text-sm font-medium text-white hover:text-dinero-red transition-colors">
            Відгуки
          </a>
          <a href="#faq" className="text-sm font-medium text-white hover:text-dinero-red transition-colors">
            FAQ
          </a>
          <a 
            href="#join" 
            className="bg-dinero-red text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-red-600 transition-all button-glow"
          >
            Увійти
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dinero-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium text-white hover:text-dinero-red transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Про нас
            </a>
            <a 
              href="#problems" 
              className="text-sm font-medium text-white hover:text-dinero-red transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Проблеми
            </a>
            <a 
              href="#solution" 
              className="text-sm font-medium text-white hover:text-dinero-red transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Рішення
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-white hover:text-dinero-red transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Відгуки
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-white hover:text-dinero-red transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#join" 
              className="bg-dinero-red text-white px-4 py-2 rounded-md font-medium text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Увійти в ком'юніті
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
