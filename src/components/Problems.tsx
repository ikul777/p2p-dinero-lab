import { AlertTriangle, Users, DollarSign, Shield } from 'lucide-react';

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
  return (
    <section id="problems" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full filter blur-[100px] md:blur-[150px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-16 reveal-animation">
            <span className="tag mb-3 md:mb-4 inline-block text-xs">Проблеми</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="text-foreground">Чому більшість </span>
              <span className="text-foreground/30">зливають</span>
              <span className="text-foreground"> у P2P?</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4">
              Без правильного підходу P2P-арбітраж = злиті гроші
            </p>
          </div>
          
          {/* Problems grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="reveal-animation glass-card p-5 md:p-8 rounded-xl relative group"
              >
                <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-primary/5 rounded-bl-[40px] md:rounded-bl-[60px]"></div>
                
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary/20 transition-colors">
                  <problem.icon size={20} className="text-primary md:w-6 md:h-6" />
                </div>
                
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom message */}
          <div className="reveal-animation text-center px-4">
            <div className="inline-block glass-card px-5 py-4 md:px-8 md:py-6 rounded-xl border-l-2 border-primary">
              <p className="text-sm md:text-base text-foreground font-medium">
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
