<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <IButton @click="open = true">打开遮罩</IButton>

  <IOverlay v-model="open">
    <div style="padding: 20px; background: var(--inf-color-surface); border-radius: 12px">Overlay Content</div>
  </IOverlay>
</template>

