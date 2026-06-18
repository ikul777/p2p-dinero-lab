# План повної оптимізації та полірування сайту DineroLab

Зберігаю **всі поточні секції** (Hero, Problems, Solution, DineroLabContent, ProfitCalculator, Testimonials, FAQ, CTA, Footer, FloatingCTA). Працюю одночасно над мобільним і десктопом.

## 1. Аудит помилок і продуктивності

- Перевірю console на runtime/React warnings (key, hydration, listeners на window без cleanup).
- Перевірю `Testimonials.tsx`, `ProfitCalculator.tsx`, `FloatingCTA.tsx` на витоки IntersectionObserver / scroll listeners.
- Прогон білда — впіймати TS/ESLint попередження.
- Lazy-load для важких секцій нижче згину (`Testimonials`, `FAQ`, `Footer`) через `React.lazy` + `Suspense`.
- Зображення скріншотів відгуків → `loading="lazy"` + `decoding="async"` + `fetchpriority` для активного.
- Прев'ю-картинка hero/logo → `fetchpriority="high"` + preload в `index.html`.
- Заміна важких blur-фільтрів на CSS-трансформи де можливо (мобільний performance).
- `prefers-reduced-motion` — вимикати auto-scroll каруселі та float-анімації.

## 2. SEO та доступність

- `<title>` ≤60 символів з ключем "DineroLab P2P".
- `<meta name="description">` ≤160 символів українською.
- OG/Twitter tags + canonical.
- JSON-LD `Organization` + `FAQPage` (з реальних питань FAQ).
- Один `<h1>` (Hero), решта — `<h2>`/`<h3>`. Alt-тексти на всіх `<img>`.
- ARIA-labels на іконкових кнопках каруселі/CTA.

## 3. Візуальне полірування (Awwwards-рівень, в межах поточної палітри: чорний + червоний акцент)

**Глобально (index.css):**
- Уніфікувати токени: `--surface-1/2/3`, `--border-glass`, `--shadow-glow-sm/md/lg`, `--gradient-radial-red`, `--gradient-text-red`.
- Додати subtle noise/grain текстуру overlay для глибини (1 SVG, 4kb).
- Радіуси: системно `0.75 / 1.25 / 2rem`. Зараз місцями розбіжності.
- Анімації: `ease-out-expo` cubic-bezier, тривалості 300/500/700.

**Hero:**
- Додати ambient red orb (great-glow) за заголовком з parallax на mousemove (desktop only).
- Статистики — поставити на скляні pill-картки з тонким top-border gradient.
- Subtle scroll-cue знизу.

**Problems / Solution:**
- Парні картки 2×2 з рівною висотою; іконки в окремих "капсулах" з градієнтним обрамленням.
- Solution-картки — додати hover-tilt (CSS transform-only, без JS) + animated border-conic.

**DineroLabContent:**
- Зигзаг — додати connection-line SVG між блоками (desktop).
- Order-cards (ОРДЕР ПРОДАЖ/ВІДКУП) — animated price ticks.

**ProfitCalculator:**
- Покращити повзунок: великий thumb з glow, fill-track градієнт.
- Результат — animated count-up при зміні (requestAnimationFrame).
- Розділити на дві колонки на десктопі (input | result).

**Testimonials:** не чіпаю композицію (щойно затверджена), лише — плавніший fade-mask на краях + м'якший shadow активної картки.

**FAQ:**
- Аккордеон — додати плавне розкриття висоти, ротаційну іконку +/×, hover-glow ліворуч.
- Номерні бейджі — узгодити з токенами.

**CTA:**
- Підсилити animated border (conic-gradient rotate) та pulsing button.

**Footer:**
- Додати top-divider з radial-glow, hover-підсвітку партнерських логотипів узгодити.

**FloatingCTA:**
- Slide-in з правого нижнього кута на скролі, прихований біля #join — вже працює, додам micro-bounce.

## 4. Нове (мінімально, не ламаючи структуру)

- **Marquee партнерів** (WhiteBIT/Bybit/OKX) — тонка лінія під Hero, тільки якщо узгоджується з ритмом. Висота ~64px.
- **Scroll-progress bar** зверху (1px, primary) — посилює відчуття полірування.

## 5. Технічні деталі

- Стек незмінний: React 18 + Vite + Tailwind + shadcn.
- Жодних нових залежностей крім `@vercel/analytics`-стилю не треба — все на CSS/Motion вже наявному.
- Усі кольори — через існуючі HSL-токени, без хардкоду.
- Зміни в `mem://design/*` за потреби (новий scroll-progress, marquee).

## Порядок робіт

1. Audit + fixes (console, listeners, lazy, SEO meta) — швидкі виграші.
2. index.css токени + global polish layer.
3. Hero → Problems → Solution → DineroLabContent → ProfitCalculator → FAQ → CTA → Footer.
4. Marquee + scroll-progress.
5. Фінальна перевірка на 390px і 1440px, console clean.

Підтвердиш — починаю.
