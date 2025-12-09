import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#join"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-primary text-primary-foreground rounded-full shadow-lg font-medium text-xs sm:text-sm transition-all duration-300 floating-cta active:scale-95 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Приєднатись
      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
    </a>
  );
};

export default FloatingCTA;
