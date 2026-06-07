import { computed, onUnmounted, watch } from 'vue'

export type SnackBarTone = 'default' | 'success' | 'warning' | 'error' | 'info'
export type SnackBarLocation =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface SnackBarProps {
  /** 显示开关（v-model） */
  modelValue?: boolean
  /** 主文本 */
  text?: string
  /** 语义风格 */
  tone?: SnackBarTone
  /** 显示位置 */
  location?: SnackBarLocation
  /** 自动关闭时间（ms），<= 0 时不自动关闭 */
  timeout?: number
  /** 动作按钮文案 */
  actionLabel?: string
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 是否禁止自动或手动关闭 */
  persistent?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
  /** 堆叠场景的偏移量（px） */
  offset?: number
}

type SnackBarEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'action'): void
  (event: 'timeout'): void
  (event: 'close'): void
}

export function useSnackBar(props: SnackBarProps, emit: SnackBarEmit) {
  let timer: ReturnType<typeof setTimeout> | null = null

  const isActive = computed(() => !!props.modelValue)

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const close = () => {
    if (props.persistent) {
      return
    }

    emit('update:modelValue', false)
    emit('close')
  }

  const onAction = () => {
    emit('action')
    close()
  }

  watch(
    () => [isActive.value, props.timeout, props.persistent] as const,
    ([active, timeout, persistent]) => {
      clearTimer()
      if (!active || persistent) {
        return
      }

      const delay = timeout ?? 3000
      if (delay <= 0) {
        return
      }

      timer = setTimeout(() => {
        emit('update:modelValue', false)
        emit('timeout')
      }, delay)
    },
    { immediate: true },
  )

  onUnmounted(() => {
    clearTimer()
  })

  return {
    isActive,
    close,
    onAction,
  }
}


