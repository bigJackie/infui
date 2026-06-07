<script setup lang="ts">
import { ref } from 'vue'

const colorValue = ref<'primary' | 'success' | 'warning' | 'error' | 'info'>('primary')
</script>

<template>
  <div style="display: grid; gap: 8px">
    <IRadio v-model="colorValue" name="radio-color" value="primary" label="Primary" color="primary" />
    <IRadio v-model="colorValue" name="radio-color" value="success" label="Success" color="success" />
    <IRadio v-model="colorValue" name="radio-color" value="warning" label="Warning" color="warning" />
    <IRadio v-model="colorValue" name="radio-color" value="error" label="Error" color="error" />
    <IRadio v-model="colorValue" name="radio-color" value="info" label="Info" color="info" />
  </div>
</template>

