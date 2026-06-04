import { computed } from 'vue'
import { UseContainerOptions } from './useContainer'

export function useContainerStyle(options: UseContainerOptions) {
  const classes = computed(() => [
    'i-container',
    options.vertical && 'i-container--vertical',
    options.app && 'i-container--app',
    options.absolute && 'i-container--absolute',
  ])

  return { classes }
}
