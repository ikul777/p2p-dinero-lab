import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import logoRed from '@/assets/dinerolab-logo-red.png.asset.json';

const benefits = [
  'Авторські звʼязки під різний бюджет',
  'Підтримка саппортів 24/7',
  'Закрита спільнота професіоналів'
];

const CTA = () => {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="join" className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/8 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[100px] sm:w-[150px] md:w-[300px] h-[100px] sm:h-[150px] md:h-[300px] bg-primary/5 rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Приєднуйся зараз</span>
            <h2 className="font-display text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
              <span className="text-foreground">P2P без комʼюніті —</span>
              <br />
              <span className="text-foreground/30">це злиті гроші</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2 text-balance">
              Отримай доступ до перевірених P2P-звʼязок, команди професіоналів і сильного комʼюніті
            </p>
          </div>
          
          {/* Main CTA card with animated border */}
          <div 
            ref={cardAnimation.ref}
            className={`transition-all duration-700 delay-150 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="animated-border p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-8">
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
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
                    ПРИЄДНАТИСЬ В КОМ'ЮНІТІ
                    <ArrowRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </a>
                </div>
                
                {/* Logo with float animation */}
                <div className="flex-shrink-0 order-first md:order-last">
                  <div className="relative animate-float-slow">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
                    <img 
                      src={logoRed.url} 
                      alt="DineroLab Logo" 
                      className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
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
