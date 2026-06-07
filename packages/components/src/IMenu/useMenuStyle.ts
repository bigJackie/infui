import { computed } from 'vue'
import type { MenuProps, MenuValue } from './useMenu'

export function useMenuStyle(
  props: MenuProps,
  isOpen: () => boolean,
  selected: () => MenuValue | null | undefined,
  placement: () => 'down' | 'up',
) {
  const classes = computed(() => ({
    'i-menu': true,
    'i-menu--open': isOpen(),
    'i-menu--down': placement() === 'down',
    'i-menu--up': placement() === 'up',
    'i-menu--block': !!props.block,
    'i-menu--disabled': !!props.disabled,
  }))

  const getItemClasses = (value: MenuValue, disabled?: boolean) => ({
    'i-menu__item': true,
    'i-menu__item--active': value === selected(),
    'i-menu__item--disabled': !!disabled,
  })

  return { classes, getItemClasses }
}


