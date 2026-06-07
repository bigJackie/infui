<script setup lang="ts">
import { ref } from 'vue'

const enabled = ref(true)
</script>

<template>
  <div style="display: grid; gap: 8px">
    <ISwitch v-model="enabled" label="启用通知" />
    <ISwitch :model-value="true" label="禁用态" disabled />
    <p>当前值：{{ enabled }}</p>
  </div>
</template>

