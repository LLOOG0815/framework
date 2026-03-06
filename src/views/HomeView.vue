<template>
  <WelcomeItem />

  <div class="mt-8 p-5 border border-gray-300 rounded-lg">
    <!-- 日期选择器 -->
    <div class="mb-8 p-4 bg-gray-50 rounded">
      <el-date-picker v-model="dateValue" type="date" style="width: 200px" />
    </div>
    <!-- getTime.formatDate 示例 -->
    <div class="mb-8 p-4 bg-gray-50 rounded">
      <div>
        <p>{{ formattedDate }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import WelcomeItem from '@/components/WelcomeItem.vue'
import getTime from '@/utils/getTime.ts'

const dateValue = ref(new Date())

const formattedDate = computed(() => {
  return getTime.formatDate(new Date(), 'YYYY-MM-DD')
})
</script>

<style scoped></style>
