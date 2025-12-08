import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-16 reveal-animation">
            <span className="tag mb-3 md:mb-4 inline-block text-xs">Про мене</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Від новачка до </span>
              <span className="text-gradient">експерта</span>
            </h2>
          </div>
          
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
            {/* Image */}
            <div className="reveal-animation order-2 lg:order-1">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <img 
                    src="/lovable-uploads/58de9db5-ff5c-4abd-a14d-7a461f8a479a.png" 
                    alt="Ярослав - засновник DineroLab" 
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating badge - hidden on small mobile */}
                <div className="hidden sm:block absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <span className="text-xs md:text-sm font-medium text-foreground">Партнер WhiteBIT, Bybit, OKX</span>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="reveal-animation order-1 lg:order-2">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-foreground">
                Привіт! Мене звати Ярослав
              </h3>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Я в темі P2P-арбітражу ще з тих часів, коли не було ніяких комʼюніті та гайдів – всі розбиралися самі, через помилки і втрати.
                </p>
                <p>
                  Зараз я офіційний партнер топових крипто-бірж{' '}
                  <a href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhiteBIT</a>,{' '}
                  <a href="https://partner.bybit.com/b/136114" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bybit</a> та{' '}
                  <a href="https://www.okx.com/join/DINEROLAB" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OKX</a>, та засновник P2P-комʼюніті DineroLab.
                </p>
                <p className="text-foreground font-medium italic border-l-2 border-primary pl-4 text-sm md:text-base">
                  Якби в 2022-му мені дали можливість приєднатись до такого комʼюніті - я був би вже на 10 кроків попереду.
                </p>
              </div>
              
              {/* Key points */}
              <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
                {[
                  'Команда саппортів з досвідом 5+ років',
                  'Створюємо робочі звʼязки з реальним доходом',
                  'Допомогли 300+ учасникам почати заробляти'
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 reveal-animation">
            {[
              { title: 'Чому ми реально шаримо', desc: 'Кожен саппорт щодня працює з реальними звʼязками та допомагає учасникам 24/7.' },
              { title: 'Результати учасників', desc: 'Люди виходять на стабільний дохід вже в перший місяць роботи.' },
              { title: 'Що нас відрізняє', desc: 'Ми надаємо реальні звʼязки, а не теоретичні курси. Практика і підтримка.' }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 md:p-6 rounded-xl">
                <div className="number-badge mb-3 md:mb-4 text-xs">{index + 1}</div>
                <h4 className="font-display text-base md:text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
