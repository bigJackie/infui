<script setup lang="ts">
import { ref } from 'vue'

const plan = ref<'basic' | 'pro'>('basic')
</script>

<template>
  <div style="display: grid; gap: 8px">
    <IRadio v-model="plan" name="plan" value="basic" label="Basic" />
    <IRadio v-model="plan" name="plan" value="pro" label="Pro" />
    <p>当前选择：{{ plan }}</p>
  </div>
</template>

