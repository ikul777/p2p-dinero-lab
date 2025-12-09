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
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 font-medium text-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Приєднатись
      <ArrowRight size={16} />
    </a>
  );
};

export default FloatingCTA;
