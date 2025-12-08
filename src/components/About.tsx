import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16 reveal-animation">
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Про мене</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-foreground">Від новачка до </span>
              <span className="text-gradient">експерта</span>
            </h2>
          </div>
          
          {/* Main content - single column on mobile */}
          <div className="reveal-animation mb-8 sm:mb-12 md:mb-20">
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-foreground">
                Привіт! Мене звати Ярослав
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Я в темі P2P-арбітражу ще з тих часів, коли не було ніяких комʼюніті та гайдів – всі розбиралися самі, через помилки і втрати.
                </p>
                <p>
                  Зараз я офіційний партнер топових крипто-бірж{' '}
                  <a href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhiteBIT</a>,{' '}
                  <a href="https://partner.bybit.com/b/136114" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bybit</a> та{' '}
                  <a href="https://www.okx.com/join/DINEROLAB" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OKX</a>, та засновник P2P-комʼюніті DineroLab.
                </p>
                <p className="text-foreground font-medium italic border-l-2 border-primary pl-3 sm:pl-4 text-xs sm:text-sm md:text-base">
                  Якби в 2022-му мені дали можливість приєднатись до такого комʼюніті - я був би вже на 10 кроків попереду.
                </p>
              </div>
              
              {/* Key points */}
              <div className="mt-5 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3">
                {[
                  'Команда саппортів з досвідом 5+ років',
                  'Створюємо робочі звʼязки з реальним доходом',
                  'Допомогли 300+ учасникам почати заробляти'
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="sm:w-3 sm:h-3 text-primary" />
                    </div>
                    <span className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 reveal-animation">
            {[
              { title: 'Чому ми реально шаримо', desc: 'Кожен саппорт щодня працює з реальними звʼязками та допомагає учасникам 24/7.' },
              { title: 'Результати учасників', desc: 'Люди виходять на стабільний дохід вже в перший місяць роботи.' },
              { title: 'Що нас відрізняє', desc: 'Ми надаємо реальні звʼязки, а не теоретичні курси. Практика і підтримка.' }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                <div className="number-badge mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs w-6 h-6 sm:w-8 sm:h-8">{index + 1}</div>
                <h4 className="font-display text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 text-foreground">{item.title}</h4>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;