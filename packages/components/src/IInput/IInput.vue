<script setup lang="ts">
import { useInput, type InputProps } from './useInput'
import { useInputStyle } from './useInputStyle'

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  readonly: false,
  clearable: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  enter: [e: KeyboardEvent]
  clear: []
}>()

const { isDisabled, showClear, onInput, onFocus, onBlur, onKeydown, clear } = useInput(props, emit)
const { classes, styles } = useInputStyle(props, () => isDisabled.value)
</script>

<template>
  <label :class="classes" :style="styles">
    <span v-if="label" class="i-input__label">{{ label }}</span>

    <span class="i-input__control">
      <input
        class="i-input__native"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :readonly="readonly"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      />

      <button
        v-if="showClear"
        type="button"
        class="i-input__clear"
        aria-label="Clear input"
        @click="clear"
      >
        ×
      </button>
    </span>
  </label>
</template>

