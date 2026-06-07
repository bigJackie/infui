import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { SnackBarProps } from './useSnackBar'

export function useSnackBarStyle(props: SnackBarProps) {
  const classes = computed(() => ({
    'i-snack-bar': true,
    [`i-snack-bar--${props.tone ?? 'default'}`]: true,
    [`i-snack-bar--${props.location ?? 'bottom-center'}`]: true,
    'i-snack-bar--block': !!props.block,
  }))

  const styles = computed<CSSProperties>(() => ({
    '--i-snack-bar-offset': `${props.offset ?? 0}px`,
  }))

  return { classes, styles }
}


