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
  <ul className="divide-y divide-border/30 -my-2">
    {points.map((point, index) => (
      <li
        key={index}
        className={`flex items-start gap-3 sm:gap-4 py-3 sm:py-4 transition-all duration-500 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : reverse
              ? 'opacity-0 -translate-x-6'
              : 'opacity-0 translate-x-6'
        }`}
        style={{ transitionDelay: `${index * 80 + 150}ms` }}
      >
        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/15 ring-1 ring-primary/25 flex items-center justify-center mt-0.5">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm sm:text-base font-semibold text-foreground mb-1 flex flex-wrap items-center gap-2">
            <span>{point.title}</span>
            {point.isNew && (
              <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                Нове
              </span>
            )}
          </p>
          <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
            {point.desc}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

const Screenshot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mx-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
    <div className="p-1.5 rounded-3xl bg-gradient-to-b from-primary/30 via-primary/10 to-transparent">
      <div className="rounded-[20px] overflow-hidden bg-background/40 ring-1 ring-border/40 group">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  </div>
);

const BlockBadge = ({ num, label }: { num: string; label: string }) => (
  <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-primary/80 mb-3">
    <span className="font-bold text-primary">{num}</span>
    <span className="w-6 h-px bg-primary/40" />
    <span>{label}</span>
  </div>
);

const SectionDivider = () => (
  <div className="relative h-px my-12 sm:my-16 md:my-20 bg-gradient-to-r from-transparent via-border to-transparent">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-primary/10 rounded-full blur-2xl" />
  </div>
);

const DineroLabContent = () => {
  const headerAnimation = useScrollAnimation();
  const block1Animation = useScrollAnimation({ threshold: 0.15 });
  const block2Animation = useScrollAnimation({ threshold: 0.15 });
  const block3Animation = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-14 sm:py-20 md:py-28 relative overflow-hidden">
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            НАПОВНЕННЯ <span className="text-gradient whitespace-nowrap">DINEROLAB</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Детальний огляд усіх можливостей та інструментів, які ви отримаєте
          </p>
        </div>

        {/* Block 1 */}
        <div
          ref={block1Animation.ref}
          className={`transition-all duration-700 ${
            block1Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card rounded-3xl p-5 sm:p-7 md:p-10">
            <div className="md:hidden text-center">
              <BlockBadge num="01" label="Основа" />
              <h3 className="text-xl font-display font-semibold mb-5 text-foreground">Усе, з чого починається робота</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-14">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <Screenshot src={dineroLabImage1.url} alt="Скріншот навігації DineroLab — загальна інформація та P2P-звʼязки" />
              </div>
              <div className="w-full md:flex-1 md:border-l md:border-primary/15 md:pl-8">
                <div className="hidden md:block">
                  <BlockBadge num="01" label="Основа" />
                </div>
                <PointsList points={block1Points} isVisible={block1Animation.isVisible} />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Block 2 */}
        <div
          ref={block2Animation.ref}
          className={`transition-all duration-700 ${
            block2Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card rounded-3xl p-5 sm:p-7 md:p-10">
            <div className="md:hidden text-center">
              <BlockBadge num="02" label="Спільнота" />
              <h3 className="text-xl font-display font-semibold mb-5 text-foreground">Живе ком'юніті та партнерства</h3>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 lg:gap-14">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <Screenshot src={dineroLabImage2.url} alt="Скріншот DineroLab — мейкери/мерчанти Bybit та OKX" />
              </div>
              <div className="w-full md:flex-1 md:border-r md:border-primary/15 md:pr-8">
                <div className="hidden md:block text-right">
                  <BlockBadge num="02" label="Спільнота" />
                </div>
                <PointsList points={block2Points} isVisible={block2Animation.isVisible} reverse />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Block 3 — highlighted "NEW" orders */}
        <div
          ref={block3Animation.ref}
          className={`relative transition-all duration-700 ${
            block3Animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section heading for new orders */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Нові розділи
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Ордери — миттєва <span className="text-gradient">ліквідність</span>
            </h3>
          </div>

          {/* Glow wrapper */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-3xl blur md:blur-md opacity-60" />
            <div className="relative glass-card rounded-3xl p-5 sm:p-7 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-14">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <Screenshot src={dineroLabImage3.url} alt="DineroLab — нові розділи: Ордер Продаж та Ордер Відкуп" />
                </div>
                <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {block3Points.map((point, index) => (
                    <div
                      key={index}
                      className={`relative p-4 sm:p-5 rounded-2xl bg-primary/5 border border-primary/20 border-l-2 border-l-primary hover:border-primary/40 transition-all duration-500 ${
                        block3Animation.isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: `${index * 120 + 200}ms` }}
                    >
                      <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                        Нове
                      </span>
                      <div className="flex items-center gap-2 mb-2 pr-14">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 ring-1 ring-primary/30 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-foreground">
                          {point.title}
                        </p>
                      </div>
                      <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineroLabContent;
