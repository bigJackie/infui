import { computed } from 'vue'

export interface DialogProps {
  /** 控制对话框开关 */
  modelValue?: boolean
  /** 标题文本 */
  title?: string
  /** 正文文本（无 default slot 时显示） */
  text?: string
  /** 内容宽度，数字自动转 px */
  width?: string | number
  /** 最大宽度，数字自动转 px */
  maxWidth?: string | number
  /** 是否禁止点击遮罩或 Esc 关闭 */
  persistent?: boolean
  /** 是否显示右上角关闭按钮 */
  closable?: boolean
  /** 是否允许 Esc 关闭 */
  closeOnEsc?: boolean
  /** 透传给 Overlay 的层级 */
  zIndex?: number
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type DialogEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'click:outside', e: MouseEvent): void
  (event: 'escape', e: KeyboardEvent): void
}

export function useDialog(props: DialogProps, emit: DialogEmit) {
  const isActive = computed(() => !!props.modelValue)

  const close = () => {
    emit('update:modelValue', false)
  }

  const onOverlayUpdate = (value: boolean) => {
    emit('update:modelValue', value)
  }

  const onOutsideClick = (e: MouseEvent) => {
    emit('click:outside', e)
  }

  const onEscape = (e: KeyboardEvent) => {
    emit('escape', e)
  }

  return {
    isActive,
    close,
    onOverlayUpdate,
    onOutsideClick,
    onEscape,
  }
}

