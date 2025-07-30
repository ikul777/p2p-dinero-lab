import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EntryTerms = () => {
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
              Умови вступу у "DineroLab"
            </h1>
            
            <div className="w-16 h-1 bg-dinero-red mx-auto mb-8"></div>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-xl space-y-8">
            <div className="bg-dinero-red/10 border border-dinero-red/20 rounded-lg p-4 mb-6">
              <p className="text-center font-medium">
                Оплачуючи вхід у дану групу, ви автоматично погоджуєтесь з правилами
              </p>
            </div>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Вступаючи у нашу групу ми гарантуємо:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>прийняття вас у спільноту у яку включено: робочі п2п-зв'язки, чат, додатковий матеріал, який потрібний для роботи.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>допомогу з сторони нашої команди сапортів, які будуть допомагати вам в ході перебування в каналі.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>перебування у спільноті до 1/15 числа наступного календарного місяця. (У разі не оплати майбутньої місячної підписки)</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Вступаючи у нашу групу ви гарантуєте:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>порядність з вашого боку.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>наявність мінімального стартового капіталу, для початку роботи.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>присутні мінімальні знання, у сфері p2p торгівлі або ж знань в області криптовалюти.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>маєте можливість для реєстрації бірж банків.</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Заборонено:
              </h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                <p className="text-red-400 font-medium text-center">
                  За порушення будь-яких правил, автоматичний кік назавжди!
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>у будь-який спосіб передавати інформацію-матеріал з даної спільноти третім особами.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>цькувати інших учасників даної спільноти.</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-dinero-red">
                Оплата та повернення коштів:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>вступаючи у цю групу ви здійснюєте 100% суму оплати.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>оплата підписки здійснюється раз на місяць 1-го/15-го числа, залежно від того коли ви заходили. У разі не оплати підписки, вас видаляють з спільноти. Повторний вступ здійснюється за повною вартістю.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>повернення коштів можливе лише у випадку, якщо наданий нами матеріал виявився не робочим.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dinero-red mr-2">—</span>
                  <span>повернення коштів по причині: я передумав, я не буду цим займатись, я місяць нічого не робив і не заробив, мені терміново потрібні гроші назад - НЕ МОЖЛИВЕ.</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryTerms;