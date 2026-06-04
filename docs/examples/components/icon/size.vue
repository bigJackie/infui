<script setup lang="ts">
import { PhHouse } from '@phosphor-icons/vue'
</script>

<template>
  <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap">
    <div class="item">
      <IIcon :is="PhHouse" size="xs" />
      <span>xs · 12</span>
    </div>
    <div class="item">
      <IIcon :is="PhHouse" size="sm" />
      <span>sm · 16</span>
    </div>
    <div class="item">
      <IIcon :is="PhHouse" size="md" />
      <span>md · 20</span>
    </div>
    <div class="item">
      <IIcon :is="PhHouse" size="lg" />
      <span>lg · 24</span>
    </div>
    <div class="item">
      <IIcon :is="PhHouse" size="xl" />
      <span>xl · 32</span>
    </div>
    <div class="item">
      <IIcon :is="PhHouse" :size="48" />
      <span>48px</span>
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
    white-space: nowrap;
  }
}
</style>
