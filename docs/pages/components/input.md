---
title: 输入框
---

# 输入框

`IInput` 是基础单行输入组件，支持 `v-model`、清空按钮、禁用和只读。

## 示例

### 基础用法

:::demo
components/input/basic
:::

### 输入类型

:::demo
components/input/types
:::

### 可清除

:::demo
components/input/clearable
:::

### 状态

:::demo
components/input/states
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `''` | 输入值（支持 `v-model`） |
| `label` | `string` | — | 字段标签 |
| `placeholder` | `string` | — | 占位文本 |
| `type` | `'text' \| 'password' \| 'email' \| 'number' \| 'search' \| 'tel' \| 'url'` | `'text'` | 输入类型 |
| `disabled` | `boolean` | `false` | 禁用 |
| `readonly` | `boolean` | `false` | 只读 |
| `clearable` | `boolean` | `false` | 显示清空按钮 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |
| `width` | `string \| number` | — | 宽度 |
| `height` | `string \| number` | — | 高度 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: string` | 值变化 |
| `focus` | `e: FocusEvent` | 获取焦点 |
| `blur` | `e: FocusEvent` | 失去焦点 |
| `enter` | `e: KeyboardEvent` | 按下回车 |
| `clear` | — | 点击清空按钮 |

