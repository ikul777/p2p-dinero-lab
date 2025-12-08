import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Авторські звʼязки під різний бюджет',
  'Підтримка саппортів 24/7',
  'Закрита спільнота професіоналів'
];

const CTA = () => {
  return (
    <section id="join" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/10 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 reveal-animation">
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Приєднуйся зараз</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">P2P без комʼюніті —</span>
              <br />
              <span className="text-foreground/30">це злиті гроші</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-2">
              Отримай доступ до перевірених P2P-звʼязок і сильного комʼюніті
            </p>
          </div>
          
          {/* Main CTA card */}
          <div className="reveal-animation">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl sm:rounded-2xl blur-xl"></div>
              
              <div className="relative glass-card p-5 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl border border-primary/30">
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
                        <div key={index} className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="sm:w-3 sm:h-3 text-primary" />
                          </div>
                          <span className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA button */}
                    <a 
                      href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-primary-foreground w-full md:w-auto justify-center"
                    >
                      Вступити в Dinero Lab
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                    </a>
                  </div>
                  
                  {/* Logo */}
                  <div className="flex-shrink-0 order-first md:order-last">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
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
      </div>
    </section>
  );
};

export default CTA;