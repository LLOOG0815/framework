<template>
  <WelcomeItem />

  <div class="i18n-test-section">
    <!-- 日期选择器 -->
    <div class="test-item">
      <el-date-picker v-model="dateValue" type="date" style="width: 200px" />
    </div>
    <!-- getTime.formatDate 示例 -->
    <div class="test-item">
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

<style scoped>
.i18n-test-section {
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
}

.test-item {
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
}
</style>
