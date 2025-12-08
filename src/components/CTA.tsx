import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Авторські зв\'язки під різний бюджет',
  'Підтримка саппортів 24/7',
  'Закрита спільнота професіоналів'
];

const partnerships = [
  {
    name: 'WhiteBIT',
    logo: '/lovable-uploads/c3ed313c-63a6-4419-a6e1-baa7f220eeb6.png',
    link: 'https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85',
    colorClass: 'from-blue-500/20 to-blue-600/20',
    borderClass: 'border-blue-500/30 hover:border-blue-500/50',
    btnClass: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'Bybit',
    logo: '/lovable-uploads/bc9ec3e6-6ada-499c-833f-58675bd63dc5.png',
    link: 'https://partner.bybit.com/b/136114',
    colorClass: 'from-orange-500/20 to-orange-600/20',
    borderClass: 'border-orange-500/30 hover:border-orange-500/50',
    btnClass: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    name: 'OKX',
    logo: '/lovable-uploads/okx_logo.jpg',
    link: 'https://www.okx.com/join/DINEROLAB',
    colorClass: 'from-emerald-500/20 to-emerald-600/20',
    borderClass: 'border-emerald-500/30 hover:border-emerald-500/50',
    btnClass: 'bg-emerald-500 hover:bg-emerald-600',
    hasInstructions: true
  }
];

const CTA = () => {
  return (
    <section id="join" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[150px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 reveal-animation">
            <span className="tag mb-4 inline-block">Приєднуйся зараз</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">P2P без ком'юніті —</span>
              <br />
              <span className="text-outline">це злиті гроші</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Якщо хочеш отримати доступ до перевірених P2P-зв'язок і сильного ком'юніті
            </p>
          </div>
          
          {/* Main CTA card */}
          <div className="reveal-animation mb-12">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl"></div>
              
              <div className="relative glass-card p-8 md:p-10 rounded-2xl border border-primary/30">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                      Dinero Lab VIP
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Отримай доступ до топових P2P-зв'язок та команди професіоналів
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA button */}
                    <a 
                      href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium text-primary-foreground w-full lg:w-auto justify-center"
                    >
                      Вступити в Dinero Lab
                      <ArrowRight size={20} />
                    </a>
                  </div>
                  
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                      <img 
                        src="/lovable-uploads/40d7ae54-8f62-41c0-aa32-9f26100d352c.png" 
                        alt="Dinero Lab Logo" 
                        className="relative w-32 h-32 md:w-40 md:h-40 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partnerships */}
          <div className="reveal-animation">
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest">
              Офіційні партнерства
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {partnerships.map((partner) => (
                <div 
                  key={partner.name}
                  className={`glass-card p-6 rounded-xl border ${partner.borderClass} transition-all duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="h-12 w-auto mb-4 object-contain"
                    />
                    <span className="text-xs text-muted-foreground mb-3">Офіційний партнер</span>
                    
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${partner.btnClass} text-white text-sm font-medium px-4 py-2 rounded-full transition-colors inline-flex items-center gap-2`}
                    >
                      Перейти
                      <ArrowRight size={14} />
                    </a>
                    
                    {partner.hasInstructions && (
                      <a 
                        href="/okx-instructions" 
                        className="text-xs text-muted-foreground hover:text-foreground mt-3 hover-underline"
                      >
                        Інструкція з переносу акаунта
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
