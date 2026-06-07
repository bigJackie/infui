import { computed } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { CardProps } from './useCard'

export function useCardStyle(props: CardProps) {
  const classes = computed(() => ({
    'i-card': true,
    'i-card--outlined': !!props.outlined,
    'i-card--elevated': !!props.elevated,
    'i-card--block': !!props.block,
  }))

  const styles = useBlock(
    props,
    computed(() => ({
      width: toUnit(props.width),
      height: toUnit(props.height),
    })),
  ) as ComputedRef<CSSProperties>

  return {
    classes,
    styles,
  }
}
