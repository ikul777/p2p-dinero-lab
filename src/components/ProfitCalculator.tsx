import { useState, useEffect, useRef } from 'react';
import { Calculator, TrendingUp, Wallet } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ProfitCalculator = () => {
  const [budget, setBudget] = useState<number>(1000);
  const [displayedAvg, setDisplayedAvg] = useState<number>(0);
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });
  const prevBudgetRef = useRef(budget);
  
  // Логіка: 4-8% з кругу × 2 круги/день × 24 робочих дні
  const roundsPerDay = 2;
  const workingDays = 24;
  const softCap = 5000; // USDT — поріг для нотатки про індивідуальний розрахунок

  // Денний прибуток рахується лінійно від реального бюджету
  const minDailyProfit = budget * 0.04 * roundsPerDay;
  const avgDailyProfit = budget * 0.06 * roundsPerDay;
  const maxDailyProfit = budget * 0.08 * roundsPerDay;

  // Місячний прибуток
  const minProfit = Math.round(minDailyProfit * workingDays);
  const avgProfit = Math.round(avgDailyProfit * workingDays);
  const maxProfit = Math.round(maxDailyProfit * workingDays);

  const showSoftCapNote = budget > softCap;

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
    <section id="calculator" className="relative py-10 sm:py-14 md:py-16 bg-background overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Background effects - optimized */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] md:w-[600px] h-[200px] sm:h-[350px] md:h-[600px] bg-primary/5 rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="tag mb-3 sm:mb-4 inline-block text-[10px] sm:text-xs">Калькулятор</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Розрахуй свій </span>
              <span className="text-gradient">прибуток</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-2">
              Введи свій стартовий капітал та дізнайся потенційний місячний дохід
            </p>
          </div>
          
          {/* Calculator Card */}
          <div 
            ref={cardAnimation.ref}
            className={`transition-all duration-700 delay-150 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-border/50">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Input Section */}
                <div>
                  <label className="block mb-3 sm:mb-4" htmlFor="budget-input">
                    <span className="text-sm sm:text-base text-muted-foreground mb-2 block">Твій бюджет (USDT)</span>
                    <div className="relative">
                      <Wallet aria-hidden="true" className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                      <input
                        id="budget-input"
                        type="number"
                        min="100"
                        max="1000000"
                        value={budget}
                        onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                        aria-label="Бюджет у USDT — введіть число"
                        aria-describedby="budget-results"
                        className="w-full bg-background/50 border border-border/50 rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-16 sm:pr-20 text-lg sm:text-2xl font-display font-bold text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span aria-hidden="true" className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs sm:text-sm">USDT</span>
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
                      aria-label="Бюджет у USDT — повзунок"
                      aria-valuemin={100}
                      aria-valuemax={10000}
                      aria-valuenow={Math.min(budget, 10000)}
                      aria-valuetext={`${formatNumber(Math.min(budget, 10000))} USDT`}
                      aria-controls="budget-results"
                      style={{ ['--range-fill' as string]: `${((Math.min(budget, 10000) - 100) / 9900) * 100}%` }}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-2">
                      <span>100</span>
                      <span>10,000+</span>
                    </div>
                  </div>
                  
                  {/* Quick buttons */}
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Швидкий вибір бюджету">
                    {[500, 1000, 3000, 5000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setBudget(amount)}
                        aria-pressed={budget === amount}
                        aria-label={`Встановити бюджет ${formatNumber(amount)} USDT`}
                        className={`quick-btn px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all min-h-11 ${
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
                <div className="space-y-4 sm:space-y-6" id="budget-results" role="region" aria-live="polite" aria-atomic="true" aria-label="Результати розрахунку прибутку">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center animate-icon-float">
                      <TrendingUp aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Потенційний прибуток</p>
                      <p className="text-lg sm:text-xl font-display font-bold text-foreground">за місяць</p>
                    </div>
                  </div>
                  
                  {/* SR-only summary so live region announces a clean sentence */}
                  <p className="sr-only">
                    Орієнтовний місячний дохід при бюджеті {formatNumber(budget)} USDT: мінімум ${formatNumber(minProfit)}, середній ${formatNumber(avgProfit)}, максимум ${formatNumber(maxProfit)}.
                  </p>

                  {/* 3 columns on all screens — equal typography so rows align */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-stretch" aria-hidden="true">
                    <div className="flex flex-col justify-between text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30">
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Мінімум</p>
                      <p className="text-xs sm:text-base md:text-lg lg:text-xl font-display font-bold text-foreground/70 leading-tight whitespace-nowrap">
                        ${formatNumber(minProfit)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">8%/день</p>
                    </div>
                    <div className="flex flex-col justify-between text-center p-2 sm:p-3 md:p-4 rounded-xl bg-primary/10 border border-primary/30 profit-highlight">
                      <p className="text-[10px] sm:text-xs text-primary mb-1">Середній</p>
                      <p className="text-xs sm:text-base md:text-lg lg:text-xl font-display font-bold text-primary leading-tight whitespace-nowrap">
                        ${formatNumber(displayedAvg)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-primary mt-1">12%/день</p>
                    </div>
                    <div className="flex flex-col justify-between text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30">
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Максимум</p>
                      <p className="text-xs sm:text-base md:text-lg lg:text-xl font-display font-bold text-foreground/70 leading-tight whitespace-nowrap">
                        ${formatNumber(maxProfit)}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">16%/день</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft cap notice */}
              {showSoftCapNote && (
                <p
                  role="note"
                  className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-primary/90 bg-primary/5 border border-primary/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-center"
                >
                  Для бюджету понад {formatNumber(softCap)} USDT результати орієнтовні — звʼяжись із саппортом для індивідуального розрахунку.
                </p>
              )}

              {/* Disclaimer */}
              <p className="text-[10px] sm:text-xs text-muted-foreground/60 text-center mt-6 sm:mt-8">
                * Розрахунок: 2 круги/день × {workingDays} робочих дні. Орієнтовний, залежить від ринкових умов і особистої активності.
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
