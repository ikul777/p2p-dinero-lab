
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { PaginationDots } from '@/components/ui/pagination-dots';

const testimonialData = [
  {
    id: 11,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Загалом я задоволений комьюніті, співпрацюю загалом з Ярославом ще з 2022 року, виріс що він що я, але одне можу підмітити точно, завдяки його схемам, я заробив тільки за лютий місяць 8,5к$, це не просто натиснути на кнопку «БАБКИ» як любить підмічати у себе Ярослав, і це вірно " +
    "Так як я не просто тупо взяв матеріал і робив все по листочку, я пробував, експерементував, десь втрачав десь заробляв, але набивши клієнтуру, маючи досвід в цій сфері, я як заробляв так і заробляю, якщо порівнювати 2022 рік(золотий час п2п) і 2025 рік(маючи це комьюніті) можу сказати одне тільки ліниве шимпанзе не зможе заробити грошей, або ж та людина яка думає що це все лотерея, це комьюніті це просто розйоб, тут дружня атмосфера де тобі в любий час доби допоможуть підкажуть не тільки сапорти, а і ті хто разом з тобою в чаті як одна велика родина, попасти сюди і включити голову, ЦЕ ЖИТТИ КРАЩЕ ЖИТТЯ, у мене все🙃🤭",
    link: "https://t.me/c/2405682015/143"
  },
  {
    id: 12,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Ярік " +
    "Хотів залишити відгук на рахунок ,цього топового комюніті яке змінило моє бачення на рахунок повноцінного заробітку онлайн. " +
    "Я пробував себе в багатьох напрямках, також курси в різних людей купляв,але ні один не зрівняється з цим комюніті 🤗 " +
    "Робота сапортів на вищому рівні 🔥🔥 " +
    "Дружній колектив який допоможе в любих питаннях 🔥 " +
    "Все розжовано шо навіть люди які не знають як завести гроші на біржу все зрозуміють 🙈 " +
    "Заходив з невеликим депозитом 600$ і за місяць вийшло зробити майже Х2 до депозиту а ше навіть не кінець місяця🤗 " +
    "Надзвичайно задоволений далі більше , тому працюю далі. " +
    "Дякую за таку можливість змінити своє життя🤙🔥",
    link: "https://t.me/c/2405682015/144"
  },
  {
    id: 1,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "матеріал цікавий, незвичайний для вітчизняного п2п, не тупа дрочка по картам як була тому 10 " + 
    "сапорти просто не сплять, в мене так враження, завжди хтось онлайн(принаймні в мене так і є) коли не напишу відповідь отримую не пізніше ніж 5 хв " +
    "в чаті приємно знаходитись, окрім сапортів пацани допомагають, також іноді виконують бонусну роботу сапортів(відають ордери) " +
    "це почалось нещодавно але все одно круто, ще хочу додати що сапорти подають все розжовано, тобто тобі не треба набивати шишки, тому це я хочу виділити найбільше, і всю цю дінеро двіжуху я бачу як те що ти платиш щоб зекономити свій час та не набивати шишки, досвід це безцінна штука, а тут тебе просто ведуть за ручку і кладуть до рота(я про ордери в чаті) " +
    "мій профіт, зараз приблизно дам бо там ще два ордери висять, але скажу так, " +
    "я зайшов, один день дуплився, згадував старих дропів(я по п2п з яріком працював ще з часів «связка за 200 грн»), потім я по роботі на день випав, і в мене просто висіли ордери, а на третій день після входу і от по сьогоднішне число +- 1254$, може трошки меньше може трошки більше, там просто один день дуже плотно вийшов, буквально ельдорадо, але всеодно зараз стабільно 50$ я стовідсотково ловлю за день)",
    link: "https://t.me/c/2405682015/141"
  },
  {
    id: 2,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Привіт Ярік, я вчора залетів до вас в групу, хотів би залишити невеликий відгук. " +
    "Я купляв схеми у багатьох людей, які думають шо вони \"круті п2пшники/арбітражники\", але зайшовши до вас, я зрозумів шо вони просто інфоцигани. " +
    "Ще не пройшло 24 години від моменту входу, як я вже окупив половину вартості входу за день, а це не багато не мало, але +150$. Вчора мав на балансі 2980$, а зара сам бачиш. Зайшовши до вас, я ахуєл, що мені зразу написав твій сапорт, з словами що він закріплений особисто за мною і він допоможе мені у всіх питаннях. Ну це рівень " +
    "По матеріалу все написано пздц грамотно, оформлення тоже кайф. Інтуєтивно все понятно, менюшка удобна, до кожної связки +3-5 мануалів з доп інфою. Ну за ті гроші це реально кайф. Надіюсь що будемо працювати ще довго " +
    "Кароче дуже радію шо зайшов до вас, всім рекомендую. " +
    "Ви просто ТОП💪🏻",
    link: "https://t.me/c/2405682015/138"
  },
  {
    id: 3,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Чесно кажучи,дуже радий,що попав в ваше комюніті,я ніколи не міг повірити,що це настільки просто,толком нічого не роблячи заробляти такі гроші,я не розумію людей,які читають опис нашого комюніті,і прогортують далі,якшо чесно мені здається ці люди або ліниві або дуракі,я теж спочатку не вірив в це все,але я ризикнув,а як то кажуть хто не ризикує,той завжди залишається останнім,тим паче,при такій підтримці наших сапортів,мені здається навіть моя бабуся зрозуміла би як це все просто робиться,я це не пишу тому,шо мене там попросили і так далі,я просто дуже вдячний нашим сапортам,якщо хтось не повірить в це,що я зараз пишу,напишіть Ярику,скине мій тг,і дам всі пруфи на те,що ви зробили дуже велику помилку,коли прогорнули рекламу і не вступили до нас в комюніті)",
    link: "https://t.me/c/2405682015/136"
  },
  {
    id: 4,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Вже не перший місяць в комʼюніті. Все залишається максимально на високому рівні. Підтримка від сапортів 24/7/365, допоможуть вирішити будь-які питання. Завжди актуальна інформація по звʼязкам. Всім рекомендую!🔥",
    link: "https://t.me/c/2405682015/130"
  },
  {
    id: 5,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Рідко пишу відгуки, але тут реально є за шо писати " +
    "Очікування були набагато нижчі, думав буде звичайна група де буде пару звязок, і типу \"закритий чат\" " +
    "Але виявилось все в рази краще і перспективніше " +
    "Звязки робочі абсолютно всі, особисто попробував кожну хоча б разок крутнути " +
    "Сапи тоже круті, всьо розкажуть, покажуть, на тупі питання не агряться😂 " +
    "Можу навіть сводку по цифрах легеньку дати " +
    "Почанив з групи з юа банками і було всього 300€ для депу " +
    "Не крутив плотно бо не мав часу, почав нормально коли вступив вже в у віп чат, 1.5 місяці віп чату і з 300€ вже є 1к " +
    "Без додепів, суто на звязках " +
    "Хлопцям дякую надіюсь це тільки початок, радий бути частиною такого проекту на початку його формування " +
    "Газу🚘",
    link: "https://t.me/c/2405682015/127"
  },
  {
    id: 6,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Відгук максимально позитивний 💯. Комюніті розвивається в правильному руслі, і з кожним днем воно стає все краще. Сапорти завжди на звʼязку та можуть допомогти з любою проблемою. " +
    "Навіть новачки такі яким був я зможуть досягти непоганих результатів вже в перші місяці 👍",
    link: "https://t.me/c/2405682015/126"
  },
  {
    id: 7,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Всім задоволений, робота кипить, лиш встигай приймати бабки, і дропів шукати " +
    "Сапорти працюють аж гай шумить 🔥 " +
    "Комюніті взагалі супер, мега задоволений ! " +
    "По чучуть налагоджується вся робота, думаю місяць часу і буду вже на стабільності 🔥🔥",
    link: "https://t.me/c/2405682015/124"
  },
  {
    id: 8,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "В P2P не так давно, але можу сказати точно – це місце реально варте уваги! Сапорти працюють на всі 100%, завжди допоможуть розібратися в питаннях і не залишають наодинці з проблемами. Атмосфера дружня, багато корисної інфи та перевірених схем. " +
    "Звісно, гроші з неба не падають – тут важливо вчитися, працювати й не боятися нових інструментів. Але якщо вкласти час і розібратися, перспективи реально 🔥. Дякую ком'юніті за підтримку та можливості!",
    link: "https://t.me/c/2405682015/120"
  },
  {
    id: 9,
    groupName: "відгук з каналу P2P FEEDBACK",
    content: "Вступив в ком'юнити к Ярику остался полностью доволен, буквально за 2 недели изучения материала я вышел на стабильную работу в сфере п2п и уже каждый день делаю от 150$. Отдельная благодарность сапортам Диме,Игорю,Олегу. Ребята отвечали оперативно, подсказывали во всех моментах даже когда очень сильно тупил, спасибо пацанам за терпение. Ребята за ручку привели к пониманию работы, и до первых успехов 🔥",
    link: "https://t.me/c/2405682015/119"
  },
  {
    id: 10,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Супер команда👍 та велика подяка сапортам за те, що з нуля допомогли у всьому розібратись. Завжди на зв'язку, все чітко і професійно. Приємно мати справу з такою командою🙂‍↕️",
    link: "https://t.me/c/2405682015/128"
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setShowLeftButton(container.scrollLeft > 20);
    
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowRightButton(container.scrollLeft < maxScrollLeft - 20);
    
    // Calculate the current active card index based on scroll position
    const cardWidth = isMobile ? container.clientWidth : 350 + 24; // Full width on mobile, fixed width + gap on desktop
    const currentIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(currentIndex);
  };
  
  const scrollBy = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = isMobile ? container.clientWidth : 350 + 24;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = isMobile ? container.clientWidth : 350 + 24; // Full width on mobile, fixed width + gap on desktop
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };
  
  // Reset to first testimonial when switching between mobile and desktop
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollToIndex(0);
      setActiveIndex(0);
    }
  }, [isMobile]);
  
  // Implement snap scrolling manually
  const handleScrollEnd = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = isMobile ? container.clientWidth : 350 + 24; // Full width on mobile, fixed width + gap on desktop
    const scrollPosition = container.scrollLeft;
    
    // Calculate the nearest card
    const cardIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(cardIndex);
    
    // Scroll to the nearest card
    container.scrollTo({
      left: cardIndex * cardWidth,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    checkScrollPosition();
    
    container.addEventListener('scroll', checkScrollPosition);
    
    // Add event listeners for snap scrolling
    let scrollTimeout: number | null = null;
    
    const handleScroll = () => {
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
      
      // Wait for the scroll to finish, then snap
      scrollTimeout = window.setTimeout(handleScrollEnd, 150);
    };
    
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, [isMobile]);
  
  return (
    <section id="testimonials" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] bg-gradient-to-tl from-dinero-red/10 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
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
          
          {/* Controls - Before cards on mobile */}
          {isMobile && (
            <div className="mb-4 text-center reveal-animation">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-dinero-dark/80 backdrop-blur-sm border border-gray-800 rounded-full h-8 w-8 opacity-90 hover:opacity-100 transition-opacity"
                  onClick={() => scrollBy('left')}
                  disabled={!showLeftButton}
                >
                  <ChevronLeft size={18} />
                  <span className="sr-only">Попередні відгуки</span>
                </Button>
                <span className="text-sm text-gray-400">
                  {activeIndex + 1} / {testimonialData.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-dinero-dark/80 backdrop-blur-sm border border-gray-800 rounded-full h-8 w-8 opacity-90 hover:opacity-100 transition-opacity"
                  onClick={() => scrollBy('right')}
                  disabled={!showRightButton}
                >
                  <ChevronRight size={18} />
                  <span className="sr-only">Наступні відгуки</span>
                </Button>
              </div>
              <PaginationDots 
                total={testimonialData.length}
                active={activeIndex}
                onDotClick={scrollToIndex}
                className="py-2"
              />
            </div>
          )}
          
          <div className="reveal-animation mb-12 overflow-hidden relative">
            <div 
              ref={scrollContainerRef}
              className="testimonial-container overflow-x-auto pb-6 scroll-snap-type-x mandatory"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
              }}
            >
              <div className={`flex gap-6 pb-2 px-4 ${isMobile ? 'flex-nowrap' : 'min-w-max'}`}>
                {testimonialData.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className={`glass-card p-6 rounded-xl border border-gray-800 hover:border-dinero-red/40 transition-all duration-300 ${
                      isMobile ? 'min-w-full w-full flex-shrink-0' : 'w-[350px] min-w-[350px]'
                    } relative scroll-snap-align-start`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dinero-red/40 via-dinero-red to-dinero-red/40"></div>
                    
                    <div className="mb-4">
                      <div className="bg-dinero-red/10 text-dinero-red px-3 py-1 rounded-md text-xs font-semibold inline-block">
                        {testimonial.groupName}
                      </div>
                    </div>
                    
                    <ScrollArea className="h-[180px] md:h-[200px]">
                      <div className="text-gray-300 pr-4">
                        <p className="leading-relaxed text-sm">
                          {testimonial.content}
                        </p>
                      </div>
                    </ScrollArea>
                    
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-800">
                      <a 
                        href={testimonial.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-dinero-red/90 hover:text-dinero-red transition-colors group"
                      >
                        <div className="h-8 w-8 rounded-full bg-dinero-red/20 flex items-center justify-center mr-2">
                          <Link size={16} className="text-dinero-red" />
                        </div>
                        <span className="text-sm group-hover:underline">Посилання на цей відгук</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {!isMobile && showLeftButton && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-dinero-dark/80 backdrop-blur-sm border border-gray-800 rounded-full h-10 w-10 opacity-90 hover:opacity-100 transition-opacity"
                onClick={() => scrollBy('left')}
              >
                <ChevronLeft size={20} />
                <span className="sr-only">Попередні відгуки</span>
              </Button>
            )}
            
            {!isMobile && showRightButton && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-dinero-dark/80 backdrop-blur-sm border border-gray-800 rounded-full h-10 w-10 opacity-90 hover:opacity-100 transition-opacity"
                onClick={() => scrollBy('right')}
              >
                <ChevronRight size={20} />
                <span className="sr-only">Наступні відгуки</span>
              </Button>
            )}
          </div>
          
          <div className="text-center mt-4 reveal-animation">
            <a 
              href="https://t.me/+fsuDNjshEhplMGMy" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-dinero-light bg-dinero-red hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium text-lg button-glow"
            >
              Більше відгуків в P2P FEEDBACK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
