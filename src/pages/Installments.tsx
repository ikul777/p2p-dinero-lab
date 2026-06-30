import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Installments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dinero-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-dinero-red hover:text-red-400 transition-colors mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Повернутися на головну
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Покупка частинами monobank
            </h1>

            <div className="w-16 h-1 bg-dinero-red mx-auto mb-8"></div>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-xl space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Покупка частинами monobank | Universal Bank
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="font-medium text-white">Надавач послуг:</span>{' '}
                АТ «УНІВЕРСАЛ БАНК» ліцензія НБУ No92 від 20.01.1994, номер у держреєстрі банків No 226.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Характеристики продукту:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Мінімальна сума розстрочки: 1 грн</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Максимальна сума розстрочки: 400 000 грн</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Реальна річна процентна ставка: 0,000001%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Доступний строк платежів: 3 — 25</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Порядок погашення: щомісячні платежі рівними частинами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>Перший платіж у момент оформлення покупки</span>
                </li>
              </ul>
            </section>

            <section>
              <p className="text-gray-300">
                Інформація про істотні характеристики продукту та попередження розміщені на сайті продукту{' '}
                <a
                  href="https://chast.monobank.ua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dinero-red hover:text-red-400 transition-colors hover-underline"
                >
                  chast.monobank.ua
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installments;
