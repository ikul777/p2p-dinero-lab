import { ArrowRight, Zap, RefreshCw, Headphones, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Авторські P2P-зв\'язки під різний бюджет',
    desc: 'Перевірені зв\'язки для будь-якого бюджету — від $500. Кожна спочатку проходить тест, а потім надається учасникам.'
  },
  {
    icon: RefreshCw,
    title: 'Постійне оновлення зв\'язок',
    desc: 'Ринок P2P постійно змінюється. Наша команда стабільно перевіряє всі схеми та оновлює актуальну інформацію.'
  },
  {
    icon: Headphones,
    title: 'Саппорти з багаторічним досвідом',
    desc: 'Наші саппорти — не просто консультанти. Це люди, які щодня роблять реальні транзакції.'
  },
  {
    icon: Lock,
    title: 'Закрите ком\'юніті',
    desc: 'Ми цінуємо довіру та безпеку. Доступ до ком\'юніті отримують далеко не всі.'
  }
];

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-sm opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal-animation">
            <span className="tag mb-4 inline-block">Рішення</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Що таке </span>
              <span className="text-gradient">Dinero Lab</span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Тут отримують робочі P2P-зв'язки, які реально працюють
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="reveal-animation group"
              >
                <div className="glass-card p-8 rounded-xl h-full relative overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                    
                    <a 
                      href="https://t.me/ikul777" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover-underline"
                    >
                      Дізнатися більше
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
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

export default Solution;
