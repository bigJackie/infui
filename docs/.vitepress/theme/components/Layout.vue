<script setup lang="ts">
import {
  IApp,
  IHeader,
  IAside,
  IContainer,
  IMain,
  globalTheme,
  useBreakpoint,
} from '@jackiew/inf-ui'
import { useRouter, useData } from 'vitepress'
import { watch, nextTick, onMounted, onUnmounted, ref, provide } from 'vue'
import AppBar from './AppBar.vue'
import NavigationBar from './NavigationBar.vue'
import HomePage from './HomePage.vue'
import NotFoundPage from './NotFoundPage.vue'
import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue'

const { page, frontmatter } = useData()

// 主题同步
watch(
  globalTheme,
  val => {
    // SSR guard
    if (!val || typeof document === 'undefined') {
      return
    }
    document.documentElement.classList.toggle('dark', val === 'dark')
  },
  { immediate: true },
)

// 侧边栏控制函数，提供给 AppBar 组件
const { isMobile } = useBreakpoint(1024)
const asideRef = ref()
provide('toggleAside', () => asideRef.value?.toggle())
provide('isMobile', isMobile)

watch(isMobile, val => {
  if (!!val) {
    asideRef.value?.close()
  } else {
    asideRef.value?.open()
  }
})

// hash监听, 滚动到锚点
const router = useRouter()
const scrollToHash = (hash = location.hash) =>
  hash &&
  nextTick(() => {
    // SSR guard
    if (typeof document === 'undefined') {
      return
    }

    document
      .getElementById(decodeURIComponent(hash.slice(1)))
      ?.scrollIntoView({ behavior: 'smooth' })
  })

router.onAfterRouteChange = href => {
  scrollToHash(new URL(href, location.origin).hash)
}

const onHashChange = () => scrollToHash()

onMounted(() => {
  scrollToHash()
  window.addEventListener('hashchange', onHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange)
})
</script>

<template>
  <IApp>
    <IHeader>
      <AppBar />
    </IHeader>
    <HomePage v-if="frontmatter.layout === 'home'" />
    <IContainer v-else app>
      <IAside ref="asideRef" :float="isMobile" :mini-width="0">
        <NavigationBar />
      </IAside>
      <IContainer vertical app>
        <IMain>
          <!-- 404 -->
          <NotFoundPage v-if="page.isNotFound" />
          <!-- VPDoc 内部处理 .vp-doc 包裹、ToC aside、容器宽度等 -->
          <VPDoc v-else />
        </IMain>
      </IContainer>
    </IContainer>
  </IApp>
</template>
