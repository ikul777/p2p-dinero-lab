import { useEffect } from 'react';
import { ArrowRight, Wallet, RefreshCw, Headphones, Lock } from 'lucide-react';

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const solutions = [
    {
      icon: Wallet,
      title: "Авторські P2P-зв'язки під різний бюджет",
      description: "Ми пропонуємо перевірені зв'язки практично для будь-якого бюджету — від $500. Кожна зв'язка спочатку проходить тест а потім надається в роботу учасникам спільноти."
    },
    {
      icon: RefreshCw,
      title: "Постійне оновлення зв'язок та актуальної інфи",
      description: "Ринок P2P постійно змінюється. Наша команда стабільно перевіряє всі схеми та оновлює актуальну інформацію для учасників спільноти."
    },
    {
      icon: Headphones,
      title: "Сапорти з багаторічним досвідом",
      description: "Наші саппорти — не просто консультанти. Це люди, які щодня роблять реальні транзакції та знають всі нюанси ринку."
    },
    {
      icon: Lock,
      title: "Закрите ком'юніті без рандомних людей",
      description: "Ми цінуємо довіру та безпеку наших учасників. Тому доступ до ком'юніті отримують далеко не всі, наявність грошей це не основний критерій."
    }
  ];
  
  return (
    <section id="solution" className="py-24 bg-background relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold"></div>
      
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full filter blur-[150px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-animation">
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-6">
              Рішення
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Що таке <span className="text-gradient-gold">Dinero Lab</span>?
            </h2>
            <div className="divider-gold-thick mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Тут отримують робочі P2P-зв'язки, які реально працюють
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl relative group hover:glow-gold transition-all duration-500 reveal-animation"
              >
                <div className="icon-circle-premium h-14 w-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon size={24} className="text-gold" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                
                <a 
                  href="https://t.me/ikul777" 
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-underline">Дізнатися більше</span>
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
