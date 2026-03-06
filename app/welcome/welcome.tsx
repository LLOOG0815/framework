import { useTranslation } from 'react-i18next';
import { useCounterStore } from '@/store/counterStore';
import { changeLanguage, getCurrentLanguage } from '@/utils/changeLang';

import { Hello } from '@/components/Hello';

export function Welcome() {
  const { t } = useTranslation();
  const { value, increment, decrement, incrementByAmount } = useCounterStore();

  const toggleLanguage = () => {
    const newLang = getCurrentLanguage() === 'zh-CN' ? 'en-US' : 'zh-CN';
    changeLanguage(newLang);
  };

  return (
    <div className="space-y-8">
      <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-center">{t('welcome.title')}</h2>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            {t('language.switch')}
          </button>
        </div>
        <p className="text-gray-600 mb-4 text-center">{t('welcome.description')}</p>
        <div className="text-4xl font-bold mb-6 text-center">{value}</div>
        <div className="flex flex-col gap-3">
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {t('common.submit')}
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={() => incrementByAmount(5)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            {t('common.save')}
          </button>
        </div>
      </div>

      <Hello />
    </div>
  );
}