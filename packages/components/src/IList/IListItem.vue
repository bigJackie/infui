<script setup lang="ts">
import { inject, computed } from 'vue'
import { LIST_CONTEXT_KEY } from './keys'
import { useListItemStyle } from './useListItemStyle'
import type { ListContext } from './keys'

const props = withDefaults(
  defineProps<{
    value?: string // 选中追踪 key，有 value 才参与选中逻辑
    title?: string
    subtitle?: string
    disabled?: boolean
    active?: boolean //强制激活态, 不依赖 value
    /**
     * 语义化标签，默认 li
     * 对接 vue-router 时可传 'router-link' / 'a'
     */
    tag?: string
  }>(),
  {
    tag: 'li',
  },
)

// 不在 IList 内部使用时 inject 到 null，item 退化为纯展示
const listCtx = inject<ListContext | null>(LIST_CONTEXT_KEY, null)

// 在 computed 内调用 isSelected，Vue 会追踪 listCtx 内部 ref 的依赖
const isSelected = () => (props.value ? (listCtx?.isSelected(props.value) ?? false) : false)

const { classes } = useListItemStyle(props, isSelected)

// 有 value 或 active 时才表现为可点击
const isClickable = computed(() => !props.disabled && (!!props.value || props.active))

const handleClick = () => {
  if (!isClickable.value || !listCtx || !props.value) {
    return
  }

  listCtx.select(props.value)
}
</script>

<template>
  <component
    :is="tag"
    :class="[classes, { 'i-list-item--clickable': isClickable }]"
    :role="value ? 'option' : 'listitem'"
    :aria-selected="value ? isSelected() : undefined"
    :aria-disabled="disabled || undefined"
    @click="handleClick"
  >
    <!-- prepend：图标、头像、色块等 -->
    <div v-if="$slots.prepend" class="i-list-item__prepend">
      <slot name="prepend" />
    </div>

    <!-- 主内容区：优先 slot，其次 title/subtitle props -->
    <div class="i-list-item__content">
      <slot>
        <span v-if="title" class="i-list-item__title">{{ title }}</span>
        <span v-if="subtitle" class="i-list-item__subtitle">{{ subtitle }}</span>
      </slot>
    </div>

    <!-- append：角标、操作按钮、状态图标等 -->
    <div v-if="$slots.append" class="i-list-item__append">
      <slot name="append" />
    </div>
  </component>
</template>
