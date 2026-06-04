<script setup lang="ts">
import { useSlots, watch } from 'vue'
import { useAside } from './useAside'
import { useAsideStyle } from './useAsideStyle'
import type { UseAsideOptions } from './useAside'

const props = withDefaults(defineProps<UseAsideOptions>(), {
  width: 256,
  miniWidth: 64,
  mini: false,
  float: false,
})

const emit = defineEmits<{
  'update:mini': [value: boolean]
  change: [value: boolean]
}>()

const slots = useSlots()

const { float, isMini, currentWidth, toggle, open, close } = useAside(props)
const { classes, styles } = useAsideStyle(isMini, currentWidth, float)

// isMini 变化时通知外部
watch(isMini, val => {
  emit('update:mini', val)
  emit('change', val)
})

// 暴露 toggle 给父组件调用
defineExpose({ isMini, toggle, open, close })
</script>

<template>
  <aside :class="classes" :style="styles">
    <div v-if="slots.header" class="i-aside__header">
      <slot name="header" />
    </div>

    <div class="i-aside__content">
      <slot />
    </div>

    <div v-if="slots.footer" class="i-aside__footer">
      <slot name="footer" />
    </div>
  </aside>
</template>
