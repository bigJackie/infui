---
title: 对话框
---

# 对话框

`IDialog` 是基于 `IOverlay` 封装的确认与信息提示组件，内置标题区、正文区、操作区结构。

## 示例

### 基础用法

:::demo
components/dialog/basic
:::

### 自定义内容

通过默认插槽替换正文，通过 `actions` 插槽定制底部操作区。

:::demo
components/dialog/custom-content
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 控制显示/隐藏（支持 `v-model`） |
| `title` | `string` | — | 标题文本 |
| `text` | `string` | — | 正文文本（无默认插槽时展示） |
| `width` | `string \| number` | `480` | 内容宽度，数字自动补 `px` |
| `maxWidth` | `string \| number` | `'calc(100vw - 32px)'` | 最大宽度 |
| `persistent` | `boolean` | `false` | 是否禁止遮罩点击/Esc 关闭 |
| `closable` | `boolean` | `true` | 是否显示右上角关闭按钮 |
| `closeOnEsc` | `boolean` | `true` | 是否监听 Esc 关闭 |
| `zIndex` | `number` | `2100` | 透传给 Overlay 的层级 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 开关状态变化 |
| `click:outside` | `e: MouseEvent` | 点击遮罩触发 |
| `escape` | `e: KeyboardEvent` | 按下 Esc 触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `default` | 正文内容（优先级高于 `text`） |
| `title` | 自定义标题区 |
| `actions` | 底部操作区 |

