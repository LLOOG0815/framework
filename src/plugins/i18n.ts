import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN'
import enUS from '../locales/en-US'

const currentLanguage = localStorage.getItem('language') || 'zh-CN'

const i18n = createI18n({
  legacy: false, // 使用组合式 API 模式
  locale: currentLanguage,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n