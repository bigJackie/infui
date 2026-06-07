<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <IButton variant="tonal" @click="open = true">打开自定义内容</IButton>

  <IDialog v-model="open" title="项目详情" :width="560">
    <IList>
      <IListItem title="项目名称" subtitle="Infinite UI" />
      <IListItem title="状态" subtitle="开发中" />
      <IListItem title="负责人" subtitle="Jackie" />
    </IList>

    <template #actions>
      <IButton variant="outlined" @click="open = false">关闭</IButton>
    </template>
  </IDialog>
</template>
