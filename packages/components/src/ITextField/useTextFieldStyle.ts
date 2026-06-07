import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { TextFieldProps } from './useTextField'

export function useTextFieldStyle(props: TextFieldProps, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-text-field': true,
    'i-text-field--disabled': isDisabled(),
    'i-text-field--block': !!props.block,
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

