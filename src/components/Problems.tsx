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
    <section id="problems" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-16 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Проблеми</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Чому більшість </span>
              <span className="text-foreground/30">зливають</span>
              <span className="text-foreground"> у P2P?</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Без правильного підходу P2P-арбітраж = злиті гроші
            </p>
          </div>
          
          {/* Problems grid */}
          <div 
            ref={gridAnimation.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 transition-all duration-700 delay-150 ${gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="glass-card p-4 sm:p-5 md:p-8 rounded-lg sm:rounded-xl relative group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-primary/5 rounded-bl-[30px] sm:rounded-bl-[40px] md:rounded-bl-[60px]"></div>
                
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-primary/20 transition-colors">
                  <problem.icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
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
            <div className="inline-block glass-card px-4 py-3 sm:px-5 sm:py-4 md:px-8 md:py-6 rounded-lg sm:rounded-xl border-l-2 border-primary">
              <p className="text-xs sm:text-sm md:text-base text-foreground font-medium">
                Без перевірених звʼязок та підтримки — твій бюджет просто згорить.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
