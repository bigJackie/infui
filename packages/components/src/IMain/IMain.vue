<script setup lang="ts">
import { useMain } from './useMain'
import { useMainStyle } from './useMainStyle'

const { mainRef } = useMain()
const { classes } = useMainStyle()
</script>

<template>
  <main ref="mainRef" :class="classes">
    <slot />
  </main>
</template>
