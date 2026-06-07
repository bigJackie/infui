---
title: 扩展面板
---

# 扩展面板

`IExpansionPanel` 用于折叠内容展示，支持单开与多开模式。

## 示例

### 基础用法

:::demo
components/expansion-panel/basic
:::

### 多开模式

:::demo
components/expansion-panel/multiple
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number \| Array<string \| number> \| null` | `null` | 当前展开值（支持 `v-model`） |
| `items` | `ExpansionPanelItem[]` | `[]` | 面板列表 |
| `multiple` | `boolean` | `false` | 多开模式 |
| `disabled` | `boolean` | `false` | 禁用整个面板 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: string \| number \| Array<string \| number> \| null` | 展开值变化 |
| `change` | `value: string \| number \| Array<string \| number> \| null` | 切换回调 |

### 插槽

| 插槽名 | 参数 | 说明 |
| --- | --- | --- |
| `content` | `{ item }` | 自定义内容区 |

### ExpansionPanelItem

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | `string` | 标题 |
| `value` | `string \| number` | 面板值 |
| `content` | `string` | 默认内容 |
| `disabled` | `boolean` | 是否禁用 |

