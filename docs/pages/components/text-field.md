---
title: 文本域
---

# 文本域

`ITextField` 是多行文本输入组件，适合备注、描述等场景。
为贴近语义，也提供别名导出：`ITextarea`。

## 示例

### 基础用法

:::demo
components/text-field/basic
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `''` | 输入值（支持 `v-model`） |
| `label` | `string` | — | 字段标签 |
| `placeholder` | `string` | — | 占位文本 |
| `rows` | `number` | `4` | 初始行数 |
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
| `clear` | — | 点击清空按钮 |

