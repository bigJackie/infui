<script setup lang="ts">
import { ref, computed } from 'vue'
import { PhCode, PhCaretUp, PhCopy, PhCheck } from '@phosphor-icons/vue'
import { IIcon, IButton } from '@inf-ui/components'

const props = defineProps<{
  source: string // 原始源码，用于复制
  highlighted: string // Shiki 高亮后的 HTML，用于展示
}>()

const expanded = ref(false)
const copied = ref(false)

// 复制用原始源码
const rawSource = computed(() => decodeURIComponent(props.source))
// 展示用高亮 HTML
const highlightedHtml = computed(() => decodeURIComponent(props.highlighted))

async function copy() {
  await navigator.clipboard.writeText(rawSource.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
  <div class="demo-block">
    <!-- 预览区 -->
    <div class="demo-block__preview">
      <slot />
    </div>

    <!-- 操作栏 -->
    <div class="demo-block__toolbar">
      <IButton variant="text" @click="expanded = !expanded">
        <template #prepend>
          <IIcon v-if="!expanded" :is="PhCode" size="md" />
          <IIcon v-else :is="PhCaretUp" size="md" />
        </template>
        {{ expanded ? '收起代码' : '查看代码' }}
      </IButton>
      <IButton variant="text" @click="copy">
        <template #prepend>
          <IIcon v-if="!copied" :is="PhCopy" size="md" />
          <IIcon v-else :is="PhCheck" size="md" />
        </template>
        {{ copied ? '已复制' : '复制' }}
      </IButton>
    </div>

    <!-- 代码区 -->
    <Transition name="demo-code">
      <div v-show="expanded" class="demo-block__code">
        <div class="demo-block__shiki" v-html="highlightedHtml" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 原有样式保持不变，替换 pre 相关部分 */
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

/* 预览区 */
.demo-block__preview {
  padding: 24px;
  background: var(--vp-c-bg);
}

/* 操作栏 */
.demo-block__toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 12px;
  gap: 4px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

/* 代码区 */
.demo-block__code {
  border-top: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

/* Shiki 输出的 <pre> 样式，scoped 用 :deep 穿透 */
.demo-block__shiki :deep(pre) {
  margin: 0;
  padding: 20px 24px;
  overflow-x: auto;
  font-family: var(--vp-font-family-mono), monospace;
  font-size: 14px;
  line-height: 1.7;
}

/* 展开/收起动画 */
.demo-code-enter-active,
.demo-code-leave-active {
  transition:
    max-height 0.25s ease,
    opacity 0.2s ease;
  max-height: 800px;
  overflow: hidden;
}

.demo-code-enter-from,
.demo-code-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
