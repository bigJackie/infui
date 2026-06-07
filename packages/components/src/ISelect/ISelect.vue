<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { ref } from 'vue'
import { IIcon } from '../IIcon'
import { useSelect, type SelectProps } from './useSelect'
import { useSelectStyle } from './useSelectStyle'

const ChevronDownIcon = defineComponent({
  props: {
    size: { type: Number, default: 16 },
    color: { type: String, default: 'currentColor' },
  },
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        width: this.size,
        height: this.size,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [h('path', { d: 'M6 9L12 15L18 9', stroke: this.color, 'stroke-width': '2', 'stroke-linecap': 'round' })],
    )
  },
})

const CloseIcon = defineComponent({
  props: {
    size: { type: Number, default: 16 },
    color: { type: String, default: 'currentColor' },
  },
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        width: this.size,
        height: this.size,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        h('path', { d: 'M7 7L17 17', stroke: this.color, 'stroke-width': '2', 'stroke-linecap': 'round' }),
        h('path', { d: 'M17 7L7 17', stroke: this.color, 'stroke-width': '2', 'stroke-linecap': 'round' }),
      ],
    )
  },
})

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  options: () => [],
  placeholder: '请选择',
  disabled: false,
  clearable: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean | null]
  change: [value: string | number | boolean | null]
  clear: []
}>()

const { isDisabled, stringValue, clearableEnabled, onChange, clear } = useSelect(props, emit)
const { classes, styles } = useSelectStyle(props, () => isDisabled.value)
const isDropdownOpen = ref(false)

const onFocusin = () => {
  isDropdownOpen.value = true
}

const onBlur = () => {
  isDropdownOpen.value = false
}
</script>

<template>
  <label :class="classes" :style="styles">
    <span v-if="label" class="i-select__label">{{ label }}</span>

    <span class="i-select__control" @focusin="onFocusin" @focusout="onBlur">
      <select class="i-select__native" :value="stringValue" :disabled="isDisabled" @change="onChange">
        <option value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="String(option.value)" :value="String(option.value)" :disabled="option.disabled">
          {{ option.label }}
        </option>
      </select>

      <span class="i-select__suffix">
        <button v-if="clearableEnabled" type="button" class="i-select__clear" aria-label="Clear select" @click="clear">
          <IIcon :is="CloseIcon" size="sm" />
        </button>
        <span class="i-select__arrow" :class="{ 'i-select__arrow--open': isDropdownOpen }" aria-hidden="true">
          <IIcon :is="ChevronDownIcon" size="sm" />
        </span>
      </span>
    </span>
  </label>
</template>

