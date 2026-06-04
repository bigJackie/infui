<script setup lang="ts">
import { provide, ref, computed } from 'vue'
import { LIST_CONTEXT_KEY, GROUP_CONTEXT_KEY } from './keys'
import { useList } from './useList'
import type { ListContext, GroupContext } from './keys'
import type { ListProps } from './useList'

const props = withDefaults(
  defineProps<
    ListProps & {
      singleGroup?: boolean // 同级 IListGroup 同时只允许展开一个
    }
  >(),
  {
    singleGroup: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()

const { isSelected, select } = useList(props, emit)

// 向所有后代 IListItem 提供选中状态
provide<ListContext>(LIST_CONTEXT_KEY, { isSelected, select })

// 向直接子 IListGroup 提供分组展开控制
// IList 作为顶层不提供 isExpanded（undefined 表示永远可见）
const openId = ref<symbol | null>(null)
provide<GroupContext>(GROUP_CONTEXT_KEY, {
  singleGroup: computed(() => props.singleGroup),
  openId,
  setOpen: id => {
    openId.value = id
  },
  // isExpanded 不提供，子 group 注入到 undefined 时不执行 autoFold
})
</script>

<template>
  <ul class="i-list" role="list">
    <slot />
  </ul>
</template>
