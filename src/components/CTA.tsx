
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CTA = () => {
  const isMobile = useIsMobile();
  
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
    <section id="join" className="py-12 md:py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/30 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5"></div>
      
      {/* Red stylized line elements */}
      <div className="absolute top-[10%] left-0 w-[40%] h-px bg-dinero-red opacity-60"></div>
      <div className="absolute bottom-[15%] right-0 w-[30%] h-px bg-dinero-red opacity-60"></div>
      <div className="absolute top-[40%] right-[5%] w-px h-[30%] bg-dinero-red opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal-animation">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-dinero-red/10 text-dinero-red rounded-md mb-3">
              Приєднуйся зараз
            </span>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-center gap-2">
              <span>P2P без ком'юніті –</span>
              <span className="text-dinero-red">це злиті гроші</span>
            </h2>
            
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Якщо хочеш отримати доступ до перевірених P2P-зв'язок і сильного ком'юніті – приєднуйся до Dinero Lab.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-10 rounded-xl mb-8 md:mb-10 reveal-animation shadow-2xl border border-gray-800 relative">
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-32 md:h-32">
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-dinero-red opacity-60 rounded-tl-3xl"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32">
              <div className="w-full h-full relative">
                <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-dinero-red opacity-60 rounded-br-3xl"></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">
              <div className="text-left w-full md:w-auto">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  <span className="text-white">Dinero Lab</span>
                  <span className="text-dinero-red"> VIP Community</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  Отримай доступ до топових P2P-зв'язок та команди професіоналів
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Авторські зв'язки під різний бюджет</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Підтримка сапортів 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-dinero-red/10 flex items-center justify-center mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-dinero-red"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-sm text-gray-300">Закрита спільнота професіоналів</span>
                  </li>
                </ul>
              </div>
              
              <img 
                src="/lovable-uploads/40d7ae54-8f62-41c0-aa32-9f26100d352c.png" 
                alt="Dinero Lab Logo" 
                className="w-28 h-28 md:w-40 md:h-40 object-contain" 
              />
            </div>
            
            <div className="text-center mt-6">
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto bg-dinero-red text-white px-6 md:px-8 py-3 rounded-md font-medium text-lg hover:bg-red-600 transition-all button-glow relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Вступити в Dinero Lab
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-dinero-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>
          </div>
          
          {/* WhiteBIT Ambassador section - improved for mobile */}
          <div className="glass-card overflow-hidden rounded-xl relative mb-6 md:mb-8 reveal-animation shadow-xl border border-gray-800">
            <div className="absolute -top-6 -right-6 w-12 h-12">
              <div className="w-full h-full relative">
                <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-blue-500/40 opacity-70 rounded-tr-2xl"></div>
              </div>
            </div>
            
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative p-5 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-pulse-subtle"></div>
                    <img 
                      src="/lovable-uploads/c3ed313c-63a6-4419-a6e1-baa7f220eeb6.png" 
                      alt="WhiteBIT Logo" 
                      className="h-14 md:h-16 w-auto relative z-10"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-blue-400 mb-1 block">Офіційне партнерство</span>
                    <h3 className="text-lg md:text-2xl font-bold text-white">
                      Офіційний амбасадор біржі WhiteBIT
                    </h3>
                  </div>
                </div>
                
                <a 
                  href="https://whitebit.com/a/35b66592-1a6b-473b-be2a-a27d105fee85" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm font-medium rounded-md transition-all flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto group"
                >
                  Перейти на біржу
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center reveal-animation">
            <p className="text-gray-400 text-sm">
              Маєш питання? Пиши мені в Telegram – 
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
