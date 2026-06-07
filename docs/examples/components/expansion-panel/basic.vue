<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<string | number | Array<string | number> | null>('a')

const items = [
  { title: '面板 A', value: 'a', content: '这是 A 的内容' },
  { title: '面板 B', value: 'b', content: '这是 B 的内容' },
  { title: '面板 C', value: 'c', content: '这是 C 的内容' },
]
</script>

<template>
  <IExpansionPanel v-model="opened" :items="items" />
  <p style="margin-top: 8px">当前展开：{{ opened ?? '(空)' }}</p>
</template>

