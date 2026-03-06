<template>
  <el-config-provider :locale="elLocale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useChangeLang } from '@/utils/changeLang'

const { elLocale } = useChangeLang()
</script>

<style scoped lang="scss"></style>
