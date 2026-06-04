<script setup lang="ts">
import { PhHouse, PhUser, PhGear, PhBell, PhEnvelope, PhBookmark } from '@phosphor-icons/vue'
</script>

<template>
  <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap">
    <IIcon :is="PhHouse" />
    <IIcon :is="PhUser" />
    <IIcon :is="PhGear" />
    <IIcon :is="PhBell" />
    <IIcon :is="PhEnvelope" />
    <IIcon :is="PhBookmark" />
  </div>
</template>
