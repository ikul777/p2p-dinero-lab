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
  const counter4100 = useCounterAnimation({ end: 4100, duration: 2000, delay: 500 });
  const counter300 = useCounterAnimation({ end: 300, duration: 1800, delay: 600 });
  const counter5 = useCounterAnimation({ end: 5, duration: 1200, delay: 700 });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative flex flex-col justify-center overflow-hidden animated-gradient-bg pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
      {/* Background - optimized for mobile */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[250px] md:w-[500px] h-[150px] sm:h-[250px] md:h-[500px] bg-primary/8 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[100px] sm:w-[150px] md:w-[300px] h-[100px] sm:h-[150px] md:h-[300px] bg-primary/5 rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      <div className="absolute inset-0 noise pointer-events-none hidden sm:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Logo with glow */}
            <div className={`mb-6 sm:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="font-display text-sm sm:text-base md:text-lg font-medium tracking-wide inline-block logo-glow">
                <span className="text-foreground">Dinero</span>
                <span className="text-primary text-glow">Lab</span>
              </h2>
            </div>
            {/* Main heading */}
            <h1 className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-gradient">P2P-АРБІТРАЖ —</span>
              <span className="block">
                <span className="text-foreground">твій інструмент для </span>
                <span className="text-gradient">стабільного заробітку</span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-[10px] sm:text-xs md:text-sm text-muted-foreground/50 max-w-lg mx-auto mt-2 mb-8 sm:mb-10 px-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Авторські P2P звʼязки, постійні оновлення, досвідчені сапорти, партнерства з біржами та доступ до комʼюніті конкурентів якому немає на ринку
            </p>
            
            {/* CTA Button with pulse */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#join" 
                className="btn-primary btn-pulse inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-primary-foreground"
              >
                Приєднатись до комʼюніті
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className={`mt-8 sm:mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div ref={counter4100.ref} className="text-center p-2 sm:p-2 md:p-4 group">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-primary mb-1 sm:mb-2 whitespace-nowrap group-hover:text-glow transition-all">
                  {counter4100.count} <span className="text-[8px] sm:text-sm md:text-lg">USDT</span>
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  середній дохід учасника
                </div>
              </div>
              <div ref={counter300.ref} className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30 group">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{counter300.count}+</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  учасників навчили заробляти на p2p
                </div>
              </div>
              <div className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30 group">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">24/7</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  індивідуальна підтримка від наших сапортів
                </div>
              </div>
              <div ref={counter5.ref} className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30 group">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{counter5.count}+</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  роки досвіду команди
                </div>
              </div>
            </div>
            
            {/* Partnerships - Subtle */}
            <div 
              ref={partnersAnimation.ref}
              className={`mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 transition-all duration-1000 ease-out ${partnersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className={`text-[10px] sm:text-xs text-muted-foreground/60 mb-4 sm:mb-6 uppercase tracking-widest transition-all duration-700 ${partnersAnimation.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                DineroLab партнер крипто-бірж
              </p>
              <div className="inline-block border border-border/20 rounded-xl p-4 sm:p-6 md:p-8 hover:border-border/40 transition-colors">
                <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-14">
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
