import { computed } from 'vue'
import type { CheckboxProps } from './useCheckbox'

export function useCheckboxStyle(props: CheckboxProps, checked: () => boolean, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-checkbox': true,
    [`i-checkbox--${props.color ?? 'primary'}`]: true,
    'i-checkbox--checked': checked(),
    'i-checkbox--disabled': isDisabled(),
    'i-checkbox--indeterminate': !!props.indeterminate,
    'i-checkbox--block': !!props.block,
  }))

  return { classes }
}

