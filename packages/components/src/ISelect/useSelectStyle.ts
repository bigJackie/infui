import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { SelectProps } from './useSelect'

export function useSelectStyle(props: SelectProps, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-select': true,
    'i-select--disabled': isDisabled(),
    'i-select--block': !!props.block,
  }))

  const blockStyles = useBlock(
    props,
    computed(() => ({
      width: toUnit(props.width),
      height: toUnit(props.height),
    })),
  )

  const styles = computed<CSSProperties>(() => blockStyles.value as CSSProperties)

  return { classes, styles }
}

