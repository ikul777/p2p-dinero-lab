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
      className={`group fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:right-5 z-50 inline-flex h-11 w-11 sm:h-12 sm:w-auto sm:min-w-[10rem] items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/35 bg-background/75 px-0 sm:px-4 text-primary shadow-[0_8px_28px_-10px_hsl(var(--primary)/0.35)] backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_10px_32px_-8px_hsl(var(--primary)/0.5)] active:scale-95 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="sr-only sm:not-sr-only whitespace-nowrap font-semibold text-xs leading-none tracking-normal">
        Приєднатись
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 transition-colors group-hover:bg-primary-foreground/20">
        <ArrowRight size={15} strokeWidth={2.2} />
      </span>
    </a>
  );
};

export default FloatingCTA;
