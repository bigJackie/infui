import { computed } from 'vue'
import type { Ref } from 'vue'
import type { Theme } from './useApp'

export function useAppStyle(theme: Ref<Theme>) {
  const classes = computed(() => ['i-application', `i-application--${theme.value}`])
  return { classes }
}
