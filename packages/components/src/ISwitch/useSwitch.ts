import { computed } from 'vue'

export interface SwitchProps {
  /** 开关状态（v-model） */
  modelValue?: boolean
  /** 标签文本 */
  label?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type SwitchEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'change', value: boolean): void
}

export function useSwitch(props: SwitchProps, emit: SwitchEmit) {
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

