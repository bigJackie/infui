<script setup lang="ts">
import { ICard } from '../ICard'
import { IOverlay } from '../IOverlay'
import { useDialog, type DialogProps } from './useDialog'
import { useDialogStyle } from './useDialogStyle'

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false,
  persistent: false,
  closable: true,
  closeOnEsc: true,
  zIndex: 2100,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'click:outside': [e: MouseEvent]
  escape: [e: KeyboardEvent]
}>()

const { isActive, close, onOverlayUpdate, onOutsideClick, onEscape } = useDialog(props, emit)
const { classes, styles } = useDialogStyle(props)
</script>

<template>
  <IOverlay
    :model-value="isActive"
    :persistent="persistent"
    :close-on-esc="closeOnEsc"
    :z-index="zIndex"
    :block="block"
    @update:modelValue="onOverlayUpdate"
    @click:outside="onOutsideClick"
    @escape="onEscape"
  >
    <ICard :class="classes" :style="styles" role="dialog" aria-modal="true" :aria-label="title || 'dialog'" elevated>
      <template #header>
        <header v-if="title || $slots.title || closable" class="i-dialog__header">
          <slot name="title">
            <h3 v-if="title" class="i-dialog__title">{{ title }}</h3>
          </slot>

          <button
            v-if="closable"
            type="button"
            class="i-dialog__close"
            aria-label="Close dialog"
            @click="close"
          >
            ×
          </button>
        </header>
      </template>

      <div class="i-dialog__body">
        <slot>
          <p v-if="text" class="i-dialog__text">{{ text }}</p>
        </slot>
      </div>

      <template v-if="$slots.actions" #footer>
        <footer class="i-dialog__actions">
          <slot name="actions" />
        </footer>
      </template>
    </ICard>
  </IOverlay>
</template>


