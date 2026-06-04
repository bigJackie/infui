<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRouter } from 'vitepress'

interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
}

const { page, theme } = useData()
const router = useRouter()

const activePath = computed(() => {
  const path = '/' + page.value.relativePath.replace(/\.md$/, '')
  return path.endsWith('/index') ? path.slice(0, -6) : path
})

// 将 sidebar object 转为带 label / isActive 的 section 列表
const sections = computed(() => {
  const config = theme.value.sidebar
  if (!config || Array.isArray(config)) return []

  // 建立 '/guide/' → '指南' 的映射
  const nav = (theme.value.nav ?? []) as NavItem[]
  const labelMap = Object.fromEntries(nav.map(({ text, link }) => [link, text]))

  return Object.entries(config as Record<string, NavItem[]>).map(([key, items]) => ({
    key,
    label: labelMap[key] ?? key, // 匹配不上时降级显示路径
    items,
    isActive: ('/' + page.value.relativePath).startsWith(key),
  }))
})

const navigate = (link?: string) => {
  if (link) {
    router.go(link)
  }
}
</script>

<template>
  <nav class="navigation-bar">
    <IList :model-value="activePath">
      <IListGroup
        v-for="section in sections"
        :key="section.key"
        :title="section.label"
        :default-open="section.isActive"
      >
        <template v-for="group in section.items" :key="group.text">
          <!-- 有子项：渲染 subheader + 子条目 -->
          <template v-if="group.items?.length">
            <div class="nav-subheader">{{ group.text }}</div>
            <IListItem
              v-for="item in group.items"
              :key="item.link"
              :value="item.link"
              :title="item.text"
              @click="navigate(item.link)"
            />
          </template>

          <!-- 无子项：直接渲染条目（顶层直链） -->
          <IListItem v-else :value="group.link" :title="group.text" @click="navigate(group.link)" />
        </template>
      </IListGroup>
    </IList>
  </nav>
</template>

<style scoped lang="scss">
@use '@infui/theme/src/mixins/layout' as *;

.navigation-bar {
  @include flex-col;
  @include fill;
  padding: 8px 0;
  overflow-y: auto;

  :deep(.i-list) {
    background: transparent;
    border-radius: 0;
    padding: 0;
  }

  // 顶层 section group header：加粗，字号稍大
  :deep(.i-list-group__header) {
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    color: var(--inf-color-text-primary);
  }

  // 顶层 group 展开后内容区不缩进，subheader 自己管间距
  :deep(.i-list-group__content) {
    .i-list-item {
      padding-left: 16px;
      border-radius: var(--inf-radius-sm);
      margin: 1px 8px;
      font-size: 14px;
    }
  }
}

// subheader：静态分类标签，不可交互
.nav-subheader {
  padding: 12px 16px 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--inf-color-text-secondary);
  user-select: none;

  // 第一个 subheader 不需要顶部间距
  &:first-child {
    padding-top: 4px;
  }
}
</style>
