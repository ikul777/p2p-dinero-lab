import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react';
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
    { loop: true, align: 'center', skipSnaps: false },
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

  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') lbPrev();
      else if (e.key === 'ArrowRight') lbNext();
      else if (e.key === 'Tab') {
        const root = lightboxRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // Restore focus to the element that opened the lightbox
      lastFocusedRef.current?.focus?.();
    };
  }, [lightboxIndex, close, lbPrev, lbNext]);

  const progressPct = ((selectedIndex + 1) / screenshots.length) * 100;

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* central ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[640px] aspect-square bg-primary/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-12 md:gap-14">

          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center space-y-3 sm:space-y-4 transition-all duration-700 ${
              headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                &nbsp;ВІДГУКИ ТА РЕЗУЛЬТАТИ
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-normal text-balance">
              <span className="text-foreground">Реальні </span>
              <span className="text-gradient">кейси</span>
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-[280px] sm:max-w-md mx-auto text-balance">
              Скріншоти живих відгуків учасників з відкритого каналу P2P FEEDBACK
            </p>
          </div>

          {/* Carousel */}
          <div
            ref={gridAnimation.ref}
            className={`relative w-full transition-all duration-700 ${
              gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-20" />

            <div className="overflow-hidden py-4 sm:py-6" ref={emblaRef}>
              <div className="flex items-center touch-pan-y">
                {screenshots.map((src, i) => {
                  const isActive = i === selectedIndex;
                  const distance = Math.abs(i - selectedIndex);
                  return (
                    <div
                      key={i}
                      className="flex-[0_0_60%] sm:flex-[0_0_52%] md:flex-[0_0_40%] lg:flex-[0_0_32%] min-w-0 px-2 sm:px-3 md:px-4"
                    >
                      <button
                        type="button"
                        onClick={() => (isActive ? setLightboxIndex(i) : scrollTo(i))}
                        aria-label={isActive ? `Відкрити відгук ${i + 1}` : `Перейти до відгуку ${i + 1}`}
                        className={`relative w-full block transition-all duration-700 ease-out will-change-transform ${
                          isActive
                            ? 'scale-100 opacity-100 z-10'
                            : distance === 1
                              ? `scale-[0.82] opacity-25 blur-[2px] ${i < selectedIndex ? '-rotate-6' : 'rotate-6'}`
                              : 'scale-[0.7] opacity-10 blur-[3px]'
                        }`}
                      >
                        {/* outer red glow */}
                        <div
                          className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] -z-10 transition-opacity duration-700 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            background:
                              'radial-gradient(50% 50% at 50% 50%, hsl(var(--primary) / 0.35), transparent 70%)',
                          }}
                        />

                        <div
                          className={`relative w-full aspect-[9/16] overflow-hidden rounded-[2rem] bg-card transition-all duration-500 ${
                            isActive
                              ? 'border border-primary/40 shadow-2xl shadow-primary/20'
                              : 'border border-border/40'
                          }`}
                        >
                          {/* zoom hint */}
                          <div
                            className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-border/40 flex items-center justify-center transition-all duration-500 ${
                              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                            }`}
                          >
                            <ZoomIn size={14} className="text-foreground/80" />
                          </div>


                          {/* image */}
                          <img
                            src={src}
                            alt={`Відгук ${i + 1} — DineroLab`}
                            loading="lazy"
                            draggable={false}
                            className="absolute inset-0 w-full h-full object-contain select-none bg-card"
                          />

                          {/* bottom darken */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation + progress */}
          <div className="flex items-center justify-center gap-5 sm:gap-8 w-full max-w-xs">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Попередній"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border bg-card/50 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:scale-105 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-xs font-mono font-bold tracking-widest text-foreground">
                {String(selectedIndex + 1).padStart(2, '0')}
                <span className="text-muted-foreground/50"> / 247</span>
              </span>
              <div className="relative h-[2px] w-full max-w-[120px] bg-border rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)] transition-all duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Наступний"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border bg-card/50 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:scale-105 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* dots for direct nav */}
          <div className="flex items-center gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Відгук ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === selectedIndex
                    ? 'w-6 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]'
                    : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* CTA — bordered glow card */}
          <div className="w-full max-w-sm px-2">
            <a
              href="https://t.me/+fsuDNjshEhplMGMy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-colors">
                <span className="text-foreground font-bold text-sm sm:text-base tracking-wide">
                  Більше відгуків
                </span>
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={16} className="text-primary-foreground" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && createPortal(
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Відгук ${lightboxIndex + 1} з ${screenshots.length}`}
          translate="no"
        >
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-background/70 border border-border/50 text-xs sm:text-sm text-muted-foreground backdrop-blur font-mono">
            {String(lightboxIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
          </div>

          <button
            type="button"
            autoFocus
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Закрити перегляд"
          >
            <X size={20} aria-hidden="true" />
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
        </div>,
        document.body
      )}
    </section>
  );
};

export default Testimonials;
