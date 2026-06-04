<script setup lang="ts">
import { PhHouseSimple, PhArrowLeft } from '@phosphor-icons/vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

const goBack = () => window.history.back()
const goHome = () => router.go(withBase('/'))
</script>

<template>
  <div class="not-found">
    <div class="not-found__body">
      <div class="not-found__code">404</div>

      <h1 class="not-found__title">页面不见了</h1>
      <p class="not-found__desc">你访问的页面可能已被移除、重命名，或者从未存在过。</p>

      <div class="not-found__actions">
        <IButton @click="goHome">
          <template #prepend>
            <IIcon :is="PhHouseSimple" size="sm" />
          </template>
          返回首页
        </IButton>
        <IButton variant="text" @click="goBack">
          <template #prepend>
            <IIcon :is="PhArrowLeft" size="sm" />
          </template>
          返回上页
        </IButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 样式保持不变
@use '../../../../packages/theme/src/mixins/layout' as *;

.not-found {
  @include flex-col;
  @include fill;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background: var(--inf-color-background);

  &__body {
    @include flex-col;
    align-items: center;
    gap: 16px;
    text-align: center;
    max-width: 440px;
  }

  &__code {
    font-size: clamp(80px, 15vw, 140px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
    // 渐变色
    background: linear-gradient(
      135deg,
      var(--inf-color-primary) 0%,
      color-mix(in srgb, var(--inf-color-primary) 50%, transparent) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: var(--inf-color-text-primary);
    margin: 0;
  }

  &__desc {
    font-size: 15px;
    line-height: 1.7;
    color: var(--inf-color-text-secondary);
    margin: 0;
  }

  &__actions {
    @include flex-row;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
