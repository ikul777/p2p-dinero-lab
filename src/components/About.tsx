
import { useEffect } from 'react';
import { TrendingUp, Check, Star, User } from 'lucide-react';

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
      <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-dinero-red/20 to-transparent rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Хто я такий
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Від новачка до експерта в P2P
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl mb-12 reveal-animation">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 mb-4 md:mb-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-dinero-red/20 flex items-center justify-center border-2 border-dinero-red/20">
                  <User size={32} className="text-dinero-red" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Привіт! Мене звати Ярослав</h3>
                <p className="text-gray-300 mb-4">
                  Я в темі P2P-арбітражу ще з тих часів, коли не було ніяких ком'юніті та гайдів – всі розбиралися самі, через помилки і втрати. Зараз я офіційний амбасадор топової біржі <a href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" target="_blank" rel="noopener noreferrer" className="text-dinero-red hover:underline">WhiteBIT</a>, та засновник P2P-комʼюніті DineroLab.
                </p>
                <p className="text-gray-300 mb-4">
                  Коли я починав я теж злив купу грошей на тестах та спробах, поки не зібрав команду та не почав будувати систему правильної роботи, а не разових "темок". Так і з'явилось Dinero Lab – ком'юніті, де ти отримуєш готові зв'язки, оточення однодумців та підтримку досвідченої команди сапортів, які реально працюють в цій сфері, а не просто навчають.
                </p>
                <p className="text-gray-300 font-medium italic">
                  Якби в 2022-му, коли я починав, мені дали можливість приєднатись до такого комʼюніті - я був би вже на 10 кроків попереду. Але зараз твоя черга!
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div className="reveal-animation">
              <div className="rounded-xl overflow-hidden shadow-xl shadow-dinero-red/10 transform hover:scale-[1.02] transition-all duration-300">
                <img 
                  src="/lovable-uploads/58de9db5-ff5c-4abd-a14d-7a461f8a479a.png" 
                  alt="Expert in P2P trading" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="glass-card p-6 md:p-8 rounded-xl relative mb-8">
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-dinero-red flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Моя історія в P2P</h3>
                
                <p className="text-gray-300 mb-4">
                  Почав як і більшість — з невеликих експериментів на P2P біржах та ще й з позичених грошей. Перші успіхи швидко змінились розчаруваннями: нестабільні зв'язки, скам, відсутність підтримки та актуальної інформації.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Після місяців спроб і помилок, знайшов робочі стратегії та зібрав команду професіоналів, які зараз приносять стабільний прибуток нашим учасникам.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Команда сапотрів з досвідом більше 5 років в P2P-арбітражі</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Створюємо робочі зв'язки, які приносять стабільний дохід</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-dinero-red" />
                    </div>
                    <p className="text-gray-300 ml-3 text-sm">Допомогли більш ніж 300 учасникам почати заробляти</p>
                  </div>
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
                  <h4 className="text-lg font-medium mb-2">Яких результатів досягають наші учасники?</h4>
                  <p className="text-gray-400 text-sm">
                    Завдяки нашій спільноті люди виходять на стабільний дохід вже в перший місяць.
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
    </section>
  );
};

export default About;
