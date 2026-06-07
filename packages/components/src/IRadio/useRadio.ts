import { computed } from 'vue'

export type RadioValue = string | number | boolean

export interface RadioProps {
  /** 当前选中值（v-model） */
  modelValue?: RadioValue
  /** 当前单选项的值 */
  value: RadioValue
  /** 标签文本 */
  label?: string
  /** 同组 name */
  name?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 主题色 */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type RadioEmit = {
  (event: 'update:modelValue', value: RadioValue): void
  (event: 'change', value: RadioValue): void
}

export function useRadio(props: RadioProps, emit: RadioEmit) {
  const checked = computed(() => props.modelValue === props.value)
  const isDisabled = computed(() => !!props.disabled)

  const select = () => {
    if (isDisabled.value || checked.value) {
      return
    }

    emit('update:modelValue', props.value)
    emit('change', props.value)
  }

  return {
    checked,
    isDisabled,
    select,
  }
}

