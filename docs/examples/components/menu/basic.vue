<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const selected = ref<string | number | boolean | null>(null)

const items = [
  { label: '编辑', value: 'edit' },
  { label: '复制', value: 'copy' },
  { label: '删除', value: 'delete' },
]
</script>

<template>
  <IMenu v-model="open" :items="items" :selected="selected" :close-on-select="false" @update:selected="val => (selected = val)">
    <template #activator>
      <IButton variant="outlined">更多操作</IButton>
    </template>
  </IMenu>

  <p style="margin-top: 8px">当前选择：{{ selected ?? '(空)' }}</p>
  <p style="margin-top: 4px">菜单是否打开：{{ open ? '是' : '否' }}</p>
</template>


