import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'

export function useAsideStyle(
  isMini: Ref<boolean>,
  currentWidth: ComputedRef<number>,
  float: ComputedRef<boolean>,
) {
  const classes = computed(() => [
    'i-aside',
    float.value && 'i-aside--float',
    isMini.value && 'i-aside--mini',
  ])

  const styles = computed(() => ({
    '--i-aside-width': `${currentWidth.value}px`,
  }))

  return { classes, styles }
}
