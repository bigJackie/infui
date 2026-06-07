import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { useBlock } from '../shared'
import type { OverlayProps } from './useOverlay'

export function useOverlayStyle(props: OverlayProps) {
  const classes = computed(() => ({
    'i-overlay': true,
    'i-overlay--block': !!props.block,
  }))

  const blockStyles = useBlock(
    props,
    computed(() => ({
      zIndex: String(props.zIndex ?? 2000),
    })),
  )

  const styles = computed<CSSProperties>(() => blockStyles.value as CSSProperties)

  return { classes, styles }
}


