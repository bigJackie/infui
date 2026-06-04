import { watchEffect, onUnmounted, computed } from 'vue'
import type { ComputedRef } from 'vue'

export interface UseHeaderOptions {
  height?: number
}

export function useHeader(options: UseHeaderOptions = {}) {
  const height: ComputedRef<number> = computed(() => options.height ?? 64)

  watchEffect(() => {
    // SSR guard
    if (typeof document === 'undefined') {
      return
    }

    document.documentElement.style.setProperty('--i-header-height', `${height.value ?? 64}px`)
  })

  onUnmounted(() => {
    document.documentElement.style.removeProperty('--i-header-height')
  })

  return { height }
}
