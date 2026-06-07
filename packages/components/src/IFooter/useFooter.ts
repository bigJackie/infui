import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export interface UseFooterOptions {
  height?: number
  fixed?: boolean
}

export function useFooter(options: UseFooterOptions = {}) {
  const height: ComputedRef<number> = computed(() => options.height ?? 64)
  const fixed: ComputedRef<boolean> = computed(() => options.fixed ?? false)


  return { height, fixed }
}
