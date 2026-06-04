import { computed } from 'vue'

interface ListItemStyleProps {
  disabled?: boolean
  active?: boolean // 外部强制激活（不依赖 value 选中机制）
}

/**
 * @param props    - IListItem 的 props 对象（保持响应式，不要解构）
 * @param isSelected - 在 computed 内部调用此函数，Vue 会追踪其依赖
 */
export function useListItemStyle(props: ListItemStyleProps, isSelected: () => boolean) {
  const classes = computed(() => ({
    'i-list-item': true,
    'i-list-item--active': isSelected() || !!props.active,
    'i-list-item--disabled': !!props.disabled,
  }))

  return { classes }
}
