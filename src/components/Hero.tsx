
import { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dinero-dark">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Animated gradient background */}
      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-br from-dinero-red/20 to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              P2P-арбітраж, який приносить кеш кожного дня
              <span className="text-gradient ml-2">👑</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Авторські P2P-зв'язки, реальні кейси, доступ до топового ком'юніті.
            </p>
          </div>
          
          <div className={`mt-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#join" 
              className="inline-flex items-center bg-dinero-red text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-red-600 transition-all button-glow"
            >
              Приєднатись до ком'юніті
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
          
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center mb-4 mx-auto">
                <DollarSign size={24} className="text-dinero-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Стабільний заробіток</h3>
              <p className="text-gray-400 text-sm">Реальні результати від перевірених P2P-зв'язок</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp size={24} className="text-dinero-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Перевірені зв'язки</h3>
              <p className="text-gray-400 text-sm">Стратегії, які працюють незалежно від ринку</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center mb-4 mx-auto">
                <Users size={24} className="text-dinero-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Топ Ком'юніті</h3>
              <p className="text-gray-400 text-sm">Постійна підтримка від досвідчених саппортів</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-dinero-light/50 hover:text-dinero-light transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
