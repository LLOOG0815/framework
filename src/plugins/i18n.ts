import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN'
import enUS from '../locales/en-US'

const currentLanguage = localStorage.getItem('language') || 'zh-CN'

const i18n = createI18n({
  legacy: false,
  locale: currentLanguage,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export function setLanguage(lang: string) {
  (i18n.global.locale as any).value = lang
  localStorage.setItem('language', lang)
}

export function getCurrentLanguage() {
  return i18n.global.locale.value
}

export default i18n
