<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useApp } from './useApp'
import { useAppStyle } from './useAppStyle'
import type { Theme } from './useApp'

const props = withDefaults(defineProps<{ theme?: Theme }>(), {
  theme: 'light',
})

const appRef = ref<HTMLElement | null>(null)
const { theme, elevation } = useApp(props)
const { classes } = useAppStyle(theme)

// elevation 写到 IApp 元素，每个实例独立
watchEffect(() => {
  appRef.value?.style.setProperty('--i-header-elevation', String(elevation.value))
})
</script>

<template>
  <div :class="classes" ref="appRef" :data-theme="theme">
    <slot />
  </div>
</template>
