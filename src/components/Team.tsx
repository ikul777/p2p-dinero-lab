import { Crown, ShieldCheck, Headphones, Sparkles } from 'lucide-react';

const team = [
  { name: 'Ярослав ', role: 'Засновник DL ', desc: 'Стратегія, контроль процесів, інфраструктура та партнерства з біржами. Організація всіх процесів так, щоб стабільно заробляв кожен учасник', icon: Crown, lead: true },
  { name: 'Дмитро', role: 'Головний сапорт', desc: 'Координація сапортів, P2P-стратегії з великими бюджетами та складні технічні кейси', icon: ShieldCheck },
  { name: 'Олег', role: 'Сапорт', desc: 'Оперативна допомога та супровід по всіх робочих процесах', icon: Headphones },
  { name: 'Ігор', role: 'Сапорт', desc: 'Оперативна допомога та супровід по всіх робочих процесах', icon: Headphones },
  { name: 'Олег', role: 'Асистент', desc: 'P2P-експерт із власною командою. Підсилює сапорт та ділиться власним багаторічним досвідом та кейсами', icon: Sparkles },
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
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b from-card/60 to-card/10 backdrop-blur-md p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] ${m.lead ? 'border-primary/50 sm:col-span-2 lg:col-span-1 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)]' : 'border-primary/15'}`}
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              {m.lead && <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-32 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />}
              <span aria-hidden="true" className="absolute right-3 top-3 font-mono text-[10px] tracking-wider text-muted-foreground/40">DL·0{i + 1}</span>
              <div className="relative mx-auto mb-4 w-16 h-16 md:w-20 md:h-20 rounded-full p-[1.5px] bg-gradient-to-br from-primary via-primary/20 to-primary/60 shadow-[0_0_24px_hsl(var(--primary)/0.35)]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-black text-gradient">{m.name.trim()[0]}</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
              </div>
              <h3 className="relative text-lg md:text-xl font-bold">{m.name}</h3>
              <p className="relative text-primary text-xs font-semibold uppercase tracking-wider mb-3">{m.role}</p>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              {m.lead && (
                <a
                  href="https://t.me/ikul777"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Написати Ярославу в Telegram"
                  className="relative mt-4 inline-flex items-center justify-center w-11 h-11 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Team;
