<template>
  <div class="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-blue-600 text-2xl m-0">{{ $t('message.welcome') }}</h2>
      <LanguageSelector />
    </div>

    <div class="mb-6 pb-4 border-b border-gray-200">
      <h3 class="text-gray-800 mb-4 text-lg">{{ $t('message.counter') }}</h3>
      <div class="mb-4">
        <p class="mb-2 text-base">{{ $t('message.currentCount') }}: <span
            class="count-value font-bold text-blue-600 text-lg">{{ count }}</span></p>
        <p class="mb-2 text-base">{{ $t('message.doubleCount') }}: <span
            class="double-count font-bold text-blue-600 text-lg">{{ doubleCount }}</span></p>
        <p class="mb-2 text-base">{{ $t('message.changeCount') }}: {{ changeCount }}</p>
        <p v-if="count > 5">
          {{ $t('message.warning') }}
        </p>
      </div>
      <div class="flex gap-4">
        <el-button @click="increment" type="primary">
          {{ $t('message.increment') }}
        </el-button>
        <el-button @click="resetCount">
          {{ $t('message.reset') }}
        </el-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'
import LanguageSelector from './LanguageSelector.vue'

const counterStore = useCounterStore()
const { increment } = counterStore
const { count, doubleCount } = storeToRefs(counterStore)

const changeCount = ref(0)

const resetCount = () => {

  counterStore.count = 0
  changeCount.value = 0
}

// 监听计数变化
watch(count, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    changeCount.value++
  }
})
</script>

<style scoped lang="scss"></style>
