import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 bg-grid-premium"></div>
      
      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[120px] animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <div className={`transition-all duration-1000 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-8">
              <Sparkles size={14} className="text-gold" />
              <span>Преміум P2P Ком'юніті</span>
            </span>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              P2P-арбітраж, який
              <br />
              <span className="text-gradient-premium">приносить результат</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Авторські P2P-зв'язки, ексклюзивні стратегії та доступ до закритого ком'юніті професіоналів
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#join" 
              className="button-premium px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2"
            >
              Приєднатись до ком'юніті
              <ArrowRight size={20} />
            </a>
            <a 
              href="#about" 
              className="button-ghost px-8 py-4 rounded-xl font-medium text-lg inline-flex items-center gap-2"
            >
              Дізнатись більше
            </a>
          </div>
          
          {/* Feature Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-8 rounded-2xl group hover:glow-gold transition-all duration-500">
              <div className="icon-circle-premium h-14 w-14 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Ексклюзивні зв'язки</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Перевірені схеми з реальними результатами від нашої команди</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl group hover:glow-gold transition-all duration-500">
              <div className="icon-circle-premium h-14 w-14 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Стабільний дохід</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Стратегії, що працюють незалежно від ринкових умов</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl group hover:glow-gold transition-all duration-500">
              <div className="icon-circle-premium h-14 w-14 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Підтримка 24/7</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Команда досвідчених саппортів завжди на зв'язку</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-gold transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
