import { computed } from 'vue'
import type { RadioProps } from './useRadio'

export function useRadioStyle(props: RadioProps, checked: () => boolean, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-radio': true,
    [`i-radio--${props.color ?? 'primary'}`]: true,
    'i-radio--checked': checked(),
    'i-radio--disabled': isDisabled(),
    'i-radio--block': !!props.block,
  }))

  return { classes }
}

