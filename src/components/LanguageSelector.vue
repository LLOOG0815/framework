<template>
  <div>
    <el-dropdown trigger="click">
      <div class="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md transition-all hover:bg-gray-100">
        {{ currentLanguage === 'zh-CN' ? '中文' : 'English' }}
        <ArrowDown width="12" height="12"></ArrowDown>
      </div>
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
import { ArrowDown } from '@element-plus/icons-vue'
import { useChangeLang } from '@/utils/changeLang'

const { currentLanguage, switchLanguage } = useChangeLang()
</script>

<style scoped lang="scss"></style>
