<script setup lang="ts">
import { ref } from 'vue'

const loading1 = ref(false)
const loading2 = ref(false)

const simulate = (flag: typeof loading1) => {
  flag.value = true
  setTimeout(() => (flag.value = false), 2000)
}
</script>

<template>
  <div style="display: flex; gap: 12px; align-items: center">
    <IButton :loading="loading1" @click="simulate(loading1)">提交</IButton>

    <IButton variant="outlined" :loading="loading2" @click="simulate(loading2)">保存</IButton>

    <!-- 静态展示 loading 状态 -->
    <IButton loading>加载中</IButton>
    <IButton variant="rounded" loading>加载中</IButton>
  </div>
</template>
