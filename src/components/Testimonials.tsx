import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const isMobile = useIsMobile();
  
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
      <div className="absolute bottom-0 right-1/4 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[150px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 reveal-animation">
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Відгуки</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-foreground">Реальні </span>
              <span className="text-gradient">кейси</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-2">
              Перевірені результати від учасників нашого комʼюніті
            </p>
          </div>
          
          {/* Testimonials carousel */}
          <div className="reveal-animation relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonialData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="glass-card p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl flex-shrink-0 w-[220px] sm:w-[260px] md:w-[360px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <span className="tag text-[8px] sm:text-[10px] md:text-xs px-2 py-0.5 sm:px-3 sm:py-1">{testimonial.groupName}</span>
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
                  <ScrollArea className="h-[100px] sm:h-[120px] md:h-[160px]">
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed pr-2">
                      {testimonial.content}
                    </p>
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10"
                    onClick={() => scrollBy('left')}
                  >
                    <ChevronLeft size={20} />
                  </Button>
                )}
                
                {showRightButton && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full h-10 w-10"
                    onClick={() => scrollBy('right')}
                  >
                    <ChevronRight size={20} />
                  </Button>
                )}
              </>
            )}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-6 sm:mt-8 md:mt-12 reveal-animation">
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