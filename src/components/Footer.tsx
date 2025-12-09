import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const year = new Date().getFullYear();
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="py-5 sm:py-6 md:py-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <Link to="/" onClick={handleLogoClick} className="inline-block mb-1 sm:mb-2 logo-glow">
              <h1 className="font-display text-base sm:text-lg md:text-xl font-bold">
                <span className="text-foreground">Dinero</span>
                <span className="text-primary">Lab</span>
              </h1>
            </Link>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              P2P-арбітраж, який приносить кеш кожного дня
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
            {/* Social links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="https://t.me/+iDCbfd3Bm8wxMzZi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon text-muted-foreground"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </a>
              <a 
                href="https://www.instagram.com/1ikul/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon text-muted-foreground"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a 
                href="https://t.me/ikul777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors hover-underline"
              >
                Контакт
              </a>
            </div>
            
            {/* Legal links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4">
              <Link to="/terms" className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors hover-underline">
                Договір оферти
              </Link>
              <Link to="/privacy" className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors hover-underline">
                Політика конфіденційності
              </Link>
              <Link to="/entry-terms" className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors hover-underline">
                Умови вступу
              </Link>
            </div>
            
            {/* Copyright */}
            <p className="text-[9px] sm:text-xs text-muted-foreground/60">
              © {year} Dinero Lab. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
