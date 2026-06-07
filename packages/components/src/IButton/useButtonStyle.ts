import { computed } from 'vue'
import { toUnit, useBlock } from '../shared'
import type { ButtonProps } from './useButton'


export function useButtonStyle(props: ButtonProps, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-btn': true,
    // variant 和 color 组合决定视觉风格
    // CSS 用 CSS 自定义属性解耦：color 类定义 --_c，variant 类消费 --_c
    [`i-btn--${props.variant ?? 'filled'}`]: true,
    [`i-btn--${props.color ?? 'primary'}`]: true,
    [`i-btn--${props.size ?? 'md'}`]: true,
    'i-btn--disabled': isDisabled(),
    'i-btn--loading': !!props.loading,
    'i-btn--block': !!props.block,
    'i-btn--icon-only': !!props.iconOnly,
  }))

  const styles = useBlock(
    props,
    computed(() => ({
      width: toUnit(props.width),
      height: toUnit(props.height),
    })),
  )

  return { classes, styles }
}
