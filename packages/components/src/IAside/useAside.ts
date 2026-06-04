import { computed, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'

export interface UseAsideOptions {
  width?: number
  miniWidth?: number
  mini?: boolean
  float?: boolean
}

export function useAside(options: UseAsideOptions = {}) {
  const width: ComputedRef<number> = computed(() => options.width ?? 256)
  const miniWidth: ComputedRef<number> = computed(() => options.miniWidth ?? 64)
  const float: ComputedRef<boolean> = computed(() => options.float ?? false)

  const isMini: Ref<boolean> = ref(options.mini ?? false)

  // 外部 prop mini 变化时，同步内部状态
  watch(
    () => options.mini,
    value => {
      if (typeof value === 'boolean') {
        isMini.value = value
      }
    },
  )

  const currentWidth = computed(() => (isMini.value ? miniWidth.value : width.value))

  function toggle() {
    isMini.value = !isMini.value
  }

  function open() {
    isMini.value = false
  }

  function close() {
    isMini.value = true
  }

  return {
    width,
    miniWidth,
    float,
    isMini,
    currentWidth,
    toggle,
    open,
    close,
  }
}
