import { useState, useEffect, useCallback, useRef } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Quote, ZoomIn } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
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

  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false, dragFree: false },
    [autoplay.current]
  );

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
      {/* ambient backdrop */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full filter blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[100px]" />
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-14 transition-all duration-700 ${
              headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-widest text-primary uppercase">
                Live · Відгуки
              </span>
            </div>
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
            {/* floating quote mark */}
            <Quote
              className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 text-primary/10 z-0"
              size={120}
              strokeWidth={1}
            />

            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-background via-background/70 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-background via-background/70 to-transparent z-20" />

            <div className="overflow-hidden py-6 sm:py-8" ref={emblaRef}>
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
                        className={`group relative w-full block transition-all duration-700 ease-out will-change-transform ${
                          isActive
                            ? 'scale-100 opacity-100 z-10'
                            : 'scale-[0.86] opacity-45 hover:opacity-75'
                        }`}
                      >
                        {/* gradient frame */}
                        <div
                          className={`absolute -inset-[1.5px] rounded-2xl transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            background:
                              'linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.1) 40%, transparent 70%, hsl(var(--primary) / 0.4))',
                          }}
                        />
                        {/* outer glow */}
                        <div
                          className={`absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-700 -z-10 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            background:
                              'radial-gradient(50% 50% at 50% 50%, hsl(var(--primary) / 0.35), transparent 70%)',
                          }}
                        />

                        <div
                          className={`relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-xl ring-1 ${
                            isActive ? 'ring-primary/30' : 'ring-border/30'
                          }`}
                        >
                          {/* top glass shine */}
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent z-10" />
                          {/* corner index badge */}
                          <div
                            className={`pointer-events-none absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider transition-all duration-500 ${
                              isActive
                                ? 'bg-primary/90 text-primary-foreground'
                                : 'bg-background/70 text-muted-foreground border border-border/50'
                            }`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          {/* zoom hint */}
                          <div
                            className={`pointer-events-none absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center transition-all duration-500 ${
                              isActive
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 -translate-y-2'
                            } group-hover:bg-primary/20 group-hover:border-primary/50`}
                          >
                            <ZoomIn size={14} className="text-foreground/80" />
                          </div>

                          <img
                            src={src}
                            alt={`Відгук ${i + 1} — DineroLab`}
                            loading="lazy"
                            draggable={false}
                            className="w-full h-auto max-h-[65vh] sm:max-h-[70vh] md:max-h-[75vh] object-contain block select-none"
                          />

                          {/* bottom subtle gradient for read */}
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/80 to-transparent z-[5]" />
                        </div>
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
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Наступний"
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-xl border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* dots + counter row */}
          <div className="flex flex-col items-center gap-3 mt-6 sm:mt-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Відгук ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === selectedIndex
                      ? 'w-8 sm:w-10 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]'
                      : 'w-1.5 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground/70 font-mono tracking-wider">
              <span className="text-primary font-semibold">
                {String(selectedIndex + 1).padStart(2, '0')}
              </span>
              <span className="w-6 h-px bg-border" />
              <span>{String(screenshots.length).padStart(2, '0')}</span>
              <span className="mx-1">·</span>
              <span>оновлюється щотижня</span>
            </div>
          </div>

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
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-background/70 border border-border/50 text-xs sm:text-sm text-muted-foreground backdrop-blur font-mono">
            {String(lightboxIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
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
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-border/40 animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
