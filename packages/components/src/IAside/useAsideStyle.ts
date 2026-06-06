import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { toUnit } from '../../shared'

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
    '--i-aside-width': toUnit(currentWidth.value),
  }))

  return { classes, styles }
}
