
import { useEffect } from 'react';
import { TrendingUp, Check, Star } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-20 bg-dinero-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-dinero-red/20 to-transparent rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Хто я такий
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Від новачка до експерта в P2P
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl relative">
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-dinero-red flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Моя історія в P2P</h3>
                
                <p className="text-gray-300 mb-4">
                  Почав як і більшість — з невеликих експериментів на P2P біржах. Перші успіхи швидко змінились розчаруваннями: нестабільні зв'язки, скам, відсутність підтримки.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Після місяців проб і помилок, знайшов робочі стратегії та створив команду професіоналів, які зараз приносять стабільний прибуток нашим учасникам.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Більше 3 років досвіду в P2P-арбітражі</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Створив робочі зв'язки, які приносять від $100 в день</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Допоміг більш ніж 300 учасникам почати заробляти</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 reveal-animation">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                    <Star size={20} className="text-dinero-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2">Чому наша команда реально шарить</h4>
                    <p className="text-gray-400 text-sm">
                      Ми не просто теоретики — кожен саппорт щодня працює з реальними зв'язками та допомагає учасникам 24/7.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                    <Star size={20} className="text-dinero-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2">Яких результатів ми досягнули</h4>
                    <p className="text-gray-400 text-sm">
                      Наша команда щомісяця генерує 6-значні суми на P2P-арбітражі — і ми ділимося усіма схемами з нашими учасниками.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                    <Star size={20} className="text-dinero-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-2">Що відрізняє нас від інших</h4>
                    <p className="text-gray-400 text-sm">
                      Ми надаємо реальні зв'язки, а не теоретичні курси. Наш підхід — практика і підтримка на кожному кроці.
                    </p>
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

export default About;
