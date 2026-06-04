<script setup lang="ts">
import { PhPlus, PhTrash, PhArrowRight, PhDownloadSimple } from '@phosphor-icons/vue'
</script>

<template>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
    <IButton>
      <template #prepend><IIcon :is="PhPlus" size="sm" /></template>
      新建
    </IButton>

    <IButton variant="outlined" color="error">
      <template #prepend><IIcon :is="PhTrash" size="sm" /></template>
      删除
    </IButton>

    <IButton variant="tonal">
      下一步
      <template #append><IIcon :is="PhArrowRight" size="sm" /></template>
    </IButton>

    <IButton variant="rounded">
      <template #prepend><IIcon :is="PhDownloadSimple" size="sm" /></template>
      下载
    </IButton>
  </div>
</template>
