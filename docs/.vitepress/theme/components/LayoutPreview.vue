<script setup lang="ts">
defineProps<{
  height?: number // 预览容器高度，默认 400
}>()
</script>

<template>
  <div class="layout-preview" :style="{ height: `${height ?? 400}px` }">
    <slot />
  </div>
</template>

<style scoped>
.layout-preview {
  position: relative;
  transform: translate(0, 0);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

/* 预览容器内的 IApp 撑满容器而非视口 */
.layout-preview :deep(.i-application) {
  height: 100%;
}
</style>
