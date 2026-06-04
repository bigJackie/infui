<script setup lang="ts">
import { PhTray, PhStar, PhPaperPlaneTilt, PhNote, PhTrash } from '@phosphor-icons/vue'
import { ref } from 'vue'

const selected = ref('tray')

const items = [
  { value: 'tray', label: '收件箱', icon: PhTray, badge: 3 },
  { value: 'starred', label: '已加星标', icon: PhStar, badge: null },
  { value: 'sent', label: '已发送', icon: PhPaperPlaneTilt, badge: null },
  { value: 'drafts', label: '草稿', icon: PhNote, badge: 12 },
  { value: 'trash', label: '垃圾箱', icon: PhTrash, badge: null },
]
</script>

<template>
  <IList v-model="selected" mandatory style="width: 240px">
    <IListItem v-for="item in items" :key="item.value" :value="item.value" :title="item.label">
      <template #prepend>
        <IIcon :is="item.icon" size="sm" :weight="selected === item.value ? 'fill' : 'regular'" />
      </template>
      <template v-if="item.badge" #append>
        <span class="badge">{{ item.badge }}</span>
      </template>
    </IListItem>
  </IList>
</template>

<style scoped>
.badge {
  font-size: 11px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--inf-color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
