import { useState } from 'react';
import { Calculator, TrendingUp, Wallet } from 'lucide-react';

const ProfitCalculator = () => {
  const [budget, setBudget] = useState<number>(1000);
  
  // Логіка: 4-8% з кругу, оборот 1000-3000 USDT/день, 22 робочих дні
  const workingDays = 22;
  const minDailyTurnover = 1000;
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
    <section id="calculator" className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-primary/5 rounded-full filter blur-[100px] md:blur-[150px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="tag mb-3 sm:mb-4 inline-block text-[10px] sm:text-xs">Калькулятор</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Розрахуй свій </span>
              <span className="text-gradient">прибуток</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-2">
              Введи свій стартовий капітал та дізнайся потенційний місячний дохід
            </p>
          </div>
          
          {/* Calculator Card */}
          <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Input Section */}
              <div>
                <label className="block mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base text-muted-foreground mb-2 block">Твій бюджет (USDT)</span>
                  <div className="relative">
                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      min="100"
                      max="1000000"
                      value={budget}
                      onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-background/50 border border-border/50 rounded-xl py-4 px-12 text-xl sm:text-2xl font-display font-bold text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">USDT</span>
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
                
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30 overflow-hidden">
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mb-1">Мінімум</p>
                    <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-display font-bold text-foreground/70 truncate">
                      ${formatNumber(minProfit)}
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground">4%/круг</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-primary/10 border border-primary/30 overflow-hidden">
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary mb-1">Середній</p>
                    <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-display font-bold text-gradient truncate">
                      ${formatNumber(avgProfit)}
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-primary">6%/круг</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 md:p-4 rounded-xl bg-background/30 border border-border/30 overflow-hidden">
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mb-1">Максимум</p>
                    <p className="text-xs sm:text-base md:text-xl lg:text-2xl font-display font-bold text-foreground/70 truncate">
                      ${formatNumber(maxProfit)}
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground">8%/круг</p>
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
    </section>
  );
};

export default ProfitCalculator;
