import { computed } from 'vue'

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'tonal' | 'rounded' | 'plain'
export type ButtonColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant // 按钮的整体风格
  color?: ButtonColor // 按钮的颜色主题
  size?: ButtonSize // 按钮的尺寸
  disabled?: boolean //
  loading?: boolean
  block?: boolean
  /** 仅含图标时传 true，按钮变为正方形 */
  iconOnly?: boolean
  tag?: string
  width?: string | number
  height?: string | number
}

type Emit = (event: 'click', e: MouseEvent) => void

export function useButton(props: ButtonProps, emit: Emit) {
  // loading 视同 disabled，两者都阻断交互
  const isDisabled = computed(() => !!(props.disabled || props.loading))

  const handleClick = (e: MouseEvent) => {
    if (isDisabled.value) {
      return
    }

    emit('click', e)
  }

  return { isDisabled, handleClick }
}
