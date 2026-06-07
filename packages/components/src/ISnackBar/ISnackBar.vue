<script setup lang="ts">
import { computed } from 'vue'
import { globalTheme } from '../IApp'
import { useSnackBar, type SnackBarProps } from './useSnackBar'
import { useSnackBarStyle } from './useSnackBarStyle'

const props = withDefaults(defineProps<SnackBarProps>(), {
  modelValue: false,
  tone: 'default',
  location: 'bottom-center',
  timeout: 3000,
  actionLabel: '',
  closable: true,
  persistent: false,
  block: false,
  offset: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  action: []
  timeout: []
  close: []
}>()

const { isActive, close, onAction } = useSnackBar(props, emit)
const { classes, styles } = useSnackBarStyle(props)
const snackBarClasses = computed(() => [classes.value, `i-application--${globalTheme.value}`])
</script>

<template>
  <Teleport to="body">
    <div v-if="isActive" :class="snackBarClasses" :style="styles" role="status" aria-live="polite">
      <div class="i-snack-bar__content">
        <slot>{{ text }}</slot>
      </div>

      <button v-if="actionLabel" type="button" class="i-snack-bar__action" @click="onAction">
        {{ actionLabel }}
      </button>

      <button v-if="closable" type="button" class="i-snack-bar__close" aria-label="Close" @click="close">
        ×
      </button>
    </div>
  </Teleport>
</template>


