import { ArrowRight, Zap, RefreshCw, Headphones, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Авторські P2P-звʼязки',
    desc: 'Перевірені звʼязки для будь-якого бюджету — від $500. Кожна спочатку проходить тест.'
  },
  {
    icon: RefreshCw,
    title: 'Постійне оновлення',
    desc: 'Ринок P2P змінюється. Ми стабільно перевіряємо всі схеми та оновлюємо інформацію.'
  },
  {
    icon: Headphones,
    title: 'Досвідчені саппорти',
    desc: 'Наші саппорти щодня роблять реальні транзакції і знають всі нюанси.'
  },
  {
    icon: Lock,
    title: 'Закрите комʼюніті',
    desc: 'Ми цінуємо довіру та безпеку. Доступ отримують далеко не всі.'
  }
];

const Solution = () => {
  return (
    <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-primary/5 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16 reveal-animation">
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Рішення</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Що таке </span>
              <span className="text-gradient">Dinero Lab</span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-2">
              Тут отримують робочі P2P-звʼязки, які реально працюють
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="reveal-animation group"
              >
                <div className="glass-card p-4 sm:p-5 md:p-8 rounded-lg sm:rounded-xl h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    
                    <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2 md:mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                      {feature.desc}
                    </p>
                    
                    <a 
                      href="https://t.me/ikul777" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[11px] sm:text-xs md:text-sm text-primary hover:underline"
                    >
                      Дізнатися більше
                      <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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