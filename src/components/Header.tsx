
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on another page, Link will handle navigation to home
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dinero-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick} className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-bold">
              <span className="text-white">Dinero</span>
              <span className="text-dinero-red">Lab</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
