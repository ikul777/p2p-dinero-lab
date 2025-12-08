import { useEffect } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const CTA = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    "Авторські зв'язки під різний бюджет",
    "Підтримка сапортів 24/7",
    "Закрита спільнота професіоналів"
  ];

  const partners = [
    {
      name: "WhiteBIT",
      logo: "/lovable-uploads/c3ed313c-63a6-4419-a6e1-baa7f220eeb6.png",
      link: "https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85",
      color: "from-blue-500/20 to-blue-600/10",
      textColor: "text-blue-400",
      buttonGradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Bybit",
      logo: "/lovable-uploads/bc9ec3e6-6ada-499c-833f-58675bd63dc5.png",
      link: "https://partner.bybit.com/b/136114",
      color: "from-orange-500/20 to-orange-600/10",
      textColor: "text-orange-400",
      buttonGradient: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    },
    {
      name: "OKX",
      logo: "/lovable-uploads/okx_logo.jpg",
      link: "https://www.okx.com/join/DINEROLAB",
      color: "from-emerald-500/20 to-emerald-600/10",
      textColor: "text-emerald-400",
      buttonGradient: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
      hasInstructions: true
    }
  ];

  return (
    <section id="join" className="py-24 bg-background relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold"></div>
      
      {/* Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="reveal-animation">
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-6">
              <Sparkles size={14} className="text-gold" />
              Приєднуйся зараз
            </span>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              P2P без ком'юніті – це <span className="text-gradient-gold">злиті гроші</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Якщо хочеш отримати доступ до перевірених P2P-зв'язок і сильного ком'юніті – приєднуйся до Dinero Lab.
            </p>
          </div>
          
          {/* Main CTA Card */}
          <div className="glass-card-elevated p-8 md:p-12 rounded-3xl mb-12 reveal-animation">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-left w-full lg:w-auto">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Dinero Lab <span className="text-gradient-gold">VIP</span> Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Отримай доступ до топових P2P-зв'язок та команди професіоналів
                </p>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="icon-circle-premium h-6 w-6 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-gold" />
                      </div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <img 
                src="/lovable-uploads/40d7ae54-8f62-41c0-aa32-9f26100d352c.png" 
                alt="Dinero Lab Logo" 
                className="w-32 h-32 md:w-44 md:h-44 object-contain glow-gold-intense rounded-2xl"
              />
            </div>
            
            <div className="pt-6 border-t border-border/30">
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-premium w-full md:w-auto px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                Вступити в Dinero Lab
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Partners Section */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8 reveal-animation">
              Офіційні партнерства
            </p>
            
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`glass-card overflow-hidden rounded-2xl relative reveal-animation`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-50`}></div>
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        className="h-14 md:h-16 w-auto"
                      />
                      <div>
                        <span className={`text-xs font-medium uppercase tracking-wider ${partner.textColor} mb-1 block`}>
                          Офіційне партнерство
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          Офіційний партнер біржі {partner.name}
                        </h3>
                        {partner.hasInstructions && (
                          <a 
                            href="/okx-instructions" 
                            className="inline-flex items-center text-xs text-muted-foreground hover:text-gold transition-colors mt-1"
                          >
                            Інструкція з переносу акаунта
                            <ArrowRight size={12} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`px-6 py-3 bg-gradient-to-r ${partner.buttonGradient} text-white text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto`}
                    >
                      Перейти на біржу
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
