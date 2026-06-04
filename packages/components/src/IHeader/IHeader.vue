<script setup lang="ts">
import { useHeader } from './useHeader'
import { useHeaderStyle } from './useHeaderStyle'
import type { UseHeaderOptions } from './useHeader'

const props = withDefaults(defineProps<UseHeaderOptions>(), {
  height: 64,
})

const { height } = useHeader(props)
const { classes, styles } = useHeaderStyle(height)
</script>

<template>
  <header :class="classes" :style="styles">
    <div class="i-header__left">
      <slot name="left" />
    </div>

    <div class="i-header__center">
      <slot />
    </div>

    <div class="i-header__right">
      <slot name="right" />
    </div>
  </header>
</template>
