<script setup lang="ts">
import { computed } from 'vue'
import { globalTheme } from '../IApp'
import { IButton } from '../IButton'
import { useMenu, type MenuProps } from './useMenu'
import { useMenuStyle } from './useMenuStyle'

const props = withDefaults(defineProps<MenuProps>(), {
  modelValue: false,
  items: () => [],
  selected: null,
  label: 'Menu',
  closeOnSelect: true,
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:selected': [value: string | number | boolean]
  select: [item: { label: string; value: string | number | boolean; disabled?: boolean }]
}>()

const { rootRef, contentRef, isOpen, isDisabled, placement, menuStyles, toggle, selectItem } = useMenu(props, emit)
const { classes, getItemClasses } = useMenuStyle(
  props,
  () => isOpen.value,
  () => props.selected,
  () => placement.value,
)
const menuThemeClass = computed(() => `i-application--${globalTheme.value}`)
</script>

<template>
  <div ref="rootRef" :class="classes">
    <div class="i-menu__activator" @click="toggle">
      <slot name="activator" :open="isOpen" :toggle="toggle">
        <IButton variant="outlined" color="default" :disabled="isDisabled">{{ label }}</IButton>
      </slot>
    </div>

    <Teleport to="body">
      <ul
        v-if="isOpen"
        ref="contentRef"
        :class="['i-menu__content', menuThemeClass]"
        :style="menuStyles"
        role="menu"
      >
        <li v-for="item in items" :key="String(item.value)">
          <button
            type="button"
            role="menuitem"
            :class="getItemClasses(item.value, item.disabled)"
            :disabled="item.disabled || isDisabled"
            @click="selectItem(item)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>
    </Teleport>
  </div>
</template>


