import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const faqItems = [
  {
    question: "Скільки потрібно грошей для старту?",
    answer: "Рекомендуємо мінімальний бюджет від $100. Оптимально мати $300-500. Хоча більшість наших звʼязок для бюджетів $1000+, які дозволяють масштабувати прибуток."
  },
  {
    question: "Чи можна почати без досвіду?",
    answer: "НІ, щоб приєднатись у Dinero Lab ти маєш мати мінімальні вміння в використанні бірж, банків та крипти. В нас є детальні інструкції та підтримка 24/7, але ти мусиш розуміти з чим працюєш."
  },
  {
    question: "Чи можу я втратити гроші?",
    answer: "Якщо дотримуватись інструкцій та не робити дурниць – ні. Ми показуємо лише перевірені звʼязки, з якими працюємо самі."
  },
  {
    question: "Чи можна працювати за кордоном?",
    answer: "Так, наші звʼязки працюють онлайн. Багато учасників успішно працюють з Європи. Ми регулярно оновлюємо звʼязки щоб місцеперебування не мало значення."
  },
  {
    question: "Як проходить навчання?",
    answer: "Після вступу ви отримуєте доступ до бази знань з покроковими інструкціями. Саппорти проводять через перші кроки та відповідають на всі питання. Ви починаєте заробляти, поступово покращуючи навички."
  },
  {
    question: "Які гарантії?",
    answer: "Ми не можемо гарантувати конкретні суми, адже результати залежать від багатьох факторів. Але ми гарантуємо актуальні робочі звʼязки та повну підтримку для досягнення успіху."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation({ threshold: 0.1 });
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">FAQ</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Популярні </span>
              <span className="text-gradient">питання</span>
            </h2>
          </div>
          
          {/* FAQ items */}
          <div 
            ref={faqAnimation.ref}
            className={`space-y-2 sm:space-y-3 md:space-y-4 transition-all duration-700 delay-150 ${faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-lg sm:rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex justify-between items-center gap-3 sm:gap-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-xs sm:text-sm md:text-base text-foreground">{item.question}</span>
                  <ChevronDown 
                    size={16} 
                    className={`sm:w-5 sm:h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-3 sm:px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 pb-3 sm:pb-4 md:pb-6 opacity-100' 
                      : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
