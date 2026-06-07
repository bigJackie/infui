import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { InputProps } from './useInput'

export function useInputStyle(props: InputProps, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-input': true,
    'i-input--disabled': isDisabled(),
    'i-input--block': !!props.block,
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

