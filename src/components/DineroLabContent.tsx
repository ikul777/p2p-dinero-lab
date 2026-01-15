import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Check } from 'lucide-react';
import dineroLabImage1 from '@/assets/dinerolab-content-1.png';
import dineroLabImage2 from '@/assets/dinerolab-content-2.png';

const block1Points = [
  "Тезис 1 — опис буде додано пізніше",
  "Тезис 2 — опис буде додано пізніше",
  "Тезис 3 — опис буде додано пізніше",
  "Тезис 4 — опис буде додано пізніше",
  "Тезис 5 — опис буде додано пізніше",
];

const block2Points = [
  "Тезис 1 — опис буде додано пізніше",
  "Тезис 2 — опис буде додано пізніше",
  "Тезис 3 — опис буде додано пізніше",
  "Тезис 4 — опис буде додано пізніше",
  "Тезис 5 — опис буде додано пізніше",
  "Тезис 6 — опис буде додано пізніше",
  "Тезис 7 — опис буде додано пізніше",
];

const DineroLabContent = () => {
  const headerAnimation = useScrollAnimation();
  const block1Animation = useScrollAnimation({ threshold: 0.15 });
  const block2Animation = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="tag">Що всередині</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            НАПОВНЕННЯ <span className="text-gradient">DINERO LAB</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Детальний огляд усіх можливостей та інструментів, які ви отримаєте
          </p>
        </div>

        {/* Block 1: Image Left, Points Right */}
        <div
          ref={block1Animation.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ${
            block1Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-2 sm:p-3 rounded-2xl group overflow-hidden">
              <img
                src={dineroLabImage1}
                alt="Dinero Lab Screenshot 1"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Points */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4 sm:space-y-5">
              {block1Points.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 ${
                    block1Animation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block 2: Points Left, Image Right */}
        <div
          ref={block2Animation.ref}
          className={`flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 transition-all duration-700 ${
            block2Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-2 sm:p-3 rounded-2xl group overflow-hidden">
              <img
                src={dineroLabImage2}
                alt="Dinero Lab Screenshot 2"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Points */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4 sm:space-y-5">
              {block2Points.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 ${
                    block2Animation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineroLabContent;
