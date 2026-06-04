import { ref, computed, watch } from 'vue'

export interface ListProps {
  modelValue?: string | string[] //
  multiple?: boolean // 是否多选，默认为 false
  mandatory?: boolean // 是否为必选，默认为 false
}

type Emit = (event: 'update:modelValue', value: string | string[]) => void

export function useList(props: ListProps, emit: Emit) {
  const multiple = computed(() => props.multiple ?? false)
  const mandatory = computed(() => props.mandatory ?? false)

  // 内部状态：支持受控（传 modelValue）和非受控（不传）两种模式
  const internal = ref<string | string[]>(props.modelValue ?? (props.multiple ? [] : ''))

  // 受控模式：外部 v-model 变化时同步进来
  watch(
    () => props.modelValue,
    val => {
      if (val !== undefined) internal.value = val
    },
  )

  /** 判断指定 value 是否已选中 */
  const isSelected = (value: string): boolean => {
    if (!value) {
      return false
    }

    return multiple.value ? (internal.value as string[]).includes(value) : internal.value === value
  }

  /** 切换指定 value 的选中状态 */
  const select = (value: string) => {
    if (!value) {
      return
    }

    let next: string | string[]

    if (multiple.value) {
      const arr = Array.isArray(internal.value) ? [...internal.value] : []
      const idx = arr.indexOf(value)
      // mandatory 多选：已选中且只剩一项时不允许取消
      if (idx > -1 && mandatory.value && arr.length === 1) {
        return
      }

      next = idx > -1 ? arr.filter(v => v !== value) : [...arr, value]
    } else {
      // mandatory 单选：已选中时不允许取消
      if (internal.value === value && mandatory.value) {
        return
      }

      // 普通单选：再次点击取消
      next = internal.value === value ? '' : value
    }

    internal.value = next
    emit('update:modelValue', next)
  }

  return { isSelected, select }
}
