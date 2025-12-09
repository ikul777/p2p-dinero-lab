import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/use-counter-animation';

const partnerships = [
  {
    name: 'WhiteBIT',
    logo: '/lovable-uploads/c3ed313c-63a6-4419-a6e1-baa7f220eeb6.png',
    link: 'https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85'
  },
  {
    name: 'Bybit',
    logo: '/lovable-uploads/bc9ec3e6-6ada-499c-833f-58675bd63dc5.png',
    link: 'https://partner.bybit.com/b/136114'
  },
  {
    name: 'OKX',
    logo: '/lovable-uploads/okx_logo.jpg',
    link: 'https://www.okx.com/join/DINEROLAB'
  }
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Counter animations for stats
  const counter3100 = useCounterAnimation({ end: 3100, duration: 2000, delay: 500 });
  const counter300 = useCounterAnimation({ end: 300, duration: 1800, delay: 600 });
  const counter5 = useCounterAnimation({ end: 5, duration: 1200, delay: 700 });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-24 pb-16 sm:pt-28 sm:pb-10 md:pt-32 md:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-primary/10 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      <div className="absolute inset-0 noise pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Main heading */}
            <h1 className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            
            {/* CTA Button */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#join" 
                className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-primary-foreground"
              >
                Приєднатись до комʼюніті
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className={`mt-8 sm:mt-10 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div ref={counter3100.ref} className="text-center p-2 sm:p-2 md:p-4">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-primary mb-1 sm:mb-2 whitespace-nowrap">
                  {counter3100.count} <span className="text-[8px] sm:text-sm md:text-lg">USDT</span>
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  середній дохід учасника
                </div>
              </div>
              <div ref={counter300.ref} className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2">{counter300.count}+</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  учасників навчили заробляти на p2p
                </div>
              </div>
              <div className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2">24/7</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  індивідуальна підтримка від наших сапортів
                </div>
              </div>
              <div ref={counter5.ref} className="text-center p-2 sm:p-2 md:p-4 sm:border-l sm:border-border/30">
                <div className="font-display font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2">{counter5.count}+</div>
                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-muted-foreground leading-tight">
                  роки досвіду команди
                </div>
              </div>
            </div>
            
            {/* Partnerships - Subtle */}
            <div className={`mt-10 sm:mt-12 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-[10px] sm:text-xs text-muted-foreground/60 mb-4 sm:mb-6 uppercase tracking-widest">
                DineroLab партнер крипто-бірж
              </p>
              <div className="inline-block border border-border/20 rounded-xl p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-14">
                  {partnerships.map((partner) => (
                    <a 
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-8 sm:h-10 md:h-12 w-auto object-contain"
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