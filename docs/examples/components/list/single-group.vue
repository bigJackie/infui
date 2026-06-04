<script setup lang="ts">
const faqs = [
  {
    id: 'faq-1',
    question: '如何开始使用 inf-ui？',
    answer: '通过 pnpm 安装 inf-ui 包，在入口文件注册插件，然后按需引入所需组件即可。',
  },
  {
    id: 'faq-2',
    question: '是否支持主题定制？',
    answer:
      '支持。通过覆盖 CSS 变量实现主题定制，也可以通过 IApp 组件的 theme 属性在运行时切换 light / dark 主题。',
  },
  {
    id: 'faq-3',
    question: '组件库的浏览器兼容性如何？',
    answer:
      '目标支持所有现代浏览器（Chrome / Firefox / Safari / Edge 最新两个大版本），不支持 IE。',
  },
  {
    id: 'faq-4',
    question: '能否与 Nuxt 3 一起使用？',
    answer: '可以，组件已做 SSR 兼容处理，所有访问 document / localStorage 的地方均有 SSR guard。',
  },
]
</script>

<template>
  <!-- single-group：同时只展开一个，类似手风琴 FAQ -->
  <IList single-group style="width: 520px">
    <IListGroup v-for="faq in faqs" :key="faq.id" :title="faq.question">
      <!-- 内容放在 IListItem 里，保持样式统一 -->
      <IListItem>
        <span
          style="
            font-size: 13px;
            color: var(--inf-color-text-secondary);
            line-height: 1.7;
            white-space: normal;
          "
        >
          {{ faq.answer }}
        </span>
      </IListItem>
    </IListGroup>
  </IList>
</template>
