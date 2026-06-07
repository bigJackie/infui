---
title: 单选框
---

# 单选框

`IRadio` 用于互斥选项选择，通常同组共享 `name` 并通过 `v-model` 维护当前值。

## 示例

### 基础用法

:::demo
components/radio/basic
:::

### 颜色

:::demo
components/radio/colors
:::

### 状态

:::demo
components/radio/states
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number \| boolean` | — | 当前选中值（支持 `v-model`） |
| `value` | `string \| number \| boolean` | — | 当前选项值 |
| `label` | `string` | — | 标签文本 |
| `name` | `string` | — | 原生 radio 分组名 |
| `disabled` | `boolean` | `false` | 禁用 |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 主题色 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: string \| number \| boolean` | 选项变化 |
| `change` | `value: string \| number \| boolean` | 变更回调 |

