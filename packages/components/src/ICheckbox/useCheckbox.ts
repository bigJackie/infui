import { computed } from 'vue'

export interface CheckboxProps {
  /** 选中状态（v-model） */
  modelValue?: boolean
  /** 标签文本 */
  label?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否半选状态 */
  indeterminate?: boolean
  /** 主题色 */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type CheckboxEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'change', value: boolean): void
}

export function useCheckbox(props: CheckboxProps, emit: CheckboxEmit) {
  const checked = computed(() => !!props.modelValue)
  const isDisabled = computed(() => !!props.disabled)

  const toggle = () => {
    if (isDisabled.value) {
      return
    }

    const next = !checked.value
    emit('update:modelValue', next)
    emit('change', next)
  }

  return {
    checked,
    isDisabled,
    toggle,
  }
}


