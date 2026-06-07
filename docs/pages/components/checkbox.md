---
title: 复选框
---

# 复选框

`ICheckbox` 用于布尔选中场景，支持半选样式、禁用和 `block`。

## 示例

### 基础用法

:::demo
components/checkbox/basic
:::

### 颜色

:::demo
components/checkbox/colors
:::

### 状态

:::demo
components/checkbox/states
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 选中状态（支持 `v-model`） |
| `label` | `string` | — | 标签文本 |
| `disabled` | `boolean` | `false` | 禁用 |
| `indeterminate` | `boolean` | `false` | 半选视觉状态 |
| `color` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 主题色 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 选中状态变化 |
| `change` | `value: boolean` | 变更回调 |

