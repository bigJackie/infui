<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <IButton variant="outlined" @click="open = true">打开 persistent</IButton>

  <IOverlay v-model="open" persistent>
    <div style="padding: 20px; background: var(--inf-color-surface); border-radius: 12px; width: 280px">
      点击遮罩不会关闭
      <div style="margin-top: 12px">
        <IButton size="sm" @click="open = false">手动关闭</IButton>
      </div>
    </div>
  </IOverlay>
</template>

