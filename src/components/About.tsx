import { useEffect } from 'react';
import { TrendingUp, Check, Award, User } from 'lucide-react';

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full filter blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-animation">
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-6">
              Хто я такий
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Від новачка до <span className="text-gradient-gold">експерта</span> в P2P
            </h2>
            <div className="divider-gold-thick mx-auto"></div>
          </div>
          
          {/* Founder Card */}
          <div className="glass-card-elevated p-8 md:p-10 rounded-3xl mb-16 reveal-animation">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="icon-circle-premium h-20 w-20 rounded-2xl flex items-center justify-center">
                  <User size={36} className="text-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Привіт! Мене звати Ярослав</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Я в темі P2P-арбітражу ще з тих часів, коли не було ніяких ком'юніті та гайдів – всі розбиралися самі, через помилки і втрати. Зараз я офіційний партнер топових крипто-бірж <a href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">WhiteBIT</a>, <a href="https://partner.bybit.com/b/136114" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Bybit</a> та <a href="https://www.okx.com/join/DINEROLAB" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">OKX</a>, та засновник P2P-комʼюніті DineroLab.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Коли я починав я теж злив купу грошей на тестах та спробах, поки не зібрав команду та не почав будувати систему правильної роботи, а не разових "темок". Так і з'явилось Dinero Lab – ком'юніті, де ти отримуєш готові зв'язки, оточення однодумців та підтримку досвідченої команди сапортів, які реально працюють в цій сфері, а не просто навчають.
                </p>
                <p className="text-foreground/80 font-medium italic border-l-2 border-gold/50 pl-4">
                  Якби в 2022-му, коли я починав, мені дали можливість приєднатись до такого комʼюніті - я був би вже на 10 кроків попереду. Але зараз твоя черга!
                </p>
              </div>
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="reveal-animation">
              <div className="rounded-2xl overflow-hidden glow-gold group">
                <img 
                  src="/lovable-uploads/58de9db5-ff5c-4abd-a14d-7a461f8a479a.png" 
                  alt="Expert in P2P trading" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="glass-card p-8 rounded-2xl relative mb-8">
                <div className="absolute -top-4 -right-4 icon-circle-premium h-10 w-10 rounded-xl flex items-center justify-center">
                  <TrendingUp size={18} className="text-gold" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Моя історія в P2P</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Почав як і більшість — з невеликих експериментів на P2P біржах та ще й з позичених грошей. Перші успіхи швидко змінились розчаруваннями: нестабільні зв'язки, скам, відсутність підтримки та актуальної інформації.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Після місяців спроб і помилок, знайшов робочі стратегії та зібрав команду професіоналів, які зараз приносять стабільний прибуток нашим учасникам.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Команда сапортів з досвідом більше 5 років в P2P-арбітражі",
                    "Створюємо робочі зв'язки, які приносять стабільний дохід",
                    "Допомогли більш ніж 300 учасникам почати заробляти"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="icon-circle-premium h-6 w-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-gold" />
                      </div>
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 reveal-animation">
            {[
              {
                title: "Чому наша команда реально шарить",
                description: "Ми не просто теоретики — кожен саппорт щодня працює з реальними зв'язками та допомагає учасникам 24/7."
              },
              {
                title: "Яких результатів досягають наші учасники?",
                description: "Завдяки нашій спільноті люди виходять на стабільний дохід вже в перший місяць."
              },
              {
                title: "Що відрізняє нас від інших",
                description: "Ми надаємо реальні зв'язки, а не теоретичні курси. Наш підхід — практика і підтримка на кожному кроці."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl group hover:glow-gold transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="icon-circle-premium h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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

export default About;
