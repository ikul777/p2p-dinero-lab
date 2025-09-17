import { ArrowLeft, ExternalLink, AlertTriangle, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const OkxInstructions = () => {
  return (
    <div className="min-h-screen bg-dinero-dark text-dinero-light">
      {/* Header */}
      <header className="bg-dinero-dark/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Повернутися на головну
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="glass-card p-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            ІНСТРУКЦІЯ З ПЕРЕНОСУ АККАУНТА OKX ПІД РЕФЕРАЛ DINEROLAB
          </h1>

          {/* Gmail Account Section */}
          <div className="mb-8 p-6 bg-green-500/10 rounded-lg border border-green-500/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 h-5 w-5 text-green-400" />
              Якщо у вас акаунт OKX зареєстрований на Gmail
            </h2>
            <p className="text-gray-300 mb-4">
              Заповніть цю форму, використовуючи наш реферальний код <span className="font-mono bg-gray-800 px-2 py-1 rounded text-green-400">15631319</span>:
            </p>
            <a 
              href="https://docs.google.com/forms/d/1HfeKOVctwudSn_lf81UEEOuUOHgH0WDyqce_is4TdxU/viewform?edit_requested=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" />
              ФОРМА
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Other Domain Section */}
          <div className="mb-8 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 h-5 w-5 text-blue-400" />
              Якщо акаунт OKX зареєстрований на іншому домені
            </h2>
            <p className="text-gray-300 mb-4">
              (наприклад, Proton) то потрібно відправити лист:
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
              <div className="space-y-2 text-sm">
                <div><strong>Кому:</strong> <span className="font-mono text-blue-400">nick.liubimov@okx.com</span></div>
                <div><strong>Копія:</strong> <span className="font-mono text-blue-400">affiliates@okx.com</span></div>
                <div><strong>Тема:</strong> <span className="font-mono">OKX Account Rebind</span></div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Текст листа:</h3>
              <div className="font-mono text-sm bg-black/30 p-3 rounded border-l-4 border-blue-500">
                I'd like to rebind my OKX account to DINEROLAB, CID: 15631319.<br />
                Reason: I want to participate in affiliate-exclusive campaigns.<br />
                My UID: [****************]
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300">Лист обов'язково має бути відправлений з пошти, прив'язаної до вашого акаунта OKX.</span>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300">Перевірка та переприв'язка проводяться щоп'ятниці.</span>
              </div>
            </div>
          </div>

          {/* Important Warning */}
          <div className="mb-8 p-6 bg-red-500/10 rounded-lg border border-red-500/20">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-300 font-medium">
                  Якщо ви вже зареєстровані по чиїйсь рефці або через рекламну акцію — акаунт не підлягає переприв'язці. 
                  Тоді вам потрібно виконати дії прописані нижче
                </p>
              </div>
            </div>
          </div>

          {/* Account Migration Section */}
          <div className="p-6 bg-orange-500/10 rounded-lg border border-orange-500/20">
            <h2 className="text-xl font-semibold mb-6 text-orange-300">
              Перенесення акаунта зареєстрованого по іншій реферальній системі
            </h2>
            
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                <span className="text-gray-300">
                  Увійдіть у свій наявний акаунт OKX. Якщо на ньому є кошти — тимчасово виведіть їх на гаманець.
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                <span className="text-gray-300">
                  У меню зайдіть у розділ «Безпека», пролистайте вниз і натисніть «Закрити акаунт».
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                <span className="text-gray-300">
                  У вікні підтвердження виберіть «Продовжити та закрити», виконайте всі кроки підтвердження (коди, галочки «Я розумію» тощо). 
                  Переконайтесь, що на акаунті не залишилось активів. Натисніть фінальну кнопку «Закрити акаунт».
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                <span className="text-gray-300">
                  Після успішного видалення на e-mail надійде лист із темою «Ваш акаунт успішно видалено». 
                  Це підтверджує, що акаунт та верифікаційні документи повністю видалені з системи.
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                <span className="text-gray-300">
                  Після цього ви можете зареєструвати новий акаунт із тими ж даними (пошта, телефон, документи) — але тільки один раз. 
                  Тепер він буде прив'язаний до нашої партнерської програми.
                </span>
              </li>
            </ol>

            <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-red-300">
                  <strong>Важливо!</strong> Новий акаунт на ті самі документи можна створити лише через 29 днів після видалення старого. 
                  На цей період можна зареєструвати тимчасовий акаунт на довірену особу.
                </div>
              </div>
            </div>
          </div>

          {/* Back to main button */}
          <div className="text-center mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-dinero-red hover:bg-red-600 text-white rounded-md transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Повернутися на головну
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OkxInstructions;
