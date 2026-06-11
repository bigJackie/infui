<script setup lang="ts">
import { computed } from 'vue'
import { globalTheme } from '../IApp'
import { useOverlay, type OverlayProps } from './useOverlay'
import { useOverlayStyle } from './useOverlayStyle'

const props = withDefaults(defineProps<OverlayProps>(), {
  modelValue: false,
  persistent: false,
  scrim: true,
  closeOnEsc: true,
  zIndex: 301,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'click:outside': [e: MouseEvent]
  escape: [e: KeyboardEvent]
}>()

const { isActive, handleBackdropClick } = useOverlay(props, emit)
const { classes, styles } = useOverlayStyle(props)
const overlayStyles = computed(() => styles.value as Record<string, string | number>)
const overlayClasses = computed(() => [classes.value, `i-application--${globalTheme.value}`])
</script>

<template>
  <Teleport to="body">
    <div v-if="isActive" :class="overlayClasses" :style="overlayStyles">
      <div v-if="scrim" class="i-overlay__scrim" @click="handleBackdropClick" />
      <div class="i-overlay__content" @click.stop>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
