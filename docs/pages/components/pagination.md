---
title: 分页
---

# 分页

`IPagination` 用于页码跳转场景，提供上一页/下一页和可见页码窗口。

## 示例

### 基础用法

:::demo
components/pagination/basic
:::

### 禁用

:::demo
components/pagination/disabled
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `number` | `1` | 当前页（支持 `v-model`） |
| `total` | `number` | `0` | 总条目数 |
| `pageSize` | `number` | `10` | 每页条目数 |
| `maxVisible` | `number` | `7` | 最多展示页码数 |
| `disabled` | `boolean` | `false` | 禁用 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: number` | 页码变化 |
| `change` | `value: number` | 页码变更回调 |

