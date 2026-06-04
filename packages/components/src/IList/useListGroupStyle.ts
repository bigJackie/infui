import { computed } from 'vue'
import type { Ref } from 'vue'

export function useListGroupStyle(isOpen: Ref<boolean>) {
  const headerClasses = computed(() => ({
    'i-list-group__header': true,
    'i-list-group__header--open': isOpen.value,
  }))

  // CSS max-height 过渡靠这个 class 切换，无需 JS 测量高度
  const contentClasses = computed(() => ({
    'i-list-group__content': true,
    'i-list-group__content--open': isOpen.value,
  }))

  // 箭头旋转动画
  const arrowClasses = computed(() => ({
    'i-list-group__arrow': true,
    'i-list-group__arrow--open': isOpen.value,
  }))

  return { headerClasses, contentClasses, arrowClasses }
}
