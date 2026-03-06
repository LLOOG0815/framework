import i18n from '@/i18n';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';

export type Language = 'zh-CN' | 'en-US';

const localeMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const dayjsLocaleMap = {
  'zh-CN': 'zh-cn',
  'en-US': 'en',
};

export const changeLanguage = async (lang: Language) => {
  // 切换 i18n 语言
  i18n.changeLanguage(lang);

  // 切换 dayjs 语言
  const dayjsLocale = dayjsLocaleMap[lang];
  if (dayjsLocale) {
    dayjs.locale(dayjsLocale);
  }

  // 切换 antd 语言
  return localeMap[lang];
};

export const getCurrentLocale = () => {
  const lang = i18n.language as Language;
  return localeMap[lang] || zhCN;
};

export const getCurrentLanguage = (): Language => {
  return i18n.language as Language;
};
