<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div style="display: grid; gap: 8px">
    <ICheckbox v-model="checked" label="同意协议" />
    <ICheckbox label="半选状态" :model-value="false" indeterminate />
    <p>当前值：{{ checked }}</p>
  </div>
</template>

