<script setup lang="ts">
import { useFooter } from './useFooter'
import { useFooterStyle } from './useFooterStyle'
import type { UseFooterOptions } from './useFooter'

const props = withDefaults(defineProps<UseFooterOptions>(), {
  height: 48,
  fixed: false,
})

const { height, fixed } = useFooter(props)
const { classes, styles } = useFooterStyle(fixed, height)
</script>

<template>
  <footer :class="classes" :style="styles">
    <slot />
  </footer>
</template>
