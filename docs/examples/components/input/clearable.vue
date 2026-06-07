<script setup lang="ts">
import { ref } from 'vue'

const keyword = ref('InfUI')
</script>

<template>
  <IInput v-model="keyword" label="关键词" placeholder="可清空输入" clearable />
  <p style="margin-top: 8px">当前值：{{ keyword || '(空)' }}</p>
</template>

