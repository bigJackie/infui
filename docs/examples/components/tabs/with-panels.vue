<script setup lang="ts">
import { ref } from 'vue'

const current = ref<'overview' | 'settings' | 'history'>('overview')

const tabs = [
  { label: '概览', value: 'overview' },
  { label: '设置', value: 'settings' },
  { label: '历史', value: 'history' },
]

const panels = [
  { value: 'overview', content: '这里是概览内容区域。' },
  { value: 'settings', content: '这里是设置内容区域。' },
  { value: 'history', content: '这里是历史记录内容区域。' },
]
</script>

<template>
  <ITabs v-model="current" :items="tabs" />
  <ITabPanels v-model="current" :items="panels" />
</template>

