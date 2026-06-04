import { computed, onUnmounted, watchEffect } from 'vue'
import type { ComputedRef } from 'vue'

export interface UseFooterOptions {
  height?: number
  fixed?: boolean
}

export function useFooter(options: UseFooterOptions = {}) {
  const height: ComputedRef<number> = computed(() => options.height ?? 64)
  const fixed: ComputedRef<boolean> = computed(() => options.fixed ?? false)

  watchEffect(() => {
    // SSR guard
    if (typeof document === 'undefined') {
      return
    }

    if (fixed.value) {
      document.documentElement.style.setProperty('--i-footer-height', `${height.value}px`)
    } else {
      document.documentElement.style.removeProperty('--i-footer-height')
    }
  })

  onUnmounted(() => {
    document.documentElement.style.removeProperty('--i-footer-height')
  })

  return { height, fixed }
}
