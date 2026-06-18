import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import logoRed from '@/assets/dinerolab-logo-red.png.asset.json';

const CTA = () => {
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="join" className="py-10 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[450px] h-[200px] sm:h-[300px] md:h-[450px] bg-primary/10 rounded-full filter blur-[80px] sm:blur-[100px] md:blur-[140px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div
            ref={cardAnimation.ref}
            className={`transition-all duration-700 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="animated-border px-5 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"></div>
                  <img
                    src={logoRed.url}
                    alt="DineroLab"
                    className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                  />
                </div>

                <span className="tag mb-4 sm:mb-5 inline-block text-[10px] sm:text-xs">Приєднуйся зараз</span>

                <h2 className="font-display text-[1.4rem] leading-tight sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground text-balance">
                  Готовий заробляти з командою?
                </h2>


                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-sm">
                  Авторські звʼязки, підтримка 24/7 та закрита спільнота.
                </p>

                <a
                  href="https://t.me/+iDCbfd3Bm8wxMzZi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-pulse inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold text-primary-foreground w-full sm:w-auto justify-center"
                >
                  ПРИЄДНАТИСЬ В КОМ'ЮНІТІ
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTA;
