
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Скільки потрібно грошей для старту?",
    answer: "Для початку роботи з P2P-арбітражем рекомендуємо мінімальний бюджет від $100. Оптимально мати $300-500, щоб більш ефективно використовувати наші зв'язки. Ми також маємо стратегії для тих, хто готовий працювати з бюджетами $1000+, які дозволяють значно масштабувати прибуток."
  },
  {
    question: "Чи можна почати без досвіду?",
    answer: "Так, більшість наших учасників починали з нуля. Ми надаємо детальні інструкції для кожної зв'язки та 24/7 підтримку від саппортів, які допоможуть вам навіть з базовими питаннями. Вам не потрібні спеціальні технічні знання — тільки бажання вчитися та діяти."
  },
  {
    question: "Як швидко окупиться вхід?",
    answer: "Більшість учасників окупають вартість входу в ком'юніті протягом перших 1-2 тижнів активної роботи. При правильному використанні наших зв'язок, вже з першого дня можна отримувати прибуток. Багато учасників починають заробляти $50-100 щодня після першого тижня роботи."
  },
  {
    question: "Чи можна працювати за кордоном?",
    answer: "Так, наші зв'язки працюють по всьому світу. Ми маємо спеціальні стратегії для різних країн та регіонів. Багато наших учасників успішно працюють з Європи, Азії та інших регіонів. Ми регулярно оновлюємо зв'язки з урахуванням географічних особливостей."
  },
  {
    question: "Як проходить навчання?",
    answer: "Після вступу в ком'юніті ви отримуєте доступ до бази знань з покроковими інструкціями для кожної зв'язки. Саппорти проводять вас через перші кроки, допомагають налаштувати все необхідне та відповідають на всі питання. Ми використовуємо підхід 'навчання через практику' — ви починаєте заробляти, поступово покращуючи свої навички."
  },
  {
    question: "Які гарантії, що я буду заробляти?",
    answer: "Ми не можемо гарантувати конкретні суми заробітку, адже результати залежать від багатьох факторів, включаючи ваш стартовий капітал, час, який ви готові інвестувати, та вашу здатність слідувати інструкціям. Однак ми гарантуємо, що надаємо актуальні робочі зв'язки та повну підтримку для досягнення успіху. Наші численні відгуки демонструють, що система працює при правильному застосуванні."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -top-[30%] left-[20%] w-[40%] h-[40%] bg-gradient-to-br from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Відповіді на популярні питання
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-4 reveal-animation">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-white">{item.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-dinero-red transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 pb-6 opacity-100' 
                      : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-300">{item.answer}</p>
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
