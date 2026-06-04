import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export function useFooterStyle(fixed: ComputedRef<boolean>, height: ComputedRef<number>) {
  const classes = computed(() => ['i-footer', fixed.value && 'i-footer--fixed'])
  const styles = computed(() => ({ '--i-footer-height': `${height.value}px` }))
  return { classes, styles }
}
