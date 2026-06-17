<div align="center">

# Infinite UI

<div>

[![](https://img.shields.io/badge/license-MIT-violet.svg)](https://champyin.com)
[![](https://img.shields.io/badge/package-NPM-blueviolet.svg)](https://champyin.com)

</div>

一个面向 Vue 3 的组件库，强调 **API 简洁**、**主题可定制**、**低代码友好**

</div>

## 文档与指南
[Infinite UI在线文档](https://jackiewong.top/projects/infui/)

## 特性

- 📦 组件体系完整：容器 / 表单 / 导航 / 反馈
- 🌈 主题变量驱动：统一语义色与暗黑模式
- ☀️ 低代码友好：多数交互组件支持 `modelValue + update:modelValue`
- 📓 工程化完善：单测覆盖、文档示例、分包构建

## 安装

```bash
pnpm add @jackiew/inf-ui
pnpm add vue
```

> 如果使用图标组件，请额外安装：

```bash
pnpm add @phosphor-icons/vue
```

## 快速使用

### 1) 全量注册

```ts
import { createApp } from 'vue'
import App from './App.vue'
import InfUI from '@jackiew/inf-ui'
import '@jackiew/inf-ui/style'

createApp(App).use(InfUI).mount('#app')
```

### 2) 按需使用

```ts
import { IButton, IInput } from '@jackiew/inf-ui'
import '@jackiew/inf-ui/style'
```

## 工作区说明

- `packages/components`：组件源码
- `packages/theme`：主题与样式
- `packages/composables`：组合式函数
- `packages/infui`：聚合包与插件入口
- `docs`：VitePress 文档与示例

## License

MIT

