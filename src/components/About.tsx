import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal-animation">
            <span className="tag mb-4 inline-block">Про мене</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Від новачка до </span>
              <span className="text-gradient">експерта</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="reveal-animation order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <img 
                    src="/lovable-uploads/58de9db5-ff5c-4abd-a14d-7a461f8a479a.png" 
                    alt="Ярослав - засновник DineroLab" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-foreground">Партнер WhiteBIT, Bybit, OKX</span>
                </div>
              </div>
            </div>
            
            <div className="reveal-animation order-1 lg:order-2">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                Привіт! Мене звати Ярослав
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Я в темі P2P-арбітражу ще з тих часів, коли не було ніяких комʼюніті та гайдів – всі розбиралися самі, через помилки і втрати.
                </p>
                <p>
                  Зараз я офіційний партнер топових крипто-бірж{' '}
                  <a href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" target="_blank" rel="noopener noreferrer" className="text-primary hover-underline">WhiteBIT</a>,{' '}
                  <a href="https://partner.bybit.com/b/136114" target="_blank" rel="noopener noreferrer" className="text-primary hover-underline">Bybit</a> та{' '}
                  <a href="https://www.okx.com/join/DINEROLAB" target="_blank" rel="noopener noreferrer" className="text-primary hover-underline">OKX</a>, та засновник P2P-комʼюніті DineroLab.
                </p>
                <p className="text-foreground font-medium italic border-l-2 border-primary pl-4">
                  Якби в 2022-му, коли я починав, мені дали можливість приєднатись до такого комʼюніті - я був би вже на 10 кроків попереду.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  'Команда саппортів з досвідом 5+ років в P2P',
                  'Створюємо робочі звʼязки з реальним доходом',
                  'Допомогли 300+ учасникам почати заробляти'
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 reveal-animation">
            {[
              { title: 'Чому наша команда реально шарить', desc: 'Ми не просто теоретики — кожен саппорт щодня працює з реальними звʼязками.' },
              { title: 'Яких результатів досягають учасники', desc: 'Завдяки нашій спільноті люди виходять на стабільний дохід вже в перший місяць.' },
              { title: 'Що відрізняє нас від інших', desc: 'Ми надаємо реальні звʼязки, а не теоретичні курси. Практика і підтримка.' }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="number-badge mb-4">{index + 1}</div>
                <h4 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
