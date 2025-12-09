import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const benefits = [
  'Авторські звʼязки під різний бюджет',
  'Підтримка саппортів 24/7',
  'Закрита спільнота професіоналів'
];

const CTA = () => {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="join" className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 sm:opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[100px] sm:w-[150px] md:w-[300px] h-[100px] sm:h-[150px] md:h-[300px] bg-primary/5 sm:bg-primary/8 rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[80px] sm:w-[120px] md:w-[200px] h-[80px] sm:h-[120px] md:h-[200px] bg-primary/3 sm:bg-primary/5 rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Приєднуйся зараз</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">P2P без комʼюніті —</span>
              <br />
              <span className="text-foreground/30">це злиті гроші</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Отримай доступ до перевірених P2P-звʼязок і сильного комʼюніті
            </p>
          </div>
          
          {/* Main CTA card with animated border */}
          <div 
            ref={cardAnimation.ref}
            className={`transition-all duration-700 delay-150 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="animated-border p-5 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-8">
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-foreground">
                    Dinero Lab VIP
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6">
                    Отримай доступ до топових P2P-звʼязок та команди професіоналів
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 md:mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start group">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                          <Check size={10} className="sm:w-3 sm:h-3 text-primary" />
                        </div>
                        <span className="text-[11px] sm:text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA button - larger with pulse */}
                  <a 
                    href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary btn-pulse inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-xl font-semibold text-primary-foreground w-full md:w-auto justify-center"
                  >
                    Вступити в Dinero Lab
                    <ArrowRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </div>
                
                {/* Logo with float animation */}
                <div className="flex-shrink-0 order-first md:order-last">
                  <div className="relative animate-float-slow">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
                    <img 
                      src="/lovable-uploads/40d7ae54-8f62-41c0-aa32-9f26100d352c.png" 
                      alt="Dinero Lab Logo" 
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
