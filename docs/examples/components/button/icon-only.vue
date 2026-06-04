<script setup lang="ts">
import { PhHouse, PhGear, PhBell, PhPlus, PhTrash } from '@phosphor-icons/vue'
</script>

<template>
  <div style="display: flex; gap: 12px; align-items: center">
    <IButton icon-only>
      <IIcon :is="PhHouse" />
    </IButton>

    <IButton icon-only variant="outlined">
      <IIcon :is="PhGear" />
    </IButton>

    <IButton icon-only variant="tonal">
      <IIcon :is="PhBell" />
    </IButton>

    <IButton icon-only variant="text" color="error">
      <IIcon :is="PhTrash" />
    </IButton>

    <!-- rounded icon-only = FAB 风格 -->
    <IButton icon-only variant="rounded" size="lg">
      <IIcon :is="PhPlus" size="lg" />
    </IButton>
  </div>
</template>
