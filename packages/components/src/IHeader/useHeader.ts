import { computed } from 'vue'
import type { ComputedRef } from 'vue'

export interface UseHeaderOptions {
  height?: number
}

export function useHeader(options: UseHeaderOptions = {}) {
  const height: ComputedRef<number> = computed(() => options.height ?? 64)


  return { height }
}
