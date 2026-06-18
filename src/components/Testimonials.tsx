import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

import t1 from '@/assets/testimonials/testimonial-6752.png.asset.json';
import t2 from '@/assets/testimonials/testimonial-6753.png.asset.json';
import t3 from '@/assets/testimonials/testimonial-6754.png.asset.json';
import t4 from '@/assets/testimonials/testimonial-6755.png.asset.json';
import t5 from '@/assets/testimonials/testimonial-6756.png.asset.json';
import t6 from '@/assets/testimonials/testimonial-6757.png.asset.json';
import t7 from '@/assets/testimonials/testimonial-6760.png.asset.json';

const screenshots: string[] = [
  t1.url, t2.url, t3.url, t4.url, t5.url, t6.url, t7.url,
];

const Testimonials = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation({ threshold: 0.05 });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const lbPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length)),
    []
  );
  const lbNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % screenshots.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') lbPrev();
      else if (e.key === 'ArrowRight') lbNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, lbPrev, lbNext]);

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full filter blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-14 transition-all duration-700 ${
              headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">
              Відгуки
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Реальні </span>
              <span className="text-gradient">кейси</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Скріншоти живих відгуків з нашого приватного каналу P2P FEEDBACK
            </p>
          </div>

          {/* Carousel */}
          <div
            ref={gridAnimation.ref}
            className={`relative transition-all duration-700 ${
              gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center touch-pan-y">
                {screenshots.map((src, i) => {
                  const isActive = i === selectedIndex;
                  return (
                    <div
                      key={i}
                      className="flex-[0_0_72%] sm:flex-[0_0_50%] md:flex-[0_0_38%] lg:flex-[0_0_30%] min-w-0 px-2 sm:px-3 md:px-4"
                    >
                      <button
                        type="button"
                        onClick={() => (isActive ? setLightboxIndex(i) : scrollTo(i))}
                        aria-label={isActive ? `Відкрити відгук ${i + 1}` : `Перейти до відгуку ${i + 1}`}
                        className={`group relative w-full overflow-hidden rounded-2xl bg-card/40 backdrop-blur ring-1 transition-all duration-500 ${
                          isActive
                            ? 'ring-primary/60 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.45)] scale-100 opacity-100 z-10'
                            : 'ring-border/30 opacity-60 scale-[0.93] hover:opacity-85'
                        }`}
                      >
                        {/* glass shine top */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent z-10" />
                        <img
                          src={src}
                          alt={`Відгук ${i + 1} — DineroLab`}
                          loading="lazy"
                          draggable={false}
                          className="w-full h-auto max-h-[65vh] sm:max-h-[70vh] md:max-h-[75vh] object-contain block select-none"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* nav buttons */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Попередній"
              className="absolute left-1 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-primary/10 hover:border-primary/50 flex items-center justify-center transition-all"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Наступний"
              className="absolute right-1 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-primary/10 hover:border-primary/50 flex items-center justify-center transition-all"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Відгук ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? 'w-6 sm:w-8 bg-primary'
                    : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* counter */}
          <p className="text-center mt-4 text-[10px] sm:text-xs text-muted-foreground/70">
            {selectedIndex + 1} / {screenshots.length} · оновлюється щотижня
          </p>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-10 md:mt-14">
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
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-background/70 border border-border/50 text-xs sm:text-sm text-muted-foreground backdrop-blur">
            {lightboxIndex + 1} / {screenshots.length}
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Закрити"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Попередній"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lbNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Наступний"
          >
            <ChevronRight size={22} />
          </button>

          <img
            src={screenshots[lightboxIndex]}
            alt={`Відгук ${lightboxIndex + 1} — DineroLab`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-border/40"
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
