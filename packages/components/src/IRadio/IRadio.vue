<script setup lang="ts">
import { useRadio, type RadioProps } from './useRadio'
import { useRadioStyle } from './useRadioStyle'

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  color: 'primary',
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
  change: [value: string | number | boolean]
}>()

const { checked, isDisabled, select } = useRadio(props, emit)
const { classes } = useRadioStyle(
  props,
  () => checked.value,
  () => isDisabled.value,
)
</script>

<template>
  <label :class="classes">
    <input
      class="i-radio__native"
      type="radio"
      :name="name"
      :checked="checked"
      :disabled="isDisabled"
      @change="select"
    />

    <span class="i-radio__mark" aria-hidden="true" />
    <span v-if="label || $slots.default" class="i-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

