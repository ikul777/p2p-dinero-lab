
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <footer className="bg-black py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/30 to-transparent"></div>
      
      {/* Stylized red line elements */}
      <div className="absolute top-0 right-[20%] w-px h-[40%] bg-dinero-red opacity-30"></div>
      <div className="absolute bottom-0 left-[30%] w-px h-[60%] bg-dinero-red opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="relative">
                <h1 className="text-xl font-bold flex items-center">
                  <div className="relative">
                    <span className="text-white text-xl font-bold">DINERO</span>
                    <div className="absolute -top-4 -left-1 w-14 h-6">
                      <div className="absolute top-2 left-0 w-full">
                        <span className="text-dinero-red text-base font-light tracking-wider italic">Dinero</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative ml-2">
                    <span className="text-white text-xl font-bold">LAB</span>
                    <div className="absolute -bottom-3 -right-2 w-10 h-6">
                      <div className="absolute bottom-0 right-0">
                        <span className="text-dinero-red text-base font-light tracking-wider italic">Lab</span>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2 pl-1">
              P2P-арбітраж, який приносить кеш кожен день
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dinero-red transition-colors"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/1ikul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dinero-red transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
            
            <p className="text-gray-500 text-xs">
              &copy; {year} Dinero Lab by ikul777. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
