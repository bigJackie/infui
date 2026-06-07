<script setup lang="ts">
import { useTextField, type TextFieldProps } from './useTextField'
import { useTextFieldStyle } from './useTextFieldStyle'

const props = withDefaults(defineProps<TextFieldProps>(), {
  modelValue: '',
  rows: 4,
  disabled: false,
  readonly: false,
  clearable: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  clear: []
}>()

const { isDisabled, showClear, onInput, onFocus, onBlur, clear } = useTextField(props, emit)
const { classes, styles } = useTextFieldStyle(props, () => isDisabled.value)
</script>

<template>
  <label :class="classes" :style="styles">
    <span v-if="label" class="i-text-field__label">{{ label }}</span>

    <span class="i-text-field__control">
      <textarea
        class="i-text-field__native"
        :value="modelValue"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="isDisabled"
        :readonly="readonly"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />

      <button
        v-if="showClear"
        type="button"
        class="i-text-field__clear"
        aria-label="Clear text field"
        @click="clear"
      >
        ×
      </button>
    </span>
  </label>
</template>

