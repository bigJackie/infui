import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { DialogProps } from './useDialog'

export function useDialogStyle(props: DialogProps) {
  const classes = computed(() => ({
    'i-dialog': true,
    'i-dialog--block': !!props.block,
  }))

  const blockStyles = useBlock(
    props,
    computed(() => ({
      width: toUnit(props.width ?? 480),
      maxWidth: toUnit(props.maxWidth ?? 'calc(100vw - 32px)'),
    })),
  )

  const styles = computed<CSSProperties>(() => blockStyles.value as CSSProperties)

  return { classes, styles }
}


