import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[150px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center">
            {/* Tag */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="tag mb-6 inline-block">
                P2P Ком'юніті
              </span>
            </div>
            
            {/* Main heading */}
            <h1 
              className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="text-foreground">P2P-арбітраж,</span>
              <br />
              <span className="text-foreground">який приносить </span>
              <span className="text-gradient">кеш</span>
              <br />
              <span className="text-outline text-foreground/20">кожного дня</span>
            </h1>
            
            {/* Subheading */}
            <p 
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Авторські P2P-зв'язки, реальні кейси, доступ до топового ком'юніті
            </p>
            
            {/* CTA Button */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="#join" 
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium text-primary-foreground"
              >
                Приєднатись до ком'юніті
                <ArrowRight size={20} />
              </a>
            </div>
            
            {/* Stats */}
            <div className={`mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <div className="counter-number text-3xl md:text-4xl mb-1">300+</div>
                <div className="text-sm text-muted-foreground">учасників</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="counter-number text-3xl md:text-4xl mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">підтримка</div>
              </div>
              <div className="text-center">
                <div className="counter-number text-3xl md:text-4xl mb-1">3+</div>
                <div className="text-sm text-muted-foreground">роки досвіду</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
