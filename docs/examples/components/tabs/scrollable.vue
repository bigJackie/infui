<script setup lang="ts">
import { ref } from 'vue'

const current = ref('tab-1')

const items = Array.from({ length: 12 }, (_, index) => {
  const id = index + 1
  return {
    label: `标签 ${id} - 这是一个较长标题`,
    value: `tab-${id}`,
  }
})
</script>

<template>
  <ITabs v-model="current" :items="items" :scrollable="true" />
  <p style="margin-top: 8px">当前页签：{{ current }}</p>
</template>
