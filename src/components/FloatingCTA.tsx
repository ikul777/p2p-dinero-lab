import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;

      // Hide when the final CTA section (#join) is visible to avoid duplicate buttons
      const joinEl = document.getElementById('join');
      let nearJoin = false;
      if (joinEl) {
        const rect = joinEl.getBoundingClientRect();
        nearJoin = rect.top < window.innerHeight * 0.85;
      }

      setIsVisible(scrolled && !nearJoin);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#join"
      aria-label="Приєднатись до ком'юніті"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 font-medium text-xs sm:text-sm transition-all duration-300 floating-cta hover:scale-110 ${
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
