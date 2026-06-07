import { computed } from 'vue'

export type PanelValue = string | number

export interface ExpansionPanelItem {
  title: string
  value: PanelValue
  content?: string
  disabled?: boolean
}

export interface ExpansionPanelProps {
  /** 展开值（单选为标量，多选为数组） */
  modelValue?: PanelValue | PanelValue[] | null
  /** 面板数据 */
  items?: ExpansionPanelItem[]
  /** 是否支持多开 */
  multiple?: boolean
  /** 禁用状态 */
  disabled?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type ExpansionPanelEmit = {
  (event: 'update:modelValue', value: PanelValue | PanelValue[] | null): void
  (event: 'change', value: PanelValue | PanelValue[] | null): void
}

export function useExpansionPanel(props: ExpansionPanelProps, emit: ExpansionPanelEmit) {
  const isDisabled = computed(() => !!props.disabled)
  const multiple = computed(() => !!props.multiple)

  const openedValues = computed<PanelValue[]>(() => {
    if (multiple.value) {
      return Array.isArray(props.modelValue) ? props.modelValue : []
    }

    if (props.modelValue == null || Array.isArray(props.modelValue)) {
      return []
    }

    return [props.modelValue]
  })

  const isOpen = (value: PanelValue) => openedValues.value.includes(value)

  const toggle = (item: ExpansionPanelItem) => {
    if (isDisabled.value || item.disabled) {
      return
    }

    if (multiple.value) {
      const current = openedValues.value
      const exists = current.includes(item.value)
      const next = exists ? current.filter(v => v !== item.value) : [...current, item.value]
      emit('update:modelValue', next)
      emit('change', next)
      return
    }

    const next = isOpen(item.value) ? null : item.value
    emit('update:modelValue', next)
    emit('change', next)
  }

  return {
    isDisabled,
    openedValues,
    isOpen,
    toggle,
  }
}

