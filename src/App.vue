<template>
  <el-config-provider :locale="elLocale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// 当前语言
const { locale } = useI18n()

// Element Plus语言
const elLocale = ref(locale.value === 'zh-CN' ? zhCn : en)

// 监听语言变化
watch(locale, (newLocale) => {
  elLocale.value = newLocale === 'zh-CN' ? zhCn : en
})
</script>

<style scoped lang="scss"></style>
