import { computed } from 'vue'

export type SelectValue = string | number | boolean | null

export interface SelectOption {
  label: string
  value: Exclude<SelectValue, null>
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: SelectValue
  options?: SelectOption[]
  label?: string
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  block?: boolean
  width?: string | number
  height?: string | number
}

type SelectEmit = {
  (event: 'update:modelValue', value: SelectValue): void
  (event: 'change', value: SelectValue): void
  (event: 'clear'): void
}

export function useSelect(props: SelectProps, emit: SelectEmit) {
  const isDisabled = computed(() => !!props.disabled)

  const stringValue = computed(() => {
    if (props.modelValue == null) {
      return ''
    }

    return String(props.modelValue)
  })

  const clearableEnabled = computed(() => !!props.clearable && !isDisabled.value && props.modelValue != null)

  const onChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    const nextRaw = target.value

    if (nextRaw === '') {
      emit('update:modelValue', null)
      emit('change', null)
      return
    }

    const matched = (props.options ?? []).find(option => String(option.value) === nextRaw)
    const nextValue = matched ? matched.value : nextRaw

    emit('update:modelValue', nextValue)
    emit('change', nextValue)
  }

  const clear = () => {
    emit('update:modelValue', null)
    emit('clear')
  }

  return {
    isDisabled,
    stringValue,
    clearableEnabled,
    onChange,
    clear,
  }
}

