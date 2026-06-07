---
title: 菜单
---

# 菜单

`IMenu` 提供轻量下拉菜单能力，支持激活插槽、选中项和外部开关控制。
当菜单靠近窗口边缘时，会自动进行水平偏移与上下翻转，避免内容被裁切。

## 示例

### 基础用法

该示例使用 `closeOnSelect=false`，选中后菜单保持打开，适合连续操作。

:::demo
components/menu/basic
:::

### 禁用

:::demo
components/menu/disabled
:::

### 选中后关闭

该示例使用 `closeOnSelect=true`（默认值），选中任意项后菜单会自动关闭。

:::demo
components/menu/close-on-select
:::

---

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | 菜单开关（支持 `v-model`） |
| `items` | `MenuItem[]` | `[]` | 菜单项 |
| `selected` | `string \| number \| boolean \| null` | `null` | 当前选中值 |
| `label` | `string` | `'Menu'` | 默认触发按钮文案 |
| `closeOnSelect` | `boolean` | `true` | 选中后自动关闭 |
| `disabled` | `boolean` | `false` | 禁用 |
| `block` | `boolean` | `false` | 低代码场景下铺满父容器 |

### 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `update:modelValue` | `value: boolean` | 开关变化 |
| `update:selected` | `value: string \| number \| boolean` | 选中值变化 |
| `select` | `item: MenuItem` | 选择菜单项时触发 |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| `activator` | 触发器，自定义按钮或入口 |

### MenuItem

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `label` | `string` | 菜单项文案 |
| `value` | `string \| number \| boolean` | 菜单项值 |
| `disabled` | `boolean` | 是否禁用 |


