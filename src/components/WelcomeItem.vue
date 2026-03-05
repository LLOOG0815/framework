<template>
  <div class="welcome-item">
    <div class="header">
      <h2 class="welcome-title">{{ $t('message.welcome') }}</h2>
      <LanguageSelector />
    </div>

    <div class="counter-section">
      <h3>{{ $t('message.counter') }}</h3>
      <div class="counter-display">
        <p>{{ $t('message.currentCount') }}: <span class="count-value">{{ count }}</span></p>
        <p>{{ $t('message.doubleCount') }}: <span class="double-count">{{ doubleCount }}</span></p>
        <p>{{ $t('message.changeCount') }}: {{ changeCount }}</p>
        <p v-if="count > 5" class="warning-message">
          {{ $t('message.warning') }}
        </p>
      </div>
      <div class="counter-actions">
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

<style scoped lang="scss">
.welcome-item {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  max-width: 600px;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);

    .welcome-title {
      color: var(--primary-color);
      font-size: var(--font-size-xl);
      margin: 0;
    }
  }

  .counter-section {
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--border-light);

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    h3 {
      color: var(--text-primary);
      margin-bottom: var(--spacing-md);
      font-size: var(--font-size-lg);
    }
  }

  .counter-display {
    margin-bottom: var(--spacing-md);

    p {
      margin-bottom: var(--spacing-sm);
      font-size: var(--font-size-base);

      .count-value,
      .double-count {
        font-weight: bold;
        color: var(--primary-color);
        font-size: var(--font-size-lg);
      }
    }
  }

  .counter-actions {
    display: flex;
    gap: var(--spacing-md);
  }
}

.language-test-section {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-light);

  h3 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-lg);
  }

  .el-alert {
    margin-top: var(--spacing-sm);
  }
}
</style>