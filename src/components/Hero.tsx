import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-24 pb-16 sm:pt-20 sm:pb-10 md:pt-0 md:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-primary/10 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      <div className="absolute inset-0 noise pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Tag */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="tag mb-4 sm:mb-6 inline-block text-[10px] sm:text-xs">P2P Комʼюніті</span>
            </div>
            
            {/* Main heading */}
            <h1 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-foreground">P2P-арбітраж,</span>
              <br />
              <span className="text-foreground">який приносить </span>
              <span className="text-gradient">кеш</span>
              <br />
              <span className="text-foreground/30 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">кожного дня</span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 px-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Авторські P2P-звʼязки, реальні кейси, доступ до топового комʼюніті
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
            <div className={`mt-8 sm:mt-10 md:mt-16 grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <div className="font-display font-bold text-xl sm:text-2xl md:text-4xl text-foreground mb-0.5 sm:mb-1">300+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">учасників</div>
              </div>
              <div className="text-center border-x border-border/50">
                <div className="font-display font-bold text-xl sm:text-2xl md:text-4xl text-foreground mb-0.5 sm:mb-1">24/7</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">підтримка</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-xl sm:text-2xl md:text-4xl text-foreground mb-0.5 sm:mb-1">3+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">роки досвіду</div>
              </div>
            </div>
            
            {/* Partnerships */}
            <div className={`mt-8 sm:mt-10 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 uppercase tracking-widest">Офіційний партнер</p>
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap">
                {partnerships.map((partner) => (
                  <a 
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-6 sm:h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on mobile */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;