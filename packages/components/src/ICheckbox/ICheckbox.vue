<script setup lang="ts">
import { useCheckbox, type CheckboxProps } from './useCheckbox'
import { useCheckboxStyle } from './useCheckboxStyle'

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  indeterminate: false,
  color: 'primary',
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const { checked, isDisabled, toggle } = useCheckbox(props, emit)
const { classes } = useCheckboxStyle(
  props,
  () => checked.value,
  () => isDisabled.value,
)
</script>

<template>
  <label :class="classes">
    <input
      class="i-checkbox__native"
      type="checkbox"
      :checked="checked"
      :disabled="isDisabled"
      @change="toggle"
    />

    <span class="i-checkbox__mark" aria-hidden="true" />
    <span v-if="label || $slots.default" class="i-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
