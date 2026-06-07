import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

export type TabValue = string | number | boolean

export interface TabItem {
  label: string
  value: TabValue
  disabled?: boolean
}

export interface TabsProps {
  /** 当前激活项（v-model） */
  modelValue?: TabValue
  /** 标签项配置 */
  items?: TabItem[]
  /** 是否禁用整个 tabs */
  disabled?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
  /** 标签栏可横向滚动 */
  scrollable?: boolean
  /** 每次滚动步长（像素） */
  scrollStep?: number
}

type TabsEmit = {
  (event: 'update:modelValue', value: TabValue): void
  (event: 'change', value: TabValue): void
}

export function useTabs(props: TabsProps, emit: TabsEmit) {
  const isDisabled = computed(() => !!props.disabled)
  const tabsRef = ref<HTMLElement | null>(null)
  const canScrollPrev = ref(false)
  const canScrollNext = ref(false)

  const activeValue = computed<TabValue | null>(() => {
    if (props.modelValue !== undefined) {
      return props.modelValue
    }

    const firstEnabled = (props.items ?? []).find(item => !item.disabled)
    return firstEnabled?.value ?? null
  })

  const select = (item: TabItem) => {
    if (isDisabled.value || item.disabled) {
      return
    }

    if (activeValue.value === item.value) {
      return
    }

    emit('update:modelValue', item.value)
    emit('change', item.value)
  }

  const updateScrollState = () => {
    if (!props.scrollable || !tabsRef.value) {
      canScrollPrev.value = false
      canScrollNext.value = false
      return
    }

    const { scrollLeft, clientWidth, scrollWidth } = tabsRef.value
    canScrollPrev.value = scrollLeft > 0
    canScrollNext.value = scrollLeft + clientWidth < scrollWidth - 1
  }

  const scrollByOffset = (offset: number) => {
    if (!tabsRef.value || !props.scrollable) {
      return
    }

    if (typeof tabsRef.value.scrollBy === 'function') {
      tabsRef.value.scrollBy({ left: offset, behavior: 'smooth' })
    } else {
      tabsRef.value.scrollLeft += offset
    }

    requestAnimationFrame(updateScrollState)
  }

  const scrollPrev = () => {
    scrollByOffset(-(props.scrollStep ?? 120))
  }

  const scrollNext = () => {
    scrollByOffset(props.scrollStep ?? 120)
  }

  onMounted(() => {
    tabsRef.value?.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    nextTick(updateScrollState)
  })

  onUnmounted(() => {
    tabsRef.value?.removeEventListener('scroll', updateScrollState)
    window.removeEventListener('resize', updateScrollState)
  })

  watch(
    () => [props.scrollable, props.items?.length, props.modelValue],
    () => {
      nextTick(updateScrollState)
    },
    { immediate: true },
  )

  return {
    isDisabled,
    activeValue,
    tabsRef,
    canScrollPrev,
    canScrollNext,
    select,
    scrollPrev,
    scrollNext,
  }
}

