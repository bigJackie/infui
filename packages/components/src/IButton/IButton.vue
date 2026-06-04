<script setup lang="ts">
import { useButton, type ButtonProps } from './useButton'
import { useButtonStyle } from './useButtonStyle'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'filled',
  color: 'primary',
  size: 'md',
  tag: 'button',
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const { isDisabled, handleClick } = useButton(props, emit)
const { classes, styles } = useButtonStyle(props, () => isDisabled.value)
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    :disabled="tag === 'button' ? isDisabled : undefined"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="loading || undefined"
    @click="handleClick"
  >
    <!-- loading 时 spinner 替换 prepend slot -->
    <span v-if="loading" class="i-btn__spinner" aria-hidden="true" />
    <span v-else-if="$slots.prepend" class="i-btn__prepend">
      <slot name="prepend" />
    </span>

    <!-- 主内容，iconOnly 时 slot 应放图标 -->
    <span class="i-btn__content">
      <slot />
    </span>

    <span v-if="$slots.append" class="i-btn__append">
      <slot name="append" />
    </span>
  </component>
</template>
