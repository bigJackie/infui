<script setup lang="ts">
import type { Component } from 'vue'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'

const SIZE_MAP: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

const props = withDefaults(
  defineProps<{
    /** Phosphor 图标组件，如 PhHouse / PhUser */
    is: Component
    size?: IconSize | number
    weight?: IconWeight
    color?: string
  }>(),
  {
    size: 'md',
    weight: 'regular',
    color: 'currentColor',
  },
)

const px = () => (typeof props.size === 'number' ? props.size : SIZE_MAP[props.size])
</script>

<template>
  <component :is="is" :size="px()" :weight="weight" :color="color" class="i-icon" />
</template>
