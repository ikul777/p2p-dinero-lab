
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Анонім",
    message: "Ну, легко) матеріал цікавий, незвичайний для вітчизняного p2p, не тупа дрочка по картам як була тому 10 сапорти просто не сплять, в мене так враження, завжди хтось онлайн(причому і в мене він є) коли задаєш питання отримую не пізніше ніж 5 хв в чаті правильно знаходять, окрім сапортів пацани допомагають, також іноді виконують бонусну роботу сапорти(відають ордери) в чаті правильно пояснюють але все одно круто, ще хочу додати що сапорти подають все розжовано, тобто тобі не треба набивати шишки, тому це я хочу виділити найбільше, і все ціо дінеро дійсную в бан як те що згадував шоб новачкам не набивати шишки, досвід це безцінна штука, а тут тебе просто ведуть за руку і кладуть до ротяги про ордери в чаті) короче, зараз повідомлень дає більше часу чим ордери висять, але скажу так, я зайшов, один день порилиясь зтудував старих попітів по p2p, знайшов один день працював це 3 часа «связка за 200 грн+), потім я по роботі на день випав, і в мене просто висіли ордери, а на третій день знайшов один скринушоті шоб переконатися в цьому тому що мені здається першіше трошки меньше може трошки більше, там просто один день дуже плотно вийшов, буквально ельдорадо, але всеодно зараз «дофіга» було за день)",
    image: "/lovable-uploads/0f454836-1e24-4f21-83cb-65c872fb6aa7.png"
  },
  {
    id: 2,
    name: "Користувач",
    message: "Чесно кажучи, дуже радий що попав в ваше комʼюніті я ніколи не міг повірити що це настільки просто поперся нічого не роблячи заробляти там гроші як розумію людей які спочатку теж скучняк як я вічно в це все,але я вирішую,як то кажучи хто не рискує,той не пьет шапмпанского остатнім печутки такій підтримкі наших сапортів мені здається цілі мабуть або ііншиі або дурніі,ток спочатку на вірив в це все,але я вирішив,як то кажучи хто не рискує,той не залишається останнім,печутки такій підтримкі наших сапортів мені здається цілі мабуть або ііншиі або дурніі,ток спочатку на вірив в це все,але я вирішив,як то кажучи хто не рискує,той не залишається  моя бабуся зрозуміла би як це все  просто робиться)) сміюся тому що мене там попросили і так даю,я просто дуже вдячний нашим сапортам якщо хтось не повірить в то,шо я зараз все, шо роблю на автоматі,без чьої небуть підтримки,якщо ти дам всі труби то,шо ви робили дуже велику помилку,коли прошли рекламу і не вступили до нас в",
    image: "/lovable-uploads/c6b86e04-3252-4056-9815-619cae704a5c.png"
  },
  {
    id: 3,
    name: "Андрій",
    message: "Вже не перший місяць в ком'юніті. Все залишається максимально на високому рівні. Підтримка від сапортів 24/7/365, допоможуть вирішити будь-які питання. Завжди актуальна інформація по зв'язках. Всім рекомендую! 👍",
    image: "/lovable-uploads/65363d3f-4724-48ef-8920-947b2b722e15.png"
  },
  {
    id: 4,
    name: "Користувач",
    message: "Рідко пишу відгуки, але тут реально є за що писати Очікування були набагато нижчі ніж була звичайна група де буде пару звʼязок, і типу \"закритий чат\" Але виявилось все в рази краще і перспективніше Звʼязки робочі абсолютно всі, особисто попробував кожну хоча 6 разів крутнути 👍 Хлопці крут, все розкажуть, покажуть, на тупі питання не агряться😂 Можу навіть сводку по цифрах легенько дати Зайшов з група звʼязка на 15$ кручу 300€ для дєту Не крутив плотно бо не мав часу, почав нормально коли вступив вже в а віп чат, 1,5 місяці віп чату і з 300€ вже є 1к Без жодної групи з топовими звʼязками і тонни інструкцій це було би не можливо Хлопцям дякую надіюсь це тільки початок, радий бути частиною такого проекту на початку його формування",
    image: "/lovable-uploads/cf8b8384-701c-491b-97e5-682e575a0369.png"
  },
  {
    id: 5,
    name: "trapstar",
    message: "Вступив в комʼюнити и Ярику остался полностью доволен, буквально за 2 недели изучения материала я вышел на стабильный заработок в сфере P2P и уже каждый день делаю от 150$. Отдельная благодарность сапортам Диме,Игорю,Олегу. Ребята за ручку привели к пониманию работы, и до первых успехов Ребята отвечали в самых сложных моментах даже когда очень сильно тупил, спасибо пацанам за терпение.",
    image: "/lovable-uploads/26d2bf9f-029d-416b-9762-a2dd1007d399.png"
  },
  {
    id: 6,
    name: "Користувач",
    message: "Тиждень плотного ворку і порадував себе маленькою мрією. Ultra 2",
    image: "/lovable-uploads/9566adfe-ce94-47b5-9e3d-c4ac797dcf6d.png"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
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
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev();
    }
  };
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = activeIndex * (containerRef.current.clientWidth / 2);
    }
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Відгуки
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Реальні кейси клієнтів
            </h2>
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-6"></div>
            <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
              Перевірені результати від учасників нашого ком'юніті
            </p>
          </div>
          
          {/* Testimonials carousel */}
          <div className="relative mb-8 reveal-animation">
            <div 
              ref={containerRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                    <div className="glass-card p-6 md:p-8 rounded-xl">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-dinero-red/20 flex items-center justify-center flex-shrink-0">
                          <MessageSquare size={20} className="text-dinero-red" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium mb-2">{testimonial.name}</h4>
                          <p className="text-gray-300 text-sm line-clamp-4 md:line-clamp-6">
                            {testimonial.message}
                          </p>
                          <img 
                            src={testimonial.image} 
                            alt="Testimonial screenshot" 
                            className="mt-4 rounded-lg w-full object-cover max-h-80 border border-gray-800" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 h-10 w-10 rounded-full bg-dinero-dark border border-gray-700 flex items-center justify-center text-white hover:bg-dinero-red transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 h-10 w-10 rounded-full bg-dinero-dark border border-gray-700 flex items-center justify-center text-white hover:bg-dinero-red transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-dinero-red" : "w-2 bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center reveal-animation">
            <a 
              href="#join" 
              className="inline-flex items-center text-dinero-light bg-dinero-red hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium text-lg button-glow"
            >
              Більше кейсів
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
