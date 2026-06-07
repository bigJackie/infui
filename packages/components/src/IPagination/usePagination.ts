import { computed } from 'vue'

export interface PaginationProps {
  /** 当前页（v-model） */
  modelValue?: number
  /** 总条目数 */
  total?: number
  /** 每页条目数 */
  pageSize?: number
  /** 最多显示多少个页码按钮 */
  maxVisible?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 低代码场景：铺满父容器 */
  block?: boolean
}

type PaginationEmit = {
  (event: 'update:modelValue', value: number): void
  (event: 'change', value: number): void
}

export function usePagination(props: PaginationProps, emit: PaginationEmit) {
  const page = computed(() => Math.max(1, props.modelValue ?? 1))
  const totalPages = computed(() => {
    const total = props.total ?? 0
    const size = Math.max(1, props.pageSize ?? 10)
    return Math.max(1, Math.ceil(total / size))
  })

  const isDisabled = computed(() => !!props.disabled)

  const clampedPage = computed(() => Math.min(page.value, totalPages.value))

  const canPrev = computed(() => !isDisabled.value && clampedPage.value > 1)
  const canNext = computed(() => !isDisabled.value && clampedPage.value < totalPages.value)

  const pages = computed(() => {
    const maxVisible = Math.max(3, props.maxVisible ?? 7)
    const half = Math.floor(maxVisible / 2)

    let start = Math.max(1, clampedPage.value - half)
    let end = Math.min(totalPages.value, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    const result: number[] = []
    for (let p = start; p <= end; p += 1) {
      result.push(p)
    }
    return result
  })

  const setPage = (next: number) => {
    if (isDisabled.value) {
      return
    }

    const target = Math.min(totalPages.value, Math.max(1, next))
    if (target === clampedPage.value) {
      return
    }

    emit('update:modelValue', target)
    emit('change', target)
  }

  const prev = () => setPage(clampedPage.value - 1)
  const next = () => setPage(clampedPage.value + 1)

  return {
    clampedPage,
    totalPages,
    pages,
    canPrev,
    canNext,
    prev,
    next,
    setPage,
  }
}

