import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { PaginationDots } from '@/components/ui/pagination-dots';

const testimonialData = [
  {
    id: 11,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Загалом я задоволений комьюніті, співпрацюю загалом з Ярославом ще з 2022 року, виріс що він що я, але одне можу підмітити точно, завдяки його схемам, я заробив тільки за лютий місяць 8,5к$, це не просто натиснути на кнопку «БАБКИ» як любить підмічати у себе Ярослав, і це вірно",
    link: "https://t.me/c/2405682015/143"
  },
  {
    id: 12,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Хотів залишити відгук на рахунок цього топового комюніті яке змінило моє бачення на рахунок повноцінного заробітку онлайн. Робота сапортів на вищому рівні 🔥 Заходив з невеликим депозитом 600$ і за місяць вийшло зробити майже Х2 до депозиту",
    link: "https://t.me/c/2405682015/144"
  },
  {
    id: 1,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Матеріал цікавий, незвичайний для вітчизняного п2п. Сапорти просто не сплять, завжди хтось онлайн. В чаті приємно знаходитись, пацани допомагають. За 1.5 місяці з 300€ вже є 1к – без додепів, суто на звязках",
    link: "https://t.me/c/2405682015/141"
  },
  {
    id: 2,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Ще не пройшло 24 години від моменту входу, як я вже окупив половину вартості входу за день, а це +150$. Зайшовши до вас, я ахуєл, що мені зразу написав твій сапорт з словами що він закріплений особисто за мною. Ви просто ТОП💪🏻",
    link: "https://t.me/c/2405682015/138"
  },
  {
    id: 3,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Дуже радий, що попав в ваше комюніті. При такій підтримці наших сапортів, мені здається навіть моя бабуся зрозуміла би як це все просто робиться. Я дуже вдячний нашим сапортам!",
    link: "https://t.me/c/2405682015/136"
  },
  {
    id: 4,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Вже не перший місяць в комʼюніті. Все залишається максимально на високому рівні. Підтримка від сапортів 24/7/365, допоможуть вирішити будь-які питання. Завжди актуальна інформація по звʼязкам. Всім рекомендую!🔥",
    link: "https://t.me/c/2405682015/130"
  },
  {
    id: 5,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Звязки робочі абсолютно всі, особисто попробував кожну. Сапи теж круті, всьо розкажуть, покажуть. 1.5 місяці віп чату і з 300€ вже є 1к. Без додепів, суто на звязках",
    link: "https://t.me/c/2405682015/127"
  },
  {
    id: 6,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Відгук максимально позитивний 💯. Комюніті розвивається в правильному руслі. Сапорти завжди на звʼязку та можуть допомогти з любою проблемою. Навіть новачки зможуть досягти непоганих результатів вже в перші місяці",
    link: "https://t.me/c/2405682015/126"
  },
  {
    id: 7,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Всім задоволений, робота кипить, лиш встигай приймати бабки, і дропів шукати. Сапорти працюють аж гай шумить 🔥 Комюніті взагалі супер, мега задоволений!",
    link: "https://t.me/c/2405682015/124"
  },
  {
    id: 8,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "В P2P не так давно, але можу сказати точно – це місце реально варте уваги! Сапорти працюють на всі 100%, атмосфера дружня, багато корисної інфи та перевірених схем. Дякую ком'юніті за підтримку!",
    link: "https://t.me/c/2405682015/120"
  },
  {
    id: 9,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Буквально за 2 недели изучения материала я вышел на стабильную работу в сфере п2п и уже каждый день делаю от 150$. Ребята за ручку привели к пониманию работы, и до первых успехов 🔥",
    link: "https://t.me/c/2405682015/119"
  },
  {
    id: 10,
    groupName: "Відгук з каналу P2P FEEDBACK",
    content: "Супер команда👍 та велика подяка сапортам за те, що з нуля допомогли у всьому розібратись. Завжди на зв'язку, все чітко і професійно. Приємно мати справу з такою командою!",
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
    
    const cardWidth = 380 + 24;
    const currentIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(currentIndex);
  };
  
  const scrollBy = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 380 + 24;
    container.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  };
  
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 380 + 24;
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };
  
  const handleScrollEnd = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 380 + 24;
    const cardIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(cardIndex);
    container.scrollTo({ left: cardIndex * cardWidth, behavior: 'smooth' });
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    
    let scrollTimeout: number | null = null;
    const handleScroll = () => {
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleScrollEnd, 150);
    };
    
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold"></div>
      
      {/* Ambient Light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full filter blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal-animation">
            <span className="inline-flex items-center gap-2 px-4 py-2 badge-premium rounded-full text-sm font-medium mb-6">
              Відгуки
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Реальні <span className="text-gradient-gold">кейси</span> клієнтів
            </h2>
            <div className="divider-gold-thick mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Перевірені результати від учасників нашого ком'юніті
            </p>
          </div>
          
          {/* Mobile Pagination */}
          {isMobile && (
            <div className="mb-6 reveal-animation">
              <PaginationDots 
                total={testimonialData.length}
                active={activeIndex}
                onDotClick={scrollToIndex}
              />
            </div>
          )}
          
          {/* Testimonials Carousel */}
          <div className="relative reveal-animation">
            {/* Navigation Buttons */}
            {!isMobile && (
              <>
                <button
                  onClick={() => scrollBy('left')}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 icon-circle-premium h-12 w-12 rounded-xl flex items-center justify-center hover:bg-gold/20 transition-all ${
                    showLeftButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="text-gold" />
                </button>
                
                <button
                  onClick={() => scrollBy('right')}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 icon-circle-premium h-12 w-12 rounded-xl flex items-center justify-center hover:bg-gold/20 transition-all ${
                    showRightButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="text-gold" />
                </button>
              </>
            )}
            
            {/* Cards Container */}
            <div
              ref={scrollContainerRef}
              className="testimonial-container flex gap-6 overflow-x-auto pb-4 px-2 -mx-2"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[340px] md:w-[380px] scroll-snap-align-start"
                >
                  <div className="glass-card h-full p-8 rounded-2xl flex flex-col group hover:glow-gold transition-all duration-500">
                    {/* Quote Icon */}
                    <div className="icon-circle-premium h-10 w-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Quote size={16} className="text-gold" />
                    </div>
                    
                    {/* Content */}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                      {testimonial.content}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-xs text-muted-foreground/70">{testimonial.groupName}</span>
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold text-xs hover:text-gold-light transition-colors"
                      >
                        Переглянути
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Pagination */}
          {!isMobile && (
            <div className="mt-8 reveal-animation">
              <PaginationDots 
                total={testimonialData.length}
                active={activeIndex}
                onDotClick={scrollToIndex}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
