<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <IButton @click="open = true">删除文件</IButton>

  <IDialog v-model="open" title="删除确认" text="删除后不可恢复，请确认操作。">
    <template #actions>
      <IButton variant="text" color="default" @click="open = false">取消</IButton>
      <IButton color="error" @click="open = false">确认删除</IButton>
    </template>
  </IDialog>
</template>

