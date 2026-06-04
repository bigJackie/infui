<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string[]>(['inbox', 'starred'])

const items = [
  { value: 'inbox', label: '收件箱', icon: '📥' },
  { value: 'starred', label: '已加星标', icon: '⭐' },
  { value: 'sent', label: '已发送', icon: '📤' },
  { value: 'drafts', label: '草稿', icon: '📝' },
  { value: 'trash', label: '垃圾箱', icon: '🗑️' },
]
</script>

<template>
  <div style="display: flex; gap: 24px; align-items: flex-start">
    <IList v-model="selected" multiple style="width: 240px">
      <IListItem v-for="item in items" :key="item.value" :value="item.value" :title="item.label">
        <template #prepend>{{ item.icon }}</template>
      </IListItem>
    </IList>

    <div
      style="
        padding: 12px 16px;
        border-radius: var(--inf-radius-md);
        background: var(--inf-color-surface);
        font-size: 13px;
        color: var(--inf-color-text-secondary);
      "
    >
      当前选中：
      <template v-if="selected.length">
        <strong v-for="(v, i) in selected" :key="v" style="color: var(--inf-color-primary)">
          {{ v }}{{ i < selected.length - 1 ? '、' : '' }}
        </strong>
      </template>
      <span v-else>无</span>
    </div>
  </div>
</template>
