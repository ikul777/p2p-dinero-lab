import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

import t1 from '@/assets/testimonials/testimonial-6752.png.asset.json';
import t2 from '@/assets/testimonials/testimonial-6753.png.asset.json';
import t3 from '@/assets/testimonials/testimonial-6754.png.asset.json';
import t4 from '@/assets/testimonials/testimonial-6755.png.asset.json';
import t5 from '@/assets/testimonials/testimonial-6756.png.asset.json';
import t6 from '@/assets/testimonials/testimonial-6757.png.asset.json';
import t7 from '@/assets/testimonials/testimonial-6760.png.asset.json';
import t8 from '@/assets/testimonials/testimonial-6761.png.asset.json';
import t9 from '@/assets/testimonials/testimonial-6762.png.asset.json';
import t10 from '@/assets/testimonials/testimonial-6763.png.asset.json';

const testimonialData = [
  { id: 1, src: t1.url, author: 'Орест КЛ' },
  { id: 2, src: t2.url, author: 'Drac' },
  { id: 3, src: t3.url, author: 'mark88' },
  { id: 4, src: t4.url, author: 'Oleg' },
  { id: 5, src: t5.url, author: 'Alex Kirke' },
  { id: 6, src: t6.url, author: 'Donald Tramp' },
  { id: 7, src: t7.url, author: 'trapstar' },
  { id: 8, src: t8.url, author: 'Tixon' },
  { id: 9, src: t9.url, author: 'Volodymyr' },
  { id: 10, src: t10.url, author: 'stt_' },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const headerAnimation = useScrollAnimation();
  const carouselAnimation = useScrollAnimation({ threshold: 0.1 });

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setShowLeftButton(container.scrollLeft > 20);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowRightButton(container.scrollLeft < maxScrollLeft - 20);
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = isMobile ? 260 : 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isPaused || isMobile || lightboxSrc) return;
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, isMobile, lightboxSrc]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    return () => container.removeEventListener('scroll', checkScrollPosition);
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxSrc]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Відгуки</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Реальні </span>
              <span className="text-gradient">кейси</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Скріншоти живих відгуків від учасників нашого комʼюніті
            </p>
          </div>

          {/* Carousel */}
          <div
            ref={carouselAnimation.ref}
            className={`relative transition-all duration-700 delay-150 ${carouselAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="carousel-fade-left hidden md:block"></div>
            <div className="carousel-fade-right hidden md:block"></div>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonialData.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setLightboxSrc(t.src)}
                  className="group relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] rounded-xl sm:rounded-2xl overflow-hidden glass-card p-0 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]"
                  style={{ scrollSnapAlign: 'start' }}
                  aria-label={`Відгук від ${t.author}`}
                >
                  <div className="relative w-full aspect-[9/16] bg-muted/30 overflow-hidden">
                    <img
                      src={t.src}
                      alt={`Відгук від ${t.author} — DineroLab`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
                    {/* zoom icon */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/70 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={14} className="text-foreground" />
                    </div>
                    {/* footer chip */}
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 flex items-center justify-between">
                      <span className="tag text-[8px] sm:text-[10px] px-2 py-0.5">P2P FEEDBACK</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground truncate ml-2">@{t.author}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {!isMobile && (
              <>
                {showLeftButton && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    onClick={() => scrollBy('left')}
                  >
                    <ChevronLeft size={20} />
                  </Button>
                )}
                {showRightButton && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    onClick={() => scrollBy('right')}
                  >
                    <ChevronRight size={20} />
                  </Button>
                )}
              </>
            )}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-6 sm:mt-8 md:mt-12 transition-all duration-700 delay-300 ${carouselAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="https://t.me/+fsuDNjshEhplMGMy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium text-primary-foreground"
            >
              Більше відгуків
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Закрити"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxSrc}
            alt="Відгук — DineroLab"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-border/40"
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
