import { provide, inject, watch, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import { globalTheme } from './themeStore'

export type Theme = 'light' | 'dark'

export interface AppContext {
  theme: Ref<Theme>
  toggleTheme: () => void
  setElevation: (val: number) => void
}

// InjectionKey，子组件通过这个 key inject
export const APP_CONTEXT_KEY: InjectionKey<AppContext> = Symbol('inf-app')
// localStorage 中存储主题的 key
const THEME_KEY = 'inf-ui-theme'

export function useApp(options: { theme?: Theme } = {}) {
  // 优先读 localStorage(且SSR guard)，没有再用 prop 默认值
  const stored =
    typeof localStorage !== 'undefined' ? (localStorage.getItem(THEME_KEY) as Theme | null) : null
  const theme = globalTheme
  globalTheme.value = stored ?? options.theme ?? 'light'

  // 只在外部 prop 变化时同步，不影响 toggleTheme 的内部控制
  watch(
    () => options.theme,
    newTheme => {
      if (newTheme) theme.value = newTheme
    },
  )

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    // SSR guard
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(THEME_KEY, theme.value)
    }
  }

  // elevation 由 IMain 驱动，存在这里方便 IApp 拿到后写 CSS 变量
  const elevation = ref(0)
  const setElevation = (val: number) => {
    elevation.value = val
  }

  provide(APP_CONTEXT_KEY, { theme, toggleTheme, setElevation })

  return { theme, toggleTheme, elevation }
}

// 子组件使用的 inject hook
export function useAppContext() {
  const ctx = inject(APP_CONTEXT_KEY)
  if (!ctx) {
    throw new Error('[inf-ui] useAppContext must be used within <IApp>')
  }

  return ctx
}
