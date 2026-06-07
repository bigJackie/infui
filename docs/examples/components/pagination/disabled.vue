<script setup lang="ts">
import { ref } from 'vue'

const page = ref(3)
</script>

<template>
  <IPagination v-model="page" :total="127" :page-size="10" disabled />
</template>

