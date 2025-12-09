import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

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
  const counter3100 = useCounterAnimation({ end: 3100, duration: 2000, delay: 500 });
  const counter300 = useCounterAnimation({ end: 300, duration: 1800, delay: 600 });
  const counter5 = useCounterAnimation({ end: 5, duration: 1200, delay: 700 });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative flex flex-col justify-center overflow-hidden animated-gradient-bg pt-12 pb-6 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
      {/* Background - optimized for mobile */}
      <div className="absolute inset-0 bg-grid opacity-10 sm:opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[120px] sm:w-[200px] md:w-[400px] h-[120px] sm:h-[200px] md:h-[400px] bg-primary/5 sm:bg-primary/8 rounded-full filter blur-[50px] sm:blur-[80px] md:blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[80px] sm:w-[120px] md:w-[250px] h-[80px] sm:h-[120px] md:h-[250px] bg-primary/3 sm:bg-primary/5 rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Logo with glow */}
            <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="font-display text-xs sm:text-sm md:text-base font-medium tracking-wide inline-block logo-glow">
                <span className="text-foreground">Dinero</span>
                <span className="text-primary text-glow">Lab</span>
              </h2>
            </div>
            {/* Main heading */}
            <h1 className={`font-display text-[22px] leading-[1.2] sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 transition-all duration-500 delay-75 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-gradient">P2P-АРБІТРАЖ —</span>
              <span className="block mt-1">
                <span className="text-foreground">твій інструмент для </span>
                <span className="text-gradient">стабільного заробітку</span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-[11px] sm:text-xs md:text-sm text-muted-foreground/60 max-w-md mx-auto mb-6 sm:mb-8 px-4 transition-all duration-500 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Авторські P2P звʼязки, постійні оновлення, досвідчені сапорти та доступ до топового комʼюніті
            </p>
            
            {/* CTA Button with pulse */}
            <div className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="#join" 
                className="btn-primary btn-pulse inline-flex items-center gap-2 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium text-primary-foreground active:scale-95 transition-transform"
              >
                Приєднатись до комʼюніті
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className={`mt-8 sm:mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div ref={counter3100.ref} className="text-center py-3 px-2 sm:p-3 md:p-4 rounded-xl bg-primary/5 sm:bg-transparent">
                <div className="font-display font-bold text-base sm:text-lg md:text-2xl text-primary mb-1 whitespace-nowrap">
                  {counter3100.count} <span className="text-[10px] sm:text-xs md:text-sm">USDT</span>
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight">
                  середній дохід
                </div>
              </div>
              <div ref={counter300.ref} className="text-center py-3 px-2 sm:p-3 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-base sm:text-lg md:text-2xl text-foreground mb-1">{counter300.count}+</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight">
                  учасників
                </div>
              </div>
              <div className="text-center py-3 px-2 sm:p-3 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-base sm:text-lg md:text-2xl text-foreground mb-1">24/7</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight">
                  підтримка
                </div>
              </div>
              <div ref={counter5.ref} className="text-center py-3 px-2 sm:p-3 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-base sm:text-lg md:text-2xl text-foreground mb-1">{counter5.count}+</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight">
                  років досвіду
                </div>
              </div>
            </div>
            
            {/* Partnerships - Subtle */}
            <div 
              ref={partnersAnimation.ref}
              className={`mt-8 sm:mt-10 md:mt-14 mb-2 sm:mb-4 transition-all duration-700 ease-out ${partnersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <p className={`text-[9px] sm:text-[10px] md:text-xs text-muted-foreground/50 mb-3 sm:mb-4 uppercase tracking-wider transition-all duration-500 ${partnersAnimation.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Офіційний партнер
              </p>
              <div className="inline-block border border-border/15 rounded-xl p-3 sm:p-4 md:p-6 active:scale-[0.98] transition-transform">
                <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
                  {partnerships.map((partner, index) => (
                    <a 
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        transitionDelay: partnersAnimation.isVisible ? `${index * 100}ms` : '0ms' 
                      }}
                      className={`transition-all duration-400 active:scale-95 ${partnersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className={`h-7 sm:h-8 md:h-10 w-auto object-contain partner-logo ${partner.colorClass}`}
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
