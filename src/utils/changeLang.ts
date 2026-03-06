import { ref, watch, computed } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useI18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'

export function useChangeLang() {
  const { locale } = useI18n()

  const currentLanguage = computed(() => locale.value)
  const elLocale = ref(locale.value === 'zh-CN' ? zhCn : en)

  function switchLanguage(lang: string) {
    (i18n.global.locale as any).value = lang
    localStorage.setItem('language', lang)
    elLocale.value = lang === 'zh-CN' ? zhCn : en
  }

  watch(locale, (newLocale) => {
    elLocale.value = newLocale === 'zh-CN' ? zhCn : en
  })

  return {
    currentLanguage,
    elLocale,
    switchLanguage
  }
}
