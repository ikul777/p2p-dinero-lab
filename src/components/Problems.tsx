import { AlertTriangle, Users, DollarSign, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Купують хламові звʼязки',
    desc: 'Більшість витрачають гроші на неперевірені або застарілі звʼязки, які не працюють.'
  },
  {
    icon: Users,
    title: 'Відсутність підтримки',
    desc: 'Купили звʼязку — і залишились самі. Щось не працює, а допомоги немає.'
  },
  {
    icon: DollarSign,
    title: 'Нереалістичні очікування',
    desc: 'P2P — це не кнопка "заробити мільйон", а системна робота.'
  },
  {
    icon: Shield,
    title: 'Потрапляють на скам',
    desc: 'Ринок переповнений шахраями з "золотими схемами", які не працюють.'
  }
];

const Problems = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation({ threshold: 0.1 });
  const bottomAnimation = useScrollAnimation();

  return (
    <section id="problems" className="py-12 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Проблеми</span>
            <h2 className="font-display text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
              <span className="text-foreground">Чому більшість </span>
              <span className="text-foreground/30">зливають</span>
              <span className="text-foreground"> у P2P?</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 text-balance">
              Без правильного підходу P2P-арбітраж = злиті гроші
            </p>
          </div>
          
          {/* Problems grid */}
          <div 
            ref={gridAnimation.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 transition-all duration-700 delay-150 ${gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="glass-card problem-card relative group p-5 sm:p-6 md:p-8 rounded-2xl overflow-hidden active:scale-[0.98] transition-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top gradient hairline */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

                {/* Soft glow on hover only */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-destructive/10 via-transparent to-transparent"></div>

                <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:ring-destructive/40 group-hover:bg-destructive/10 group-hover:animate-shake transition-colors">
                  <problem.icon size={20} className="sm:w-6 sm:h-6 text-primary group-hover:text-destructive transition-colors" />
                </div>
                
                <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-base text-muted-foreground leading-[1.55]">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom message */}
          <div 
            ref={bottomAnimation.ref}
            className={`text-center px-2 transition-all duration-700 delay-300 ${bottomAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="inline-block relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-destructive/40 via-primary/40 to-destructive/40 opacity-70 md:animate-pulse-glow md:blur-sm"></div>
              <div className="relative glass-card px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-2xl border-l-2 border-primary">
                <p className="text-sm sm:text-base text-foreground font-medium">
                  Без перевірених звʼязок та підтримки — твій бюджет просто згорить 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
