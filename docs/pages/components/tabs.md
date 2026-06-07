---
title: 选项卡
---

# 选项卡

`ITabs` 用于同层级内容切换，支持禁用项、受控模式和 `block` 布局。

## 示例

### 基础用法

:::demo
components/tabs/basic
:::

### 可滚动标签栏

当标签较多时，可开启 `scrollable`，通过左右按钮滚动查看隐藏标签。

:::demo
components/tabs/scrollable
:::

### 标签与内容联动

`ITabPanels` 可与 `ITabs` 共用同一个 `v-model` 值，用于展示对应内容面板。

:::demo
components/tabs/with-panels
:::

### 懒渲染与过渡

`ITabPanels` 默认开启 `lazy`，仅渲染当前激活面板。可通过 `transition` 启用切换过渡效果。

:::demo
components/tabs/with-panels-transition
:::

### 面板状态保留

开启 `keepAlive` 后，懒渲染模式下访问过的面板会保留挂载状态。

:::demo
components/tabs/with-panels-keep-alive
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number \| boolean` | 首个可用项 | 当前激活值（支持 `v-model`） |
| `items` | `TabItem[]` | `[]` | 页签列表 |
| `disabled` | `boolean` | `false` | 禁用整个 tabs |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |
| `scrollable` | `boolean` | `false` | 标签栏溢出时启用左右滚动按钮 |
| `scrollStep` | `number` | `120` | 每次按钮触发的横向滚动距离 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: string \| number \| boolean` | 激活值变化 |
| `change` | `value: string \| number \| boolean` | 切换回调 |

### TabItem

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `label` | `string` | 标签文本 |
| `value` | `string \| number \| boolean` | 标签值 |
| `disabled` | `boolean` | 是否禁用 |

---

### ITabPanels 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number \| boolean` | 首个面板值 | 当前激活面板值 |
| `items` | `TabPanelItem[]` | `[]` | 面板列表 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |
| `lazy` | `boolean` | `true` | 是否仅渲染当前激活面板 |
| `keepAlive` | `boolean` | `false` | 懒渲染时是否保留访问过的面板状态 |
| `transition` | `boolean \| string` | `false` | 面板切换过渡；`true` 使用内置过渡 |

### ITabPanels 插槽

| 插槽名 | 参数 | 说明 |
| --- | --- | --- |
| `panel` | `{ item }` | 自定义内容面板 |

### TabPanelItem

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `value` | `string \| number \| boolean` | 面板值 |
| `content` | `string` | 默认面板内容 |


