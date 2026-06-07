import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import type { CSSProperties } from 'vue'

export type MenuValue = string | number | boolean

export interface MenuItem {
  label: string
  value: MenuValue
  disabled?: boolean
}

export interface MenuProps {
  /** 菜单开关（v-model） */
  modelValue?: boolean
  /** 菜单项列表 */
  items?: MenuItem[]
  /** 当前选中值 */
  selected?: MenuValue | null
  /** 默认触发按钮文案 */
  label?: string
  /** 选中后是否自动关闭 */
  closeOnSelect?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type MenuEmit = {
  (event: 'update:modelValue', value: boolean): void
  (event: 'update:selected', value: MenuValue): void
  (event: 'select', item: MenuItem): void
}

export function useMenu(props: MenuProps, emit: MenuEmit) {
  const rootRef = ref<HTMLElement | null>(null)
  const contentRef = ref<HTMLElement | null>(null)
  const isOpen = computed(() => !!props.modelValue)
  const isDisabled = computed(() => !!props.disabled)
  const placement = ref<'down' | 'up'>('down')
  const offsetLeft = ref(0)
  const offsetTop = ref(0)

  const menuStyles = computed<CSSProperties>(() => ({
    '--i-menu-left': `${offsetLeft.value}px`,
    '--i-menu-top': `${offsetTop.value}px`,
  }))

  const setOpen = (value: boolean) => {
    if (isDisabled.value) {
      return
    }

    emit('update:modelValue', value)
  }

  const toggle = () => {
    setOpen(!isOpen.value)
  }

  const close = () => setOpen(false)

  const updatePosition = () => {
    if (typeof window === 'undefined' || !rootRef.value || !contentRef.value) {
      return
    }

    const margin = 12
    const gap = 6
    const rootRect = rootRef.value.getBoundingClientRect()
    const contentRect = contentRef.value.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // 水平防溢出：优先左对齐，超出右侧后向左偏移
    let left = rootRect.left
    const overflowRight = left + contentRect.width + margin - viewportWidth
    if (overflowRight > 0) {
      left -= overflowRight
    }

    const nextLeftEdge = left
    if (nextLeftEdge < margin) {
      left += margin - nextLeftEdge
    }

    offsetLeft.value = left

    // 垂直自动翻转：下方空间不足且上方足够时向上展开
    const enoughBelow = rootRect.bottom + gap + contentRect.height <= viewportHeight - margin
    const enoughAbove = rootRect.top - gap - contentRect.height >= margin
    placement.value = !enoughBelow && enoughAbove ? 'up' : 'down'
    offsetTop.value = placement.value === 'up' ? rootRect.top - gap - contentRect.height : rootRect.bottom + gap
  }

  const selectItem = (item: MenuItem) => {
    if (item.disabled || isDisabled.value) {
      return
    }

    emit('update:selected', item.value)
    emit('select', item)

    if (props.closeOnSelect ?? true) {
      close()
    }
  }

  const handleDocumentClick = (e: MouseEvent) => {
    if (!isOpen.value) {
      return
    }

    const target = e.target as Node | null
    const inActivator = !!(rootRef.value && target && rootRef.value.contains(target))
    const inContent = !!(contentRef.value && target && contentRef.value.contains(target))
    if (!inActivator && !inContent) {
      close()
    }
  }

  const handleWindowReflow = () => {
    if (!isOpen.value) {
      return
    }

    updatePosition()
  }

  const bindGlobalReflowListeners = () => {
    if (typeof window === 'undefined') {
      return
    }

    window.addEventListener('resize', handleWindowReflow)
    window.addEventListener('scroll', handleWindowReflow, true)
  }

  const unbindGlobalReflowListeners = () => {
    if (typeof window === 'undefined') {
      return
    }

    window.removeEventListener('resize', handleWindowReflow)
    window.removeEventListener('scroll', handleWindowReflow, true)
  }

  watch(
    () => isOpen.value,
    open => {
      if (typeof document === 'undefined') {
        return
      }

      if (open) {
        document.addEventListener('click', handleDocumentClick)
        bindGlobalReflowListeners()
        nextTick(() => {
          updatePosition()
        })
      } else {
        document.removeEventListener('click', handleDocumentClick)
        unbindGlobalReflowListeners()
      }
    },
    { immediate: true },
  )

  watch(contentRef, el => {
    if (!el || !isOpen.value) {
      return
    }

    nextTick(() => {
      updatePosition()
    })
  })

  onUnmounted(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', handleDocumentClick)
    }

    unbindGlobalReflowListeners()
  })

  return {
    rootRef,
    contentRef,
    isOpen,
    isDisabled,
    placement,
    menuStyles,
    toggle,
    selectItem,
  }
}


