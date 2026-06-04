<script setup lang="ts">
import { inject, provide, ref, computed, watch } from 'vue'
import { GROUP_CONTEXT_KEY } from './keys'
import type { GroupContext } from './keys'
import { useListGroupStyle } from './useListGroupStyle'

const props = withDefaults(
  defineProps<{
    title?: string
    defaultOpen?: boolean
    disabled?: boolean
    /**
     * 独立模式：不参与父级 singleGroup 协调
     * 适用于固定展开的分类标题等场景
     */
    independent?: boolean
  }>(),
  {
    defaultOpen: false,
    independent: false,
  },
)

// 每个 group 实例的唯一标识，用于 singleGroup 追踪
// 使用 Symbol 而非数字 index，无需维护计数器
const id = Symbol()

// 注入父级 GroupContext（来自 IList 或父 IListGroup）
const parentGroup = inject<GroupContext | null>(GROUP_CONTEXT_KEY, null)

const isOpen = ref(props.defaultOpen)

// 自身展开时，通知父级（非 independent 且父级开启了 singleGroup）
watch(isOpen, val => {
  if (val && !props.independent && parentGroup?.singleGroup.value) {
    parentGroup.setOpen(id)
  }
})

// 父级切换到其他 group 时，自动折叠自身
watch(
  () => parentGroup?.openId.value,
  activeId => {
    if (!props.independent && parentGroup?.singleGroup.value && activeId !== id && isOpen.value) {
      isOpen.value = false
    }
  },
)

/**
 * autoFold：父 Group 折叠时，子 Group 也跟着折叠
 * 父级是 IList 时 isExpanded 为 undefined，此 watch 不生效（顶层永远可见）
 * 父级是 IListGroup 时，父关闭 → 子跟着关闭，父重新打开时子保持关闭状态
 */
watch(
  () => parentGroup?.isExpanded?.value,
  parentOpen => {
    if (parentOpen === false) {
      isOpen.value = false
    }
  },
)

const toggle = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

/**
 * 向嵌套子 IListGroup 提供新的 GroupContext
 * 每一层 IListGroup 都覆盖 GROUP_CONTEXT_KEY，使 singleGroup 作用域限定在同级
 * 嵌套层默认关闭 singleGroup，各子 group 独立控制展开状态
 */
const nestedOpenId = ref<symbol | null>(null)
provide<GroupContext>(GROUP_CONTEXT_KEY, {
  singleGroup: computed(() => false),
  openId: nestedOpenId,
  setOpen: nestedId => {
    nestedOpenId.value = nestedId
  },
  isExpanded: isOpen, // 传给子 group，实现 autoFold
})

const { headerClasses, contentClasses, arrowClasses } = useListGroupStyle(isOpen)
</script>

<template>
  <li class="i-list-group">
    <!-- 头部：点击触发展开/折叠 -->
    <div
      :class="[headerClasses, { 'i-list-group__header--disabled': disabled }]"
      role="button"
      :aria-expanded="isOpen"
      :aria-disabled="disabled || undefined"
      @click="toggle"
    >
      <div v-if="$slots.prepend" class="i-list-group__prepend">
        <slot name="prepend" />
      </div>

      <div class="i-list-group__header-content">
        <!-- title slot 优先，其次 title prop -->
        <slot name="title">
          <span v-if="title">{{ title }}</span>
        </slot>
      </div>

      <!-- 展开箭头：CSS 旋转动画，可通过 arrow slot 替换为图标组件 -->
      <div :class="arrowClasses">
        <slot name="arrow">
          <span class="i-list-group__arrow-icon" />
        </slot>
      </div>
    </div>

    <!-- 内容区：max-height 过渡，overflow hidden 防止内容溢出 -->
    <ul :class="contentClasses">
      <slot />
    </ul>
  </li>
</template>
