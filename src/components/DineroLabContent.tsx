import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Check } from 'lucide-react';
import dineroLabImage1 from '@/assets/dinerolab-content-1.png.asset.json';
import dineroLabImage2 from '@/assets/dinerolab-content-2.png.asset.json';
import dineroLabImage3 from '@/assets/dinerolab-content-3.png.asset.json';

type Point = { title: string; desc: string; isNew?: boolean };

const block1Points: Point[] = [
  { title: "ЗАГАЛЬНА ІНФОРМАЦІЯ", desc: "Меню та структура всіх інших гілок для зручної навігації. Контакти сапортів, реферальна програма, правила перебування. Інструкція з чого почати." },
  { title: "P2P ЗВʼЯЗКИ", desc: "Актуальні авторські P2P-звʼязки з перевіреним профітом. Офлайн, онлайн, з €/£/$ та іншими валютами. Перевірені Українські та Європейські банки." },
  { title: "РОБОТА З БАНКАМИ / БІРЖАМИ", desc: "Практичні інструкції по роботі з банками та біржами: прогріви, ліміти, ризики, блокування, логіка антифрод системи та актуальні рішення під роботу." },
  { title: "ДОДАТКОВА ІНФОРМАЦІЯ", desc: "Корисні матеріали під кожну звʼязку, приклади та нюанси, які не входять у стандартні гайди, але критично впливають на результат." },
  { title: "CHAT 2.0", desc: "Живе комʼюніті з постійною взаємодією: питання, відповіді, обговорення ситуацій, досвід учасників і підтримка в реальному часі в груповому форматі." },
];

const block2Points: Point[] = [
  { title: "ФЛУД", desc: "Неформальне спілкування учасників комʼюніті не тільки на тему P2P сфери." },
  { title: "ДЗВІНКИ", desc: "Регулярні групові дзвінки з розборами конкретних тем, відповідями на питання учасників та обговоренням актуальних кейсів. *Індивідуальні дзвінки сапорти проводять з учасниками окремо." },
  { title: "МЕЙКЕРИ / МЕРЧАНТИ Bybit", desc: "Робота з партнером Bybit: видача мейкерів та мерчантів для всіх учасників по полегшеній системі. Допомога у всіх етапах роботи з біржею напряму." },
  { title: "МЕЙКЕРИ / МЕРЧАНТИ OKX", desc: "Актуальна робота з партнером OKX: видача мерчантів всім учасникам. Допомога у всіх етапах роботи з біржею напряму." },
  { title: "ПРАВИЛА БЕЗПЕКИ В P2P", desc: "Система безпеки, яка зберігає ваші кошти: ризики, помилки та розбір популярних методів скаму." },
  { title: "КОРИСНІ СЕРВІСИ", desc: "Інструменти, сервіси, софти та віртуальні машини, які спрощують роботу, економлять час і підвищують ефективність в роботі." },
];

const block3Points: Point[] = [
  { title: "ОРДЕР ПРОДАЖ", isNew: true, desc: "Гілка для швидкого продажу активів (USDT) іншим учасникам, минаючи стакан біржі для отримання негайної фіатної ліквідності." },
  { title: "ОРДЕР ВІДКУП", isNew: true, desc: "Гілка для швидкого відкупу USDT у інших учасників, які мають надлишок ліквідності, для негайного старту нового кола без очікування в стакані." },
];

const PointsList = ({ points, isVisible, reverse }: { points: Point[]; isVisible: boolean; reverse?: boolean }) => (
  <ul className="space-y-4 sm:space-y-5">
    {points.map((point, index) => (
      <li
        key={index}
        className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : reverse
              ? 'opacity-0 -translate-x-10'
              : 'opacity-0 translate-x-10'
        }`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      >
        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 flex items-center justify-center mt-1">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm sm:text-base font-semibold text-foreground mb-1 flex flex-wrap items-center gap-2">
            <span>{point.title}</span>
            {point.isNew && (
              <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                Нове
              </span>
            )}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {point.desc}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

const DineroLabContent = () => {
  const headerAnimation = useScrollAnimation();
  const block1Animation = useScrollAnimation({ threshold: 0.15 });
  const block2Animation = useScrollAnimation({ threshold: 0.15 });
  const block3Animation = useScrollAnimation({ threshold: 0.15 });

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
            НАПОВНЕННЯ <span className="text-gradient whitespace-nowrap">DINEROLAB</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Детальний огляд усіх можливостей та інструментів, які ви отримаєте
          </p>
        </div>

        {/* Block 1: Image Left, Points Right */}
        <div
          ref={block1Animation.ref}
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ${
            block1Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="glass-card p-2 sm:p-3 rounded-2xl group overflow-hidden max-w-xs mx-auto md:max-w-none">
              <img
                src={dineroLabImage1.url}
                alt="DineroLab Screenshot 1"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="w-full md:flex-1">
            <PointsList points={block1Points} isVisible={block1Animation.isVisible} />
          </div>
        </div>

        {/* Block 2: Points Left, Image Right */}
        <div
          ref={block2Animation.ref}
          className={`flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ${
            block2Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="glass-card p-2 sm:p-3 rounded-2xl group overflow-hidden max-w-xs mx-auto md:max-w-none">
              <img
                src={dineroLabImage2.url}
                alt="DineroLab Screenshot 2"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="w-full md:flex-1">
            <PointsList points={block2Points} isVisible={block2Animation.isVisible} reverse />
          </div>
        </div>

        {/* Block 3: Image Left, Points Right (New Orders) */}
        <div
          ref={block3Animation.ref}
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 transition-all duration-700 ${
            block3Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="glass-card p-2 sm:p-3 rounded-2xl group overflow-hidden max-w-xs mx-auto md:max-w-none relative">
              <span className="absolute top-3 right-3 z-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                Нове
              </span>
              <img
                src={dineroLabImage3.url}
                alt="DineroLab Screenshot 3 — Ордери"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="w-full md:flex-1">
            <PointsList points={block3Points} isVisible={block3Animation.isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineroLabContent;
