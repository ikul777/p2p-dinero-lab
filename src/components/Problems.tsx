
import { useEffect } from 'react';
import { AlertTriangle, DollarSign, Users, Shield } from 'lucide-react';

const Problems = () => {
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
    <section id="problems" className="py-20 bg-gradient-to-b from-dinero-dark to-dinero-dark/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Проблеми
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Чому більшість зливають у P2P?
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Без правильного підходу P2P-арбітраж перетворюється на злиті гроші
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 md:p-8 rounded-xl relative reveal-animation">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-dinero-red flex items-center justify-center">
                <AlertTriangle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Купують хламові зв'язки</h3>
              <p className="text-gray-300">
                Більшість початківців витрачають гроші на неперевірені або застарілі зв'язки, які реально не працюють.
              </p>
              <p className="text-gray-300 mt-4">
                У результаті — вони не тільки не заробляють, але й втрачають початковий депозит, намагаючись змусити працювати непрацюючу схему.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl relative reveal-animation">
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-dinero-red flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Відсутність підтримки</h3>
              <p className="text-gray-300">
                Купили зв'язку — і залишились самі. Типова ситуація: щось не працює, а допомоги немає.
              </p>
              <p className="text-gray-300 mt-4">
                Без команди та актуальних даних від саппортів, які щодня в темі, новачок швидко втрачає орієнтацію і зливає гроші.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl relative reveal-animation">
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-dinero-red flex items-center justify-center">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Нереалістичні очікування</h3>
              <p className="text-gray-300">
                Багато хто думає, що P2P — це кнопка "заробити мільйон", але це системна робота, яка потребує навичок та часу.
              </p>
              <p className="text-gray-300 mt-4">
                Без розуміння процесів, правильних інструментів та актуальних даних, новачки швидко розчаровуються і виходять в мінус.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8 rounded-xl relative reveal-animation">
              <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-dinero-red flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Потрапляють на скам</h3>
              <p className="text-gray-300">
                Ринок переповнений шахраями, які продають "золоті схеми", а насправді надають непрацюючі зв'язки або ще гірше заганяють вас під скам за ваші ж гроші.
              </p>
              <p className="text-gray-300 mt-4">
                Без доступу до сильного ком'юніті та реальних результатів, люди стають жертвами красивих обіцянок.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center reveal-animation">
            <div className="glass-card p-6 md:p-8 rounded-xl inline-block max-w-2xl">
              <h3 className="text-xl font-semibold mb-4">Висновок</h3>
              <p className="text-gray-300">
                Без перевірених зв'язок, актуальної інфомації та підтримки сапортів – твій бюджет і ти просто згорите. Не роби цих помилок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
