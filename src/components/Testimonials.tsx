
import { User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Expanded testimonial data for carousel
const testimonialData = [
  {
    id: 1,
    groupName: "P2P FEEDBACK",
    content: "Ну, легко) матеріал цікавий, незвичайний для вітчизняного п2п, не тупа дрочка по картам як була тому 10 років)) потроху вчишся, в мене так враження, завжди щось онлайн(принаймні в мене так і є) коли не напишу відповідь отримую не пізніше ніж 5 хв а чат діджейків звичайність, окрім сапортів пацани допомагають, також іноді виконують бонусну роботу (чат ідентифікають ордери) це почалося нещодавно але все одно круто, ще хочу додати що сапорти подають все розказують, тобто щоб я більш-менш на рахунок шо да я хочу дивитися найбільше, і всю цю дінеро діджую н бачу як та шо ти платиш щоб зекономити сотні час та не набивати шишки, обєсц це безцінна штука, а тут тебе просто ведуть за ручку і кладуть до рогтя про ордери а наті)"
  },
  {
    id: 2,
    groupName: "P2P FEEDBACK",
    content: "Мій профіт, зараз короленько дам бо там два огляди вкінці, але скажу так, я зайшов, один день дивились, я задував стхви дропінки по п2п з різном працював ще а часів ≈6 ранку і до другой годины, потім я не роботі в день читав, і в мене просто висіли ордери, а на третій день почну і от тому числу перше число ≈ 12545, може трошки меньше може трошки більше, та просто один день дуже плотно вийшов, буквально ельдорадо, але всеодно зараз за інш місяц пацани профіт роблять"
  },
  {
    id: 3,
    groupName: "P2P FEEDBACK",
    content: "Працював з хлопцями коли ще не було ком'юніті, рекомендую! Стабільний прибуток і професійний підхід до кожного клієнта. Сапорт відповідає оперативно і завжди готовий допомогти з будь-яким питанням."
  },
  {
    id: 4,
    groupName: "P2P FEEDBACK",
    content: "Дякую хлопцям за їх роботу! За 3 тижні вийшло підняти більше $400 на п2п, хоча раніше тільки втрачав гроші. Методика працює, а підтримка завжди на зв'язку."
  },
  {
    id: 5,
    groupName: "TRADING FEEDBACK",
    content: "Приєднався до спільноти місяць тому. Почав з маленьких сум, але вже бачу результат. Найбільше ціную те, що тут справді вчать, а не просто дають сигнали. Рекомендую всім, хто хоче розібратися в трейдингу."
  },
  {
    id: 6,
    groupName: "TRADING FEEDBACK",
    content: "Після року самостійних спроб і втрат, нарешті знайшов справжніх професіоналів. За 2 місяці з DineroLab мій портфель виріс на 34%, і головне - я розумію що роблю. Дякую команді!"
  },
  {
    id: 7,
    groupName: "P2P FEEDBACK",
    content: "Спочатку було важко втягнутися в процес, але завдяки постійній підтримці команди, зараз маю стабільні $40-60 щодня з мінімальними ризиками. Нарешті можу платити за оренду без стресу."
  },
  {
    id: 8,
    groupName: "TRADING FEEDBACK",
    content: "Найкраща інвестиція в себе. Замість того, щоб втрачати гроші на своїх помилках, я отримав структуровані знання і підтримку. Вже відбив вартість навчання в перший місяць."
  },
  {
    id: 9,
    groupName: "P2P FEEDBACK",
    content: "Мій досвід з DineroLab - це 5 місяців стабільного доходу. Почав з нуля, з мінімальним капіталом, а зараз це вже серйозне джерело заробітку. Особлива подяка за оперативні відповіді 24/7."
  },
  {
    id: 10,
    groupName: "TRADING FEEDBACK",
    content: "Раніше думав, що крипта - це казино, але з DineroLab зрозумів, що це інструмент, яким можна керувати. Два місяці навчання дали мені більше, ніж рік самостійного гуглення."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-dinero-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
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
          
          {/* Full-width scrollable testimonials */}
          <div className="reveal-animation mb-12 overflow-hidden">
            <div className="testimonial-container overflow-x-auto pb-6">
              <div className="flex gap-6 px-4 pb-2 min-w-max">
                {testimonialData.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="glass-card p-6 rounded-xl border border-gray-800 hover:border-dinero-red/40 transition-all duration-300 w-[350px] min-w-[350px] relative"
                  >
                    {/* Top decorative element */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dinero-red/40 via-dinero-red to-dinero-red/40"></div>
                    
                    {/* Header with group name */}
                    <div className="mb-4">
                      <div className="bg-dinero-red/10 text-dinero-red px-3 py-1 rounded-md text-xs font-semibold inline-block">
                        {testimonial.groupName}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <ScrollArea className="h-[180px]">
                      <div className="text-gray-300 pr-4">
                        <p className="leading-relaxed text-sm">
                          {testimonial.content}
                        </p>
                      </div>
                    </ScrollArea>
                    
                    {/* User icon at the bottom */}
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-800">
                      <div className="h-8 w-8 rounded-full bg-dinero-red/20 flex items-center justify-center">
                        <User size={16} className="text-dinero-red" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-4 reveal-animation">
            <a 
              href="https://t.me/+fsuDNjshEhplMGMy" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-dinero-light bg-dinero-red hover:bg-red-600 transition-colors px-6 py-3 rounded-md font-medium text-lg button-glow"
            >
              Більше відгуків
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
