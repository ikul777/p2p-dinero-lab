import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const testimonialData = [
  {
    id: 11,
    groupName: "P2P FEEDBACK",
    content: "Загалом я задоволений комʼюніті, співпрацюю з Ярославом ще з 2022 року. Завдяки його схемам я заробив тільки за лютий місяць 8,5к$. Це комʼюніті це просто розйоб, тут дружня атмосфера де тобі допоможуть не тільки саппорти, а і всі в чаті як одна велика родина.",
    link: "https://t.me/c/2405682015/143"
  },
  {
    id: 12,
    groupName: "P2P FEEDBACK",
    content: "Хотів залишити відгук на рахунок цього топового комʼюніті. Я пробував себе в багатьох напрямках, також курси купляв, але ні один не зрівняється з цим. Робота саппортів на вищому рівні! Заходив з депозитом 600$ і за місяць вийшло зробити майже Х2.",
    link: "https://t.me/c/2405682015/144"
  },
  {
    id: 1,
    groupName: "P2P FEEDBACK",
    content: "Матеріал цікавий, незвичайний для вітчизняного п2п. Саппорти просто не сплять, завжди хтось онлайн! Я зайшов, один день дуплився, і на третій день +- 1254$. Зараз стабільно 50$ я стовідсотково ловлю за день.",
    link: "https://t.me/c/2405682015/141"
  },
  {
    id: 2,
    groupName: "P2P FEEDBACK",
    content: "Я купляв схеми у багатьох людей, але зайшовши до вас, я зрозумів що вони просто інфоцигани. Ще не пройшло 24 години, як я вже окупив половину вартості входу - +150$. Саппорт написав що він закріплений за мною і допоможе в усьому. Це рівень!",
    link: "https://t.me/c/2405682015/138"
  },
  {
    id: 3,
    groupName: "P2P FEEDBACK",
    content: "Дуже радий що попав в ваше комʼюніті. Я ніколи не міг повірити що це настільки просто заробляти такі гроші. При такій підтримці наших саппортів навіть моя бабуся зрозуміла би як це все робиться!",
    link: "https://t.me/c/2405682015/136"
  },
  {
    id: 4,
    groupName: "P2P FEEDBACK",
    content: "Вже не перший місяць в комʼюніті. Все залишається на високому рівні. Підтримка від саппортів 24/7/365, допоможуть вирішити будь-які питання. Завжди актуальна інформація по звʼязкам. Всім рекомендую!",
    link: "https://t.me/c/2405682015/130"
  },
  {
    id: 5,
    groupName: "P2P FEEDBACK",
    content: "Рідко пишу відгуки, але тут реально є за що. Очікування були нижчі, думав буде звичайна група. Але все в рази краще! Звʼязки робочі абсолютно всі. Почав з 300€, за 1.5 місяці вже є 1к без додепів!",
    link: "https://t.me/c/2405682015/127"
  },
  {
    id: 6,
    groupName: "P2P FEEDBACK",
    content: "Відгук максимально позитивний. Комʼюніті розвивається в правильному руслі. Саппорти завжди на звʼязку та можуть допомогти з будь-якою проблемою. Навіть новачки зможуть досягти непоганих результатів!",
    link: "https://t.me/c/2405682015/126"
  }
];

// Helper to highlight numbers in text
const highlightNumbers = (text: string) => {
  return text.replace(/(\d+[\d,.\s]*[$€%]?|\$\d+[\d,.\s]*|[xXхХ]\d+)/g, '<span class="highlight-number">$1</span>');
};

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  const headerAnimation = useScrollAnimation();
  const carouselAnimation = useScrollAnimation({ threshold: 0.1 });
  
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setShowLeftButton(container.scrollLeft > 20);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowRightButton(container.scrollLeft < maxScrollLeft - 20);
  };
  
  const scrollBy = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = isMobile ? 240 : 380;
    container.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused || isMobile) return;
    
    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isMobile]);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    
    return () => container.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Відгуки</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Реальні </span>
              <span className="text-gradient">кейси</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Перевірені результати від учасників нашого комʼюніті
            </p>
          </div>
          
          {/* Testimonials carousel */}
          <div 
            ref={carouselAnimation.ref}
            className={`relative transition-all duration-700 delay-150 ${carouselAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade edges */}
            <div className="carousel-fade-left hidden md:block"></div>
            <div className="carousel-fade-right hidden md:block"></div>
            
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonialData.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="glass-card p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl flex-shrink-0 w-[260px] sm:w-[280px] md:w-[360px] group hover:border-primary/30 transition-all"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <div className="flex items-center gap-2">
                      <span className="faq-number">{index + 1}</span>
                      <span className="tag text-[8px] sm:text-[10px] md:text-xs px-2 py-0.5 sm:px-3 sm:py-1">{testimonial.groupName}</span>
                    </div>
                    <a 
                      href={testimonial.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    </a>
                  </div>
                  
                  {/* Content */}
                  <ScrollArea className="h-[110px] sm:h-[120px] md:h-[160px]">
                    <p 
                      className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed pr-2"
                      dangerouslySetInnerHTML={{ __html: highlightNumbers(testimonial.content) }}
                    />
                  </ScrollArea>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons - desktop only */}
            {!isMobile && (
              <>
                {showLeftButton && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    onClick={() => scrollBy('left')}
                  >
                    <ChevronLeft size={20} />
                  </Button>
                )}
                
                {showRightButton && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    onClick={() => scrollBy('right')}
                  >
                    <ChevronRight size={20} />
                  </Button>
                )}
              </>
            )}
          </div>
          
          {/* CTA */}
          <div 
            className={`text-center mt-6 sm:mt-8 md:mt-12 transition-all duration-700 delay-300 ${carouselAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a 
              href="https://t.me/+fsuDNjshEhplMGMy" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium text-primary-foreground"
            >
              Більше відгуків
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
