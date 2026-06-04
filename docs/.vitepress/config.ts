import { defineConfig } from 'vitepress'
import InfCSSVite from 'inf-css/vite'
import { resolve } from 'node:path'
import { demoPlugin } from './plugins/demo'

export default defineConfig(({ command }) => {
  return {
    title: 'Infinity UI',
    description: 'Personal UI framework for Vue 3',
    base: command === 'build' ? '/projects/infui/' : '/',

    vite: {
      plugins: [InfCSSVite(), demoPlugin()],
      resolve: {
        alias: {
          '@examples': resolve(__dirname, '../examples'),
          '@inf-ui/theme': resolve(__dirname, '../../packages/theme'),
          '@inf-ui/components': resolve(__dirname, '../../packages/components/src/index.ts'),
          '@jackiew/inf-ui': resolve(__dirname, '../../packages/infui/src/index.ts'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
          },
        },
      },
    },
    srcDir: './pages',
    markdown: {
      attrs: { disable: false },
      headers: {
        level: [2, 3],
      },
    },
    themeConfig: {
      outline: {
        level: [2, 3], // or 'deep'
        label: '目录',
      },
      search: {
        provider: 'local',
      },
      nav: [
        { text: '指南', link: '/guide/' },
        { text: '特性', link: '/features/' },
        { text: '组件', link: '/components/' },
      ],
      sidebar: {
        '/guide/': [
          {
            items: [
              { text: '快速开始', link: '/guide/getting-started' },
              { text: '主题定制', link: '/guide/theme' },
            ],
          },
        ],
        '/features/': [
          {
            items: [{ text: '应用布局', link: '/features/application-layout' }],
          },
        ],
        '/components/': [
          {
            text: '容器组件',
            items: [
              { text: '按钮', link: '/components/button' },
              { text: '列表', link: '/components/list' },
            ],
          },
          {
            text: '导航',
            items: [{ text: '标签页', link: '/components/tabs' }],
          },
          {
            text: '表单',
            items: [{ text: '输入框', link: '/components/input' }],
          },
          {
            text: '反馈式',
            items: [{ text: '警告框', link: '/components/alert' }],
          },
          {
            text: '图像和图标',
            items: [{ text: '图标', link: '/components/icon' }],
          },
        ],
      },
    },
  }
})
