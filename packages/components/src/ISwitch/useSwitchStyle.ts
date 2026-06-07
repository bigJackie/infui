import { computed } from 'vue'
import type { SwitchProps } from './useSwitch'

export function useSwitchStyle(props: SwitchProps, checked: () => boolean, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-switch': true,
    'i-switch--checked': checked(),
    'i-switch--disabled': isDisabled(),
    'i-switch--block': !!props.block,
  }))

  return { classes }
}

