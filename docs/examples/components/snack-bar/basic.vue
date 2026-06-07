<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const tone = ref<'default' | 'success' | 'warning' | 'error' | 'info'>('success')

const show = (nextTone: typeof tone.value) => {
  tone.value = nextTone
  open.value = true
}
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <IButton size="sm" @click="show('success')">Success</IButton>
    <IButton size="sm" color="warning" @click="show('warning')">Warning</IButton>
    <IButton size="sm" color="error" @click="show('error')">Error</IButton>
    <IButton size="sm" color="info" @click="show('info')">Info</IButton>
  </div>

  <ISnackBar v-model="open" :tone="tone" text="保存成功" action-label="撤销" />
</template>

