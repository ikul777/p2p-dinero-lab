import { useState, useEffect, useRef } from 'react';
import { Calculator, TrendingUp, Wallet } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ProfitCalculator = () => {
  const [budget, setBudget] = useState<number>(1000);
  const [displayedAvg, setDisplayedAvg] = useState<number>(0);
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });
  const prevBudgetRef = useRef(budget);
  
  // Логіка: 4-8% з кругу, оборот 1000-3000 USDT/день, 22 робочих дні
  const workingDays = 22;
  const maxDailyTurnover = 3000;
  
  // Денний оборот обмежений бюджетом та максимальним оборотом
  const effectiveTurnover = Math.min(budget, maxDailyTurnover);
  
  // Денний прибуток: 4-8% від обороту
  const minDailyProfit = effectiveTurnover * 0.04;
  const maxDailyProfit = effectiveTurnover * 0.08;
  const avgDailyProfit = effectiveTurnover * 0.06;
  
  // Місячний прибуток
  const minProfit = Math.round(minDailyProfit * workingDays);
  const maxProfit = Math.round(maxDailyProfit * workingDays);
  const avgProfit = Math.round(avgDailyProfit * workingDays);

  // Animate number changes
  useEffect(() => {
    const startValue = displayedAvg;
    const endValue = avgProfit;
    const duration = 300;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (endValue - startValue) * easeOut);
      
      setDisplayedAvg(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (prevBudgetRef.current !== budget) {
      requestAnimationFrame(animate);
      prevBudgetRef.current = budget;
    }
  }, [avgProfit, budget]);

  // Initialize displayed value
  useEffect(() => {
    setDisplayedAvg(avgProfit);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('uk-UA');
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  return (
    <section id="calculator" className="relative py-10 sm:py-12 md:py-16 bg-background overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Background effects - optimized for mobile */}
      <div className="absolute inset-0 bg-grid opacity-5 sm:opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] bg-primary/3 sm:bg-primary/5 rounded-full filter blur-[50px] sm:blur-[70px] md:blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-6 sm:mb-8 md:mb-12 transition-all duration-500 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="tag mb-2 sm:mb-3 inline-block text-[10px] sm:text-xs">Калькулятор</span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              <span className="text-foreground">Розрахуй свій </span>
              <span className="text-gradient">прибуток</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
              Введи свій капітал та дізнайся потенційний дохід
            </p>
          </div>
          
          {/* Calculator Card */}
          <div 
            ref={cardAnimation.ref}
            className={`transition-all duration-500 delay-100 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border/30">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                {/* Input Section */}
                <div>
                  <label className="block mb-3 sm:mb-4">
                    <span className="text-sm sm:text-base text-muted-foreground mb-2 block">Твій бюджет (USDT)</span>
                    <div className="relative">
                      <Wallet className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                      <input
                        type="number"
                        min="100"
                        max="1000000"
                        value={budget}
                        onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                        className="w-full bg-background/50 border border-border/50 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-16 sm:pr-20 text-lg sm:text-2xl font-display font-bold text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs sm:text-sm">USDT</span>
                    </div>
                  </label>
                  
                  {/* Slider */}
                  <div className="mt-4 mb-6">
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={Math.min(budget, 10000)}
                      onChange={handleSliderChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-2">
                      <span>100</span>
                      <span>10,000+</span>
                    </div>
                  </div>
                  
                  {/* Quick buttons */}
                  <div className="flex flex-wrap gap-2">
                    {[500, 1000, 3000, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setBudget(amount)}
                        className={`quick-btn px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          budget === amount 
                            ? 'bg-primary text-primary-foreground active' 
                            : 'bg-background/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                      >
                        {formatNumber(amount)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Results Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center animate-icon-float">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Потенційний прибуток</p>
                      <p className="text-lg sm:text-xl font-display font-bold text-foreground">за місяць</p>
                    </div>
                  </div>
                  
                  {/* 3 columns on all screens */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                    <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30">
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Мінімум</p>
                      <p className="text-xs sm:text-base md:text-lg lg:text-xl font-display font-bold text-foreground/70 leading-tight whitespace-nowrap">
                        ${formatNumber(minProfit)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">4%/круг</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-primary/10 border border-primary/30 profit-highlight">
                      <p className="text-[10px] sm:text-xs text-primary mb-1">Середній</p>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-primary leading-tight whitespace-nowrap">
                        ${formatNumber(displayedAvg)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-primary mt-1">6%/круг</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30">
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Максимум</p>
                      <p className="text-xs sm:text-base md:text-lg lg:text-xl font-display font-bold text-foreground/70 leading-tight whitespace-nowrap">
                        ${formatNumber(maxProfit)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">8%/круг</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <p className="text-[10px] sm:text-xs text-muted-foreground/60 text-center mt-6 sm:mt-8">
                * Розрахунок є орієнтовним та залежить від ринкових умов і особистої активності
              </p>
              
              {/* CTA */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30 text-center">
                <a 
                  href="#join" 
                  className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium"
                >
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                  Почати заробляти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
