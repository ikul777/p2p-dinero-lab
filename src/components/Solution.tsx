import { ArrowRight, Zap, RefreshCw, Headphones, Lock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const features = [
  {
    icon: Zap,
    tag: 'Перевірено',
    title: 'Авторські P2P-звʼязки',
    desc: 'Перевірені звʼязки для будь-якого бюджету — від $500. Кожна спочатку проходить тест.',
    isNew: false
  },
  {
    icon: RefreshCw,
    tag: 'Live',
    title: 'Постійне оновлення',
    desc: 'Ринок P2P змінюється. Ми стабільно перевіряємо всі схеми та оновлюємо інформацію.',
    isNew: true
  },
  {
    icon: Headphones,
    tag: '24/7',
    title: 'Досвідчені саппорти',
    desc: 'Наші саппорти щодня роблять реальні транзакції і знають всі нюанси.',
    isNew: false
  },
  {
    icon: Lock,
    tag: 'Закрите',
    title: 'Закрите комʼюніті',
    desc: 'Ми цінуємо довіру та безпеку. Доступ отримують далеко не всі.',
    isNew: false
  }
];

const Solution = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="solution" className="py-12 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Рішення</span>
            <h2 className="font-display text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
              <span className="text-foreground">Що таке </span>
              <span className="text-gradient">DineroLab</span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 text-balance">
              Тут отримують робочі P2P-звʼязки, які реально працюють
            </p>
          </div>
          
          {/* Features grid */}
          <div 
            ref={gridAnimation.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 transition-all duration-700 delay-150 ${gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="glass-card solution-card conic-hover p-5 sm:p-6 md:p-8 rounded-2xl h-full relative overflow-hidden bg-gradient-to-b from-card/80 to-card/40 border border-primary/15 active:scale-[0.99] transition-transform flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top row: capsule + NEW */}
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                        <feature.icon size={12} className="sm:w-3.5 sm:h-3.5" />
                        {feature.tag}
                      </span>
                      {feature.isNew && (
                        <span className="badge-new">NEW</span>
                      )}
                    </div>
                    
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm md:text-base text-muted-foreground leading-[1.55] flex-1">
                      {feature.desc}
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-border/30">
                      <a 
                        href="https://t.me/ikul777" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline min-h-11"
                      >
                        Дізнатися більше
                        <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
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
