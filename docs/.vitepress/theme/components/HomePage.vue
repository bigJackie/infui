<script setup lang="ts">
import { PhRocketLaunch, PhPaintBrush, PhCode, PhGithubLogo } from '@phosphor-icons/vue'
import { useGlobalConfig } from 'inf-ui'

const { INFUI_GITHUB_URL } = useGlobalConfig()

const features = [
  {
    icon: PhCode,
    title: '三层架构',
    desc: 'Headless Hook → Style Hook → 预制组件，每层独立可复用，随意搭配',
  },
  {
    icon: PhPaintBrush,
    title: '语义化主题',
    desc: 'CSS 变量驱动的 Token 系统，亮色 / 暗色一键切换，支持深度定制',
  },
  {
    icon: PhRocketLaunch,
    title: 'TypeScript',
    desc: '完整类型定义，组件 Props / Emits / Expose 全覆盖，IDE 提示开箱即用',
  },
]
</script>

<template>
  <main class="home">
    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero__body">
        <span class="hero__badge">Vue3 组件库</span>

        <h1 class="hero__title">
          为开发者设计的
          <br />
          <span class="hero__title--accent">无限可能</span>
          UI 框架
        </h1>

        <p class="hero__desc">
          基于 Vue 3 + TypeScript，Headless 架构，语义化主题系统。
          <br />
          组件库从零到一的完整实践。
        </p>

        <div class="hero__actions">
          <a class="hero__btn hero__btn--primary" href="/guide/getting-started">快速开始</a>
          <a class="hero__btn hero__btn--outline" href="/components/button">浏览组件</a>
          <a class="hero__btn hero__btn--ghost" :href="INFUI_GITHUB_URL" target="_blank">
            <IIcon :is="PhGithubLogo" size="sm" />
            GitHub
          </a>
        </div>

        <div class="hero__install">
          <span class="hero__install-cmd">
            <span class="hero__install-prefix">$</span>
            pnpm add
            <span class="hero__install-pkg">inf-ui</span>
          </span>
        </div>
      </div>

      <!-- 代码预览卡片 -->
      <div class="hero__code-card">
        <div class="hero__code-bar">
          <span class="hero__dot hero__dot--red" />
          <span class="hero__dot hero__dot--yellow" />
          <span class="hero__dot hero__dot--green" />
        </div>
        <pre class="hero__code"><code
        ><span class="ct">&lt;template&gt;</span>
  <span class="ct">&lt;IApp&gt;</span>
    <span class="ct">&lt;IHeader&gt;</span>
      <span class="ct">&lt;IButton</span> <span class="ca">variant</span>=<span class="cv">"filled"</span><span class="ct">&gt;</span>
        <span class="cs">Hello Infinity UI</span>
      <span class="ct">&lt;/IButton&gt;</span>
    <span class="ct">&lt;/IHeader&gt;</span>
    <span class="ct">&lt;IContainer</span> <span class="ca">app</span><span class="ct">&gt;</span>
      <span class="ct">&lt;IAside /&gt;</span>
      <span class="ct">&lt;IMain&gt;</span>
        <span class="ct">&lt;IList</span> <span class="ca">v-model</span>=<span class="cv">"selected"</span><span class="ct">&gt;</span>
          <span class="ct">&lt;IListItem</span> <span class="ca">title</span>=<span class="cv">"Item"</span> <span class="ct">/&gt;</span>
        <span class="ct">&lt;/IList&gt;</span>
      <span class="ct">&lt;/IMain&gt;</span>
    <span class="ct">&lt;/IContainer&gt;</span>
  <span class="ct">&lt;/IApp&gt;</span>
