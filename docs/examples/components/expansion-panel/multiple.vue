<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<Array<string | number>>(['a'])

const items = [
  { title: '常见问题 1', value: 'a', content: 'FAQ 内容 1' },
  { title: '常见问题 2', value: 'b', content: 'FAQ 内容 2' },
  { title: '常见问题 3', value: 'c', content: 'FAQ 内容 3' },
]
</script>

<template>
  <IExpansionPanel v-model="opened" :items="items" multiple />
  <p style="margin-top: 8px">当前展开：{{ opened.join(', ') || '(空)' }}</p>
</template>

