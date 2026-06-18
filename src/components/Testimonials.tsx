import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
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

const screenshots: string[] = [
  t1.url, t2.url, t3.url, t4.url, t5.url,
  t6.url, t7.url, t8.url, t9.url, t10.url,
];

const Testimonials = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation({ threshold: 0.05 });

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % screenshots.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            <p className="mt-2 text-[10px] sm:text-xs text-muted-foreground/70">
              {screenshots.length} відгуків · оновлюється щотижня
            </p>
          </div>

          {/* Mobile: horizontal snap carousel */}
          <div
            ref={gridAnimation.ref}
            className={`md:hidden transition-all duration-700 ${
              gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
            >
              {screenshots.map((src, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative flex-shrink-0 w-[78vw] max-w-[340px] snap-center rounded-2xl overflow-hidden bg-card/40 backdrop-blur ring-1 ring-border/40 hover:ring-primary/50 transition-all duration-300 p-0"
                  aria-label={`Відгук ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Відгук ${i + 1} — DineroLab`}
                    loading="lazy"
                    className="w-full h-auto max-h-[70vh] object-contain block"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: masonry grid */}
          <div
            className={`hidden md:block transition-all duration-700 ${
              gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
              {screenshots.map((src, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative mb-5 block w-full break-inside-avoid rounded-2xl overflow-hidden bg-card/40 backdrop-blur ring-1 ring-border/40 hover:ring-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)] p-0"
                  aria-label={`Відгук ${i + 1}`}
                >
                  {/* glass shine top */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                  <img
                    src={src}
                    alt={`Відгук ${i + 1} — DineroLab`}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  {/* zoom hint */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} className="text-foreground" />
                  </div>
                </button>
              ))}
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
          {/* counter */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-full bg-background/70 border border-border/50 text-xs sm:text-sm text-muted-foreground backdrop-blur">
            {lightboxIndex + 1} / {screenshots.length}
          </div>

          {/* close */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Закрити"
          >
            <X size={20} />
          </button>

          {/* prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all z-10"
            aria-label="Попередній"
          >
            <ChevronLeft size={22} />
          </button>

          {/* next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
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