<span class="ct">&lt;/template&gt;</span></code></pre>
      </div>
    </section>

    <!-- ── Features ──────────────────────────────────────────────────────── -->
    <section class="features">
      <div v-for="f in features" :key="f.title" class="feature-card">
        <div class="feature-card__icon">
          <IIcon :is="f.icon" size="lg" />
        </div>
        <h3 class="feature-card__title">{{ f.title }}</h3>
        <p class="feature-card__desc">{{ f.desc }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '../../../../packages/theme/src/mixins/layout' as *;

.home {
  @include flex-col;
  @include fill;
  overflow-y: auto;
}

// ── Hero ─────────────────────────────────────────────────────────────────────
.hero {
  @include flex-row;
  gap: 64px;
  padding: 80px 80px 60px;
  background: var(--inf-color-background);
  align-items: center;
  flex-wrap: wrap;

  &__body {
    @include flex-col;
    flex: 1;
    min-width: 300px;
    gap: 24px;
  }

  &__badge {
    display: inline-flex;
    align-self: flex-start;
    padding: 4px 12px;
    border-radius: 20px;
    background: var(--inf-color-primary-light);
    color: var(--inf-color-primary);
    font-size: 13px;
    font-weight: 500;
  }

  &__title {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--inf-color-text-primary);
    margin: 0;

    &--accent {
      color: var(--inf-color-primary);
    }
  }

  &__desc {
    font-size: 16px;
    line-height: 1.7;
    color: var(--inf-color-text-secondary);
    margin: 0;
  }

  &__actions {
    @include flex-row;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__btn {
    @include flex-row;
    @include transition(background, color, border-color, opacity);
    gap: 6px;
    padding: 10px 22px;
    border-radius: var(--inf-radius-md);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &--primary {
      background: var(--inf-color-primary);
      color: #fff;
      border: 2px solid var(--inf-color-primary);
      &:hover {
        opacity: 0.88;
      }
    }

    &--outline {
      background: transparent;
      color: var(--inf-color-primary);
      border: 2px solid var(--inf-color-primary);
      &:hover {
        background: var(--inf-color-primary-light);
      }
    }

    &--ghost {
      background: var(--inf-color-surface);
      color: var(--inf-color-text-secondary);
      border: 2px solid var(--inf-color-border);
      &:hover {
        color: var(--inf-color-text-primary);
        border-color: var(--inf-color-text-secondary);
      }
    }
  }

  &__install {
    display: inline-flex;
    align-self: flex-start;
    padding: 8px 16px;
    border-radius: var(--inf-radius-md);
    background: var(--inf-color-surface);
    border: 1px solid var(--inf-color-border);
    font-family: var(--vp-font-family-mono, monospace), serif;
    font-size: 13px;
  }

  &__install-prefix {
    color: var(--inf-color-text-secondary);
    margin-right: 8px;
  }
  &__install-pkg {
    color: var(--inf-color-primary);
  }

  // ── 代码卡片 ─────────────────────────────────────────────────────────────
  &__code-card {
    flex: 1;
    min-width: 320px;
    max-width: 520px;
    border-radius: var(--inf-radius-lg, 12px);
    background: #1a1a2e;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  }

  &__code-bar {
    @include flex-row;
    gap: 6px;
    padding: 12px 16px;
    background: #16213e;
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    &--red {
      background: #ff5f57;
    }
    &--yellow {
      background: #ffbd2e;
    }
    &--green {
      background: #28c840;
    }
  }

  &__code {
    margin: 0;
    padding: 20px 24px;
    font-family: var(--vp-font-family-mono, monospace), serif;
    font-size: 13px;
    line-height: 1.8;
    color: #cdd6f4;
    overflow-x: auto;

    // 语法高亮色
    :deep(.ct) {
      color: #89b4fa;
    } // 标签
    :deep(.ca) {
      color: #a6e3a1;
    } // 属性名
    :deep(.cv) {
      color: #f38ba8;
    } // 属性值
    :deep(.cs) {
      color: #cdd6f4;
    } // 文本内容
  }
}

// ── Features ──────────────────────────────────────────────────────────────────
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  padding: 60px 80px 80px;
  background: var(--inf-color-background);
}

.feature-card {
  @include flex-col;
  @include surface;
  gap: 12px;
  padding: 28px;
  border-radius: var(--inf-radius-lg, 12px);
  border: 1px solid var(--inf-color-border);
  @include transition(border-color, box-shadow);

  &:hover {
    border-color: var(--inf-color-primary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }

  &__icon {
    @include flex-row;
    width: 44px;
    height: 44px;
    border-radius: var(--inf-radius-md);
    background: var(--inf-color-primary-light);
    color: var(--inf-color-primary);
    justify-content: center;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    color: var(--inf-color-text-primary);
    margin: 0;
  }

  &__desc {
    font-size: 14px;
    line-height: 1.7;
    color: var(--inf-color-text-secondary);
    margin: 0;
  }
}
</style>
