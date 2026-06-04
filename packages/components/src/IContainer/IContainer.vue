<script setup lang="ts">
import { useContainer } from './useContainer'
import { useContainerStyle } from './useContainerStyle'
import type { UseContainerOptions } from './useContainer'

const props = defineProps<UseContainerOptions>()
const options = useContainer(props)
const { classes } = useContainerStyle(options)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
