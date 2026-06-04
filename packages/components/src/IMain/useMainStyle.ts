import { computed } from 'vue'

export function useMainStyle() {
  const classes = computed(() => ['i-main'])

  return { classes }
}
