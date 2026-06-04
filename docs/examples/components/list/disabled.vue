<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('active-1')
</script>

<template>
  <div style="display: flex; gap: 24px; align-items: flex-start">
    <!-- 单项禁用 -->
    <div>
      <p style="font-size: 12px; color: var(--inf-color-text-secondary); margin: 0 0 8px 4px">
        单项禁用
      </p>
      <IList v-model="selected" style="width: 200px">
        <IListItem value="active-1" title="可选项 1" />
        <IListItem value="active-2" title="可选项 2" />
        <IListItem value="disabled-1" title="禁用项" disabled />
        <IListItem value="active-3" title="可选项 3" />
        <IListItem value="disabled-2" title="禁用项 2" disabled subtitle="无法点击" />
      </IList>
    </div>

    <!-- Group 禁用 -->
    <div>
      <p style="font-size: 12px; color: var(--inf-color-text-secondary); margin: 0 0 8px 4px">
        Group 禁用
      </p>
      <IList style="width: 200px">
        <IListGroup title="正常分组" default-open>
          <IListItem value="a" title="选项 A" />
          <IListItem value="b" title="选项 B" />
        </IListGroup>
        <IListGroup title="禁用分组" disabled>
          <IListItem value="c" title="选项 C" />
          <IListItem value="d" title="选项 D" />
        </IListGroup>
      </IList>
    </div>
  </div>
</template>
