<script setup lang="ts">
import { useSwitch, type SwitchProps } from './useSwitch'
import { useSwitchStyle } from './useSwitchStyle'

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const { checked, isDisabled, toggle } = useSwitch(props, emit)
const { classes } = useSwitchStyle(
  props,
  () => checked.value,
  () => isDisabled.value,
)
</script>

<template>
  <label :class="classes">
    <input class="i-switch__native" type="checkbox" :checked="checked" :disabled="isDisabled" @change="toggle" />

    <span class="i-switch__track" aria-hidden="true">
      <span class="i-switch__thumb" />
    </span>

    <span v-if="label || $slots.default" class="i-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

