
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Solution = () => {
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
    <section id="solution" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-[20%] left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Рішення
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Що таке Dinero Lab?
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Тут отримують робочі P2P-зв'язки, які реально працюють
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl h-full relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-semibold mb-4 relative z-10">Авторські P2P-зв'язки під різний бюджет</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Ми пропонуємо перевірені зв'язки практично для будь-якого бюджету — від $500. Кожна зв'язка спочатку проходить тест а потім надається в роботу учасникам спільноти.
                </p>
                
                <a 
                  href="https://t.me/ikul777" 
                  className="inline-flex items-center text-dinero-red hover:text-dinero-light group relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline">Дізнатися більше</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl h-full relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-semibold mb-4 relative z-10">Постійне оновлення зв'язок та актуальної інфи</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Ринок P2P постійно змінюється. Наша команда стабільно перевіряє всі схеми та оновлює актуальну інформацію для учасників спільноти.
                </p>
                
                <a 
                  href="https://t.me/ikul777" 
                  className="inline-flex items-center text-dinero-red hover:text-dinero-light group relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline">Дізнатися більше</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl h-full relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-semibold mb-4 relative z-10">Сапорти з багаторічним досвідом</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Наші саппорти — не просто консультанти. Це люди, які щодня роблять реальні транзакції та знають всі нюанси ринку.
                </p>
                
                <a 
                  href="https://t.me/ikul777" 
                  className="inline-flex items-center text-dinero-red hover:text-dinero-light group relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline">Дізнатися більше</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl h-full relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-semibold mb-4 relative z-10">Закрите ком'юніті без рандомних людей</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Ми цінуємо довіру та безпеку наших учасників. Тому доступ до ком'юніті отримують далеко не всі, наявність грошей це не основний критерій.
                </p>
                
                <a 
                  href="https://t.me/ikul777" 
                  className="inline-flex items-center text-dinero-red hover:text-dinero-light group relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:underline">Дізнатися більше</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
