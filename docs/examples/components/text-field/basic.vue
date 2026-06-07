<script setup lang="ts">
import { ref } from 'vue'

const desc = ref('')
</script>

<template>
  <ITextField v-model="desc" label="项目描述" placeholder="请输入多行内容" clearable />
  <p style="margin-top: 8px">字符数：{{ desc.length }}</p>
</template>

