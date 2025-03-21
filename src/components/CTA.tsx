
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const CTA = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="join" className="py-20 bg-gradient-to-b from-dinero-dark to-dinero-dark/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-bl from-dinero-red/20 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-dinero-red/20 to-transparent rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-full mb-3">
              Приєднуйся зараз
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              P2P без ком'юніті – це злиті гроші
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Якщо хочеш отримати доступ до перевірених P2P-зв'язок і сильного ком'юніті – приєднуйся до Dinero Lab.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-xl mb-10 reveal-animation">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Dinero Lab VIP Community</h3>
                <p className="text-gray-300 mb-4">
                  Отримай доступ до топових P2P-зв'язок та команди професіоналів
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Авторські зв'язки під різний бюджет</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Підтримка сапортів 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Закрита спільнота професіоналів</span>
                  </li>
                </ul>
              </div>
              
              <img 
                src="/lovable-uploads/4163f2a1-abbc-4a32-8707-ad42dd503f19.png" 
                alt="Dinero Lab Logo" 
                className="w-40 h-40 object-contain" 
              />
            </div>
            
            <div className="text-center mt-6">
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-dinero-red text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-red-600 transition-all button-glow"
              >
                Вступити в Dinero Lab
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="text-center reveal-animation">
            <p className="text-gray-400 text-sm">
              Маєш питання? Напиши нам в Telegram – 
              <a 
                href="https://t.me/ikul777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dinero-red hover:underline"
              >
                @ikul777
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
