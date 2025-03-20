
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

        <div className="hidden md:block">
          <img 
            src="/lovable-uploads/61be801a-5db2-4c37-b7b8-5980d8b07377.png" 
            alt="Luxury car on parking lot" 
            className="h-14 rounded-md object-cover shadow-lg transform transition-transform hover:scale-105"
          />
        </div>

        <div className="flex items-center">
          <a 
            href="https://t.me/+iDCbfd3Bm8wxMzZi" 
            className="bg-dinero-red text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-red-600 transition-all button-glow"
          >
            Увійти
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
