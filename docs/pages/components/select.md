---
title: 下拉选择
---

# 下拉选择

`ISelect` 提供轻量的单选下拉能力，适合表单中的枚举值选择。

## 示例

### 基础用法

:::demo
components/select/basic
:::

### 禁用

:::demo
components/select/disabled
:::

### 可清空

:::demo
components/select/clearable
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number \| boolean \| null` | `null` | 当前值（支持 `v-model`） |
| `options` | `SelectOption[]` | `[]` | 选项列表 |
| `label` | `string` | — | 字段标签 |
| `placeholder` | `string` | `'请选择'` | 占位文案 |
| `disabled` | `boolean` | `false` | 禁用 |
| `clearable` | `boolean` | `false` | 显示清空按钮 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |
| `width` | `string \| number` | — | 宽度 |
| `height` | `string \| number` | — | 高度 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: string \| number \| boolean \| null` | 值变化 |
| `change` | `value: string \| number \| boolean \| null` | 变更回调 |
| `clear` | — | 清空操作 |

### SelectOption

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `label` | `string` | 选项文案 |
| `value` | `string \| number \| boolean` | 选项值 |
| `disabled` | `boolean` | 是否禁用 |

