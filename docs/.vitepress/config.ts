import { defineConfig } from 'vitepress'
import InfCSSVite from 'inf-css/vite'
import { resolve } from 'node:path'
import { demoPlugin } from './plugins/demo'

const isBuild = process.env.NODE_ENV === 'production'

export default defineConfig({
  title: 'Infinite UI',
  description: 'Personal UI framework for Vue 3',
  base: isBuild ? '/projects/infui/' : '/',

  vite: {
    plugins: [InfCSSVite(), demoPlugin()],
    resolve: {
      alias: {
        '@examples': resolve(__dirname, '../examples'),
        '@inf-ui/theme': resolve(__dirname, '../../packages/theme'),
        '@inf-ui/components': resolve(__dirname, '../../packages/components/src/index.ts'),
        '@inf-ui/composables': resolve(__dirname, '../../packages/composables/index.ts'),
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
          items: [{ text: '快速开始', link: '/guide/getting-started' }],
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
            { text: '卡片', link: '/components/card' },
            { text: '扩展面板', link: '/components/expansion-panel' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: '遮罩层', link: '/components/overlay' },
            { text: '对话框', link: '/components/dialog' },
            { text: '消息条', link: '/components/snack-bar' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: '表单', link: '/components/form' },
            { text: '输入框', link: '/components/input' },
            { text: '文本域', link: '/components/text-field' },
            { text: '下拉选择', link: '/components/select' },
            { text: '复选框', link: '/components/checkbox' },
            { text: '单选框', link: '/components/radio' },
            { text: '开关', link: '/components/switch' },
          ],
        },
        {
          text: '导航组件',
          items: [
            { text: '菜单', link: '/components/menu' },
            { text: '分页', link: '/components/pagination' },
            { text: '选项卡', link: '/components/tabs' },
          ],
        },
        {
          text: '图像和图标',
          items: [{ text: '图标', link: '/components/icon' }],
        },
      ],
    },
  },
})
