<script setup lang="ts">
import { useTabs, type TabsProps } from './useTabs'
import { useTabsStyle } from './useTabsStyle'

const props = withDefaults(defineProps<TabsProps>(), {
  items: () => [],
  disabled: false,
  block: false,
  scrollable: false,
  scrollStep: 120,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
  change: [value: string | number | boolean]
}>()

const { isDisabled, activeValue, tabsRef, canScrollPrev, canScrollNext, select, scrollPrev, scrollNext } = useTabs(props, emit)
const { classes, getTabClasses } = useTabsStyle(
  props,
  () => activeValue.value,
  () => isDisabled.value,
)
</script>

<template>
  <div :class="classes">
    <button
      v-if="scrollable"
      type="button"
      class="i-tabs__scroll-btn i-tabs__scroll-btn--prev"
      :disabled="!canScrollPrev"
      aria-label="向左滚动标签"
      @click="scrollPrev"
    >
      <span aria-hidden="true">&#8249;</span>
    </button>

    <div ref="tabsRef" class="i-tabs__scroller" role="tablist">
      <button
        v-for="item in items"
        :key="String(item.value)"
        type="button"
        role="tab"
        :class="getTabClasses(item.value, item.disabled)"
        :disabled="isDisabled || item.disabled"
        :aria-selected="item.value === activeValue"
        @click="select(item)"
      >
        {{ item.label }}
      </button>
    </div>

    <button
      v-if="scrollable"
      type="button"
      class="i-tabs__scroll-btn i-tabs__scroll-btn--next"
      :disabled="!canScrollNext"
      aria-label="向右滚动标签"
      @click="scrollNext"
    >
      <span aria-hidden="true">&#8250;</span>
    </button>
  </div>
</template>

