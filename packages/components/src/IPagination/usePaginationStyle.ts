import { computed } from 'vue'
import type { PaginationProps } from './usePagination'

export function usePaginationStyle(props: PaginationProps, currentPage: () => number, isDisabled: () => boolean) {
  const classes = computed(() => ({
    'i-pagination': true,
    'i-pagination--block': !!props.block,
    'i-pagination--disabled': isDisabled(),
  }))

  const getPageClasses = (page: number) => ({
    'i-pagination__page': true,
    'i-pagination__page--active': page === currentPage(),
  })

  return { classes, getPageClasses }
}

