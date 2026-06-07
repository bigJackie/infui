<script setup lang="ts">
const options = [
  { label: 'Hangzhou', value: 'hz' },
  { label: 'Shanghai', value: 'sh' },
  { label: 'Shenzhen', value: 'sz' },
]
</script>

<template>
  <ISelect label="城市" :model-value="'hz'" :options="options" disabled />
</template>

