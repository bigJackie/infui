<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const number = ref('')
</script>

<template>
  <div style="display: grid; gap: 10px; max-width: 320px">
    <IInput v-model="email" label="Email" type="email" placeholder="name@example.com" />
    <IInput v-model="password" label="Password" type="password" placeholder="请输入密码" />
    <IInput v-model="number" label="Number" type="number" placeholder="请输入数字" />
  </div>
</template>

