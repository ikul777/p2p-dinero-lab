
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <footer className="bg-dinero-dark py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dinero-red/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">
                <span className="text-white">Dinero</span>
                <span className="text-dinero-red">Lab</span>
              </h1>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              P2P-арбітраж, який приносить кеш кожен день
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://t.me/ikul777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dinero-red transition-colors"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
            </div>
            
            <p className="text-gray-500 text-xs">
              &copy; {year} Dinero Lab. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
