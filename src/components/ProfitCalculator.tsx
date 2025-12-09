import { useState } from 'react';
import { Calculator, TrendingUp, Wallet } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ProfitCalculator = () => {
  const [budget, setBudget] = useState<number>(1000);
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });
  
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

  const formatNumber = (num: number) => {
    return num.toLocaleString('uk-UA');
  };

  return (
    <section id="calculator" className="relative py-10 sm:py-14 md:py-16 bg-background overflow-hidden">
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
                  
                  {/* Quick buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[500, 1000, 3000, 5000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setBudget(amount)}
                        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          budget === amount 
                            ? 'bg-primary text-primary-foreground' 
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
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
                    <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-primary/10 border border-primary/30">
                      <p className="text-[10px] sm:text-xs text-primary mb-1">Середній</p>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-primary leading-tight whitespace-nowrap">
                        ${formatNumber(avgProfit)}
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
