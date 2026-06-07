import { computed } from 'vue'
import type { ExpansionPanelProps, PanelValue } from './useExpansionPanel'

export function useExpansionPanelStyle(
  props: ExpansionPanelProps,
  isDisabled: () => boolean,
  isOpen: (value: PanelValue) => boolean,
) {
  const classes = computed(() => ({
    'i-expansion-panel': true,
    'i-expansion-panel--block': !!props.block,
    'i-expansion-panel--disabled': isDisabled(),
  }))

  const getItemClasses = (value: PanelValue, disabled?: boolean) => ({
    'i-expansion-panel__item': true,
    'i-expansion-panel__item--open': isOpen(value),
    'i-expansion-panel__item--disabled': !!disabled,
  })

  return {
    classes,
    getItemClasses,
  }
}

