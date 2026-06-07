import { computed } from 'vue'
import type { TabValue, TabsProps } from './useTabs'

export function useTabsStyle(props: TabsProps, activeValue: () => TabValue | null, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-tabs': true,
    'i-tabs--block': !!props.block,
    'i-tabs--scrollable': !!props.scrollable,
    'i-tabs--disabled': isDisabled(),
  }))

  const getTabClasses = (value: TabValue, disabled?: boolean) => ({
    'i-tabs__tab': true,
    'i-tabs__tab--active': value === activeValue(),
    'i-tabs__tab--disabled': !!disabled,
  })

  return {
    classes,
    getTabClasses,
  }
}

