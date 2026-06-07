<script setup lang="ts">
import { ref } from 'vue'

const city = ref<string | number | boolean | null>(null)

const options = [
  { label: 'Hangzhou', value: 'hz' },
  { label: 'Shanghai', value: 'sh' },
  { label: 'Shenzhen', value: 'sz' },
]
</script>

<template>
  <ISelect v-model="city" label="城市" :options="options" clearable />
  <p style="margin-top: 8px">当前值：{{ city ?? '(空)' }}</p>
</template>

