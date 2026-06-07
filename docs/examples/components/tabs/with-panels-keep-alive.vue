<script setup lang="ts">
import { ref } from 'vue'

const current = ref<'overview' | 'settings'>('overview')
const overviewInput = ref('访问后切到设置，再切回来内容仍保留')
const settingsInput = ref('')

const tabs = [
  { label: '概览', value: 'overview' },
  { label: '设置', value: 'settings' },
]

const panels = [
  { value: 'overview' },
  { value: 'settings' },
]
</script>

<template>
  <ITabs v-model="current" :items="tabs" />
  <ITabPanels v-model="current" :items="panels" :keep-alive="true">
    <template #panel="{ item }">
      <div v-if="item.value === 'overview'">
        <label>
          概览输入：
          <input v-model="overviewInput" />
        </label>
      </div>
      <div v-else>
        <label>
          设置输入：
          <input v-model="settingsInput" />
        </label>
      </div>
    </template>
  </ITabPanels>
</template>

