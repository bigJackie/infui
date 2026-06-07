import { computed } from 'vue'

export interface TextFieldProps {
  /** 当前输入值（v-model） */
  modelValue?: string
  /** 字段标签文本 */
  label?: string
  /** 原生 placeholder */
  placeholder?: string
  /** 原生 rows */
  rows?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否显示清空按钮 */
  clearable?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
  /** 文本域宽度 */
  width?: string | number
  /** 文本域高度 */
  height?: string | number
}

type TextFieldEmit = {
  (event: 'update:modelValue', value: string): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'clear'): void
}

export function useTextField(props: TextFieldProps, emit: TextFieldEmit) {
  const isDisabled = computed(() => !!props.disabled)

  const showClear = computed(() => {
    return !!props.clearable && !isDisabled.value && !props.readonly && !!props.modelValue
  })

  const onInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    emit('update:modelValue', target.value)
  }

  const onFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  const onBlur = (e: FocusEvent) => {
    emit('blur', e)
  }

  const clear = () => {
    emit('update:modelValue', '')
    emit('clear')
  }

  return {
    isDisabled,
    showClear,
    onInput,
    onFocus,
    onBlur,
    clear,
  }
}

