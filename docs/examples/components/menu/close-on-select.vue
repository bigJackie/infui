<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const selected = ref<string | number | boolean | null>(null)
</script>

<template>
  <IMenu
    v-model="open"
    :selected="selected"
    :close-on-select="true"
    :items="[
      { label: '新建', value: 'create' },
      { label: '编辑', value: 'edit' },
      { label: '删除', value: 'delete' },
    ]"
    @update:selected="val => (selected = val)"
  >
    <template #activator>
      <IButton variant="outlined">选择后自动关闭</IButton>
    </template>
  </IMenu>
  <p style="margin-top: 8px">当前选择：{{ selected ?? '(空)' }}</p>
  <p style="margin-top: 4px">菜单是否打开：{{ open ? '是' : '否' }}</p>
</template>
