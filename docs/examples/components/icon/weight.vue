<script setup lang="ts">
import { PhStar } from '@phosphor-icons/vue'

const weights = [
  { value: 'thin', label: 'thin' },
  { value: 'light', label: 'light' },
  { value: 'regular', label: 'regular' },
  { value: 'bold', label: 'bold' },
  { value: 'fill', label: 'fill' },
  { value: 'duotone', label: 'duotone' },
] as const
</script>

<template>
  <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap">
    <div v-for="w in weights" :key="w.value" class="item">
      <IIcon :is="PhStar" size="lg" :weight="w.value" />
      <span>{{ w.label }}</span>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  span {
    font-size: 11px;
    color: var(--inf-color-text-secondary);
  }
}
</style>
