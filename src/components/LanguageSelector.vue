<template>
  <div class="language-selector">
    <el-dropdown trigger="click">
      <span class="language-trigger">
        {{ currentLanguage === 'zh-CN' ? '中文' : 'English' }}
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="switchLanguage('zh-CN')" :disabled="currentLanguage === 'zh-CN'">
            中文
          </el-dropdown-item>
          <el-dropdown-item @click="switchLanguage('en-US')" :disabled="currentLanguage === 'en-US'">
            English
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { ArrowDown } from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const { locale } = useI18n()

// 当前语言
const currentLanguage = computed(() => locale.value)

// Element Plus语言
const elLocale = ref(currentLanguage.value === 'zh-CN' ? zhCn : en)

// 切换语言
function switchLanguage(lang: string) {
  locale.value = lang
  elLocale.value = lang === 'zh-CN' ? zhCn : en
  localStorage.setItem('language', lang)
}

// 监听语言变化
watch(locale, (newLocale) => {
  elLocale.value = newLocale === 'zh-CN' ? zhCn : en
})

// 暴露当前语言参数
defineExpose({
  elLocale
})
</script>

<style scoped lang="scss">
.language-selector {
  .language-trigger {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: var(--border-radius-md);
    transition: all var(--transition-fast);

    &:hover {
      background-color: var(--border-light);
    }
  }
}
</style>