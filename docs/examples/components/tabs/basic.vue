<script setup lang="ts">
import { ref } from 'vue'

const current = ref<'overview' | 'settings' | 'history'>('overview')

const items = [
  { label: '概览', value: 'overview' },
  { label: '设置', value: 'settings' },
  { label: '历史', value: 'history' },
]
</script>

<template>
  <ITabs v-model="current" :items="items" />
  <p style="margin-top: 8px">当前页签：{{ current }}</p>
</template>

