<script setup lang="ts">
import { computed } from 'vue'
import { usePagination, type PaginationProps } from './usePagination'
import { usePaginationStyle } from './usePaginationStyle'

const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: 1,
  total: 0,
  pageSize: 10,
  maxVisible: 7,
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const { clampedPage, totalPages, pages, canPrev, canNext, prev, next, setPage } = usePagination(
  props,
  emit,
)
const isDisabled = computed(() => props.disabled)
const { classes, getPageClasses } = usePaginationStyle(
  props,
  () => clampedPage.value,
  () => isDisabled.value,
)
</script>

<template>
  <nav :class="classes" aria-label="Pagination">
    <button class="i-pagination__nav" type="button" :disabled="!canPrev" @click="prev">Prev</button>

    <button
      v-for="pageNo in pages"
      :key="pageNo"
      type="button"
      :class="getPageClasses(pageNo)"
      :aria-current="pageNo === clampedPage ? 'page' : undefined"
      :disabled="isDisabled"
      @click="setPage(pageNo)"
    >
      {{ pageNo }}
    </button>

    <button class="i-pagination__nav" type="button" :disabled="!canNext" @click="next">Next</button>

    <span class="i-pagination__meta">{{ clampedPage }} / {{ totalPages }}</span>
  </nav>
</template>
