<script setup lang="ts">
import { ICard } from '../ICard'
import { useExpansionPanel, type ExpansionPanelProps } from './useExpansionPanel'
import { useExpansionPanelStyle } from './useExpansionPanelStyle'

const props = withDefaults(defineProps<ExpansionPanelProps>(), {
  modelValue: null,
  items: () => [],
  multiple: false,
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | Array<string | number> | null]
  change: [value: string | number | Array<string | number> | null]
}>()

const { isDisabled, isOpen, toggle } = useExpansionPanel(props, emit)
const { classes, getItemClasses } = useExpansionPanelStyle(props, () => isDisabled.value, isOpen)
</script>

<template>
  <div :class="classes">
    <ICard
      v-for="item in items"
      :key="String(item.value)"
      :class="getItemClasses(item.value, item.disabled)"
      class="i-expansion-panel__card"
    >
      <button
        type="button"
        class="i-expansion-panel__header"
        :disabled="isDisabled || item.disabled"
        :aria-expanded="isOpen(item.value)"
        @click="toggle(item)"
      >
        <span>{{ item.title }}</span>
        <span class="i-expansion-panel__arrow">▾</span>
      </button>

      <div v-if="isOpen(item.value)" class="i-expansion-panel__content">
        <slot name="content" :item="item">
          {{ item.content }}
        </slot>
      </div>
    </ICard>
  </div>
</template>
