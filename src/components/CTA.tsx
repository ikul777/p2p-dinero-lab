import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const CTA = () => {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="join" className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[200px] md:w-[400px] h-[150px] sm:h-[200px] md:h-[400px] bg-primary/8 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[100px] sm:w-[150px] md:w-[300px] h-[100px] sm:h-[150px] md:h-[300px] bg-primary/5 rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-2 sm:mb-3 md:mb-4 inline-block text-[10px] sm:text-xs">Підсумки проєкту</span>
            <h2 className="font-display text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
              <span className="text-foreground">DineroLab —</span>
              <br />
              <span className="text-foreground/30">кейс сильної P2P-екосистеми</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2 text-balance">
              Активний набір закрито. Ця сторінка збережена як публічний кейс результатів команди та учасників. Нові проєкти та ідеї — у Telegram-каналі.
            </p>
          </div>
          
          <div
            ref={cardAnimation.ref}
            className={`flex justify-center transition-all duration-700 delay-150 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="https://t.me/+iDCbfd3Bm8wxMzZi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold text-primary-foreground w-full sm:w-auto justify-center"
            >
              ЧИТАТИ TELEGRAM-КАНАЛ
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
