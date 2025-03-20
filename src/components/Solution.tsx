
import { useEffect } from 'react';
import { CheckCircle, RefreshCw, Headphones, Lock } from 'lucide-react';

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
      <div className="absolute -top-[10%] right-[10%] w-[40%] h-[40%] bg-gradient-to-bl from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Рішення
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Що таке <span className="text-gradient">Dinero Lab</span>?
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Тут отримують робочі P2P-зв'язки, які реально працюють
            </p>
          </div>
          
          {/* Solution cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 md:p-8 rounded-xl reveal-animation">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-dinero-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-3">Авторські P2P-зв'язки</h3>
                  <p className="text-gray-300 mb-3">
                    Надаємо перевірені зв'язки, що працюють з різним бюджетом — від $100 до $50,000+.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Перевірені зв'язки з різним бюджетом</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Схеми, що приносять від $100 в день</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Детальні інструкції крок за кроком</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl reveal-animation">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw size={24} className="text-dinero-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-3">Постійне оновлення</h3>
                  <p className="text-gray-300 mb-3">
                    Регулярно оновлюємо зв'язки та надаємо актуальну інформацію про зміни на ринку P2P.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Щотижневі оновлення зв'язок</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Інсайдерська інформація з ринку</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Попередження про ризики і зміни</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl reveal-animation">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                  <Headphones size={24} className="text-dinero-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-3">Сапорти з досвідом</h3>
                  <p className="text-gray-300 mb-3">
                    Наші саппорти працюють 24/7, щоб допомогти вам в будь-який момент.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Підтримка в режимі 24/7/365</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Допомога з проблемними ситуаціями</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Індивідуальні консультації</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl reveal-animation">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                  <Lock size={24} className="text-dinero-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-3">Закрите ком'юніті</h3>
                  <p className="text-gray-300 mb-3">
                    Доступ до ексклюзивного співтовариства трейдерів і спеціалістів з P2P.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Ком'юніті без випадкових людей</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Обмін досвідом між учасниками</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                        <CheckCircle size={12} className="text-dinero-red" />
                      </span>
                      <span className="text-sm">Спільне рішення складних питань</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center reveal-animation">
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Перетворіть P2P в стабільне джерело доходу</h3>
              <p className="text-gray-300 mb-6">
                Dinero Lab — це не просто зв'язки, це повна система для заробітку в P2P з підтримкою професіоналів на кожному кроці.
              </p>
              <a 
                href="#join" 
                className="inline-flex items-center bg-dinero-red text-white px-8 py-3 rounded-md font-medium hover:bg-red-600 transition-all button-glow"
              >
                Отримати доступ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
