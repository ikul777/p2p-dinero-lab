
import { User, Star, CheckCircle } from 'lucide-react';

// Individual review data based on the screenshot
const testimonialData = [
  {
    id: 1,
    groupName: "P2P FEEDBACK",
    sender: "Переслано від 1",
    avatar: "/lovable-uploads/7c9183a7-c407-47e3-96c9-b96af2d9c112.png", // Using the uploaded image as a default avatar
    content: "Ну, легко) матеріал цікавий, незвичайний для вітчизняного п2п, не тупа дрочка по картам як була тому 10 років)) потроху вчишся, в мене так враження, завжди щось онлайн(принаймні в мене так і є) коли не напишу відповідь отримую не пізніше ніж 5 хв а чат діджейків звичайність, окрім сапортів пацани допомагають, також іноді виконують бонусну роботу (чат ідентифікають ордери) це почалося нещодавно але все одно круто, ще хочу додати що сапорти подають все розказують, тобто щоб я більш-менш на рахунок шо да я хочу дивитися найбільше, і всю цю дінеро діджую н бачу як та шо ти платиш щоб зекономити сотні час та не набивати шишки, обєсц це безцінна штука, а тут тебе просто ведуть за ручку і кладуть до рогтя про ордери а наті)",
    rating: 5
  },
  {
    id: 2,
    groupName: "P2P FEEDBACK",
    sender: "Переслано від 2",
    avatar: "/lovable-uploads/7c9183a7-c407-47e3-96c9-b96af2d9c112.png",
    content: "Мій профіт, зараз короленько дам бо там два огляди вкінці, але скажу так, я зайшов, один день дивились, я задував стхви дропінки по п2п з різном працював ще а часів ≈6 ранку і до другой годины, потім я не роботі в день читав, і в мене просто висіли ордери, а на третій день почну і от тому числу перше число ≈ 12545, може трошки меньше може трошки більше, та просто один день дуже плотно вийшов, буквально ельдорадо, але всеодно зараз за інш місяц пацани профіт роблять",
    rating: 5
  },
  {
    id: 3,
    groupName: "P2P FEEDBACK",
    sender: "Переслано від 3",
    avatar: "/lovable-uploads/7c9183a7-c407-47e3-96c9-b96af2d9c112.png",
    content: "Працював з хлопцями коли ще не було ком'юніті, рекомендую! Стабільний прибуток і професійний підхід до кожного клієнта. Сапорт відповідає оперативно і завжди готовий допомогти з будь-яким питанням.",
    rating: 5
  },
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
          
          {/* Testimonials grid - replaced with custom review blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-animation">
            {testimonialData.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="glass-card p-6 rounded-xl border border-gray-800 hover:border-dinero-red/40 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top decorative element */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dinero-red/40 via-dinero-red to-dinero-red/40"></div>
                
                {/* Header with group name and sender */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-dinero-red/10 text-dinero-red px-3 py-1 rounded-md text-xs font-semibold">
                    {testimonial.groupName}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.sender}
                  </div>
                </div>
                
                {/* Content */}
                <div className="mb-4 text-gray-300">
                  <p className="leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                
                {/* Footer with rating */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-dinero-red/20 flex items-center justify-center mr-3">
                      <User size={16} className="text-dinero-red" />
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className="text-dinero-red fill-dinero-red mr-1" 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-1" />
                    <span className="text-xs text-green-500">Верифіковано</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 reveal-animation">
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
