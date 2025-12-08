import { AlertTriangle, Users, DollarSign, Shield } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Купують хламові зв\'язки',
    desc: 'Більшість початківців витрачають гроші на неперевірені або застарілі зв\'язки, які реально не працюють.'
  },
  {
    icon: Users,
    title: 'Відсутність підтримки',
    desc: 'Купили зв\'язку — і залишились самі. Типова ситуація: щось не працює, а допомоги немає.'
  },
  {
    icon: DollarSign,
    title: 'Нереалістичні очікування',
    desc: 'Багато хто думає, що P2P — це кнопка "заробити мільйон", але це системна робота.'
  },
  {
    icon: Shield,
    title: 'Потрапляють на скам',
    desc: 'Ринок переповнений шахраями, які продають "золоті схеми", а насправді надають непрацюючі зв\'язки.'
  }
];

const Problems = () => {
  return (
    <section id="problems" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Gradient orb */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[150px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal-animation">
            <span className="tag mb-4 inline-block">Проблеми</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Чому більшість </span>
              <span className="text-outline">зливають</span>
              <span className="text-foreground"> у P2P?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Без правильного підходу P2P-арбітраж перетворюється на злиті гроші
            </p>
          </div>
          
          {/* Problems grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="reveal-animation glass-card p-8 rounded-xl relative group"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[60px]"></div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <problem.icon size={24} className="text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom message */}
          <div className="reveal-animation text-center">
            <div className="inline-block glass-card px-8 py-6 rounded-xl border-l-2 border-primary">
              <p className="text-foreground font-medium">
                Без перевірених зв'язок, актуальної інформації та підтримки — твій бюджет просто згорить.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
