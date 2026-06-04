import { ref, onMounted, onUnmounted } from 'vue'

export function useBreakpoint(maxWidth: number) {
  const isMobile = ref(false)

  let mq: MediaQueryList

  const handler = (e: MediaQueryListEvent) => {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mq = window.matchMedia(`(max-width: ${maxWidth - 1}px)`)
    isMobile.value = mq.matches // 初始值
    mq.addEventListener('change', handler)
  })

  onUnmounted(() => {
    mq?.removeEventListener('change', handler)
  })

  return { isMobile }
}
