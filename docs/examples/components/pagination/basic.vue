<script setup lang="ts">
import { ref } from 'vue'

const page = ref(1)
</script>

<template>
  <IPagination v-model="page" :total="127" :page-size="10" />
  <p style="margin-top: 8px">当前页：{{ page }}</p>
</template>

