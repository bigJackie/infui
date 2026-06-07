import { computed, isRef } from 'vue'
import type { ComputedRef } from 'vue'

export const toUnit = (val?: string | number) => {
  return val == null ? undefined : typeof val === 'number' ? `${val}px` : val
}

export function useBlock(
  props: { block?: boolean },
  defaultValue: Record<string, unknown> | ComputedRef<Record<string, unknown>> = {},
) {
  return computed(() => {
    const def = isRef(defaultValue) ? defaultValue.value : defaultValue
    return props.block ? { width: '100%', height: '100%' } : def
  })
}
