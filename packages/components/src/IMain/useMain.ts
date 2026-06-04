import { ref, onMounted, onUnmounted } from 'vue'
import { useAppContext } from '../IApp'

const MAX_ELEVATION = 16

export function useMain() {
  const mainRef = ref<HTMLElement | null>(null)

  // 直接用已有的 APP_CONTEXT_KEY，不需要新 Symbol
  const { setElevation } = useAppContext()

  function handleScroll(e: Event) {
    // SSR guard
    if (!mainRef.value || typeof document === 'undefined') {
      return
    }

    const target = e.target as HTMLElement
    if (target.clientHeight / mainRef.value.clientHeight < 0.6) return

    const elevation = Math.min(Math.floor(target.scrollTop / 20), MAX_ELEVATION)
    setElevation(elevation)
  }

  onMounted(() => {
    mainRef.value?.addEventListener('scroll', handleScroll, { passive: true, capture: true })
  })

  onUnmounted(() => {
    mainRef.value?.removeEventListener('scroll', handleScroll, { capture: true })
    setElevation(0)
  })

  return { mainRef }
}
