<script setup lang="ts">
import { PhHeart } from '@phosphor-icons/vue'
</script>

<template>
  <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap">
    <!-- currentColor：跟随父级文字色 -->
    <div class="item">
      <span style="color: var(--inf-color-primary)">
        <IIcon :is="PhHeart" size="lg" weight="fill" />
      </span>
      <span>primary</span>
    </div>

    <div class="item">
      <span style="color: var(--inf-color-secondary)">
        <IIcon :is="PhHeart" size="lg" weight="fill" />
      </span>
      <span>secondary</span>
    </div>

    <div class="item">
      <span style="color: var(--inf-color-tertiary)">
        <IIcon :is="PhHeart" size="lg" weight="fill" />
      </span>
      <span>tertiary</span>
    </div>

    <div class="item">
      <span style="color: var(--inf-color-success)">
        <IIcon :is="PhHeart" size="lg" weight="fill" />
      </span>
      <span>success</span>
    </div>

    <div class="item">
      <span style="color: var(--inf-amber-500)">
        <IIcon :is="PhHeart" size="lg" weight="fill" />
      </span>
      <span>amber</span>
    </div>

    <div class="item">
      <IIcon :is="PhHeart" size="lg" weight="fill" color="#f44336" />
      <span>#f44336</span>
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
