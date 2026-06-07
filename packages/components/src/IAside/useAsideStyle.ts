import { computed } from 'vue'
import type { UseAsideOptions } from './useAside'
import type { ComputedRef, Ref, CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'

export function useAsideStyle(
  props: UseAsideOptions,
  isMini: Ref<boolean>,
  currentWidth: ComputedRef<string | number>,
) {
  const classes = computed(() => ({
    'i-aside': true,
    'i-aside--mini': isMini.value,
    'i-aside--float': !!props.float,
    'i-aside--float__right': !!props.float && !!props.right,
    'i-aside--mini__right': isMini.value && !!props.float && !!props.right,
  }))

  const styles = useBlock(
    props,
    computed(() => ({
      '--i-aside-width': toUnit(currentWidth.value),
    })),
  ) as ComputedRef<CSSProperties>

  return { classes, styles }
}
