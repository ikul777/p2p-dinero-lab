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
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const problems = [
    {
      icon: AlertTriangle,
      title: "Купують хламові зв'язки",
      description: "Більшість початківців витрачають гроші на неперевірені або застарілі зв'язки, які реально не працюють.",
      detail: "У результаті — вони не тільки не заробляють, але й втрачають початковий депозит, намагаючись змусити працювати непрацюючу схему."
    },
    {
      icon: Users,
      title: "Відсутність підтримки",
      description: "Купили зв'язку — і залишились самі. Типова ситуація: щось не працює, а допомоги немає.",
      detail: "Без команди та актуальних даних від саппортів, які щодня в темі, новачок швидко втрачає орієнтацію і зливає гроші."
    },
    {
      icon: DollarSign,
      title: "Нереалістичні очікування",
      description: "Багато хто думає, що P2P — це кнопка \"заробити мільйон\", але це системна робота, яка потребує навичок та часу.",
      detail: "Без розуміння процесів, правильних інструментів та актуальних даних, новачки швидко розчаровуються і виходять в мінус."
    },
    {
      icon: Shield,
      title: "Потрапляють на скам",
      description: "Ринок переповнений шахраями, які продають \"золоті схеми\", а насправді надають непрацюючі зв'язки.",
      detail: "Без доступу до сильного ком'юніті та реальних результатів, люди стають жертвами красивих обіцянок."
    }
  ];
  
  return (
    <section id="problems" className="py-24 bg-background relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold"></div>
      
      {/* Ambient Light */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full filter blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 reveal-animation">
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-6">
              Проблеми
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Чому більшість <span className="text-gradient-gold">зливають</span> у P2P?
            </h2>
            <div className="divider-gold-thick mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Без правильного підходу P2P-арбітраж перетворюється на злиті гроші
            </p>
          </div>
          
          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl relative reveal-animation group hover:glow-gold transition-all duration-500"
              >
                <div className="icon-circle-premium h-14 w-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{problem.description}</p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">{problem.detail}</p>
              </div>
            ))}
          </div>
          
          {/* Conclusion */}
          <div className="reveal-animation">
            <div className="glass-card-elevated p-8 md:p-10 rounded-2xl text-center max-w-3xl mx-auto">
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Висновок</h3>
              <p className="text-muted-foreground leading-relaxed">
                Без перевірених зв'язок, актуальної інформації та підтримки сапортів – твій бюджет і ти просто згорите. Не роби цих помилок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
