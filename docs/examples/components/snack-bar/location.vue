<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const location = ref<'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'>('top-right')

const showAt = (loc: typeof location.value) => {
  location.value = loc
  open.value = true
}
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <IButton size="sm" variant="outlined" @click="showAt('top-left')">Top Left</IButton>
    <IButton size="sm" variant="outlined" @click="showAt('top-center')">Top Center</IButton>
    <IButton size="sm" variant="outlined" @click="showAt('top-right')">Top Right</IButton>
    <IButton size="sm" variant="outlined" @click="showAt('bottom-left')">Bottom Left</IButton>
    <IButton size="sm" variant="outlined" @click="showAt('bottom-center')">Bottom Center</IButton>
    <IButton size="sm" variant="outlined" @click="showAt('bottom-right')">Bottom Right</IButton>
  </div>

  <ISnackBar v-model="open" :location="location" text="位置演示" :timeout="1500" />
</template>

