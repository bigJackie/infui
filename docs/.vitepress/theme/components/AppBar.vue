<script setup lang="ts">
import { inject, ref } from 'vue'
import { useGlobalConfig, useAppContext, IIcon } from '@jackiew/inf-ui'
import { PhList, PhGithubLogo, PhTranslate, PhMoon, PhSun } from '@phosphor-icons/vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { withBase } from 'vitepress'

const { INFUI_GITHUB_URL } = useGlobalConfig()

// IApp 提供的主题上下文
const { theme, toggleTheme } = useAppContext()

// ── 语言切换（预留入口，暂不接路由） ───────────────────────────────────────────
const lang = ref<'zh' | 'en'>('zh')
const toggleLang = () => {
  // TODO: 接入 VitePress i18n，切换 /zh/ 和 /en/ 路由
  lang.value = lang.value === 'zh' ? 'en' : 'zh'
}

// Layout 提供的侧边栏控制函数
const toggleAside: undefined = inject('toggleAside')
const isMobile = inject('isMobile')
</script>

<template>
  <div class="app-bar">
    <!-- ── Brand：logo + 汉堡按钮 ── -->
    <div class="app-bar__brand">
      <a class="app-bar__logo" :href="withBase('/')">
        <span class="app-bar__logo-mark">∞</span>
        <span class="app-bar__logo-text">Infinity UI</span>
      </a>
      <IButton
        v-if="isMobile"
        variant="text"
        color="default"
        icon-only
        title="菜单"
        @click="toggleAside"
      >
        <IIcon :is="PhList" weight="duotone" size="lg" />
      </IButton>
    </div>

    <!-- ── 右侧操作区 ─────────────────────────────────────────────────────── -->
    <div class="app-bar__actions">
      <!-- 直接用 VitePress 的搜索组件，状态/快捷键/关闭全部内置 -->
      <div class="app-bar__search-wrap">
        <VPNavBarSearch />
      </div>

      <!-- GitHub -->
      <a :href="INFUI_GITHUB_URL" target="_blank" rel="noopener" title="GitHub">
        <IButton variant="text" color="default" icon-only>
          <IIcon :is="PhGithubLogo" weight="duotone" size="lg" />
        </IButton>
      </a>

      <!-- 主题切换 -->
      <IButton
        variant="text"
        color="default"
        icon-only
        :title="theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'"
        @click="toggleTheme"
      >
        <IIcon :is="theme !== 'dark' ? PhMoon : PhSun" weight="duotone" size="lg" />
      </IButton>

      <!-- 语言切换（预留） -->
      <IButton
        v-if="false"
        width="48px"
        variant="text"
        color="default"
        icon-only
        :title="`切换语言（当前：${lang === 'zh' ? '中文' : 'English'}）`"
        @click="toggleLang"
      >
        <IIcon :is="PhTranslate" weight="duotone" size="lg" />
        <span class="app-bar__lang-label">{{ lang === 'zh' ? '中' : 'EN' }}</span>
      </IButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@inf-ui/theme/src/mixins' as *;

.app-bar {
  @include flex-row;
  @include fill; // 撑满 IHeader 的 left slot，占据全部宽度
  gap: 8px;

  // ── Logo ────────────────────────────────────────────────────────────────
  &__brand {
    @include flex-row;
    @include no-shrink;
    gap: 4px;
    margin-right: auto; // 将操作区推到最右侧
  }

  &__logo {
    @include flex-row;
    @include no-shrink;
    gap: 8px;
    text-decoration: none;
    color: var(--inf-color-text-primary);
    font-weight: 700;
    font-size: 16px;

    &:hover {
      opacity: 0.8;
    }
  }

  &__logo-mark {
    font-size: 22px;
    color: var(--inf-color-primary);
    line-height: 1;
  }

  &__logo-text {
    letter-spacing: -0.3px;
  }

  // ── 操作区 ───────────────────────────────────────────────────────────────
  &__actions {
    @include flex-row;
    gap: 4px;
  }

  // VPNavBarSearch 外层容器，覆盖 VitePress 默认样式
  &__search-wrap {
    :deep(.VPNavBarSearch) {
      padding: 0;
      justify-content: flex-start;
    }
    // 搜索按钮外观跟随我们的 token
    :deep(.DocSearch-Button) {
      border-radius: var(--inf-radius-md);
      background: var(--inf-color-hover);
      color: var(--inf-color-text-secondary);
      border: 1px solid var(--inf-color-border);
      &:hover {
        border-color: var(--inf-color-primary);
      }
    }
  }
}
</style>
