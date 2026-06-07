import { computed, onUnmounted, watch } from 'vue'

export interface OverlayProps {
  /** 控制显示/隐藏 */
  modelValue?: boolean
  /** 遮罩点击或 Esc 时是否阻止关闭 */
  persistent?: boolean
  /** 是否渲染半透明遮罩 */
  scrim?: boolean
  /** 是否监听 Esc 关闭 */
  closeOnEsc?: boolean
  /** 根层级 z-index */
  zIndex?: number
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type OverlayEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'click:outside', e: MouseEvent): void
  (event: 'escape', e: KeyboardEvent): void
}

export function useOverlay(props: OverlayProps, emit: OverlayEmit) {
  const isActive = computed(() => !!props.modelValue)

  const close = () => {
    emit('update:modelValue', false)
  }

  const handleBackdropClick = (e: MouseEvent) => {
    emit('click:outside', e)
    if (!props.persistent) {
      close()
    }
  }

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') {
      return
    }

    emit('escape', e)
    if (!props.persistent) {
      close()
    }
  }

  watch(
    () => [isActive.value, props.closeOnEsc] as const,
    ([active, closeOnEsc]) => {
      if (typeof document === 'undefined') {
        return
      }

      if (active && closeOnEsc) {
        document.addEventListener('keydown', handleEsc)
      } else {
        document.removeEventListener('keydown', handleEsc)
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  return {
    isActive,
    handleBackdropClick,
  }
}

