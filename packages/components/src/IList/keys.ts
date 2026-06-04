import type { Ref, ComputedRef } from 'vue'

export const LIST_CONTEXT_KEY = Symbol('inf-list')
export const GROUP_CONTEXT_KEY = Symbol('inf-group')

export interface ListContext {
  isSelected: (value: string) => boolean // 某个 value 是否处于选中状态
  select: (value: string) => void // 触发/取消 选中
}

export interface GroupContext {
  singleGroup: Ref<boolean> | ComputedRef<boolean> // 同级是否只允许一个 group 展开
  openId: Ref<symbol | null> // 当前展开的 group 的唯一标识（Symbol）
  setOpen: (id: symbol) => void // 某个 group 展开时调用，通知父级更新
  /**
   * 当前 GroupContext 提供者自身的展开状态
   * - IList 不提供（undefined），表示顶层，永远可见
   * - IListGroup 提供，子 group 据此实现 autoFold
   */
  isExpanded?: Ref<boolean>
}
