
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
      isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <h1 className="text-xl font-bold flex items-center">
              <div className="relative">
                <span className="text-white text-2xl font-bold">DINERO</span>
                <div className="absolute -top-5 -left-1 w-16 h-7">
                  <div className="absolute top-3 left-0 w-full">
                    <span className="text-dinero-red text-lg font-light tracking-wider italic">Dinero</span>
                  </div>
                </div>
              </div>
              <div className="relative ml-2">
                <span className="text-white text-2xl font-bold">LAB</span>
                <div className="absolute -bottom-4 -right-2 w-12 h-7">
                  <div className="absolute bottom-0 right-0">
                    <span className="text-dinero-red text-lg font-light tracking-wider italic">Lab</span>
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div className="absolute -bottom-1 right-0 transform translate-x-[105%]">
                  <span className="text-dinero-red text-xs font-light">by ikul777</span>
                </div>
              )}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
