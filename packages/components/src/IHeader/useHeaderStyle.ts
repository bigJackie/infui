import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export function useHeaderStyle(height: ComputedRef<number>) {
  const classes = computed(() => ['i-header'])

  const styles = computed(() => ({
    '--i-header-height': `${height.value}px`,
  }))

  return { classes, styles }
}
