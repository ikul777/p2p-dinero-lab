import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import logoWhite from '@/assets/dinerolab-logo-redwhite.png.asset.json';

const partnerships = [
  {
    name: 'WhiteBIT',
    logo: '/lovable-uploads/c3ed313c-63a6-4419-a6e1-baa7f220eeb6.png',
    link: 'https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85',
    colorClass: 'whitebit'
  },
  {
    name: 'Bybit',
    logo: '/lovable-uploads/bc9ec3e6-6ada-499c-833f-58675bd63dc5.png',
    link: 'https://partner.bybit.com/b/136114',
    colorClass: 'bybit'
  },
  {
    name: 'OKX',
    logo: '/lovable-uploads/okx_logo.jpg',
    link: 'https://www.okx.com/join/DINEROLAB',
    colorClass: 'okx'
  }
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const partnersAnimation = useScrollAnimation();
  
  // Counter animations for stats
  const counter4100 = useCounterAnimation({ end: 4100, duration: 2000, delay: 500 });
  const counter300 = useCounterAnimation({ end: 300, duration: 1800, delay: 600 });
  const counter5 = useCounterAnimation({ end: 5, duration: 1200, delay: 700 });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden animated-gradient-bg aurora-bg pt-16 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16">
      {/* Variant 9: P2P terminal data stream */}
      <style>{`@keyframes dl-stream{from{transform:translateY(0)}to{transform:translateY(-50%)}}`}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex justify-between gap-3 px-2 font-mono text-[9px] sm:text-[11px] leading-[1.9] select-none" style={{ maskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 18%, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 18%, black 55%, transparent 100%)' }}>
        {Array.from({ length: 10 }).map((_, c) => {
          const rows = Array.from({ length: 40 }).map((_, r) => {
            const s = (c * 37 + r * 13) % 97;
            const kinds = ['USDT/UAH', 'EUR/USDT', 'BUY', 'GBP/USDT', 'SELL', 'SPREAD', 'VOL'];
            const k = kinds[s % 7];
            const v =
              k === 'USDT/UAH' ? (45.2 + (s % 65) / 100).toFixed(2)
              : k === 'EUR/USDT' ? (1.11 + (s % 10) / 1000).toFixed(3)
              : k === 'GBP/USDT' ? (1.32 + (s % 20) / 1000).toFixed(3)
              : k === 'SPREAD' ? `+${(3.5 + (s % 37) / 10).toFixed(1)}%`
              : k === 'VOL' ? `${(s * 131) % 11500 + 500}$`
              : (45.2 + (s % 65) / 100).toFixed(2);
            return { k, v, hot: s % 7 === 0 };
          });
          return (
            <div key={c} className={`flex-1 overflow-hidden ${c % 2 ? 'hidden sm:block' : ''}`}>
              <div style={{ animation: `dl-stream ${28 + (c % 4) * 8}s linear infinite`, animationDirection: c % 3 === 0 ? 'reverse' : 'normal' }}>
                {[...rows, ...rows].map((row, i) => (
                  <div key={i} className={row.hot ? 'text-primary/70' : 'text-muted-foreground/25'}>
                    {row.k} <span className={row.k === 'SELL' ? 'text-primary/50' : ''}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'hsl(var(--primary) / 0.18)' }} />
      <div className="absolute inset-0 noise pointer-events-none hidden sm:block"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            {/* Archive badge */}
            <div className={`mb-5 sm:mb-7 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Проєкт завершено · Публічний кейс
              </span>
            </div>
            <div className={`relative mb-6 sm:mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img
                src={logoWhite.url}
                alt="DineroLab"
                className="relative h-16 sm:h-24 md:h-28 w-auto mx-auto object-contain"
              />
            </div>



            {/* Main heading */}
            <h1 className={`hero-display mx-auto max-w-[22rem] text-[clamp(24px,7vw,30px)] leading-[1.12] sm:max-w-none sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl mb-4 sm:mb-7 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}>
              <span className="sr-only">DineroLab — </span>
              <span className="block text-gradient-animated text-balance">
                Професійне P2P комʼюніті
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-[12px] sm:text-sm md:text-base text-muted-foreground/80 max-w-[21rem] sm:max-w-xl mx-auto mt-2 mb-6 sm:mb-10 leading-[1.65] sm:text-balance transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Авторські P2P-звʼязки, регулярні оновлення, досвідчені сапорти, партнерства з топовими криптобіржами та доступ до сильного комʼюніті однодумців.
            </p>
            
            {/* CTA Button with pulse */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-primary-foreground"
              >
                Перейти в Telegram-канал
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className={`mt-7 sm:mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-[340px] sm:max-w-2xl md:max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div ref={counter4100.ref} className="stat-card text-center p-3 sm:p-3 md:p-5 group min-h-[78px] sm:min-h-0">
                <span aria-hidden="true" className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <div className="font-display font-bold text-lg sm:text-xl md:text-[26px] lg:text-[28px] text-gradient mb-1 sm:mb-2 whitespace-nowrap transition-all">
                  {counter4100.count} <span className="text-[9px] sm:text-[10px] md:text-xs">USDT</span>
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  середній дохід учасника
                </div>
              </div>
              <div ref={counter300.ref} className="stat-card text-center p-3 sm:p-3 md:p-5 group min-h-[78px] sm:min-h-0">
                <div className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{counter300.count}+</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  учасників навчили заробляти на P2P
                </div>
              </div>
              <div className="stat-card text-center p-3 sm:p-3 md:p-5 group min-h-[78px] sm:min-h-0">
                <div className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">24/7</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  індивідуальна підтримка від наших сапортів
                </div>
              </div>
              <div ref={counter5.ref} className="stat-card text-center p-3 sm:p-3 md:p-5 group min-h-[78px] sm:min-h-0">
                <div className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{counter5.count}+</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  роки досвіду команди
                </div>
              </div>
            </div>
            
            {/* Partnerships - Subtle */}
            <div 
              ref={partnersAnimation.ref}
              className={`mt-8 sm:mt-12 md:mt-16 mb-1 sm:mb-6 transition-all duration-1000 ease-out ${partnersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className={`text-[10px] sm:text-xs text-muted-foreground/60 mb-4 sm:mb-6 uppercase tracking-widest transition-all duration-700 ${partnersAnimation.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                DineroLab партнер крипто-бірж
              </p>
              <div className="inline-block border border-border/20 rounded-xl px-4 py-3 sm:p-6 md:p-8 hover:border-border/40 transition-colors">
                <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14">
                  {partnerships.map((partner, index) => (
                    <a 
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        transitionDelay: partnersAnimation.isVisible ? `${index * 150}ms` : '0ms' 
                      }}
                      className={`transition-all duration-500 ${partnersAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className={`h-8 sm:h-10 md:h-12 w-auto object-contain partner-logo ${partner.colorClass}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
