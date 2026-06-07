<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <IInput v-model="name" label="用户名" placeholder="请输入用户名" clearable />
  <p style="margin-top: 8px">当前值：{{ name || '(空)' }}</p>
</template>

