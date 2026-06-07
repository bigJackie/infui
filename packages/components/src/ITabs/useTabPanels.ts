import { computed, ref, watch } from 'vue'
import type { TabValue } from './useTabs'

export interface TabPanelItem {
  value: TabValue
  content?: string
}

export interface TabPanelsProps {
  /** 当前激活面板值（通常与 ITabs 共用 v-model） */
  modelValue?: TabValue | null
  /** 面板列表 */
  items?: TabPanelItem[]
  /** 低代码场景：铺满父容器 */
  block?: boolean
  /** 是否懒渲染（仅渲染当前激活面板） */
  lazy?: boolean
  /** 懒渲染时保留访问过的面板状态 */
  keepAlive?: boolean
  /** 面板切换过渡名，true 使用内置过渡 */
  transition?: boolean | string
}

export function useTabPanels(props: TabPanelsProps) {
  const visitedValues = ref<TabValue[]>([])

  const activeValue = computed<TabValue | null>(() => {
    if (props.modelValue != null) {
      return props.modelValue
    }

    return props.items?.[0]?.value ?? null
  })

  const isActive = (value: TabValue) => value === activeValue.value

  const isVisited = (value: TabValue) => visitedValues.value.includes(value)

  const activeItem = computed(() => {
    if (!props.items?.length) {
      return null
    }

    return props.items.find(item => item.value === activeValue.value) ?? props.items[0]
  })

  const transitionName = computed(() => {
    if (props.transition === true) {
      return 'i-tab-panel-fade'
    }

    if (typeof props.transition === 'string' && props.transition.trim()) {
      return props.transition.trim()
    }

    return ''
  })

  watch(
    activeValue,
    value => {
      if (value == null || isVisited(value)) {
        return
      }

      visitedValues.value = [...visitedValues.value, value]
    },
    { immediate: true },
  )

  return {
    activeValue,
    activeItem,
    isActive,
    isVisited,
    transitionName,
  }
}


