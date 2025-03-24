import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PaginationDots } from '@/components/ui/pagination-dots';

const testimonialData = [
  {
    id: 1,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Хочу сказати величезне спасибі DineroLab команді. Завдяки їхнім гайдам і особистій підтримці від саппортів за перший місяць підняв 2300$ з нуля. " +
    "Найбільше вражає, що на кожне питання швидко отримуєш відповідь в будь-який час доби і з будь-яких питань по процесу. " +
    "На мою думку, нічого схожого по співвідношенню ціна/результат на ринку навіть близько немає. " +
    "Якщо придбати всі ці схеми окремо, вийде в 5-10 разів дорожче, а тут ще й саппорти, які допомагають оперативно їх впроваджувати і масштабувати. Щиро рекомендую!",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 2,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Дуже задоволений! Давно не зустрічав такого трепетного ставлення до клієнтів. " +
    "Буквально відповідають 24/7, і не відписками, а реально думають і пропонують рішення задачі, доки ти не залишишся задоволеним. " +
    "Мені вибрали зв'язку, яка дійсно працює, я з нічого почав і майже зробив х3 за 3 тижні. " +
    "Найкраще ком'юніті в моєму житті!",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 3,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Зі мною особисто працювали на вибір стратегії під мій бюджет. " +
    "Це не просто шаблонні схеми і зв'язки, а реально індивідуальний підхід. " +
    "За 10 днів зробив профіт 1450$, починав з 2к$. " +
    "Це мій перший досвід в P2P, але завдяки підтримці крипто-гравців і саппортів все пройшло гладко. " +
    "Якщо вирішите приєднатися, задавайте всі питання, вам нормально все пояснять.",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 4,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Чесно кажучи, коли купував спочатку здалося, що трохи переплатив. " +
    "Але буквально за два тижні заробив 4К+ баксів, що покрило вартість комюніті і ще залишилося на профіт. " +
    "Зараз розумію, що це була найкраща інвестиція. " +
    "Найцінніше - це те, що я можу будь-коли написати саппорту якщо щось не виходить і оперативно отримаю допомогу. " +
    "Раніше працював з іншими проектами, там по два-три дні доводилося чекати відповіді.",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 5,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Майже місяць користуюся P2P зв'язками від Dinero Lab - вражений якістю і результатами. " +
    "Найцінніше, що вчать не лише самих схем арбітражу, але й правильній роботі з обліковими записами, безпеці та масштабуванню. " +
    "Головна перевага - дуже сильні сапорти, які не тільки відповідають на питання, але й можуть особисто провести по всім етапам. " +
    "За місяць трохи більше 5к$ сумарно (були як плюсові так і мінусові дні). Думаю що скоро  буду відверентим через пару місяців. " +
    "Вперше за багато років реально відчуваю, що знайшов надійний спосіб заробітку в інтернеті. Дякую всім команді!",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 6,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Раніше втратив гроші, купуючи різні схеми по криптовалюті, тому був максимально скептично налаштований, коли прийшов в Dinero Lab. " +
    "Виявилося, що дарма переживав - зв'язки реально працюють, усі матеріали надаються відразу, є постійна підтримка по всім питанням. " +
    "Після перших успішних угод сапорт допоміг масштабуватися і зараз стабільно виходить 180-220$ на день. " +
    "Тепер всім друзям раджу цей проект!",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 7,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "До Dinero Lab перепробував купу різних схем заробітку - трейдинг, боти, різні онлайн-курси, але ніде не було такого повного і структурованого підходу. " +
    "Перше, що вразило - детальні інструкції для новачків, які справді працюють. " +
    "Друге - жвава спільнота, де можна отримати відповіді буквально на будь-яке питання. " +
    "Третє - супер-оперативні відповіді саппортів, іноді навіть серед ночі (спасибі за це окреме). " +
    "За 3 тижні заробив близько 2,5К$ з нуля, просто послідовно рухаючись за їхнім планом. Для мене це був ідеальний вхід у світ P2P.",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 8,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Раніше працював з двома іншими P2P-ком'юніті, але прийшовши в Dinero Lab, зрозумів весь рівень різниці. " +
    "Тут не просто продали доступ і забули, а реально є повний супровід. " +
    "Цінно, що за невеликий вступний внесок отримуєш повний набір працюючих зв'язок, консультації, доступ до спільноти, і постійно нові схеми в міру їх появи. " +
    "За перші два тижні вийшов в плюс 1700$, а загальний профіт за місяць склав 3900$. " +
    "Команді величезний респект!",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 9,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Спочатку купив у них доступ до їхнього закритого каналу з інсайтами щодо криптовалют, а через час вирішив приєднатися до комюніті P2P-арбітражу. " +
    "Це виявилося ідеальним рішенням. Навіть з моїм невеликим стартовим бюджетом (всього 500$), змогли підібрати робочі зв'язки. " +
    "Результат перевершив очікування: за 20 днів вийшло подвоїти суму і тепер працюю вже з більшим оборотом. " +
    "Якщо берете участь - раджу відразу запитувати у саппорту про виділення особистого наставника, це дуже допомагає новачкам.",
    link: "https://t.me/c/2405682015/139"
  },
  {
    id: 10,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Раніше в P2P працював сам, методом проб і помилок, але прийшовши в Dinero Lab, зрозумів, скільки грошей, часу і нервів можна було зберегти, якби відразу звернувся до професіоналів. " +
    "Особливо вдячний за те, що навчили правильно працювати з рахунками і не потрапляти на ліміти і блокування - раніше це була моя головна проблема. " +
    "Сподобалося, що саппорти не просто сухо відповідають на питання, а реально включаються в твою ситуацію і допомагають знаходити індивідуальні рішення. " +
    "З командою Dinero Lab відчуваю себе захищеним і бачу, як мій дохід росте щотижня. Величезне спасибі всім, хто працює над проектом!",
    link: "https://t.me/c/2405682015/139"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scrollToTestimonial = (index: number) => {
    if (testimonialRef.current) {
      const testimonialElements = testimonialRef.current.querySelectorAll('.testimonial-card');
      if (testimonialElements[index]) {
        testimonialElements[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
        setActiveIndex(index);
      }
    }
  };
  
  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonialData.length;
    scrollToTestimonial(newIndex);
  };
  
  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + testimonialData.length) % testimonialData.length;
    scrollToTestimonial(newIndex);
  };
  
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

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const index = parseInt(element.dataset.index || '0', 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: testimonialRef.current,
      threshold: 0.7,
      rootMargin: '0px'
    });

    if (testimonialRef.current) {
      const testimonialElements = testimonialRef.current.querySelectorAll('.testimonial-card');
      testimonialElements.forEach(element => {
        observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-dinero-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Відгуки
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Результати учасників спільноти
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Що кажуть люди, які вже працюють з нашими зв'язками
            </p>
          </div>
          
          <div className="mb-8 reveal-animation">
            <div 
              ref={testimonialRef}
              className="testimonial-container overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory scroll-snap-type-x"
            >
              {testimonialData.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  data-index={index}
                  className="testimonial-card flex-shrink-0 w-full scroll-snap-align-start"
                >
                  <div className="glass-card p-6 md:p-8 rounded-xl h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="text-sm text-dinero-red">{testimonial.groupName}</div>
                      </div>
                      
                      <div className="mb-6 flex-grow">
                        <p className="text-gray-300">{testimonial.content}</p>
                      </div>
                      
                      <div className="mt-auto">
                        <a 
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-dinero-red hover:underline"
                        >
                          Перейти до оригінального відгуку
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 reveal-animation">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-10 w-10 border-dinero-red/30 bg-transparent hover:bg-dinero-red/10 hover:border-dinero-red"
            >
              <ArrowLeft size={18} className="text-dinero-red" />
            </Button>
            
            <div className="flex items-center space-x-1">
              <PaginationDots 
                total={testimonialData.length} 
                active={activeIndex} 
                onDotClick={scrollToTestimonial} 
                className="gap-1"
                dotClassName="bg-dinero-red/30 w-2 h-2 rounded-full transition-all duration-300"
                activeDotClassName="bg-dinero-red w-3 h-3"
              />
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              className="rounded-full h-10 w-10 border-dinero-red/30 bg-transparent hover:bg-dinero-red/10 hover:border-dinero-red"
            >
              <ArrowRight size={18} className="text-dinero-red" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
