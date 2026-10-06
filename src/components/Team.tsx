import { Crown, ShieldCheck, Headphones, Sparkles } from 'lucide-react';

const team = [
  { name: 'Ярослав', role: 'Founder DL · Lead', desc: 'Стратегія, інфраструктура та партнерства з біржами. Організація всіх процесів так, щоб стабільно заробляв кожен учасник', icon: Crown, lead: true },
  { name: 'Дмитро', role: 'Головний сапорт', desc: 'Контроль усіх процесів, координація сапортів, P2P-стратегії з великими бюджетами та складні технічні кейси', icon: ShieldCheck },
  { name: 'Олег', role: 'Сапорт', desc: 'Оперативна допомога та супровід по всіх робочих процесах', icon: Headphones },
  { name: 'Ігор', role: 'Сапорт', desc: 'Оперативна допомога та супровід по всіх робочих процесах', icon: Headphones },
  { name: 'Олег', role: 'Асистент', desc: 'Координація та взаємодія з учасниками', icon: Sparkles },
];

const Team = () => (
  <section id="team" className="py-12 md:py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-3">Люди за результатом</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-balance">Наша команда</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
        {team.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className={`group relative rounded-2xl border bg-card/40 backdrop-blur-md p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] ${m.lead ? 'border-primary/50 sm:col-span-2 lg:col-span-1' : 'border-primary/15'}`}
            >
              <div className="relative mx-auto mb-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/30 to-background border border-primary/40 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <span className="text-2xl md:text-3xl font-black text-foreground">{m.name[0]}</span>
                <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">{m.name}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Team;
