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
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-center gap-1.5 sm:gap-2 pl-3.5 pr-2.5 py-2 sm:pl-4 sm:pr-3 sm:py-2.5 bg-background/70 backdrop-blur-xl border border-primary/30 text-primary rounded-full shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.25)] font-semibold text-[11px] sm:text-xs tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_8px_32px_-4px_hsl(var(--primary)/0.45)] hover:scale-105 active:scale-95 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Приєднатись
      <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 transition-colors">
        <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
      </span>
    </a>
  );
};

export default FloatingCTA;
