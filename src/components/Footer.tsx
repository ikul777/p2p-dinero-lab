import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const [year, setYear] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-background py-16 relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold"></div>
      
      {/* Ambient Light */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gold/3 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand */}
            <div className="max-w-sm">
              <Link to="/" onClick={handleLogoClick} className="group inline-block mb-4">
                <h1 className="text-2xl font-display font-bold tracking-tight">
                  <span className="text-foreground group-hover:text-gold transition-colors duration-300">Dinero</span>
                  <span className="text-gradient-gold">Lab</span>
                </h1>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                P2P-арбітраж, який приносить результат. Закрите ком'юніті професіоналів з перевіреними стратегіями.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-circle-premium w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </a>
                <a 
                  href="https://www.instagram.com/1ikul/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-circle-premium w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a 
                  href="https://t.me/ikul777" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium"
                >
                  Контакт
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">Навігація</h4>
                <div className="flex flex-col gap-3">
                  <a href="#about" className="text-muted-foreground hover:text-gold transition-colors text-sm">Про нас</a>
                  <a href="#testimonials" className="text-muted-foreground hover:text-gold transition-colors text-sm">Відгуки</a>
                  <a href="#faq" className="text-muted-foreground hover:text-gold transition-colors text-sm">FAQ</a>
                  <a href="#join" className="text-muted-foreground hover:text-gold transition-colors text-sm">Приєднатись</a>
                </div>
              </div>
              
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">Документи</h4>
                <div className="flex flex-col gap-3">
                  <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    Договір оферти
                  </Link>
                  <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    Політика конфіденційності
                  </Link>
                  <Link to="/entry-terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    Умови вступу
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © {year} Dinero Lab. Всі права захищені.
            </p>
            <p className="text-muted-foreground/50 text-xs">
              Преміум P2P-ком'юніті України
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
